// import { ManagerEvent, PlayerEvent } from "../constants";
import YuvRender from "./yuvRender";
import Channel from '../utils/channel';
import { IVideoFrame } from "../constants";
// import { ERROR_MSG } from '../constants';


interface IOption {
  video2img: Channel<IVideoFrame>;
  [prop: string]: any;
}

/**
 * todo: 切换屏幕后，audio 时间持续增加，但是解码区的停止了，所以当释放时，需要把demux中没用的 buffer 移除掉。
 */
export default class WorkerRenderManager {
  private videoRender: YuvRender;
  
  constructor(private option: IOption) {
    this.init();
  }

  public renderVideo(payload: {
    index: number,
    pts: number,
    clear: boolean,
    length: number,
    frame?: IVideoFrame,
  }) {
    const { datas } = this.option.video2img;
    if (payload.clear && payload.length && datas.length >= payload.length) {
      datas.length = datas.length - payload.length;
      this.option.video2img.unlockPipe();
      return;
    }
    if (!isNaN(payload.index) && datas.length) {
      let frame = datas[payload.index];
      if (!frame || !frame.pts || frame.pts !== payload.pts) {
        // debugger
        // console.warn(ERROR_MSG.WORKER_RENDER_ERROR + `select pts: ${frame.pts}, input pts: ${payload.pts}`)
        for (let i = datas.length - 1; i > 0; i--) {
          if (datas[i].pts === payload.pts) {
            frame = datas[i]
            break;
          }
        }

        if (!frame || frame.pts !== payload.pts) {
          console.warn('未找到准确帧', payload.pts, [...datas], frame);
          return;
        }
      }
      this.videoRender.drawFrame(frame);
      // if (datas.length - payload.index > 1) {
      //   // debugger
      //   console.warn('离屏渲染 跳帧', datas.length - payload.index);
      // }
      datas.splice(payload.index, datas.length - payload.index);
      this.option.video2img.unlockPipe();
    }
  }

  private init() {
    this.videoRender = new YuvRender(this.option);
  }
}