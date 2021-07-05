webpackHotUpdate("pages_index.chunk",{

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1624523291499
      var cssReload = __webpack_require__(/*! ./node_modules/_mini-css-extract-plugin@1.6.0@mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/_mini-css-extract-plugin@1.6.0@mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "./src/player/format/hls/loader.ts":
/*!*****************************************!*\
  !*** ./src/player/format/hls/loader.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HlsLoader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/player/constants/index.ts");
/* harmony import */ var _demux_M3U8Parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demux/M3U8Parse */ "./src/player/format/hls/demux/M3U8Parse.ts");
/* harmony import */ var _demux_tsDemuxer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demux/tsDemuxer */ "./src/player/format/hls/demux/tsDemuxer.ts");


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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






var HlsLoader = /*#__PURE__*/function (_Loader) {
  _inheritsLoose(HlsLoader, _Loader);

  function HlsLoader(event, option) {
    var _this = _Loader.call(this, event, option) || this;

    _this.init();

    return _this;
  }

  var _proto = HlsLoader.prototype;

  _proto.destroy = function destroy() {
    this.state = {
      workerReady: false,
      workerMsgQueue: [],
      intervalId: {},
      currentIndex: null,
      currentUrl: null,
      destroy: true,
      firstPlay: false
    };
    this.metaState = {
      duration: 0,
      videoStartTime: null,
      audioStartTime: null,
      startTime: null
    };
  };

  _proto.seek = function seek(time) {
    var _a, _b, _c;

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this2 = this;

      var index;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const buffered = this.getBuffer();
              // // 如果当前
              // if (time >= buffered.start && time <= buffered.end) {
              //   const { datas } = this.option.demux2videoChannel;
              //   const ptsTime = time / HlsLoader.baseTime;
              //   const index = datas.findIndex(item => item.PTS > ptsTime);
              //   if (index > 0) {
              //     if (index > 1) {
              //       datas.splice(0,  index - 1);
              //     }
              //     this.option.demux2videoChannel.forceRead();
              //   }
              //   return;
              // }
              time -= this.metaState.startTime;

              if ((_b = (_a = this.state.hslInfo) === null || _a === void 0 ? void 0 : _a.segments) === null || _b === void 0 ? void 0 : _b.length) {
                index = (_c = this.state.hslInfo) === null || _c === void 0 ? void 0 : _c.segments.findIndex(function (item) {
                  if (time > item.duration) {
                    time -= item.duration;
                    return false;
                  }

                  return true;
                }); // console.log(index, time);
                // 数据提前加载，然后对于没卵用的 decode 数据 丢弃,

                if (index > -1) {
                  this.option.bf2demuxChannel.clear();
                  this.option.demux2videoChannel.clear(); // console.log('clear, channel');

                  this.option.flushHttp();
                  this.tsDemuxer.flush();
                  setTimeout(function () {
                    _this2.unsafe_changeCurrentIndex(index, true);
                  }, 0);
                }
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };

  _proto.getBuffer = function getBuffer() {
    var buffered = {
      start: 0,
      end: 0
    };
    var datas = this.option.demux2videoChannel.datas;

    if (datas.length) {
      buffered.start = datas[0].PTS * HlsLoader.baseTime;
      buffered.end = datas[datas.length - 1].PTS * HlsLoader.baseTime;
    }

    return buffered;
  };

  _proto.unsafe_changeCurrentIndex = function unsafe_changeCurrentIndex(index, force) {
    if (force === void 0) {
      force = false;
    }

    var _a, _b, _c, _d, _e; // console.log('unsafe_changeCurrentIndex', index, force);


    if (((_b = (_a = this.state.hslInfo) === null || _a === void 0 ? void 0 : _a.segments) === null || _b === void 0 ? void 0 : _b.length) && index < ((_d = (_c = this.state.hslInfo) === null || _c === void 0 ? void 0 : _c.segments) === null || _d === void 0 ? void 0 : _d.length)) {
      var _ref = (_e = this.state.hslInfo) === null || _e === void 0 ? void 0 : _e.segments[index],
          uri = _ref.uri;

      if (!force && uri === this.state.currentUrl) {
        console.warn(_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR_MSG"].REQUEST_REPEAT, "request url: " + uri + ", currentUrl: " + this.state.currentUrl);
        return;
      }

      this.state.currentUrl = uri;
      this.state.currentIndex = index;
      this.option.getData(uri);
    }
  };

  _proto.init = function init() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.state = {
                workerReady: false,
                workerMsgQueue: [],
                intervalId: {},
                currentIndex: null,
                currentUrl: null,
                destroy: false,
                firstPlay: false
              };
              this.metaState = {
                duration: 0,
                videoStartTime: null,
                audioStartTime: null,
                startTime: null
              };
              this.tsDemuxer = new _demux_tsDemuxer__WEBPACK_IMPORTED_MODULE_3__["default"](Object.assign({
                channel: this.option.demux2videoChannel,
                handleRecievePacket: this.handleRecievePacket.bind(this)
              }, this.option));
              this.bindEvent();
              this.loadSource(this.option.url);
              this.run();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };

  _proto.bindEvent = function bindEvent() {};

  _proto.loadSource = function loadSource(url) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (url) {
                _context3.next = 2;
                break;
              }

              throw _constants__WEBPACK_IMPORTED_MODULE_1__["ERROR_MSG"].SOURCE_NULL;

            case 2:
              _context3.next = 4;
              return _demux_M3U8Parse__WEBPACK_IMPORTED_MODULE_2__["default"].parse(this.option.url);

            case 4:
              this.state.hslInfo = _context3.sent;

              if (!this.state.hslInfo) {
                _context3.next = 10;
                break;
              }

              this.metaState.duration = this.state.hslInfo.duration; // this.state.hslInfo.segments.length = 5;

              this.unsafe_changeCurrentIndex(0);
              _context3.next = 11;
              break;

            case 10:
              throw _constants__WEBPACK_IMPORTED_MODULE_1__["ERROR_MSG"].PARSESOURCE;

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
  }
  /**
   * 1. await 阻塞式检查（如果可以的话）｜pipe 一个空 data，然后被阻塞， demux decode 池子状态，
   * 2. 阻塞式读取 bf2demux 池子的bf
   * 3. 将 bf 喂入解封装器
   */
  ;

  _proto.run = function run() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (this.state.destroy) {
                _context4.next = 10;
                break;
              }

              _context4.next = 3;
              return this.option.demux2videoChannel.pipe(null);

            case 3:
              _context4.next = 5;
              return this.option.bf2demuxChannel.read();

            case 5:
              data = _context4.sent;
              // console.log('bf2demuxChannel 状态 通过');
              this.onRecieveBuf(data);
              this.tsDemuxer.handleRecieveBuffer(data);
              _context4.next = 0;
              break;

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
  }
  /**
   * P2 todo：如果收到buffer， 不是当前发送的buffer，则将 buffer 放入缓冲区，当
   * 当前buffer 发送完，则顺序发送缓冲区内 buffer
   *
   * P1: 当前仅仅支持顺序解码.
   */
  ;

  _proto.onRecieveBuf = function onRecieveBuf(_ref2) {
    var url = _ref2.url,
        done = _ref2.done;

    // console.log('收到http 数据', { url, done });
    if (this.state.currentUrl && url !== this.state.currentUrl) {
      return console.warn('数据加载超前，收到数据');
    }

    if (done) {
      // console.log('onRecieveBuf', done);
      this.unsafe_changeCurrentIndex(++this.state.currentIndex);
    }
  };

  _proto.handleRecievePacket = function handleRecievePacket(data) {
    // const { currentIndex } = this.state;
    var packet = {
      DTS: data.pes.DTS,
      PTS: data.pes.PTS,
      data_byte: data.pes.data_byte
    };

    switch (data.stream_type) {
      case 36:
        if (!this.metaState.videoStartTime) {
          this.metaState.videoStartTime = packet.PTS * HlsLoader.baseTime;
          this.sendMetadataEvent();
        } // 解析视频


        this.option.demux2videoChannel.forcePipe(packet);
        break;

      case 3:
      case 15:
      case 17:
        // 解析音频
        if (!this.metaState.audioStartTime) {
          this.metaState.audioStartTime = packet.PTS * HlsLoader.baseTime;
          this.sendMetadataEvent();
        }

        console.log(packet.PTS, packet.data_byte);

        if (this.option.status === _constants__WEBPACK_IMPORTED_MODULE_1__["loaderStatus"].worker) {
          self.postMessage({
            type: _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].GETAUDIOPACKET,
            payload: packet
          }, [packet.data_byte.buffer]);
        } else {
          this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["ManagerEvent"].GETAUDIOPACKET, packet);
        }

        break;

      default:
        break;
    }
  };

  _proto.sendMetadataEvent = function sendMetadataEvent() {
    var _this$metaState = this.metaState,
        videoStartTime = _this$metaState.videoStartTime,
        audioStartTime = _this$metaState.audioStartTime,
        duration = _this$metaState.duration;

    if (videoStartTime && audioStartTime && duration) {
      this.metaState.startTime = Math.min(videoStartTime, audioStartTime);
      this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].LOADEDMETADATA, {
        duration: this.metaState.duration,
        startTime: this.metaState.startTime
      });
    }
  };

  _createClass(HlsLoader, [{
    key: "duration",
    get: function get() {
      return this.metaState.duration;
    }
  }]);

  return HlsLoader;
}(_constants__WEBPACK_IMPORTED_MODULE_1__["Loader"]);


HlsLoader.baseTime = 1 / 90000;

/***/ }),

/***/ "?887e":
false

})
//# sourceMappingURL=pages_index.chunk.8a7ff286793e254af9de.hot-update.js.map