import { Loader } from '../../constants';
import M3U8Parse, { IM3U8Manifest } from "./demux/M3U8Parse";
import { WorkerEvent, ERROR_MSG, PlayerEvent, loaderStatus, ManagerEvent } from '../../constants';
import Demuxer, { IPes } from './demux/tsDemuxer';

declare const self: any;

interface IIntervalId {
  postIntervalId?: number;
}

interface IState {
  hslInfo?: IM3U8Manifest;
  workerReady: boolean;
  intervalId: IIntervalId;
  currentUrl: string;
  currentIndex: number;
  destroy: boolean;
  firstPlay: boolean;
  workerMsgQueue: {
    type: WorkerEvent,
    payload: any,
  }[];
}


interface IMetaState {
  duration: number;
  videoStartTime: number;
  audioStartTime: number;
  startTime: number;
}


export default class HlsLoader extends Loader {
  static baseTime = 1 / 90000;
  private state: IState;
  private metaState: IMetaState;
  private tsDemuxer: Demuxer;
  constructor(event, option) {
    super(event, option);
    this.init();
  }

  public destroy() {
    this.state = {
      workerReady: false,
      workerMsgQueue: [],
      intervalId: {},
      currentIndex: null,
      currentUrl: null,
      destroy: true,
      firstPlay: false,
    };
    this.metaState = {
      duration: 0,
      videoStartTime: null,
      audioStartTime: null,
      startTime: null,
    };
  }

  get duration() {
    return this.metaState.duration;
  }

  public async seek(time: number) {
    // const buffered = this.getBuffer();
    // // 如果当前
    // if (time >= buffered.start && time <= buffered.end) {
    //   const { datas } = this.option.demux2videoChannel;
    //   const ptsTime = time / HlsLoader.baseTime;
    //   const index = datas.findIndex(item => item.PTS > ptsTime);
      
    //   if (index > 0) {
    //     if (index > 1) {
    //       datas.splice(0,  index - 1);
    //     }
    //     this.option.demux2videoChannel.forceRead();
    //   }

    //   return;
    // }



    time -= this.metaState.startTime;

    if (this.state.hslInfo?.segments?.length) {
      const index = this.state.hslInfo?.segments.findIndex((item) => {
        if (time > item.duration) {
          time -= item.duration
          return false;
        } 
        return true;
      });

      // console.log(index, time);
      // 数据提前加载，然后对于没卵用的 decode 数据 丢弃,
      if (index > -1) {
        this.option.bf2demuxChannel.clear();
        this.option.demux2videoChannel.clear();
        // console.log('clear, channel');
        this.option.flushHttp();
        this.tsDemuxer.flush();
        setTimeout(() => {
          this.unsafe_changeCurrentIndex(index, true);
        }, 0);
      }
    }
  }

  public getBuffer() {
    const buffered = {
      start: 0,
      end: 0,
    };

    const { datas } = this.option.demux2videoChannel;
    if (datas.length) {
      buffered.start = datas[0].PTS * HlsLoader.baseTime;
      buffered.end = datas[datas.length - 1].PTS * HlsLoader.baseTime;
    }

    return buffered;
  }

  private unsafe_changeCurrentIndex(index: number, force = false) {
    // console.log('unsafe_changeCurrentIndex', index, force);
    if (this.state.hslInfo?.segments?.length && index < this.state.hslInfo?.segments?.length) {
      const { uri } = this.state.hslInfo?.segments[index];
      if (!force && uri === this.state.currentUrl) {
        console.warn(ERROR_MSG.REQUEST_REPEAT, `request url: ${uri}, currentUrl: ${this.state.currentUrl}`);
        return;
      }
      this.state.currentUrl = uri;
      this.state.currentIndex = index;
      this.option.getData(uri);
    }
  }

