import { IVideoFrame } from "../../../constants";
import DefaultProcessor from './defaultProcessor';
// const debug = require('debug')('red: videoProvider');

export interface IConfig {
  videoFrames: IVideoFrame[];
}


export interface IProvider {
  frame?: IVideoFrame;
  index?: number;
  clear?: boolean;
  clearLen?: number;
}


export default class VideoProvider {
  private defaultProcessor: DefaultProcessor;
  // private lastSelctTime: number = null;
  private lastAppendTime: number = null;
  constructor(private config: IConfig, private option) {
    this.init();
  }

  public provider(currentTime: number): IProvider | null {
    if (this.lastAppendTime === currentTime) {
      // debug('重复渲染');
      return null;
    }

    this.lastAppendTime = currentTime;
    const res = this.defaultProcessor.provider(currentTime);
    // if (res && res.frame) {
    //   // debug('视频帧误差 timing: ', (currentTime / this.option.baseTime - res.frame.pts) * this.option.baseTime)
    // } else {
    //   // debug('未找到最接近视频帧');
    // }

    return res;
  }
  public destroy() {
    this.defaultProcessor = null;
  }

  get providerState() {
    return this.defaultProcessor.performanceState;
  }

  private init() {
    this.defaultProcessor = new DefaultProcessor(this.config, this.option);
  }

  
}