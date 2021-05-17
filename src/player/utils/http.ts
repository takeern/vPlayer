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
  bf: ArrayBuffer;
  recieveBfLen: number;
}

interface IOption {
  channel: Channel<IBf2DemuxData>,
}

export default class HttpLoader {
  private state: IState = {
    flusing: false,
    readers: {},
    bf: new ArrayBuffer(0),
    recieveBfLen: 0, // 设置为 0，表示 每个url 的资源加载完，才会返回
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
      return this.newGetbf(reader, url);
    }
  }

  // private async getBuffer(reader: ReadableStreamDefaultReader<Uint8Array>, url: string) {
  //   let done = false;
  //   while (!done) {
  //     const res = await reader.read();
  //     done = res.done;
  
  //     if (done) {
  //       this.state.readers[url] && delete this.state.readers[url];
  //     }

  //     console.log('defualt buffer', res.value?.buffer);
  //     // 阻塞关键点
  //     await this.option.channel.pipe({
  //       data: res.value?.buffer,
  //       url,
  //       done,
  //     });
  //   }
  // }

  private async newGetbf(reader: ReadableStreamDefaultReader<Uint8Array>, url: string) {
    let done = false;
    while (!done) {
      const res = await reader.read();
      done = res.done;
  
      const emitBf = async () => {
        const buffer = this.state.bf.slice(0);
        this.state.bf = new ArrayBuffer(0);
        await this.option.channel.pipe({
          data: buffer,
          url,
          done,
        });
      };

      if (done) {
        this.state.readers[url] && delete this.state.readers[url];
        await emitBf();
      } else {
        // copy bf
        const view = new Uint8Array((res.value?.buffer.byteLength | 0) + (this.state.bf.byteLength | 0));
        view.set(new Uint8Array(this.state.bf), 0);
        view.set(new Uint8Array(res.value?.buffer), (this.state.bf.byteLength | 0));
        this.state.bf = view.buffer;

        if (this.state.recieveBfLen && this.state.recieveBfLen < this.state.bf.byteLength) {
          await emitBf();
        }
      }
    }
  }
}