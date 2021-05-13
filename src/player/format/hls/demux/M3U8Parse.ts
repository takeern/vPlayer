import { Parser } from 'm3u8-parser';


interface IM3U8Manifest {
  segments: {
    duration: number;
    uri: string;
    timeline: number;
  }[];
  [key: string]: string | any;
}

export default class M3U8Parse {
  private static parser = new Parser();
  public static async parse(url: string): Promise<IM3U8Manifest> {
    const res = await fetch(url);
    const baseUrl = M3U8Parse.getBaseUrl(url);
    if (res.status === 200) {
      const source = await res.text();
      M3U8Parse.parser.push(source);
      M3U8Parse.parser.end();
      M3U8Parse.parser.manifest.duration = 0;
      M3U8Parse.parser.manifest.segments.every(item => {
        M3U8Parse.parser.manifest.duration += item.duration;
        return item.uri = baseUrl + item.uri;
      });
      return M3U8Parse.parser.manifest;
    } else {
      throw ('资源下载失败: ' + url);
    }
  }

  private static getBaseUrl(url: string) {
    const lastSlash = url.lastIndexOf('/');
    return url.substr(0, lastSlash + 1);
  }
}

export {
  IM3U8Manifest
}