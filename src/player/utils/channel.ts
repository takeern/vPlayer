interface IStatus {
  isBlocking: boolean;
  resolve: Function;
  cb: Function;
}

export default class Channel<T> { 
  public datas: T[] = [];
  private readStatus: IStatus = {
    isBlocking: false,
    resolve: null,
    cb: null,
  }

  private pipeStatus: IStatus = {
    isBlocking: false,
    resolve: null,
    cb: null,
  }
  
  constructor(private option: {
    maxLength?: number;
    checkOverflow?: (data: T[]) => boolean
  }) { }
  
  public clear() {
    this.datas.length = 0;

    if (this.pipeStatus.isBlocking) {
      this.pipeStatus.resolve && this.pipeStatus.resolve();
      this.pipeStatus = {
        isBlocking: false,
        resolve: null,
        cb: null,
      };
    }
  }
  
  public pipe(data: T | null): Promise<void> {
    if (this.pipeStatus.isBlocking) {
      throw ('管道阻塞状态，重复调用');
    }

    return new Promise(resolve => {
      if (this.checkChannelStatus()) {
        // 未阻塞
        data && this.forcePipe(data);
        this.pipeStatus.isBlocking = false;
        this.pipeStatus.resolve = null;
        resolve();
      } else {
        // 阻塞
        this.pipeStatus.resolve = resolve;
        if (data) {
          this.pipeStatus.cb = () => this.datas.unshift(data);
        }
        this.pipeStatus.isBlocking = true;
      }
    });
  }

  public forcePipe(data: T) {
    if (this.readStatus.isBlocking) {
      this.readStatus.resolve && this.readStatus.resolve(data);
      this.readStatus.isBlocking = false;
      this.readStatus.resolve = null
    } else {
      this.datas.unshift(data);
    }
  }

  public read(): Promise<T> {
    if (this.readStatus.isBlocking) {
      throw ('管道读阻塞，重复调用');
    }
    return new Promise(resolve => {
      if (this.datas.length) {
        // 管道内有数据
        const data = this.datas.pop();

        if (this.pipeStatus.isBlocking && this.checkChannelStatus()) {
          this.pipeStatus.cb && this.pipeStatus.cb();
          this.pipeStatus.resolve && this.pipeStatus.resolve();
          this.pipeStatus = {
            isBlocking: false,
            resolve: null,
            cb: null,
          };
        }
        resolve(data);
      } else {
        // 管道内没有数据，阻塞
        this.readStatus = {
          isBlocking: true,
          resolve,
          cb: null,
        };
      }
    });
  }

  public forceRead() {
    const data = this.datas.pop();
    if (this.pipeStatus.isBlocking && this.checkChannelStatus()) {
      this.pipeStatus.cb && this.pipeStatus.cb();
      this.pipeStatus.resolve && this.pipeStatus.resolve();
      this.pipeStatus = {
        isBlocking: false,
        resolve: null,
        cb: null,
      };
    }

    return data;
  }

  public unlockPipe() {
    // 解锁写管道
    if (this.pipeStatus.isBlocking && this.checkChannelStatus()) {
      this.pipeStatus.cb && this.pipeStatus.cb();
      this.pipeStatus.resolve && this.pipeStatus.resolve();
      this.pipeStatus = {
        isBlocking: false,
        resolve: null,
        cb: null,
      };
    }
  }

  /**
   * true 代表管道未填充满
   */
  private checkChannelStatus(): boolean {
    let cmd = true;
    if (this.option.maxLength) {
      cmd = this.datas.length < this.option.maxLength;
    } else {
      cmd = this.option.checkOverflow(this.datas);
    }

    return cmd;
  }
}


// const c = new Channel<number>({
//   maxLength: 3,
// });

// const sendData = async () => {
//   // let i = 0;
//   console.log('sendData');
//   for (let i = 0; i < 10; i++) {
//     console.log('sendData123', i);
//     console.log(await c.pipe(i));
//     console.log('senddata', i);
//   }
//   // while (i < 10) {
//   //   console.log('sendData123');
//   //   await c.pipe(i);
//   //   console.log('senddata', i);
//   //   i++;
//   // }
// }


// setTimeout(() => {
//   sendData()
// }, 2000);

// const readData = async () => {
//   // setInterval(async () => {
//   //   console.log('readData',  c.forceRead());
//   // }, 1000);
//   for (let i = 0; i < 10; i++) {
//     console.log('readData start');
//     console.log('readData', await c.read());
//   }
// }

// setTimeout(() => {
//   readData()
// }, 1000);

// const m1 = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, 3000);
//   });
// }

// const m = async () => {
//   await m1();
// }

// m()
// readData();
