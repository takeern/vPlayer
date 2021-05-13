// import { , FORMAT, ERROR_MSG } from "../constants";

export default class Utils {
  public static appendBuffer(buf1: ArrayBuffer, buf2: ArrayBuffer) {
    // let tmp = new Uint8Array((buf1.byteLength) + (buf2.byteLength));
    // tmp.set(new Uint8Array(buf1), 0);
    // tmp.set(new Uint8Array(buf2), buf1.byteLength);
    const view = new Uint8Array(buf1.byteLength + buf2.byteLength);
    view.set(new Uint8Array(buf1), 0);
    view.set(new Uint8Array(buf2), buf1.byteLength);
    // this.audioBuffer = view.buffer;
    return view.buffer;
  }

  // public static pts2time(pts: number, type: FORMAT) {
  //   if (type === FORMAT.HLS) {
  //     return pts * BASE_TIME.TS;
  //   } else {
  //     console.warn(ERROR_MSG.UNHANDLE_FORMAT);
  //     return null;
  //   }
  // }

  public static throttle(fn: Function, delay: number) {
    let start = 0;
    return () => {
      if (Date.now() - start >= delay) {
        start = Date.now();

        fn && fn();
      }
    }
  }

  public static log(...arg) {
    console.log.apply(null, ['player log ==>', ...arg]);
  }
}