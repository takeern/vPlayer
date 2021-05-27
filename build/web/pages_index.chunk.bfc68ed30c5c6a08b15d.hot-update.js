webpackHotUpdate("pages_index.chunk",{

/***/ "./src/player/decode/video.ts":
/*!************************************!*\
  !*** ./src/player/decode/video.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoDecoder; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/player/utils/index.ts");


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var libffmpeg = __webpack_require__(/*! ../../../lib/libffmpeg.txt */ "./lib/libffmpeg.txt").default;

var libffmpegWorker = __webpack_require__(/*! ../../../lib/libffmpeg.worker.txt */ "./lib/libffmpeg.worker.txt").default;

var createJavaScriptUrl = function (code) {
  return URL.createObjectURL(new Blob([code], {
    type: 'application/javascript'
  }));
};

var wasmPath = function () {
  var orgin = location.origin;

  if (orgin.indexOf('127.0.0.1') > -1 || orgin.indexOf('localhost') > -1) {
    return 'http://127.0.0.1:8083';
  }

  return orgin;
};




var VideoDecoder = /*#__PURE__*/function () {
  function VideoDecoder(option) {
    this.option = option;
    this.state = {
      decoding: false,
      lastSendPts: null,
      flushing: false,
      // appendCount: 0,
      reslove: null,
      init: false,
      minTimeline: 0,
      initCb: null
    };
    this.performanceState = {
      appendDataTime: {},
      lastRecieveTime: null,
      count: 0,
      seekTime: 0,
      drapCount: 0
    };
    this.init();
    this.bindEvent();
  }

  var _proto = VideoDecoder.prototype;

  _proto.init = function init() {
    this.loadWasm();
  };

  _proto.loadWasm = function loadWasm() {
    var _this = this;

    var mainScriptUrl = createJavaScriptUrl(libffmpeg);
    var workerScriptUrl = createJavaScriptUrl(libffmpegWorker);
    self.importScripts(mainScriptUrl);
    self['WASMDecoder']({
      mainScriptUrlOrBlob: mainScriptUrl,
      locateFile: function locateFile(wasm) {
        if (wasm.indexOf('worker.js') > -1) {
          return workerScriptUrl;
        } else {
          return wasmPath() + '/' + wasm;
        }
      }
    }).then(function (instance) {
      _this.instance = instance;

      _this.handleModuleInit();
    });
  }
  /**
   * worker 消息处理时，考虑到消息队列被阻塞，导致新消息需要等很久才能解析。
   */
  ;

  _proto.bindEvent = function bindEvent() {};

  _proto.handleModuleInit = function handleModuleInit() {
    // decode 
    this.initDecode();
    this.state.init = true;
  };

  _proto.handleGetFrame = function handleGetFrame(addr_y, addr_u, addr_v, stride_y, stride_u, stride_v, width, height, pts, decodeTime) {
    var out_y = this.instance.HEAPU8.subarray(addr_y, addr_y + stride_y * height);
    var out_u = this.instance.HEAPU8.subarray(addr_u, addr_u + stride_u * height / 2);
    var out_v = this.instance.HEAPU8.subarray(addr_v, addr_v + stride_v * height / 2);
    var obj = {
      stride_y: stride_y,
      stride_u: stride_u,
      stride_v: stride_v,
      width: width,
      height: height,
      buf_y: new Uint8Array(out_y),
      buf_u: new Uint8Array(out_u),
      buf_v: new Uint8Array(out_v),
      pts: pts
    };
    var renderTime = pts * this.option.baseTime;

    if (this.state.lastSendPts && pts <= this.state.lastSendPts) {// debugger;
    }

    this.state.lastSendPts = pts;

    if (this.state.minTimeline) {
      if (renderTime < this.state.minTimeline) {
        // console.log('丢弃无用视频帧', renderTime, this.state.minTimeline);
        return;
      } else {
        this.state.minTimeline = null;
      }
    } // console.log('收到解码帧 pts: %f, renderTime: %f, ', obj.pts, renderTime, obj.buf_u.buffer, obj.buf_y.buffer, obj.buf_v.buffer)


    this.option.handleDecodeRecieve(Object.assign(Object.assign({}, obj), {
      decodeTime: decodeTime,
      renderTime: renderTime
    }));
  };

  _proto.initDecode = function initDecode() {
    var cb = this.instance.addFunction(this.handleGetFrame.bind(this), 'viiiiiiiiii');

    this.instance._init_decoder(cb, 0, 2); // this.state.flushing = false;


    this.state.init = true;

    if (this.state.reslove) {
      this.state.reslove();
      this.state.initCb && this.state.initCb();
      this.state.reslove = null;
      this.state.initCb = null;
    }
  };

  _proto.decodeData = function decodeData(data) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this2 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                if (_this2.state.init) {
                  _this2.state.decoding = true;
                  var PTS = data.PTS,
                      data_byte = data.data_byte;

                  if (_this2.performanceState.seekTime) {
                    if (_this2.state.minTimeline > PTS * _this2.option.baseTime) {
                      _this2.performanceState.count++;
                    } else {
                      var _this2$performanceSta = _this2.performanceState,
                          count = _this2$performanceSta.count,
                          drapCount = _this2$performanceSta.drapCount,
                          seekTime = _this2$performanceSta.seekTime;
                      var useTime = performance.now() - seekTime;
                      _utils__WEBPACK_IMPORTED_MODULE_2__["default"].log('seekend', useTime, count, useTime / (count - drapCount), drapCount);
                      _this2.performanceState.count = 0;
                      _this2.performanceState.seekTime = 0;
                      _this2.performanceState.drapCount = 0;
                    }
                  }

                  if (_this2.option.seekDropFrame && _this2.state.minTimeline > PTS * _this2.option.baseTime && _this2.isUnusePkt(data_byte)) {
                    // 如果处于seek 情况下，跳过非关键帧的解码;
                    _this2.performanceState.drapCount++;
                  } else {
                    // this.state.lastSendPts = PTS;
                    if (self.nodecode) {
                      return;
                    } // console.log('发送解码pak, pts: %f, rendTime: %.2f, len: %f', PTS, parseFloat((PTS / 90000).toFixed(2)), data_byte.byteLength, data_byte.buffer);


                    // console.log('发送解码pak, pts: %f, rendTime: %.2f, len: %f', PTS, parseFloat((PTS / 90000).toFixed(2)), data_byte.byteLength, data_byte.buffer);
                    var fileSize = data_byte.length;

                    var ptr = _this2.instance._malloc(fileSize);

                    _this2.instance.HEAPU8.set(data_byte, ptr); // console.log('get pakcent', data, PTS, data.DTS);


                    // console.log('get pakcent', data, PTS, data.DTS);
                    _this2.instance._decode_buffer(ptr, fileSize, PTS);

                    _this2.instance._free(ptr);

                    _this2.state.reslove = null; // 因为解码是同步过程，此处将cpu 丢给其他函数使用
                  }

                  if (!_this2.state.init) {
                    _this2.state.reslove = resolve;
                    return;
                  }

                  setTimeout(function () {
                    resolve();
                  }, 0);
                } else {
                  _this2.state.reslove = resolve;

                  _this2.state.initCb = function () {
                    _this2.decodeData(data);
                  };
                }
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  _proto.flushDecode = function flushDecode() {
    // this.state.flushing = true;
    this.instance._flush_decoder();
  };

  _proto.seek = function seek(time) {
    this.flushDecode();
    this.state.minTimeline = time;
    this.performanceState.seekTime = performance.now();
  };

  _proto.closeDecode = function closeDecode() {
    this.instance._close_decoder();

    this.state.init = false;
  };

  _proto.isUnusePkt = function isUnusePkt(bf) {
    var view = new Uint8Array(bf);

    for (var i = 4; i < view.length; i++) {
      if (view[i - 1] === 1 && view[i - 2] === 0 && view[i - 3] === 0 && view[i - 4] === 0) {
        var unitType = view[i] >> 1;
        if (_constants__WEBPACK_IMPORTED_MODULE_1__["NalUnitType"][unitType]) return true;
      }
    }

    return false;
  };

  return VideoDecoder;
}();



/***/ })

})
//# sourceMappingURL=pages_index.chunk.bfc68ed30c5c6a08b15d.hot-update.js.map