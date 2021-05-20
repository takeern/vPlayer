import { IConfig } from './';
import { IVideoFrame } from '../../../constants';
// import { IVideoFrame } from 'src/manager/asyncManager';
export default class DefaultProcessor {
  public performanceState = {
    dropFrames: 0,
    renderCount: 0,
    renderAvgErrorTime: 0,
    lastSelectTime: 0,
  };

  
  constructor(private config: IConfig, option) {
    // console.log(this.option)
  }

  // 选择最接近的那一帧。超时帧直接丢弃
  public provider(currentTime: number) {
    // console.log('provider', currentTime);
    const { videoFrames } = this.config;
    const len = videoFrames.length;
    if (!len) return null;

    if (videoFrames[len - 1].renderTime === currentTime) {
      const item = videoFrames.shift();
      this.selectFrame(item);
      return {
        index: len - 1,
        frame: item,
      }
    }

    let index = len - 1;
    for (; index >= 0; index--) {
      if (videoFrames[index].renderTime >= currentTime) break;
    }

    // 找到某帧符合规则
    if (index >= 0) {
      // if (index)
      if (index < len - 1) {
        if (index < len - 2) {
          // console.log('丢帧', len - 1 - index);
          this.performanceState.dropFrames += len - 1 - index;
        }
  
        const frame = videoFrames[index + 1];
        this.selectFrame(frame);
        const errorTime = frame.renderTime - currentTime;
        // console.log('当前时间: %f, 选择时间: %f', currentTime, frame.renderTime, errorTime);
        this.performanceState.renderCount++;
        if (this.performanceState.renderCount > 1) {
          this.performanceState.renderAvgErrorTime =
            (this.performanceState.renderAvgErrorTime * (this.performanceState.renderCount - 1) + errorTime)
              / this.performanceState.renderCount;
        } else {
          this.performanceState.renderAvgErrorTime = errorTime;
        }
        // this.performanceState.renderAvgErrorTime = Number(this.performanceState.renderAvgErrorTime.toFixed(2));
        videoFrames.length = index + 1;
        return {
          index: index + 1,
          frame,
        };
      }
    } else {
      let clearLen = videoFrames.length;
      videoFrames.length = 0;
      return {
        clear: true,
        clearLen,
      };
    }

    return null;
  }

  public destroy() {
    this.performanceState = {
      dropFrames: 0,
      renderCount: 0,
      renderAvgErrorTime: 0,
      lastSelectTime: 0,
    };
  }

  private selectFrame(frame: IVideoFrame) {
    if (frame.pts < this.performanceState.lastSelectTime) {
      // console.warn('选取时间大于上次选取时间', frame, [...this.config.videoFrames]);
    }
    this.performanceState.lastSelectTime = frame.pts;
  }
}