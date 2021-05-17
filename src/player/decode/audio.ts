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
    // console.log('收到pak', data.PTS, data.data_byte.byteLength)
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

  // todo 修复音频问题
  private async decodeAudioData() {
    if (!this.audioBuffer?.byteLength) return;

    const audioPts = this.aduioFrameStartTime;
    // console.log('添加 buffer', this.audioBuffer, this.audioBuffer.byteLength, audioPts);
    this.aduioFrameStartTime = null;
    this.state.appendTimes += 1;
    const sendbuffer = this.audioBuffer.slice(0);
    // console.log('送入buffer', sendbuffer.byteLength)
    this.actx.decodeAudioData(sendbuffer, buffer => {
      this.state.appendTimes -= 1;
      const frames = window.player.manager.asyncManager.audioFrames;
      let times = 0;
      if (frames[frames.length - 1]?.duration) {
        times = frames[frames.length - 1]?.duration + frames[frames.length - 1]?.ptsTime - audioPts * this.option.baseTime;
        if (Math.abs(times) > 0.01) {
          console.warn('音频解码误差，', times);
          console.log(`解码后， buffer 长度:%f, 时间差：%f, pts: %f, 起始时间戳%f`, buffer.duration, times, audioPts, audioPts * this.option.baseTime);
        }
      }
      if (this.state.flushing) {
        if (this.state.appendTimes === 0) {
          this.state.flushing = false;
        }
      } else {
        this.event.emit(ManagerEvent.GETAUDIOFRAME, {
          buffer,
          pts: audioPts,
          duration: buffer.duration,
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