import { IVideoFrame } from '../constants';
const yuvBuffer = require('yuv-buffer');
const yuvCanvas = require('yuv-canvas');
// const debug = require('debug')('red: yuvRender');

export default class YuvRender {
  private render: any = null;
  constructor(private option) {
    this.init();
    // console.log(this.option.canvas, 'his.option.canvas');
    // debug(this.option)
  }

  public drawFrame(data: IVideoFrame) {
    if (data) {
      const { width, height } = data;
      const chromaWidth = width / 2;
      const chromaHeight = height / 2;

      const format = yuvBuffer.format({
        width,
        height,
        chromaHeight,
        chromaWidth,
      });

      const frame = yuvBuffer.frame(format, 
        {
          bytes: data.buf_y,
          stride: data.stride_y
        }, {
          bytes: data.buf_u,
          stride: data.stride_u
        }, {
          bytes: data.buf_v,
          stride: data.stride_v
        }
      );

      this.render.drawFrame(frame);
    }
  }

  private async init() {
    // this.render = {};
    this.render = yuvCanvas.attach(this.option.canvas, { webGL: true });
  }
}