webpackHotUpdate("pages_index.chunk",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: renderItems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderItems", function() { return renderItems; });
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rax */ "rax");
/* harmony import */ var rax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rax_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rax-view */ "./node_modules/_rax-view@2.0.5@rax-view/lib/index.js");
/* harmony import */ var rax_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rax_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../player/player */ "./src/player/player.ts");
/* harmony import */ var _player_format_hls_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../player/format/hls/loader */ "./src/player/format/hls/loader.ts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts */ "./node_modules/_echarts@5.1.1@echarts/index.js");
/* harmony import */ var _webUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webUI */ "./src/pages/webUI.ts");







var chart;
var Tagnames;

(function (Tagnames) {
  Tagnames["decodeAvgTime"] = "\u6BCF\u5E27\u89E3\u7801\u5E73\u5747\u8017\u65F6";
  Tagnames["decodeCount"] = "\u5DF2\u89E3\u7801\u5E27\u6570";
  Tagnames["fps"] = "fps";
  Tagnames["renderAvgErrorTime"] = "\u5E73\u5747\u6E32\u67D3\u8BEF\u5DEE";
  Tagnames["renderCount"] = "\u6E32\u67D3\u6B21\u6570";
  Tagnames["dropFrames"] = "\u4E22\u5E27\u6B21\u6570";
  Tagnames["duration"] = "\u89C6\u9891\u957F\u5EA6";
  Tagnames["startTime"] = "\u8D77\u59CB\u64AD\u653E\u65F6\u95F4";
  Tagnames["currentTime"] = "\u5F53\u524D\u64AD\u653E\u65F6\u95F4";
  Tagnames["decodeSumTime"] = "\u89E3\u7801\u603B\u8017\u65F6";
  Tagnames["frameLength"] = "\u89E3\u7801\u7F13\u51B2\u533A\u672A\u6D88\u8D39\u5E27\u6570";
  Tagnames["frameInfo"] = "\u5E27\u5206\u8FA8\u7387";
  Tagnames["bufferedTime"] = "\u7F13\u51B2\u533A\u65F6\u95F4";
})(Tagnames || (Tagnames = {}));

var Scale;

(function (Scale) {
  Scale["decodeAvgTime"] = "ms";
  Scale["renderAvgErrorTime"] = "ms";
  Scale["duration"] = "s";
  Scale["startTime"] = "s";
  Scale["currentTime"] = "s";
  Scale["decodeSumTime"] = "ms";
  Scale["bufferedTime"] = "s";
})(Scale || (Scale = {}));

var renderItem = function (key, value) {
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "tag",
    key: key
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "tag_key"
  }, key + ': '), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "tag_value"
  }, value));
};

