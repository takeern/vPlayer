// import { WorkerEvent } from '../constants';
import Channel from '../utils/channel';

export interface IBf2DemuxData {
  data: ArrayBuffer,
  url: string,
  done: boolean,
}

interface IState {
  flusing: Boolean; // 是否处于 flush
  readers: {
    [prop: string]: ReadableStreamDefaultReader<Uint8Array>,
  },
}

interface IOption {
  channel: Channel<IBf2DemuxData>,
}

export default class HttpLoader {
  private state: IState = {
    flusing: false,
    readers: {},
  }

  constructor(private option: IOption) {}

  // 并行 url 支持。当前不支持
  public async handleLoaderMsg({ url, urls }) {
    
    if (urls?.length) {
      console.warn('urls 并行加载将导致 缓冲流不被阻塞!');
      // 阻塞的本质是 reader 语句执行时要await .
      for (let i = 0; i < urls.length; i++) {
        // console.log(i);
        await this.getData(urls[i]);
      }
    } else {
      await this.getData(url);
    }
  }

  // 清除当前所有缓冲
  public flush() {
    for (let key in this.state.readers) {
      this.state.readers[key].cancel();
    }
    this.state.readers = {};
  }

  public async getData(url: string) {
    // console.log('getData', url);
    const res = await fetch(url).then(res => res);
    const type = res.headers.get('content-type')
    
    if (type.includes('video')) {
      const reader = res.body.getReader();
      this.state.readers[url] = reader;
      return this.getBuffer(reader, url);
    }
  }

  private async getBuffer(reader: ReadableStreamDefaultReader<Uint8Array>, url: string) {
    let done = false;
    while (!done) {
      const res = await reader.read();
      done = res.done;
  
      if (done) {
        this.state.readers[url] && delete this.state.readers[url];
      }

      // 阻塞关键点
      await this.option.channel.pipe({
        data: res.value?.buffer,
        url,
        done,
      });
    }
  }
}