const libffmpeg = require('../../../lib/libffmpeg.txt').default;
const libffmpegWorker = require('../../../lib/libffmpeg.worker.txt').default;
const createJavaScriptUrl = (code: string) => {
  return URL.createObjectURL(
    new Blob([code], {
      type: 'application/javascript',
    })
  )
};

const wasmPath = () => {
  const orgin = location.origin;
  if (orgin.indexOf('127.0.0.1') > -1 || orgin.indexOf('localhost') > -1) {
    return 'http://127.0.0.1:8083';
  }
  return orgin;
}

import { IPacket, IVideoFrame, IOption, NalUnitType } from "../constants";
import Utils from "../utils";

type IDecodeOption = IOption & {
  handleDecodeRecieve: (frame: IVideoFrame) => void;
};

export default class VideoDecoder {
  private instance: any;
  private state: {
    decoding: Boolean,
    flushing: Boolean,
    init: boolean;
    lastSendPts: number,
    // appendCount: number,
    reslove: Function,
    initCb: Function,
    // 最低有效时间，小于该时间 帧抛弃,
    minTimeline: number,
  } = {
      decoding: false,
      lastSendPts: null,
      flushing: false,
      // appendCount: 0,
      reslove: null,
      init: false,
      minTimeline: 0,
      initCb: null,
    };
  
  private performanceState: {
    appendDataTime: {
      [prop: number]: number;
    },
    lastRecieveTime: number;
    count: number;
    seekTime: number;
    drapCount: number;
  } = {
      appendDataTime: {},
      lastRecieveTime: null,
      count: 0,
      seekTime: 0,
      drapCount: 0,
  }

  constructor(private option: IDecodeOption) {
    this.init();
    this.bindEvent();
  }

  private init() {
    this.loadWasm();
  }

  private loadWasm() {
    const mainScriptUrl = createJavaScriptUrl(libffmpeg);
    const workerScriptUrl = createJavaScriptUrl(libffmpegWorker)
    self.importScripts(mainScriptUrl);
    self['WASMDecoder']({
      mainScriptUrlOrBlob: mainScriptUrl,
      locateFile: (wasm: string) => {
        if (wasm.indexOf('worker.js') > -1) {
          return workerScriptUrl
        } else {
          return wasmPath() + '/' + wasm;
        }
      },
    }).then((instance) => {
      this.instance = instance;
      this.handleModuleInit();
    });

  }


  /**
   * worker 消息处理时，考虑到消息队列被阻塞，导致新消息需要等很久才能解析。
   */
  private bindEvent() {
  }


  private handleModuleInit() {
    // decode 
    this.initDecode();
    this.state.init = true;
  }

  public handleGetFrame (
    addr_y: number,
    addr_u: number,
    addr_v: number,
    stride_y: number,
    stride_u: number,
    stride_v: number,
    width: number,
    height: number,
    pts: number,
    decodeTime: number,
  ) {
    const out_y = this.instance.HEAPU8.subarray(addr_y, addr_y + stride_y * height)
    const out_u = this.instance.HEAPU8.subarray(addr_u, addr_u + (stride_u * height) / 2)
    const out_v = this.instance.HEAPU8.subarray(addr_v, addr_v + (stride_v * height) / 2)
    const obj = {
      stride_y,
      stride_u,
      stride_v,
      width,
      height,
      buf_y: new Uint8Array(out_y),
      buf_u: new Uint8Array(out_u),
      buf_v: new Uint8Array(out_v),
      pts
    }
    const renderTime = pts * this.option.baseTime;
    if (this.state.lastSendPts && pts <= this.state.lastSendPts) {
      // debugger;
    }
    this.state.lastSendPts = pts;
    
    if (this.state.minTimeline) {
      if (renderTime < this.state.minTimeline) {
        // console.log('丢弃无用视频帧', renderTime, this.state.minTimeline);
        return;
      } else {
        this.state.minTimeline = null;
      }
    }

    // console.log('收到解码帧 pts: %f, renderTime: %f, ', obj.pts, renderTime, obj.buf_u.buffer, obj.buf_y.buffer, obj.buf_v.buffer)

    this.option.handleDecodeRecieve({
      ...obj,
      decodeTime,
      renderTime,
    });
  }

  private initDecode() {

    const cb = this.instance.addFunction(this.handleGetFrame.bind(this), 'viiiiiiiiii')
    this.instance._init_decoder(cb, 0, 0);
    // this.state.flushing = false;
    this.state.init = true;

    if (this.state.reslove) {
      this.state.reslove();
      this.state.initCb && this.state.initCb()
      this.state.reslove = null;
      this.state.initCb = null;
    }
  }

  public async decodeData(data: IPacket) {
    return new Promise(resolve => {
      if (this.state.init) {
        this.state.decoding = true;
        const { PTS, data_byte } = data;

        if (this.performanceState.seekTime) {
          if (this.state.minTimeline > PTS * this.option.baseTime) {
            this.performanceState.count++;
          } else {
            const { count, drapCount,seekTime } = this.performanceState;
            const useTime = performance.now() - seekTime;
            Utils.log('seekend', useTime, count, useTime / (count - drapCount), drapCount);
            this.performanceState.count = 0;
            this.performanceState.seekTime = 0;
            this.performanceState.drapCount = 0;
          }
        }

        if (this.option.seekDropFrame && this.state.minTimeline > PTS * this.option.baseTime && this.isUnusePkt(data_byte)) {
          // 如果处于seek 情况下，跳过非关键帧的解码;
          this.performanceState.drapCount++;
        } else {
          // this.state.lastSendPts = PTS;
          if ((self as any).nodecode) {
            return;
          } 
          // console.log('发送解码pak, pts: %f, rendTime: %.2f, len: %f', PTS, parseFloat((PTS / 90000).toFixed(2)), data_byte.byteLength, data_byte.buffer);
          const fileSize = data_byte.length;
          const ptr = this.instance._malloc(fileSize);
          this.instance.HEAPU8.set(data_byte, ptr);
          // console.log('get pakcent', data, PTS, data.DTS);
          this.instance._decode_buffer(ptr, fileSize, PTS);
          this.instance._free(ptr);
          
          this.state.reslove = null;
          // 因为解码是同步过程，此处将cpu 丢给其他函数使用
        }
        if (!this.state.init) {
          this.state.reslove = resolve;
          return;
        }
        setTimeout(() => {
          resolve();
        }, 0);
      } else {
        this.state.reslove = resolve;
        this.state.initCb = () => {
          this.decodeData(data);
        };
      }
    });
  }


  public flushDecode() {
    // this.state.flushing = true;
    this.instance._flush_decoder();
  }

  public seek(time: number) {
    this.flushDecode();

    this.state.minTimeline = time;
    this.performanceState.seekTime = performance.now();
  }

  public closeDecode() {
    this.instance._close_decoder();
    this.state.init = false;
  }

  private isUnusePkt(bf: ArrayBuffer): boolean {
    const view = new Uint8Array(bf);
    for (let i = 4; i < view.length; i++) {
      if (
        view[i - 1] === 1 &&
        view[i - 2] === 0 &&
        view[i - 3] === 0 &&
        view[i - 4] === 0
      ) {
        const unitType = view[i] >> 1;
        if (NalUnitType[unitType]) return true;
      }
    }

    return false;
  }
}