  private async init() {
    this.state = {
      workerReady: false,
      workerMsgQueue: [],
      intervalId: {},
      currentIndex: null,
      currentUrl: null,
      destroy: false,
      firstPlay: false,
    };
    this.metaState = {
      duration: 0,
      videoStartTime: null,
      audioStartTime: null,
      startTime: null,
    };

    this.tsDemuxer = new Demuxer({
      channel: this.option.demux2videoChannel,
      handleRecievePacket: this.handleRecievePacket.bind(this),
      ...this.option,
    })
    this.bindEvent();
    this.loadSource(this.option.url);
    this.run();
  }

  private bindEvent() {
    
  }

  private async loadSource(url: string) {
    if (!url) {
      throw (ERROR_MSG.SOURCE_NULL);
    }

    this.state.hslInfo = await M3U8Parse.parse(this.option.url);
    if (this.state.hslInfo) {
      this.metaState.duration = this.state.hslInfo.duration;
      // this.state.hslInfo.segments.length = 5;
      this.unsafe_changeCurrentIndex(0);
    } else {
      throw (ERROR_MSG.PARSESOURCE);
    }
  }

  /**
   * 1. await 阻塞式检查（如果可以的话）｜pipe 一个空 data，然后被阻塞， demux decode 池子状态，
   * 2. 阻塞式读取 bf2demux 池子的bf
   * 3. 将 bf 喂入解封装器
   */
  private async run() {
    while (!this.state.destroy) {
      // console.log('获取 demux2video 状态');
      await this.option.demux2videoChannel.pipe(null);
      // console.log('demux2video 状态 通过');
      const data = await this.option.bf2demuxChannel.read();
      // console.log('bf2demuxChannel 状态 通过');
      this.onRecieveBuf(data);
      this.tsDemuxer.handleRecieveBuffer(data);
    }
  }

  /**
   * P2 todo：如果收到buffer， 不是当前发送的buffer，则将 buffer 放入缓冲区，当 
   * 当前buffer 发送完，则顺序发送缓冲区内 buffer
   * 
   * P1: 当前仅仅支持顺序解码.
   */
  private onRecieveBuf({ url, done }) {
    // console.log('收到http 数据', { url, done });
    if (this.state.currentUrl && url !== this.state.currentUrl) {
      return console.warn('数据加载超前，收到数据')
    }

    if (done) {
      // console.log('onRecieveBuf', done);
      this.unsafe_changeCurrentIndex(++this.state.currentIndex);
    }
  }

  private handleRecievePacket(data: IPes) {
    // const { currentIndex } = this.state;
    const packet = {
      DTS: data.pes.DTS,
      PTS: data.pes.PTS,
      data_byte: data.pes.data_byte,
    }
    switch (data.stream_type) {
      case 36:
        if (!this.metaState.videoStartTime) {
          this.metaState.videoStartTime = packet.PTS * HlsLoader.baseTime;
          this.sendMetadataEvent();
        }
        // 解析视频
        this.option.demux2videoChannel.forcePipe(packet);
        break;
      case 3:
      case 15:
      case 17:
        // 解析音频
        if (!this.metaState.audioStartTime) {
          this.metaState.audioStartTime = packet.PTS * HlsLoader.baseTime;
          this.sendMetadataEvent();
        }

        if (this.option.status === loaderStatus.worker) {
          self.postMessage({
            type: WorkerEvent.GETAUDIOPACKET,
            payload: packet,
          }, [packet.data_byte.buffer]);
        } else {
          this.event.emit(ManagerEvent.GETAUDIOPACKET, packet);
        }
        break;
      default:
        break;
    }
  }

  private sendMetadataEvent() {
    const { videoStartTime, audioStartTime, duration } = this.metaState;
    if (videoStartTime && audioStartTime && duration) {
      this.metaState.startTime = Math.min(videoStartTime, audioStartTime);
      this.event.emit(PlayerEvent.LOADEDMETADATA, {
        duration: this.metaState.duration,
        startTime: this.metaState.startTime,
      });
    }
  }
}