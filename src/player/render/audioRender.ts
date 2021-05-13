import { EventEmitter } from "../constants/interface";
import { ManagerEvent, PlayerEvent } from '../constants';
export default class AudioRender {
  private actx: AudioContext;
  private scriptNode: ScriptProcessorNode = null;
  private gainNode: GainNode = null;
  private state = {
    volumn: null,
  }
  constructor(private event: EventEmitter, private option) {
    this.bindEvent();
  }

  public destroy() {
    this.actx = null;
  }

  get volumn() {
    return this.state.volumn;
  }

  set volumn(data: number) {
    this.state.volumn = data;
    this.gainNode.gain.value = data;
  }

  private bindEvent() {
    this.event.on(ManagerEvent.AUDIOCONTEXTCREATE, this.handleaudioContextCreateSuccess.bind(this));
  }

  private handleaudioContextCreateSuccess(actx: AudioContext) {
    this.actx = actx;
    this.initActxEvent();
    this.actx.onstatechange = this.handleAudioStateChange.bind(this);
  }

  private initActxEvent() {
    // this.actx
    this.scriptNode = this.actx.createScriptProcessor(this.option.bufferSize, 2, 2);
    this.gainNode = this.actx.createGain();
    this.gainNode.gain.value = this.option.defaultVolume;
    this.scriptNode.onaudioprocess = this.option.handleAudioProcess;
    this.scriptNode.connect(this.gainNode);
    this.gainNode.connect(this.actx.destination);
    this.state.volumn = this.option.defaultVolume;
    this.pause();
  }

  public async play() {
    return new Promise((resolve, reject) => {
      if (this.actx.state === 'suspended') {
        this.actx.resume().then(() => {
          resolve();
        }).catch(e => {
          console.log('audio play error', e);
        });
      } else {
        resolve();
      }
    })
  }

  public async pause() {
    if (this.actx && this.actx.state !== 'suspended') {
      await this.actx.suspend();
    }
  }

  get currentTime() {
    return this.actx.currentTime;
  }

  private handleAudioStateChange() {
    if (this.actx.state === 'running') {
      this.event.emit(PlayerEvent.PLAYING);
    }
  }
}