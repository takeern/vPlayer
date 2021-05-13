import DecodeController from '../decode';
import  WorkerRenderManager from '../render/workerRender'; 
import { IOption, WorkerEvent, ERROR_MSG, IPacket, IVideoFrame } from '../constants';
import Channel from "../utils/channel";

declare const self: {
  postMessage: Function;
  onmessage: Function;
  flusing: Boolean; // 是否处于 flush
  readers: {
    [prop: string]: ReadableStreamDefaultReader<Uint8Array>,
  },
}

interface IChannels {
  video2img?: Channel<IVideoFrame>;
  demux2video?: Channel<IPacket>;
}

export default class WindowWrapper {
  private channels: IChannels = {};
  private decodeController: DecodeController;
  private workerRenderManager: WorkerRenderManager;
  constructor() {
    this.bindEvent();
    this.init();
  }
  
  private init() {
    self.postMessage({
      type: WorkerEvent.WORKERREADY,
      payload: {},
    });
  }

  private run(option: IOption) {
    if (option?.canvas) {
      this.workerRenderManager = new WorkerRenderManager({
        ...option,
        video2img: this.channels.video2img,
      });
    }
    this.channels = {
      video2img: new Channel<IVideoFrame>({
        maxLength: option.offscreenRendering ? option.maxFramesNumber : 1,
        checkOverflow: () => false,
      }),
      demux2video: new Channel<IPacket>({
        maxLength: option.maxDemuxNumber,
        checkOverflow: () => true,
      }),
    };
    this.decodeController = new DecodeController({
      ...option,
      baseTime: option.baseTime,
      demux2video: this.channels.demux2video,
      video2img: this.channels.video2img,
    });
  }

  private bindEvent() {
    self.onmessage = this.handleMsg.bind(this);
  }

  private showThis() {
    console.log(this);
  }

  private destroy() {
  }

  private handleRecievePacket(packet: IPacket) {
    this.channels.demux2video.forcePipe(packet);
  }

  private handleMsg({ data }) {
    switch (data.type) {
      case WorkerEvent.INITOPTION:
        this.run(data.payload);
        break;
      case WorkerEvent.GETVIDOEPACKET:
          this.handleRecievePacket(data.payload);
          break;
      case WorkerEvent.SHOWTHIS:
        this.showThis();
        break;
      case (WorkerEvent.WORKERDESTROY):
        this.destroy();
        break;
      case WorkerEvent.RENDERVIDEO:
        this.workerRenderManager.renderVideo(data.payload);
        break;
      case WorkerEvent.CHANGECHANNELSTATUS:
        this.decodeController.changeChannelStatus(data.payload)
        break;
      case WorkerEvent.SEEKING:
        this.decodeController.seek(data.payload.time);
        break;
      default:
        console.warn(ERROR_MSG.UNHANDLE_WORKER_TYPE);
        break;
    }
  }
}