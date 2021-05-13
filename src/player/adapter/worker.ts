import { WorkerEvent, ERROR_MSG, PlayerEvent, Loader, loaderStatus, IPacket, IVideoFrame } from "../constants";
import HttpLoader, { IBf2DemuxData } from "../utils/http";
import HlsLoader from '../format/hls/loader';
import Channel from "../utils/channel";
import DecodeController from '../decode';
import WorkerRenderManager from '../render/workerRender';


const EventEmitter = require('events');

declare const self: {
  postMessage: Function;
  onmessage: Function;
  flusing: Boolean; // 是否处于 flush
  readers: {
    [prop: string]: ReadableStreamDefaultReader<Uint8Array>,
  },
}

interface IChannels {
  buffer2packet?: Channel<IBf2DemuxData>;
  packet2frame?: Channel<IPacket>;
  frame2gui?: Channel<IVideoFrame>;
}

export default class WorkerManager {
  private httpLoader: HttpLoader;
  private decodeController: DecodeController;
  private workerEvent: any;
  private loader: Loader;
  private workerRenderManager: WorkerRenderManager;

  private channels: IChannels = {};
  constructor() {
    this.bindEvent();
    this.init();
   }
  
  private async init() {
    self.postMessage({
      type: WorkerEvent.WORKERREADY,
      payload: {},
    });
  }

  private async run(option: any = {}) {
    this.channels = {
      buffer2packet: new Channel<IBf2DemuxData>({
        // maxLength: 1,
        checkOverflow: () => true,
      }),
      packet2frame: new Channel<IPacket>({
        maxLength: option.maxDemuxNumber,
        checkOverflow: () => true,
      }),
      frame2gui: new Channel<IVideoFrame>({
        maxLength: option.offscreenRendering ? option.maxFramesNumber : 1,
        checkOverflow: () => false,
      }),
    };

    if (option?.canvas) {
      this.workerRenderManager = new WorkerRenderManager({
        ...option,
        video2img: this.channels.frame2gui,
      });
    }

    this.httpLoader = new HttpLoader({
      channel: this.channels.buffer2packet,
    });

    this.loader = new HlsLoader(this.workerEvent, {
      ...option,
      status: loaderStatus.worker,
      bf2demuxChannel: this.channels.buffer2packet,
      demux2videoChannel: this.channels.packet2frame,
      getData: (url: string) => this.httpLoader.getData(url),
      flushHttp: () => this.httpLoader.flush(),
    });

    this.decodeController = new DecodeController({
      ...option,
      baseTime: HlsLoader.baseTime,
      demux2video: this.channels.packet2frame,
      video2img: this.channels.frame2gui,
    });
  }
  
  private bindEvent() {
    this.workerEvent = new EventEmitter();
    self.onmessage = this.handleMsg.bind(this);

    this.workerEvent.on(PlayerEvent.LOADEDMETADATA, (payload) => {
      self.postMessage({
        type: WorkerEvent.GETMETADATA,
        payload,
      });
    });
  }
  
  private destroy() {
    this.workerEvent = null;
    this.httpLoader = null;
    this.loader = null;
  }

  private showThis() {
    console.log(this);
  }

  /**
   * 获取内存使用情况
   */
  private getUseBufferSize() {
    const getLength = (datas) => {
      let size = 0;
      datas.map(i => {
        if (i.data?.byteLength) {
          size += i.data?.byteLength
        }

        if (i.buf_u?.byteLength) {
          size += (i.buf_u?.byteLength);
          size += (i.buf_y?.byteLength);
          size += (i.buf_v?.byteLength);
        }

        if (i.data_byte?.byteLength) {
          size += i.data_byte?.byteLength
        }
      });
      return size
    }

    self.postMessage({
      type: WorkerEvent.RECIEVEBUFFERWORKERSIZE,
      payload: {
        bf: getLength(this.channels.buffer2packet.datas),
        packet: getLength(this.channels.packet2frame.datas),
        frame: getLength(this.channels.frame2gui.datas),
      }
    });
  }
  
  private handleMsg({ data }) {
    switch (data.type) {
      case WorkerEvent.INITOPTION:
        this.run(data.payload);
        break;
      case WorkerEvent.GETWORKERBUFFERSIZE:
        this.getUseBufferSize();
        break;
      case WorkerEvent.SHOWTHIS:
        this.showThis();
        break;
      case (WorkerEvent.WORKERDESTROY):
        this.destroy();
        break;
      case (WorkerEvent.REQUESTLOAD):
        this.httpLoader.handleLoaderMsg(data.payload);
        break;
      case WorkerEvent.RENDERVIDEO:
        this.workerRenderManager.renderVideo(data.payload);
        break;
      case WorkerEvent.CHANGECHANNELSTATUS:
        this.decodeController.changeChannelStatus(data.payload)
        break;
      case WorkerEvent.SEEKING:
        this.loader.seek(data.payload.time);
        this.decodeController.seek(data.payload.time);
        break;
      default:
        console.warn(ERROR_MSG.UNHANDLE_WORKER_TYPE);
        break;
    }
  }
}
