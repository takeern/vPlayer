import { IAudioFrame } from '../../../manager/async';
import DefualtProcessor, { Processor } from './defaultProcessor';

export interface IConfig {
  audioFrames: IAudioFrame[];
}


export default class AudioProvider {
  private defaultProcessor: Processor;
  // private audioTime: number = 0;
  constructor(private config: IConfig, private option) {
    this.init();
  }

  public provider(size: number) {
    const res = this.defaultProcessor.provider(size);
    // this.audioTime = res.audioTime;
    return res;
  }

  public destroy() {
    this.defaultProcessor = null;
  }

  private init() {
    this.defaultProcessor = new DefualtProcessor(this.config, this.option);
  }

}