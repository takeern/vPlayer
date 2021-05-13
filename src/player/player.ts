import Manager from './manager';
const EventEmitter = require('events');
import { defaultOption, IOption } from './constants';

class Player {
  private event = new EventEmitter();
  private manager: Manager;
  constructor(private url, private option?: IOption) {
    this.init();
  }

  public async play() {
    return this.manager.play();
  }

  public async pause() {
    return this.manager.pause();
  }

  get duration() {
    return this.manager.duration;
  }

  get buffered() {
    return this.manager.buffered;
  }

  get performanceStatus() {
    return this.manager.performanceStatus;
  }

  get currentTime() {
    return this.manager.currentTime;
  }

  get volumn() {
    return this.manager.volumn;
  }

  set volumn(data: number) {
    this.manager.volumn = data;
  }

  public on(name: string, cb: Function) {
    this.event.on(name, cb);
  }

  public getBufferSize() {
    return this.manager.bufferSize;
  }

  public seek(time: number) {
    return this.manager.seek(time);
  }

  private async init() {
    this.option = Object.assign(defaultOption, this.option);
    this.managerInit();
    this.bindEvent();
    this.run();
  }

  private managerInit() {
    this.manager = new Manager(this.event, {
      url: this.url,
      ...this.option
    });
  }

  private async run() {
    this.manager.run();
  }

  private bindEvent() {
    
  }
}

export default Player;