import { EventEmitter } from "../constants/interface";
import { ManagerEvent, PlayerEvent, IVideoFrame } from "../constants";
import YuvRender from "../render/yuvRender";
import AudioRender from "../render/audioRender";
import AudioProvider from "../render/provider/audio";
import VideoProvider from "../render/provider/video";
import Utils from "../utils";
// const debug = require('debug')('red: asyncManager');

export interface IAudioFrame {
  buffer: AudioBuffer;
  pts: number;
  ptsTime: number;
  useOffset?: number;
}

interface IState {
  videoReady: Boolean;
  audioReady: Boolean;
  videoRafId: number;
}

interface IPlayerState {
  /**
   * 当前播放时间
   */
  currentTime: number;
  playing: boolean;
  audioSeeking: boolean,
  videoSeeking: boolean,
  /**
   * 每次添加pcm 数据到 音频播放器时间
   */
  audioAppendTime: number;
  shouldRenderPoster: boolean;
  /**
   * 标志 当前缓冲区是否还有 buffer，一般情况下是 没有视频帧，此时音频帧 会喂入静音帧。
   */
  videoLoading: boolean;
  /**
   * locking 状态 不会再将码流喂入解码器
   */
  isChannelLocking: boolean;

  lastRenderTime?: number;

  playStartTime: number;

  documentVisibility: boolean;
}

interface IFrameInfo {
  width: number;
  height: number;
}

interface IPerformanceState {
  decodeSumTime: number;
  decodeCount: number;
  decodeAvgTime: number;
  fpsCount: number;
  fps: number;
}

export default class AsyncManager {
  private videoRender: YuvRender;
  private audioRender: AudioRender;
  private frameInfo: IFrameInfo;
  // private videoFrames: IVideoFrame[];
  private audioFrames: IAudioFrame[];
  private audioProvider: AudioProvider;
  private videoProvider: VideoProvider;
  private emitProgressEventTh = Utils.throttle(() => this.emitEvent(PlayerEvent.PROGRESS)(), 100);
  private emitTimeUpdateEventTh = Utils.throttle(() => this.emitEvent(PlayerEvent.TIMEUPATE)(), 100);
  private state: IState = {
    videoReady: false,
    audioReady: false,
    videoRafId: null,
  };

  private playerState: IPlayerState = {
    currentTime: 0,
    playing: false,
    audioAppendTime: 0,
    playStartTime: 0,
    shouldRenderPoster: true,
    videoLoading: false,
    audioSeeking: false,
    videoSeeking: false,
    isChannelLocking: false,
    documentVisibility: false,
  };

  private performanceState: IPerformanceState = {
    decodeCount: 0,
    decodeSumTime: 0,
    decodeAvgTime: 0,
    fpsCount: 0,
    fps: 0,
  };
  
  constructor(private event: EventEmitter, private option) {
    this.init();
    this.bindEvent();
  }

  /**
   * 在缓冲区内设置 currentTime，直接渲染对应 frame
   * 不在缓冲区，设置等待状态，获取对应帧后，再去渲染
   */
  set currentTime(time: number) {
    // console.log('change currentTime', time);
    this.renderVideoFrame(time);
    while (this.audioFrames.length > 0) {
      const frames = this.audioFrames.shift();
      const audioStartTime = frames.ptsTime;
      if (time < audioStartTime + frames.buffer.duration) {
        frames.useOffset = Math.floor((time - audioStartTime) / frames.buffer.duration * frames.buffer.length);
        this.audioFrames.unshift(frames);
        this.playerState.currentTime = time;
        return;
      }
    }
  }

  get currentTime() {
    return this.playerState.currentTime;
  }

  get performanceStatus() {
    return {
      ...this.performanceState,
      ...this.videoProvider.providerState,
      frameLength: this.option.video2img.datas.length,
    };
  }

  get volumn() {
    return this.audioRender.volumn;
  }

  set volumn(data: number) {
    this.audioRender.volumn = data;
  }

  public async seek(time: number) {
    // console.log('seek window async', time);
    this.playerState.currentTime = time;
    this.playerState.playStartTime = this.playerState.currentTime - this.audioRender.currentTime;
    this.playerState.shouldRenderPoster = true;
    this.playerState.audioSeeking = true;
    this.playerState.videoSeeking = true;
    this.playerState.isChannelLocking = false;
    this.flush();
  }

  public async run() { }

  public destroy() {
    // this.videoFrames = null;
    this.audioFrames = null;
    this.videoRender = null;
    this.audioRender = null;
    this.videoProvider = null;
    this.audioProvider = null;

    this.playerState = {
      currentTime: 0,
      playing: false,
      audioSeeking: false,
      videoSeeking: false,
      audioAppendTime: 0,
      shouldRenderPoster: true,
      videoLoading: false,
      isChannelLocking: false,
      playStartTime: 0,
      documentVisibility: false,
    };

    this.state = {
      videoReady: false,
      audioReady: false,
      videoRafId: null,
    };

    this.performanceState = null;
    this.frameInfo = null;
  }

