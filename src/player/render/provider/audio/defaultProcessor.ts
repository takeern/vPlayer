import { IConfig } from './index';

export abstract class Processor {
  public abstract provider(size: number): IData;
}

interface IData {
  left: Float32Array;
  right: Float32Array;
  hasCopySize: number;
  audioTime?: number;
}

export default class DefualtProcessor extends Processor {
  constructor(private config: IConfig, private option) {
    super();
  }

  public provider(length: number) {
    const { audioFrames } = this.config;
    
    const res = {
      left: new Float32Array(length),
      right: new Float32Array(length),
      hasCopySize: 0,
      audioTime: 0,
    }

    while (audioFrames.length > 0) {
      const originFrame = audioFrames.shift();
      const { useOffset = 0, pts } = originFrame;

      const leftBf = originFrame.buffer.getChannelData(0);
      const rightBf = originFrame.buffer.numberOfChannels > 1 ?
        originFrame.buffer.getChannelData(1) : originFrame.buffer.getChannelData(0);
      const canCopyOver = (length - res.hasCopySize) - (leftBf.length - useOffset);
      //P2 TODO: 兼容其他类型的 pts, 解决
      res.audioTime = useOffset / leftBf.length * originFrame.buffer.duration + pts * this.option.baseTime;
      if (canCopyOver > 0) {
        // 该 frame 被完全使用，丢弃
        res.left.set(leftBf.slice(useOffset, leftBf.length), res.hasCopySize);
        res.right.set(rightBf.slice(useOffset, rightBf.length), res.hasCopySize);
        res.hasCopySize += (leftBf.length - useOffset);
      } else {
        // 该 frame 部分被使用
        const endOffset = length - res.hasCopySize + useOffset;
        res.left.set(leftBf.slice(useOffset, endOffset), res.hasCopySize);
        res.right.set(rightBf.slice(useOffset, endOffset), res.hasCopySize);
        
        originFrame.useOffset = endOffset;
        res.hasCopySize += (length - res.hasCopySize);
        audioFrames.unshift(originFrame);
        break;
      }
    }

    return res;
  }
}