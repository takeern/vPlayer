// import { 
//   Loader,
//   EventEmitter,
//   IPacket,
//   IOption,
//   loaderStatus,
//   loaderOption,
//   IVideoFrame,
// } from './interface';


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

export enum WorkerEvent {
  REQUESTLOAD = 'requestLoad',

  DOWNLOAD = 'download',

  // http worker 加载完毕
  HTTPREADY = 'httpReady',

  WORKERREADY = 'workerReady',

  WORKERDESTROY = 'workerDestroy',

  // decode worker 加载完成
  DECODEREADY = 'decodeReady',

  INITOPTION = 'initOption',

  GETVIDOEPACKET = 'getVideoPacket',

  // 获取 一帧数据
  GETVIDEOFRAME = 'getVideoFrame',

  FLUSHDECODE = 'flushDecode',

  FLUSHDECODEEND = 'flushDecodeEnd',

  FLUSHHTTP = 'flushHttp',

  SHOWTHIS = 'showThis',

  GETAUDIOPACKET = 'getAudioPacket',

  RENDERVIDEO = 'renderVideo',

  CHANGECHANNELSTATUS = 'changeChannelStatus',

  GETMETADATA = 'getMetadata',

  SEEKING = 'seeking',

  GETWORKERBUFFERSIZE = 'getWorkerBufferSize',

  RECIEVEBUFFERWORKERSIZE = 'recieveWorkerBufferSize',
}

export enum ManagerEvent {
  RECIEVEBUFFER = 'recieveBuffer',

  DEMUXBUFFER = 'demuxBuffer',

  GETVIDEOFRAME = 'getVideoFrame',

  GETAUDIOFRAME = 'getAudioFrame',

  AUDIOCONTEXTCREATE = 'audioContextCreate',

  GETAUDIOPACKET = 'getAudioPacket',

  // 清楚所有缓冲内容
  FLUSH = 'flush',
}

export enum DemuxType {
  VIDEO = 'video',

  AAC = 'aac',
}

export enum PlayerEvent {
  VIDEOREADY = 'videoReady',
  AUDIOREADY = 'audioReady',
  RECIEVEBUFFERWORKERSIZE = 'recieveWorkerBufferSize',
  LOADFRAMEINFO = 'loadFrameInfo',

  CANPLAY = 'canplay',
  DURATIONCHANGE = 'durationchange',

  LOADEDMETADATA = 'loadedmetadata',
  PROGRESS = 'progress',
  SEEKING = 'seeking',
  SEEKED = 'seeked',
  PLAYING = 'playing',
  VOLUMECHANGE = 'volumechange',
  TIMEUPATE = 'timeupdate',
  PAUSE = 'pause',

  // 未支持
  ENDED = 'ended',
}

export const defaultOption = {
  defaultVolume: 0.5,
  bufferSize: 2048,
  audioFlushTime: 1000,
  videoReadyNumber: 10,
  audioReadyDuration: 0.1,
  autoPlay: false,
  type: 'hls',
  maxAppendDecodeNumber: 100,
  maxFramesNumber: 15,
  maxDemuxNumber: 100,
  getFpsCount: 60,
  useOffscreenRender: true,
  offscreenRendering: false,
  hasAppendLoader: false,
  seekDropFrame: false,
}

export enum FORMAT {
  HLS = 'hls',
}

export enum ERROR_MSG {
  SOURCE_NULL = '找不到播放资源地址',

  PARSESOURCE = '解析资源失败',

  UNHANDLE_FORMAT = '不支持的封装格式',

  REQUEST_REPEAT = '重复请求',

  UNHANDLE_WORKER_TYPE = '不支持的 worker 事件',

  WORKER_RENDER_ERROR = '离屏渲染错误',
}

export enum NalUnitType {  
  HEVC_NAL_TRAIL_N = 0,
  HEVC_NAL_TSA_N = 2,
  HEVC_NAL_STSA_N = 4,
  HEVC_NAL_RADL_N = 6,
  HEVC_NAL_RASL_N = 8,
};

// export {
//   Loader,
//   EventEmitter,
//   IPacket,
//   IOption,
//   loaderStatus,
//   loaderOption,
//   IVideoFrame,
// };