  /**
   * 获取当前已解码部分 缓冲区长度
   */
  public getBuffer() {
    const { audioFrames } = this;
    const videoFrames = this.option.video2img.datas;
    if (videoFrames.length && audioFrames.length) {
      const videoEnd = videoFrames[0].renderTime;
      const videoStart = videoFrames[videoFrames.length - 1].renderTime;
      const audioStart = audioFrames[0].ptsTime;
      const audioEnd = audioFrames[audioFrames.length - 1].ptsTime + audioFrames[audioFrames.length - 1].buffer.duration;
    
      return {
        start: Math.max(videoStart, audioStart),
        end: Math.min(videoEnd, audioEnd),
      }
    }

    return {
      start: 0,
      end: 0,
    }
  }

  public async play() {
    if (!this.playerState.playing) {
      this.audioRender.play();
    }
    return;
  }

  public async pause() {
    if (this.playerState.playing) {
      this.playerState.playing = false;
      this.audioRender.pause();
      this.videoPause();
      this.event.emit(PlayerEvent.PAUSE);
    }
    return;
  }

  public flush() {
    this.option.video2img.clear();
    this.audioFrames.length = 0;
  }
  
  private async init() {
    this.audioRender = new AudioRender(this.event, {
      ...this.option,
      handleAudioProcess: this.handleAudioProcess.bind(this),
    });
    if (!this.option.offscreenRendering) {
      this.videoRender = new YuvRender(this.option);
    }
    this.audioFrames = [];

    this.audioProvider = new AudioProvider({
      audioFrames: this.audioFrames,
    }, this.option);

    this.videoProvider = new VideoProvider({
      videoFrames: this.option.video2img.datas,
    }, this.option);

    this.frameInfo = null;
  }
  
  private async bindEvent() {
    this.event.on(ManagerEvent.GETVIDEOFRAME, this.handleRecieveVideoFrame.bind(this));
    this.event.on(ManagerEvent.GETAUDIOFRAME, this.handleRecieveAudioFrame.bind(this));
    this.event.on(PlayerEvent.LOADEDMETADATA, this.handleRecieveMetaData.bind(this));
    this.event.on(PlayerEvent.PLAYING, this.handleAudioPlay.bind(this));
  }


  private handleRecieveVideoFrame(frame: IVideoFrame) {
    // Utils.log(frame.renderTime);
    this.performanceState.decodeCount++;
    this.performanceState.decodeSumTime += frame.decodeTime;
    this.performanceState.decodeAvgTime = this.performanceState.decodeSumTime / this.performanceState.decodeCount;
    this.option.video2img.forcePipe(frame);
    const videoFrames = this.option.video2img.datas;

    if (frame.renderTime > this.playerState.currentTime && this.playerState.shouldRenderPoster) {
      this.playerState.shouldRenderPoster = false;
      this.playerState.currentTime = frame.renderTime;
      this.emitTimeUpdateEventTh();
      this.renderVideoFrame(frame.renderTime);
    }

    if (!this.state.videoReady && videoFrames?.length >= this.option.videoReadyNumber) {
      this.event.emit(PlayerEvent.VIDEOREADY);
      this.state.videoReady = true;
      this.checkCanPlay();
    }

    if (!this.option.offscreenRendering
      && videoFrames.length > this.option.maxFramesNumber
      && !this.playerState.isChannelLocking
    ) {
      this.option.changeChannelStatus(true);
      this.playerState.isChannelLocking = true;
    }

    if (this.playerState.videoSeeking) {
      this.playerState.videoSeeking = false;
      this.checkSeekend();
    }

    if (this.playerState.videoLoading && videoFrames.length >= this.option.videoReadyNumber) {
      this.changeVideoLoadingStatus(false);
    }

    this.emitProgressEventTh();

    if (!this.frameInfo) {
      this.frameInfo = {
        width: frame.width,
        height: frame.height,
      };
      this.event.emit(PlayerEvent.LOADFRAMEINFO, this.frameInfo)
    }
  }

  private handleRecieveAudioFrame(data: IAudioFrame) {
    const start = data.ptsTime;
    const { currentTime } = this.playerState;
    // 无用 audiubuffer 直接丢弃
    if (start + data.buffer.duration < currentTime) return;

    this.audioFrames.push(data);

    /**
     * seek 后，此处调整音频 起始时间.
     */
    if (this.playerState.audioSeeking) {
      while (this.audioFrames.length > 0) {
        const frames = this.audioFrames.shift();
        const audioStartTime = frames.ptsTime;
        if (currentTime < audioStartTime + frames.buffer.duration) {
          const seekTime = Math.max(currentTime - audioStartTime, 0);
          frames.useOffset = Math.floor(seekTime / frames.buffer.duration * frames.buffer.length);
  
          this.audioFrames.unshift(frames);
          this.playerState.audioSeeking = false;
          this.checkSeekend();
          return;
        }
      }
    }

    if (!this.state.audioReady) {
      let duration = this.option.audioReadyDuration;
      this.audioFrames.find(item => {
        duration -= item.buffer.duration;
        if (duration <= 0) {
          this.event.emit(PlayerEvent.AUDIOREADY);
          this.state.audioReady = true;
          this.checkCanPlay();
        }
      });
    }
  }

