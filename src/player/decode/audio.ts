import { EventEmitter, IPacket } from "../constants/interface";
import { ManagerEvent } from "../constants";

declare const window: any;

export default class AudioDecoder {
  private actx: AudioContext = null;
  private audioBuffer = new ArrayBuffer(0);
  private intervalId: number;
  private state: {
    flushing: boolean;
    appendTimes: number;
  } = {
    flushing: false,
    appendTimes: 0,
  }
  private aduioFrameStartTime: number = null; // 表示每次喂入解码器 frame 的起播时间
  
  constructor(private event: EventEmitter, private option) {
    this.init();
  }

  public appendAudioBuffer(data: IPacket) {
    if (this.state.flushing) return;

    if (!this.aduioFrameStartTime) {
      // console.log('设置 aduioFrameStartTime', data.PTS, data);
      this.aduioFrameStartTime = data.PTS;
    }

    const view = new Uint8Array((this.audioBuffer.byteLength | 0) + (data.data_byte.buffer.byteLength | 0));
    view.set(new Uint8Array(this.audioBuffer), 0);
    view.set(new Uint8Array(data.data_byte), (this.audioBuffer.byteLength | 0));
    this.audioBuffer = view.buffer;
  }

  public flush() {
    this.state.flushing = true;
    this.audioBuffer = new ArrayBuffer(0);
    this.aduioFrameStartTime = null;

    if (this.state.appendTimes === 0) {
      this.state.flushing = false;
    }
  }

  private init() {
    this.initAudioContext();
    this.intervalId = window.setInterval(this.decodeAudioData.bind(this), this.option.audioFlushTime);
  }

  public initAudioContext() {
    if (!this.actx) {
      const AudioContext = window.AudioContext // Default
      || window.webkitAudioContext // Safari and old versions of Chrome
      || false; 
      if (!AudioContext) return;

      this.actx = new AudioContext();
      this.event.emit(ManagerEvent.AUDIOCONTEXTCREATE, this.actx);
    } 
  }

  private async decodeAudioData() {
    if (!this.audioBuffer?.byteLength) return;
    const audioPts = this.aduioFrameStartTime;
    this.aduioFrameStartTime = null;
    this.state.appendTimes += 1;
    this.actx.decodeAudioData(this.audioBuffer, buffer => {
      this.state.appendTimes -= 1;

      if (this.state.flushing) {
        if (this.state.appendTimes === 0) {
          this.state.flushing = false;
        }
      } else {
        this.event.emit(ManagerEvent.GETAUDIOFRAME, {
          buffer,
          pts: audioPts,
          ptsTime: audioPts * this.option.baseTime,
        });
      }
    });
    // buffer 喂入解码区，该buffer 在js 环境下无法访问， https://github.com/WebAudio/web-audio-api/issues/1175
    this.audioBuffer = new ArrayBuffer(0);
  }

  public destroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.actx = null;
    this.aduioFrameStartTime = null;
    this.audioBuffer = new ArrayBuffer(0);
  }
}