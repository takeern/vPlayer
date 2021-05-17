import AsyncManager from "./async";
import { EventEmitter } from "../constants/interface";
import { PlayerEvent, WorkerEvent, ManagerEvent, Loader, IPacket, loaderStatus } from "../constants";
import { IProvider } from '../render/provider/video';
import webworkify from 'webworkify-webpack';
import AudioDecoder from "../decode/audio";
import HttpLoader, { IBf2DemuxData } from "../utils/http";
import Channel from "../utils/channel";
import { IVideoFrame } from '../constants'
// const debug = require('debug')('red: playerManager');

interface IMetadata {
  duration: number;
  startTime: number;
}

interface IChannels {
  bf2demux?: Channel<IBf2DemuxData>;
  demux2video?: Channel<IPacket>;
  video2img?: Channel<IVideoFrame>;
}

interface IState {
  destroy: boolean;
}
/**
 * td:
 * 今日进度 已经将音频传输给 window
 * a 离屏播放
 * window 环境下
 * 1. 播放音频
 * 2. 离屏下，将第一步时间传给worker
 * done
 * worker 环境下
 * 1. 同步播放视频
 * done
 * b 非离屏播放
 * done
 * c seek 支持
 * done
 * d 性能检查
 * no done
 */
export default class PlayerManager {
  private state: IState = {
    destroy: false,
  }
  private worker: Worker;
  private hasAppendLoader: boolean = false;
  // private windowAdapter: WindowAdapter;
  private audioDecoder: AudioDecoder;
  private channels: IChannels = {};
  private asyncManager: AsyncManager;
  private loader: Loader;
  private httpLoader: HttpLoader;
  private metadata: IMetadata = {
    duration: 0,
    startTime: null,
  };
  constructor(private event: EventEmitter, private option) {
    this.initEnvironment();
    this.init();
    this.bindEvent();
  }

  private async init() {
    this.channels = {
      bf2demux: new Channel<IBf2DemuxData>({
        maxLength: 4,
        checkOverflow: () => true,
      }),
      demux2video: new Channel<IPacket>({
        maxLength: this.option.maxDemuxNumber,
        checkOverflow: () => true,
      }),
      video2img: new Channel<IVideoFrame>({
        maxLength: this.option.maxFramesNumber,
        checkOverflow: () => false,
      }),
    };

    this.asyncManager = new AsyncManager(this.event, {
      ...this.option,
      video2img: this.channels.video2img,
      callWorkerRender: this.callWorkerRender.bind(this),
      changeChannelStatus: this.changeChannelStatus.bind(this),
    });

    this.audioDecoder = new AudioDecoder(this.event, this.option);

    if (this.option.loader) {
      this.hasAppendLoader = true;
      this.httpLoader = new HttpLoader({
        channel: this.channels.bf2demux,
      });
      this.loader = new this.option.loader(this.event, {
        ...this.option,
        status: loaderStatus.window,
        bf2demuxChannel: this.channels.bf2demux,
        demux2videoChannel: this.channels.demux2video,
        getData: (url: string) => this.httpLoader.getData(url),
        flushHttp: () => this.httpLoader.flush(),
      });
      delete this.option.loader;

      this.worker = webworkify(require.resolve('../adapter/window.ts'));
    } else {
      this.worker = webworkify(require.resolve('../adapter/worker.ts'));
    }

    this.worker.onmessage = this.handleWorkerMsg.bind(this);
    // this.worker.onerror = (e) => { throw e };
  }

  public async run() { 

  }

  public destroy() {
    this.worker = null;
    this.state = {
      destroy: true,
    };
  }
  
  public async play() {
    this.asyncManager.play();
  }

  public async pause() {
    this.asyncManager.pause();
  }

  get buffered() {
    return this.asyncManager.getBuffer();
  }

  get duration() {
    return this.metadata.duration;
  }

  get currentTime() {
    return this.asyncManager.currentTime;
  }

  get performanceStatus() {
    return this.asyncManager.performanceStatus;
  }

  get volumn() {
    return this.asyncManager.volumn;
  }

  get bufferSize() {
    this.getWorkerBfSize();
    return {}
  }

  set volumn(data: number) {
    this.asyncManager.volumn = data;
  }