var renderItems = function (list) {
  return Object.entries(list).map(function (_ref) {
    var key = _ref[0],
        value = _ref[1];

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

var MyComponent = function () {
  var cav = Object(rax__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var div = Object(rax__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(rax__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    performanceStatus: null,
    metadata: null,
    currentTime: null,
    frameInfo: null,
    isplaying: false,
    bufferedTime: null,
    canuse: {
      sab: !!window.SharedArrayBuffer,
      oc: !!window.OffscreenCanvas
    }
  }),
      state = _useState[0],
      setState = _useState[1];

  var performanceStatus = state.performanceStatus,
      metadata = state.metadata,
      currentTime = state.currentTime,
      frameInfo = state.frameInfo,
      isplaying = state.isplaying,
      bufferedTime = state.bufferedTime,
      canuse = state.canuse;

  var getPerformanceStatus = function () {
    var status = window.player.performanceStatus;
    setState(function (pstate) {
      return Object.assign(Object.assign({}, pstate), {
        performanceStatus: status
      });
    });
    window.player.getBufferSize();
  };

  var handleCanplay = function () {
    getPerformanceStatus();
    setInterval(function () {
      getPerformanceStatus();
    }, 1000);
  };

  var renderPie = function (payload) {
    var data = [{
      value: payload.bf,
      name: '原始流'
    }, {
      value: payload.packet,
      name: 'packet'
    }, {
      value: payload.frame,
      name: 'frame'
    }];
    chart.setOption(Object(_webUI__WEBPACK_IMPORTED_MODULE_6__["getPieOption"])(data));
  };

  var handleLoadMeta = function (payload) {
    setState(function (pstate) {
      return Object.assign(Object.assign({}, pstate), {
        metadata: payload
      });
    });
  };

  var handlePlayerTimeUpdate = function () {
    var buffered = window.player.buffered;
    var bufferedTime = buffered.end - buffered.start;
    setState(function (pstate) {
      return Object.assign(Object.assign({}, pstate), {
        bufferedTime: bufferedTime,
        currentTime: window.player.currentTime
      });
    });
  };

  var handleLoadFrameInfo = function (payload) {
    setState(function (pstate) {
      return Object.assign(Object.assign({}, pstate), {
        frameInfo: payload
      });
    });
  };

  var handlePlayStatusChange = function (status) {
    setState(function (pstate) {
      return Object.assign(Object.assign({}, pstate), {
        isplaying: status
      });
    });
  };

  Object(rax__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    chart = echarts__WEBPACK_IMPORTED_MODULE_5__["init"](div.current, 'dark');

    if (cav.current) {
      var player = new _player_player__WEBPACK_IMPORTED_MODULE_3__["default"]('http://127.0.0.1:8083/playlist.m3u8', {
        canvas: cav.current,
        baseTime: _player_format_hls_loader__WEBPACK_IMPORTED_MODULE_4__["default"].baseTime // loader: Loader,

      });
      window.player = player;
      player.on('canplay', function () {
        return handleCanplay();
      }); // player.on('progress', () => console.log('progress'));

      player.on('playing', function () {
        return handlePlayStatusChange(true);
      });
      player.on('pause', function () {
        return handlePlayStatusChange(false);
      }); // recieveWorkerBufferSize

      player.on('recieveWorkerBufferSize', function (payload) {
        return renderPie(payload);
      });
      player.on('loadedmetadata', function (payload) {
        return handleLoadMeta(payload);
      });
      player.on('timeupdate', function () {
        return handlePlayerTimeUpdate();
      });
      player.on('loadFrameInfo', function (payload) {
        return handleLoadFrameInfo(payload);
      });
      console.log(player);
    }
  }, []);
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(rax_view__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "container"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "canuseWrap"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "" + (!canuse.sab ? 'canuse_error' : '')
  }, "SharearryBuffer " + (!canuse.sab ? 'not' : '') + " ready"), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "" + (!canuse.oc ? 'canuse_error' : '')
  }, "OffscreenCanvas " + (!canuse.oc ? 'not' : '') + " ready")), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("canvas", {
    ref: cav,
    className: "cav"
  }), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "controlWrap"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "btn",
    onClick: function handlePlay() {
      window.player.play();
    }
  }, "play"), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "btn",
    onClick: function handlePause() {
      window.player.pause();
    }
  }, "pause")), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "infoWrap"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    ref: div,
    className: "pieWrap"
  }), performanceStatus && Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "tagWrap"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "tagTitle"
  }, "\u6027\u80FD\u53C2\u6570"), renderItems(performanceStatus)), metadata && Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "metaWrap"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "metaTitle"
  }, "\u89C6\u9891\u53C2\u6570"), renderItems(metadata), frameInfo && renderItems({
    'frameInfo': frameInfo.width + " x " + frameInfo.height
  }), renderItems({
    currentTime: currentTime
  }), renderItems({
    bufferedTime: bufferedTime
  }), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "status_wrap"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "status_key"
  }, "\u5F53\u524D\u64AD\u653E\u72B6\u6001: "), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "status_value"
  }, isplaying ? '播放中' : '暂停')))));
};

/* harmony default export */ __webpack_exports__["default"] = (MyComponent);

/***/ })

})
//# sourceMappingURL=pages_index.chunk.c3c8278307964fed4706.hot-update.js.map