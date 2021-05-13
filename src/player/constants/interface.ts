import Channel from "../utils/channel";

export interface IBf2DemuxData {
  data: ArrayBuffer,
  url: string,
  done: boolean,
}

export interface IPacket {
  DTS: number;
  PTS: number;
  data_byte: Uint8Array;
}

export enum loaderStatus {
  worker = 'worker',
  window = 'window',
}

export type loaderOption = IOption & {
  bf2demuxChannel: Channel<IBf2DemuxData>,
  demux2videoChannel: Channel<IPacket>,
  status: loaderStatus,
  getData: (url: string) => void,
  flushHttp: () => void,
}

export interface EventEmitter {
  on: (type: string, callback: Function) => void;
  emit: (type: string, paylaod?: any) => void;
}

export interface IOption {
  defaultVolume?: number;
  bufferSize?: number;
  audioFlushTime?: number;
  videoReadyNumber?: number;
  audioReadyDuration?: number;
  autoPlay?: boolean;
  type?: string;
  maxAppendDecodeNumber?: number;
  maxFramesNumber?: number;
  maxDemuxNumber?: number;
  useOffscreenRender?: boolean;
  offscreenRendering?: boolean;
  hasAppendLoader?: boolean;
  url?: string;
  loader?: any;
  baseTime: number;
  canvas: HTMLCanvasElement;
  seekDropFrame?: boolean;
}

export abstract class Loader {
  static baseTime: number;
  // @ts-ignore
  constructor(protected event: EventEmitter, protected option: loaderOption) { }
  public abstract seek(time: number): Promise<void>;
  public abstract destroy(): void;
}

export interface IVideoFrame {
  stride_y: number;
  stride_u: number;
  stride_v: number;
  width: number;
  height: number;
  buf_y: Uint8Array;
  buf_u: Uint8Array;
  buf_v: Uint8Array;
  pts: number;
  decodeTime?: number;
  renderTime: number;
}