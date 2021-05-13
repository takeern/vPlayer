import { TSDemux, Events as DemuxerEvents } from 'demuxer';
import { IPacket, loaderStatus } from '../../../constants';
import Channel from '../../../utils/channel';
// import { DemuxType } from '../constants';

declare const self: any;

interface IState {
  demuxUrl: null | string;
  pesBf: IPacket[];
  hasDecodingDate: boolean;
  flushing: boolean;
  destroy: boolean;
}

export interface IPes {
  pid: number;
  stream_type: number;
  pcr_pid: number;
  pes: {
    DTS: number;
    PTS: number;
    data_byte: Uint8Array;
    stream_id: number;
    ptsTime?: number;
  }
}

interface IOption {
  channel: Channel<IPacket>;
  status: loaderStatus;
  handleRecievePacket: (packet: IPes) => void;
}


export default class Demuxer {
  private state: IState = {
    demuxUrl: null,
    pesBf: [],
    hasDecodingDate: false,
    flushing: false,
    destroy: false,
  }
  private demuxer = new TSDemux({
    debug: true,
    enableWorker: false,
    onlyDemuxElementary: true
  })

  constructor(private option: IOption) {
    this.bindEvent();
  }

  public flush() {
    // if (this.state.hasDecodingDate) {
    //   this.state.flushing = true;
    // }
    this.state.demuxUrl = null;
    this.demuxer.reset();
  }

  public handleRecieveBuffer({
    data = new ArrayBuffer(0),
    done,
    url,
  }) {
    if (!this.state.demuxUrl) {
      this.state.demuxUrl = url;
    } else if (this.state.demuxUrl !== url) {
      return console.warn(`数据加载超前 demux url: ${this.state.demuxUrl}, recieve url: ${url}`);
    }

    data.byteLength !== 0 && this.demuxer.push(data, { done: true });

    // 该分片解析完毕 
    if (done) {
      this.state.demuxUrl = null;
    }
  }

  private bindEvent() {
    this.demuxer.on(DemuxerEvents.DEMUX_DATA, this.handleRecieveDemuxData.bind(this));
    this.demuxer.on(DemuxerEvents.DONE, this.handleDemuxDone.bind(this));
  }

  private handleRecieveDemuxData(data: IPes) {
    this.state.hasDecodingDate = true;

    if (this.state.flushing) {
      return;
    };
    this.option.handleRecievePacket(data);  
  }

  private handleDemuxDone(e) {
    this.state.hasDecodingDate = false;

    if (this.state.flushing) {
      this.state.flushing = false;
    }
  }
}