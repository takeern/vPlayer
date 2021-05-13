import { createElement, useRef, useEffect, useState } from 'rax';
import View from 'rax-view';
import './index.css';
import Player from '../player/player';
import Loader from '../player/format/hls/loader';
import * as Chart from 'echarts';
import { getPieOption } from './webUI';
import { getSearchParams } from 'rax-app';

let chart;

enum Tagnames {
  decodeAvgTime = '每帧解码平均耗时',
  decodeCount = '已解码帧数',
  fps = 'fps',
  renderAvgErrorTime = '平均渲染误差',
  renderCount = '渲染次数',
  dropFrames = '丢帧次数',
  duration = '视频长度',
  startTime = '起始播放时间',
  currentTime = '当前播放时间',
  decodeSumTime = '解码总耗时',
  frameLength = '解码缓冲区未消费帧数',
  frameInfo = '帧分辨率',
  bufferedTime = '缓冲区时间'
};

enum Scale {
  decodeAvgTime = 'ms',
  renderAvgErrorTime = 'ms',
  duration = 's',
  startTime = 's',
  currentTime = 's',
  decodeSumTime = 'ms',
  bufferedTime = 's',
}

const renderItem = (key, value) => {
  return (
    <div className='tag' key={key}>
      <div className='tag_key'>{key + ': '}</div>
      <div className='tag_value'>{value}</div>
    </div>
  );
}

export const renderItems = (list) => {
  return Object.entries(list).map(([key, value]) => {
    if (Scale[key]) {
      if (!isNaN(Number(value))) {
        value = Number(value).toFixed(4);
      }
      value = value.toString() + Scale[key];
    }
    if (Tagnames[key]) {
      return renderItem(Tagnames[key], value);
    }
    return null;
  });
};

const MyComponent = () => {
  const cav = useRef(null);
  const div = useRef(null);
  const [state, setState] = useState({
    performanceStatus: null,
    metadata: null,
    currentTime: null,
    frameInfo: null,
    isplaying: false,
    bufferedTime: null,
    canuse: {
      sab: !!(window.SharedArrayBuffer),
      oc: !!(window.OffscreenCanvas),
    },
    playurl: new URLSearchParams(window.location.search).get('playurl') || '',
  });
  const {
    performanceStatus, 
    metadata, 
    currentTime, 
    frameInfo, 
    isplaying, 
    bufferedTime,
    canuse,
    playurl,
  } = state;
  const handlePlay = () => {
    (window as any).player.play();
  } 

  const handlePause = () => {
    (window as any).player.pause();
  }

  const getPerformanceStatus = () => {
    const status = (window as any).player.performanceStatus;
    setState(pstate => ({
      ...pstate,
      performanceStatus: status,
    }));
    (window as any).player.getBufferSize();
  }

  const handleCanplay = () => {
    getPerformanceStatus()
    setInterval(() => {
      getPerformanceStatus();
    }, 1000);
  }

  const renderPie = (payload) => {
    const data = [
      { value: payload.bf, name: '原始流' },
      { value: payload.packet, name: 'packet' },
      { value: payload.frame, name: 'frame' },
    ];

    chart.setOption(getPieOption(data));
  };
  
  const handleLoadMeta = (payload) => {
    setState(pstate => ({
      ...pstate,
      metadata: payload,
    }));
  };

  const handlePlayerTimeUpdate = () => {
    const buffered = (window as any).player.buffered;
    const bufferedTime = buffered.end - buffered.start;
    setState(pstate => ({
      ...pstate,
      bufferedTime: bufferedTime,
      currentTime: (window as any).player.currentTime,
    }));
  };

  const handleLoadFrameInfo = (payload) => {
    setState(pstate => ({
      ...pstate,
      frameInfo: payload,
    }));
  }

  const handlePlayStatusChange = (status) => {
    setState(pstate => ({
      ...pstate,
      isplaying: status,
    }));
  }

  useEffect(() => {
    chart = Chart.init(div.current, 'dark');
    if (cav.current) {
      const player = new Player(playurl, {
        canvas: cav.current,
        baseTime: Loader.baseTime,
        // loader: Loader,
      });
      (window as any).player = player;
      player.on('canplay', () => handleCanplay())
      // player.on('progress', () => console.log('progress'));
      player.on('playing', () => handlePlayStatusChange(true));
      player.on('pause', () => handlePlayStatusChange(false)); // recieveWorkerBufferSize
      player.on('recieveWorkerBufferSize', (payload) => renderPie(payload));
      player.on('loadedmetadata', (payload) => handleLoadMeta(payload));
      player.on('timeupdate', () => handlePlayerTimeUpdate());
      player.on('loadFrameInfo', (payload) => handleLoadFrameInfo(payload));
      console.log(player);
    }

  }, []);
  return (
    <View className="container">
      <div className='canuseWrap'>
        <div className={`${!canuse.sab ? 'canuse_error' : ''}`}>{`SharearryBuffer ${!canuse.sab ? 'not' : ''} ready`}</div>
        <div className={`${!canuse.oc ? 'canuse_error' : ''}`}>{`OffscreenCanvas ${!canuse.oc ? 'not' : ''} ready`}</div>
      </div>
      <canvas ref={cav} className='cav' />
      <div className='controlWrap'>
        <div className='btn' onClick={handlePlay}>play</div>
        <div className='btn' onClick={handlePause}>pause</div>
      </div>
      <div className='infoWrap'>
        <div ref={div} className='pieWrap'></div>
        {performanceStatus && <div className='tagWrap'>
          <div className='tagTitle'>性能参数</div>
          {renderItems(performanceStatus)}
        </div>}
        {metadata && <div className='metaWrap'>
          <div className='metaTitle'>视频参数</div>
          {renderItems(metadata)}
          {frameInfo && renderItems({
            'frameInfo': `${frameInfo.width} x ${frameInfo.height}`,
          })}
          {renderItems({
            currentTime,
          })}
          {renderItems({
            bufferedTime,
          })}
          <div className='status_wrap'>
            <div className='status_key'>{`当前播放状态: `}</div>
            <div className='status_value'>{isplaying ? '播放中' : '暂停'}</div>
          </div>
        </div>}
      </div>
    </View>
  );
};

export default MyComponent;

