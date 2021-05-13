import { WorkerEvent, IPacket, IVideoFrame } from "../constants";
import { IPes } from "../format/hls/demux/tsDemuxer";
import VideoDecoder from "./video";
// import AudioDecoder from "../decode/audioDecoder";

declare const self: Worker;

interface IIntervalId {
  postIntervalId?:  NodeJS.Timeout;
}

interface IState {
  decodeWorkerReady: boolean;
  videoBuffer: IPes[];
  intervalId: IIntervalId;
  flushing: boolean;
  stopping: boolean;
}


/**
 * 该模块作用，负责控制音视频编解码，控制解码时机
 */
export default class DecodeController {
  private videoDecoder: VideoDecoder;
  // private audioDecoder: AudioDecoder;
  private state: IState = {
    decodeWorkerReady: false,
    videoBuffer: [],
    intervalId: {},
    flushing: false,
    stopping: false,
  }

  constructor(private option) {
    this.init();
    this.run();
  }

  public async run() { 
    while (!this.state.stopping) {
      // todo append 数据
      // 检查 video2img 管道是否阻塞
      await this.option.video2img.pipe(null);
      const packet: IPacket = await this.option.demux2video.read();
      await this.videoDecoder.decodeData(packet);
    }
  }

  public async seek(time: number) {
    this.option.video2img.clear();
    this.videoDecoder.seek(time);
  }
  
  private init() {
    this.videoDecoder = new VideoDecoder({
      ...this.option,
      handleDecodeRecieve: this.handleDecodeRecieve.bind(this),
    });

  }

  /**
   * 1. 离屏渲染下，收到的解码图片存在 worker 中
   * 2. 非离屏下，收到的图片发送到主线程渲染
   * 3. 同步工作放到主线程
   * 
   * 4. 非离屏下, 主线程此处控制 是否继续存储
   * @param frame 解码图片
   */
  private handleDecodeRecieve(frame: IVideoFrame) {
    if (this.option.offscreenRendering) {
      // 采用 offscrenn 渲染
      this.option.video2img.forcePipe(frame);
      self.postMessage({
        type: WorkerEvent.GETVIDEOFRAME,
        payload: {
          pts: frame.pts,
          decodeTime: frame.decodeTime,
          renderTime: frame.renderTime,
          width: frame.width,
          height: frame.height,
          sendTime: Date.now(),
        }
      });
    } else {
      // 主线程渲染
      self.postMessage({
        type: WorkerEvent.GETVIDEOFRAME,
        payload: frame,
      }, [frame.buf_u.buffer, frame.buf_v.buffer, frame.buf_y.buffer]);
    }
  }

  public changeChannelStatus({ status }: {
    status: boolean
  }) {
    if (status) {
      // 阻塞管道
      this.option.video2img.forcePipe(null);
    } else {
      // 释放管道
      this.option.video2img.forceRead();
    }
  }

}