  /**
   * todo： 兼容 仅包含音频或者视频的流。
   */
  private checkCanPlay() {
    const { audioReady, videoReady } = this.state;
    if (audioReady && videoReady) {
      this.event.emit(PlayerEvent.CANPLAY);
    }
  }

  private renderVideoFrame(time: number, frame?: IVideoFrame) {
    let index: number = null;
    try {
      if (!frame) {
        if (!this.option.video2img.datas.length && !this.playerState.videoLoading) {
          // console.log('卡断');
          this.changeVideoLoadingStatus(true);
          return;
        }
        const provider = this.videoProvider.provider(time);
        if (!provider) {
          return;
        }

        if (provider.clear && this.option.offscreenRendering) {
          this.changeVideoLoadingStatus(true);
          this.option.callWorkerRender({
            clear: true,
            length: provider.clearLen,
          });
          return;
        }
        frame = provider.frame;
        index = provider.index;
      }

      if (this.option.offscreenRendering) {
        // 离屏渲染
        !isNaN(index) && this.option.callWorkerRender({
          index,
          pts: frame?.pts,
          frame: frame,
        });
      } else {
        frame && this.videoRender.drawFrame(frame);
        if (this.playerState.isChannelLocking) {
          this.option.changeChannelStatus(false);
          this.playerState.isChannelLocking = false;
        }
      }
    } catch (e) {
      console.error(`渲染图像失败, ${e.message}`);
    }
  }

  private handleAudioProcess(audioProcessingEvent: AudioProcessingEvent) {
    if (this.playerState.videoLoading) return;
    // console.log('handleAudioProcess');
    const { outputBuffer } = audioProcessingEvent;
    const sourceSize = outputBuffer.length;
    const { left, right, audioTime, hasCopySize } = this.audioProvider.provider(sourceSize);
    const leftOutBf = outputBuffer.getChannelData(0);
    const rightOutBf = outputBuffer.getChannelData(1);
    leftOutBf.set(left);
    rightOutBf.set(right);
    
    if (hasCopySize === 0) {
      return;
    }

    // this.playerState.audioAppendTime = this.audioRender.currentTime;
    if (hasCopySize < sourceSize) {
      const emptyArray = new Float32Array(sourceSize - hasCopySize);
      leftOutBf.set(emptyArray, hasCopySize);
      rightOutBf.set(emptyArray, hasCopySize);
    }

    if (audioTime !== 0) {
      // this.playerState.currentTime = audioTime;
      this.emitTimeUpdateEventTh();
    }
  }

  private videoPlay() {
    if (this.playerState.videoLoading) {
      // console.log('卡顿，循环读取上一帧', this.playerState.currentTime);
      // this.playerState.audioAppendTime = this.audioRender.currentTime;
      this.renderVideoFrame(this.playerState.currentTime);
    } else {
      // console.log(this.playerState.playStartTime, this.audioRender.currentTime);
      const currentTime = this.playerState.playStartTime + this.audioRender.currentTime;
      // console.log('循环时间: ', currentTime - this.playerState.lastRenderTime);
      this.playerState.currentTime = currentTime; 
      this.emitTimeUpdateEventTh();
      // console.log('正常读取帧', currentTime);
      this.renderVideoFrame(this.playerState.currentTime);
    }
    this.state.videoRafId = requestAnimationFrame((now) => {
      this.performanceState.fpsCount++;
      if (!this.playerState.lastRenderTime) {
        this.playerState.lastRenderTime = now;
      }
      
      // console.log(this.performanceState.fpsCount, this.option.getFpsCount);
      if (this.performanceState.fpsCount >= this.option.getFpsCount) {
        this.performanceState.fps = Math.floor(1000 * this.performanceState.fpsCount  / ( now - this.playerState.lastRenderTime ));
        this.playerState.lastRenderTime = null;
        this.performanceState.fpsCount = 0;
      }

      this.videoPlay();
    });
  }

  private videoPause() {
    // this.playerState.audioAppendTime = this.audioRender.currentTime;
    this.state.videoRafId && window.cancelAnimationFrame(this.state.videoRafId);
  }

  private checkSeekend() {
    this.event.emit(PlayerEvent.SEEKED);
  }

  /**
   * 修改videoload 状态
   * @param status true 暂停 audio 播放，反之
   */
  private changeVideoLoadingStatus(status: boolean) {
    // console.log('changestatus', status);
    if (status && !this.playerState.videoLoading) {
      this.playerState.videoLoading = true;
      this.audioRender.pause();
    } else if (!status && this.playerState.videoLoading) {
      if (this.option.video2img.datas.length >= this.option.videoReadyNumber) {
        this.playerState.videoLoading = false;
        this.audioRender.play();
      }
    }
  }

  private handleRecieveMetaData({ startTime = 0 }) {
    this.playerState.playStartTime = startTime;
    this.emitTimeUpdateEventTh();
  }

  private handleAudioPlay() {
    if (!this.playerState.playing) {
      this.playerState.playing = true;
      this.videoPlay();
    }
  }

  private emitEvent(event: PlayerEvent) {
    return () => this.event.emit(event);
  }

}