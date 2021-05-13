import { Loader } from '../../constants/interface';
import { WorkerEvent, ERROR_MSG } from '../../constants';
import Demuxer, { IPes } from './demux/mp4Demuxer';


interface IIntervalId {
  postIntervalId?: number;
}

interface IState {
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

export default class Mp4Loader extends Loader { 
  static baseTime = 1 / 90000;
  private state: IState;
  private metaState: IMetaState;
  private mp4Demuxer: Demuxer;
  constructor(event, option) {
    super(event, option);
    this.init();
  }

  public async seek(time: number) {
    console.log(time, this.metaState);
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

    this.mp4Demuxer = new Demuxer({
      channel: this.option.demux2videoChannel,
      handleRecievePacket: this.handleRecievePacket.bind(this),
      ...this.option,
    })
    // this.bindEvent();
    this.loadSource(this.option.url);
    this.run();
  }

  private handleRecievePacket(data: IPes) { 
    console.log('data', data);
  }

  private async loadSource(url: string) {
    if (!url) {
      throw (ERROR_MSG.SOURCE_NULL);
    }

    this.option.getData(url);
  }

  private async run() {
    // console.log('loader run');
    while (!this.state.destroy) {
      // console.log('获取 demux2video 状态');
      await this.option.demux2videoChannel.pipe(null);
      // console.log('demux2video 状态 通过');
      const data = await this.option.bf2demuxChannel.read();
      // console.log('bf2demuxChannel 状态 通过');
      this.onRecieveBuf(data);
      this.mp4Demuxer.handleRecieveBuffer(data);
    }
  }

  private onRecieveBuf({ url, done }) {
    // console.log('收到http 数据', { url, done });
    if (this.state.currentUrl && url !== this.state.currentUrl) {
      return console.warn('数据加载超前，收到数据')
    }

    if (done) {
      // console.log('onRecieveBuf', done);
      // this.unsafe_changeCurrentIndex(++this.state.currentIndex);
    }
  }
}