  /**
   * 
   * @param time 跳转时间
   */
  public async seek(time: number) {
    this.event.emit(PlayerEvent.SEEKING);
    const duration = this.duration;
    const startTime = this.metadata.startTime;

    if (!duration || !startTime) return;

    if (time > duration) time = duration;

    if (time < this.metadata.startTime) time = this.metadata.startTime;

    const bufferd = this.buffered;
    if (time > bufferd.start && time < bufferd.end) {
      this.asyncManager.currentTime = time;
    } else {
      if (!this.hasAppendLoader) {
        // 使用直接编译的 loader
        this.worker.postMessage({
          type: WorkerEvent.SEEKING,
          payload: {
            time,
          },
        });
      } else {
        this.loader.seek(time);
      }
      this.asyncManager.seek(time);
      // debug('超出当前缓冲区');
    }
  }
  
  private bindEvent() {
    this.event.on(PlayerEvent.CANPLAY, this.handleCanPlay.bind(this));
    this.event.on(PlayerEvent.LOADEDMETADATA, this.handleRecieveMetaData.bind(this));
    this.event.on(ManagerEvent.GETAUDIOPACKET, this.handleRecieveAudioPacket.bind(this));
    document.addEventListener('visibilitychange', this.handleDocumentVisbilityChange.bind(this));
  }

  private async handleCanPlay() {
    if (this.option.autoPlay) {
      this.play();
    }
  }

  private handleDocumentVisbilityChange() {
    if (document.hidden) {
      this.pause();
    }
  }

  private callWorkerReady() {
    if (this.option.offscreenRendering) {
      this.option.canvas = this.option.canvas.transferControlToOffscreen();
      this.worker.postMessage({
        type: WorkerEvent.INITOPTION,
        payload: this.option,
      }, [this.option.canvas]);
    } else {
      let obj = {};
      for (let key in this.option) {
        if (key !== 'canvas') {
          obj[key] = this.option[key];
        }
      }

      this.worker.postMessage({
        type: WorkerEvent.INITOPTION,
        payload: obj,
      });
  
    }

    if (this.hasAppendLoader) {
      this.getChannlData();
    }
  }

  public showWorker() {
    this.worker.postMessage({
      type: WorkerEvent.SHOWTHIS,
    });
  }

  private getWorkerBfSize() {
    this.worker.postMessage({
      type: WorkerEvent.GETWORKERBUFFERSIZE,
    });
  }

  private handleWorkerMsg({ data }: MessageEvent) {
    const { type, payload } = data || {};
    switch (type) {
      case WorkerEvent.WORKERREADY:
        this.callWorkerReady();
        break;
      case WorkerEvent.GETAUDIOPACKET:
        this.audioDecoder.appendAudioBuffer(payload)
        break;
      case WorkerEvent.GETVIDEOFRAME:
        this.event.emit(ManagerEvent.GETVIDEOFRAME, payload);
        break;
      case WorkerEvent.GETMETADATA:
        this.event.emit(PlayerEvent.LOADEDMETADATA, payload);
        this.handleRecieveMetaData(payload);
        break;
      case WorkerEvent.RECIEVEBUFFERWORKERSIZE:
        this.event.emit(PlayerEvent.RECIEVEBUFFERWORKERSIZE, payload);
        break;
      default: 
        break;
    }
  }

  private initEnvironment() {
    if (this.option.useOffscreenRender && window.OffscreenCanvas) {
      this.option.offscreenRendering = true;
    }
  }

  private callWorkerRender(payload: IProvider) {
    this.worker.postMessage({
      type: WorkerEvent.RENDERVIDEO,
      payload,
    });
  }

  private handleRecieveMetaData(payload: IMetadata) {
    this.metadata = payload;
    this.event.emit(PlayerEvent.DURATIONCHANGE);
  }

  private async getChannlData() {
    while (!this.state.destroy) {
      await this.channels.video2img.pipe(null);
      const packet = await this.channels.demux2video.read();
      await new Promise((resolve) => {
        setTimeout(() => {
          this.worker.postMessage({
            type: WorkerEvent.GETVIDOEPACKET,
            payload: packet,
          }, [packet.data_byte.buffer]);
          resolve();
        }, 100);
      });
    }
  }

  private handleRecieveAudioPacket(packet: IPacket) {
    this.audioDecoder.appendAudioBuffer(packet);
  }

  /**
   * 冻结worker decode 管道
   * @param status true 冻结, false 解冻
   */
  public changeChannelStatus(status: boolean) {
    // console.log('changeChannelStatus', status);
    if (this.hasAppendLoader) {
      !status && this.channels.video2img.unlockPipe();
    }
    this.worker.postMessage({
      type: WorkerEvent.CHANGECHANNELSTATUS,
      payload: {
        status,
      },
    });
  }
}