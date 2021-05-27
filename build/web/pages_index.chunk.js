(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages_index.chunk"],{

/***/ "./lib/libffmpeg.txt":
/*!***************************!*\
  !*** ./lib/libffmpeg.txt ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nvar WASMDecoder = (function() {\n  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;\n  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;\n  return (\nfunction(WASMDecoder) {\n  WASMDecoder = WASMDecoder || {};\n\n\n\n// The Module object: Our interface to the outside world. We import\n// and export values on it. There are various ways Module can be used:\n// 1. Not defined. We create it here\n// 2. A function parameter, function(Module) { ..generated code.. }\n// 3. pre-run appended it, var Module = {}; ..generated code..\n// 4. External script tag defines var Module.\n// We need to check if Module already exists (e.g. case 3 above).\n// Substitution will be replaced with actual code on later stage of the build,\n// this way Closure Compiler will not mangle it (e.g. case 4. above).\n// Note that if you want to run closure, and also to use Module\n// after the generated code, you will need to define   var Module = {};\n// before the code. Then that object will be used in the code, and you\n// can continue to use Module afterwards as well.\nvar Module = typeof WASMDecoder !== 'undefined' ? WASMDecoder : {};\n\n// Set up the promise that indicates the Module is initialized\nvar readyPromiseResolve, readyPromiseReject;\nModule['ready'] = new Promise(function(resolve, reject) {\n  readyPromiseResolve = resolve;\n  readyPromiseReject = reject;\n});\n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_init_decoder')) {\n        Object.defineProperty(Module['ready'], '_init_decoder', { configurable: true, get: function() { abort('You are getting _init_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_init_decoder', { configurable: true, set: function() { abort('You are setting _init_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_decode_buffer')) {\n        Object.defineProperty(Module['ready'], '_decode_buffer', { configurable: true, get: function() { abort('You are getting _decode_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_decode_buffer', { configurable: true, set: function() { abort('You are setting _decode_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_flush_decoder')) {\n        Object.defineProperty(Module['ready'], '_flush_decoder', { configurable: true, get: function() { abort('You are getting _flush_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_flush_decoder', { configurable: true, set: function() { abort('You are setting _flush_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_close_decoder')) {\n        Object.defineProperty(Module['ready'], '_close_decoder', { configurable: true, get: function() { abort('You are getting _close_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_close_decoder', { configurable: true, set: function() { abort('You are setting _close_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackSave')) {\n        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, get: function() { abort('You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_stackSave', { configurable: true, set: function() { abort('You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackRestore')) {\n        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, get: function() { abort('You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_stackRestore', { configurable: true, set: function() { abort('You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_stackAlloc')) {\n        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, get: function() { abort('You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_stackAlloc', { configurable: true, set: function() { abort('You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___data_end')) {\n        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, get: function() { abort('You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, set: function() { abort('You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {\n        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {\n        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_get_global_libc')) {\n        Object.defineProperty(Module['ready'], '_emscripten_get_global_libc', { configurable: true, get: function() { abort('You are getting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_emscripten_get_global_libc', { configurable: true, set: function() { abort('You are setting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___pthread_tsd_run_dtors')) {\n        Object.defineProperty(Module['ready'], '___pthread_tsd_run_dtors', { configurable: true, get: function() { abort('You are getting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '___pthread_tsd_run_dtors', { configurable: true, set: function() { abort('You are setting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'registerPthreadPtr')) {\n        Object.defineProperty(Module['ready'], 'registerPthreadPtr', { configurable: true, get: function() { abort('You are getting registerPthreadPtr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], 'registerPthreadPtr', { configurable: true, set: function() { abort('You are setting registerPthreadPtr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_pthread_self')) {\n        Object.defineProperty(Module['ready'], '_pthread_self', { configurable: true, get: function() { abort('You are getting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_pthread_self', { configurable: true, set: function() { abort('You are setting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___emscripten_pthread_data_constructor')) {\n        Object.defineProperty(Module['ready'], '___emscripten_pthread_data_constructor', { configurable: true, get: function() { abort('You are getting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '___emscripten_pthread_data_constructor', { configurable: true, set: function() { abort('You are setting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_futex_wake')) {\n        Object.defineProperty(Module['ready'], '_emscripten_futex_wake', { configurable: true, get: function() { abort('You are getting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_emscripten_futex_wake', { configurable: true, set: function() { abort('You are setting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_memalign')) {\n        Object.defineProperty(Module['ready'], '_memalign', { configurable: true, get: function() { abort('You are getting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_memalign', { configurable: true, set: function() { abort('You are setting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'dynCall')) {\n        Object.defineProperty(Module['ready'], 'dynCall', { configurable: true, get: function() { abort('You are getting dynCall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], 'dynCall', { configurable: true, set: function() { abort('You are setting dynCall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'establishStackSpace')) {\n        Object.defineProperty(Module['ready'], 'establishStackSpace', { configurable: true, get: function() { abort('You are getting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], 'establishStackSpace', { configurable: true, set: function() { abort('You are setting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'getNoExitRuntime')) {\n        Object.defineProperty(Module['ready'], 'getNoExitRuntime', { configurable: true, get: function() { abort('You are getting getNoExitRuntime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], 'getNoExitRuntime', { configurable: true, set: function() { abort('You are setting getNoExitRuntime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {\n        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {\n        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_emscripten_main_thread_process_queued_calls')) {\n        Object.defineProperty(Module['ready'], '_emscripten_main_thread_process_queued_calls', { configurable: true, get: function() { abort('You are getting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_emscripten_main_thread_process_queued_calls', { configurable: true, set: function() { abort('You are setting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_memset')) {\n        Object.defineProperty(Module['ready'], '_memset', { configurable: true, get: function() { abort('You are getting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '_memset', { configurable: true, set: function() { abort('You are setting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__get_tzname')) {\n        Object.defineProperty(Module['ready'], '__get_tzname', { configurable: true, get: function() { abort('You are getting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '__get_tzname', { configurable: true, set: function() { abort('You are setting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__get_daylight')) {\n        Object.defineProperty(Module['ready'], '__get_daylight', { configurable: true, get: function() { abort('You are getting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '__get_daylight', { configurable: true, set: function() { abort('You are setting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__get_timezone')) {\n        Object.defineProperty(Module['ready'], '__get_timezone', { configurable: true, get: function() { abort('You are getting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '__get_timezone', { configurable: true, set: function() { abort('You are setting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__emscripten_call_on_thread')) {\n        Object.defineProperty(Module['ready'], '__emscripten_call_on_thread', { configurable: true, get: function() { abort('You are getting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], '__emscripten_call_on_thread', { configurable: true, set: function() { abort('You are setting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {\n        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });\n      }\n    \n\n// --pre-jses are emitted after the Module integration code, so that they can\n// refer to Module (if they choose; they can also define Module)\n// {{PRE_JSES}}\n\n// Sometimes an existing Module object exists with properties\n// meant to overwrite the default module functionality. Here\n// we collect those properties and reapply _after_ we configure\n// the current environment's defaults to avoid having to be so\n// defensive during initialization.\nvar moduleOverrides = {};\nvar key;\nfor (key in Module) {\n  if (Module.hasOwnProperty(key)) {\n    moduleOverrides[key] = Module[key];\n  }\n}\n\nvar arguments_ = [];\nvar thisProgram = './this.program';\nvar quit_ = function(status, toThrow) {\n  throw toThrow;\n};\n\n// Determine the runtime environment we are in. You can customize this by\n// setting the ENVIRONMENT setting at compile time (see settings.js).\n\nvar ENVIRONMENT_IS_WEB = false;\nvar ENVIRONMENT_IS_WORKER = false;\nvar ENVIRONMENT_IS_NODE = false;\nvar ENVIRONMENT_IS_SHELL = false;\nENVIRONMENT_IS_WEB = typeof window === 'object';\nENVIRONMENT_IS_WORKER = typeof importScripts === 'function';\n// N.b. Electron.js environment is simultaneously a NODE-environment, but\n// also a web environment.\nENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';\nENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;\n\nif (Module['ENVIRONMENT']) {\n  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');\n}\n\n// include: shell_pthreads.js\n\n\n// Three configurations we can be running in:\n// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)\n// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)\n// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)\n\n// ENVIRONMENT_IS_PTHREAD=true will have been preset in worker.js. Make it false in the main runtime thread.\nvar ENVIRONMENT_IS_PTHREAD = Module['ENVIRONMENT_IS_PTHREAD'] || false;\nif (ENVIRONMENT_IS_PTHREAD) {\n  // Grab imports from the pthread to local scope.\n  buffer = Module['buffer'];\n  // Note that not all runtime fields are imported above. Values for STACK_BASE, STACKTOP and STACK_MAX are not yet known at worker.js load time.\n  // These will be filled in at pthread startup time (the 'run' message for a pthread - pthread start establishes the stack frame)\n}\n\n// end include: shell_pthreads.js\n// `/` should be present at the end if `scriptDirectory` is not empty\nvar scriptDirectory = '';\nfunction locateFile(path) {\n  if (Module['locateFile']) {\n    return Module['locateFile'](path, scriptDirectory);\n  }\n  return scriptDirectory + path;\n}\n\n// Hooks that are implemented differently in different runtime environments.\nvar read_,\n    readAsync,\n    readBinary,\n    setWindowTitle;\n\nvar nodeFS;\nvar nodePath;\n\nif (ENVIRONMENT_IS_NODE) {\n  if (ENVIRONMENT_IS_WORKER) {\n    scriptDirectory = require('path').dirname(scriptDirectory) + '/';\n  } else {\n    scriptDirectory = __dirname + '/';\n  }\n\n// include: node_shell_read.js\n\n\nread_ = function shell_read(filename, binary) {\n  if (!nodeFS) nodeFS = require('fs');\n  if (!nodePath) nodePath = require('path');\n  filename = nodePath['normalize'](filename);\n  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');\n};\n\nreadBinary = function readBinary(filename) {\n  var ret = read_(filename, true);\n  if (!ret.buffer) {\n    ret = new Uint8Array(ret);\n  }\n  assert(ret.buffer);\n  return ret;\n};\n\n// end include: node_shell_read.js\n  if (process['argv'].length > 1) {\n    thisProgram = process['argv'][1].replace(/\\\\/g, '/');\n  }\n\n  arguments_ = process['argv'].slice(2);\n\n  // MODULARIZE will export the module in the proper place outside, we don't need to export here\n\n  process['on']('uncaughtException', function(ex) {\n    // suppress ExitStatus exceptions from showing an error\n    if (!(ex instanceof ExitStatus)) {\n      throw ex;\n    }\n  });\n\n  process['on']('unhandledRejection', abort);\n\n  quit_ = function(status) {\n    process['exit'](status);\n  };\n\n  Module['inspect'] = function () { return '[Emscripten Module object]'; };\n\n  var nodeWorkerThreads;\n  try {\n    nodeWorkerThreads = require('worker_threads');\n  } catch (e) {\n    console.error('The \"worker_threads\" module is not supported in this node.js build - perhaps a newer version is needed?');\n    throw e;\n  }\n  global.Worker = nodeWorkerThreads.Worker;\n\n} else\nif (ENVIRONMENT_IS_SHELL) {\n\n  if (typeof read != 'undefined') {\n    read_ = function shell_read(f) {\n      return read(f);\n    };\n  }\n\n  readBinary = function readBinary(f) {\n    var data;\n    if (typeof readbuffer === 'function') {\n      return new Uint8Array(readbuffer(f));\n    }\n    data = read(f, 'binary');\n    assert(typeof data === 'object');\n    return data;\n  };\n\n  if (typeof scriptArgs != 'undefined') {\n    arguments_ = scriptArgs;\n  } else if (typeof arguments != 'undefined') {\n    arguments_ = arguments;\n  }\n\n  if (typeof quit === 'function') {\n    quit_ = function(status) {\n      quit(status);\n    };\n  }\n\n  if (typeof print !== 'undefined') {\n    // Prefer to use print/printErr where they exist, as they usually work better.\n    if (typeof console === 'undefined') console = /** @type{!Console} */({});\n    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);\n    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr !== 'undefined' ? printErr : print);\n  }\n\n} else\n\n// Note that this includes Node.js workers when relevant (pthreads is enabled).\n// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and\n// ENVIRONMENT_IS_NODE.\nif (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {\n  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled\n    scriptDirectory = self.location.href;\n  } else if (typeof document !== 'undefined' && document.currentScript) { // web\n    scriptDirectory = document.currentScript.src;\n  }\n  // When MODULARIZE, this JS may be executed later, after document.currentScript\n  // is gone, so we saved it, and we use it here instead of any other info.\n  if (_scriptDir) {\n    scriptDirectory = _scriptDir;\n  }\n  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.\n  // otherwise, slice off the final part of the url to find the script directory.\n  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,\n  // and scriptDirectory will correctly be replaced with an empty string.\n  if (scriptDirectory.indexOf('blob:') !== 0) {\n    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);\n  } else {\n    scriptDirectory = '';\n  }\n\n  // Differentiate the Web Worker from the Node Worker case, as reading must\n  // be done differently.\n  if (ENVIRONMENT_IS_NODE) {\n\n// include: node_shell_read.js\n\n\nread_ = function shell_read(filename, binary) {\n  if (!nodeFS) nodeFS = require('fs');\n  if (!nodePath) nodePath = require('path');\n  filename = nodePath['normalize'](filename);\n  return nodeFS['readFileSync'](filename, binary ? null : 'utf8');\n};\n\nreadBinary = function readBinary(filename) {\n  var ret = read_(filename, true);\n  if (!ret.buffer) {\n    ret = new Uint8Array(ret);\n  }\n  assert(ret.buffer);\n  return ret;\n};\n\n// end include: node_shell_read.js\n  } else\n  {\n\n// include: web_or_worker_shell_read.js\n\n\n  read_ = function shell_read(url) {\n      var xhr = new XMLHttpRequest();\n      xhr.open('GET', url, false);\n      xhr.send(null);\n      return xhr.responseText;\n  };\n\n  if (ENVIRONMENT_IS_WORKER) {\n    readBinary = function readBinary(url) {\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', url, false);\n        xhr.responseType = 'arraybuffer';\n        xhr.send(null);\n        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));\n    };\n  }\n\n  readAsync = function readAsync(url, onload, onerror) {\n    var xhr = new XMLHttpRequest();\n    xhr.open('GET', url, true);\n    xhr.responseType = 'arraybuffer';\n    xhr.onload = function xhr_onload() {\n      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0\n        onload(xhr.response);\n        return;\n      }\n      onerror();\n    };\n    xhr.onerror = onerror;\n    xhr.send(null);\n  };\n\n// end include: web_or_worker_shell_read.js\n  }\n\n  setWindowTitle = function(title) { document.title = title };\n} else\n{\n  throw new Error('environment detection error');\n}\n\nif (ENVIRONMENT_IS_NODE) {\n  // Polyfill the performance object, which emscripten pthreads support\n  // depends on for good timing.\n  if (typeof performance === 'undefined') {\n    global.performance = require('perf_hooks').performance;\n  }\n}\n\n// Set up the out() and err() hooks, which are how we can print to stdout or\n// stderr, respectively.\nvar out = Module['print'] || console.log.bind(console);\nvar err = Module['printErr'] || console.warn.bind(console);\n\n// Merge back in the overrides\nfor (key in moduleOverrides) {\n  if (moduleOverrides.hasOwnProperty(key)) {\n    Module[key] = moduleOverrides[key];\n  }\n}\n// Free the object hierarchy contained in the overrides, this lets the GC\n// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.\nmoduleOverrides = null;\n\n// Emit code to handle expected values on the Module object. This applies Module.x\n// to the proper local x. This has two benefits: first, we only emit it if it is\n// expected to arrive, and second, by using a local everywhere else that can be\n// minified.\nif (Module['arguments']) arguments_ = Module['arguments'];if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) Object.defineProperty(Module, 'arguments', { configurable: true, get: function() { abort('Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\nif (Module['thisProgram']) thisProgram = Module['thisProgram'];if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) Object.defineProperty(Module, 'thisProgram', { configurable: true, get: function() { abort('Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\nif (Module['quit']) quit_ = Module['quit'];if (!Object.getOwnPropertyDescriptor(Module, 'quit')) Object.defineProperty(Module, 'quit', { configurable: true, get: function() { abort('Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\n\n// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message\n// Assertions on removed incoming Module JS APIs.\nassert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');\nassert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');\nassert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');\nassert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');\nassert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');\nassert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');\nassert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');\nassert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');\nassert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');\nif (!Object.getOwnPropertyDescriptor(Module, 'read')) Object.defineProperty(Module, 'read', { configurable: true, get: function() { abort('Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\nif (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) Object.defineProperty(Module, 'readAsync', { configurable: true, get: function() { abort('Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\nif (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) Object.defineProperty(Module, 'readBinary', { configurable: true, get: function() { abort('Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\nif (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) Object.defineProperty(Module, 'setWindowTitle', { configurable: true, get: function() { abort('Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\nvar IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';\nvar PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';\nvar WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';\nvar NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';\n\nassert(ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER || ENVIRONMENT_IS_NODE, 'Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)');\n\n\n\n\nvar STACK_ALIGN = 16;\n\nfunction alignMemory(size, factor) {\n  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default\n  return Math.ceil(size / factor) * factor;\n}\n\nfunction getNativeTypeSize(type) {\n  switch (type) {\n    case 'i1': case 'i8': return 1;\n    case 'i16': return 2;\n    case 'i32': return 4;\n    case 'i64': return 8;\n    case 'float': return 4;\n    case 'double': return 8;\n    default: {\n      if (type[type.length-1] === '*') {\n        return 4; // A pointer\n      } else if (type[0] === 'i') {\n        var bits = Number(type.substr(1));\n        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);\n        return bits / 8;\n      } else {\n        return 0;\n      }\n    }\n  }\n}\n\nfunction warnOnce(text) {\n  if (!warnOnce.shown) warnOnce.shown = {};\n  if (!warnOnce.shown[text]) {\n    warnOnce.shown[text] = 1;\n    err(text);\n  }\n}\n\n// include: runtime_functions.js\n\n\n// Wraps a JS function as a wasm function with a given signature.\nfunction convertJsFunctionToWasm(func, sig) {\n\n  // If the type reflection proposal is available, use the new\n  // \"WebAssembly.Function\" constructor.\n  // Otherwise, construct a minimal wasm module importing the JS function and\n  // re-exporting it.\n  if (typeof WebAssembly.Function === \"function\") {\n    var typeNames = {\n      'i': 'i32',\n      'j': 'i64',\n      'f': 'f32',\n      'd': 'f64'\n    };\n    var type = {\n      parameters: [],\n      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]\n    };\n    for (var i = 1; i < sig.length; ++i) {\n      type.parameters.push(typeNames[sig[i]]);\n    }\n    return new WebAssembly.Function(type, func);\n  }\n\n  // The module is static, with the exception of the type section, which is\n  // generated based on the signature passed in.\n  var typeSection = [\n    0x01, // id: section,\n    0x00, // length: 0 (placeholder)\n    0x01, // count: 1\n    0x60, // form: func\n  ];\n  var sigRet = sig.slice(0, 1);\n  var sigParam = sig.slice(1);\n  var typeCodes = {\n    'i': 0x7f, // i32\n    'j': 0x7e, // i64\n    'f': 0x7d, // f32\n    'd': 0x7c, // f64\n  };\n\n  // Parameters, length + signatures\n  typeSection.push(sigParam.length);\n  for (var i = 0; i < sigParam.length; ++i) {\n    typeSection.push(typeCodes[sigParam[i]]);\n  }\n\n  // Return values, length + signatures\n  // With no multi-return in MVP, either 0 (void) or 1 (anything else)\n  if (sigRet == 'v') {\n    typeSection.push(0x00);\n  } else {\n    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);\n  }\n\n  // Write the overall length of the type section back into the section header\n  // (excepting the 2 bytes for the section id and length)\n  typeSection[1] = typeSection.length - 2;\n\n  // Rest of the module is static\n  var bytes = new Uint8Array([\n    0x00, 0x61, 0x73, 0x6d, // magic (\"\\0asm\")\n    0x01, 0x00, 0x00, 0x00, // version: 1\n  ].concat(typeSection, [\n    0x02, 0x07, // import section\n      // (import \"e\" \"f\" (func 0 (type 0)))\n      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,\n    0x07, 0x05, // export section\n      // (export \"f\" (func 0 (type 0)))\n      0x01, 0x01, 0x66, 0x00, 0x00,\n  ]));\n\n   // We can compile this wasm module synchronously because it is very small.\n  // This accepts an import (at \"e.f\"), that it reroutes to an export (at \"f\")\n  var module = new WebAssembly.Module(bytes);\n  var instance = new WebAssembly.Instance(module, {\n    'e': {\n      'f': func\n    }\n  });\n  var wrappedFunc = instance.exports['f'];\n  return wrappedFunc;\n}\n\nvar freeTableIndexes = [];\n\n// Weak map of functions in the table to their indexes, created on first use.\nvar functionsInTableMap;\n\nfunction getEmptyTableSlot() {\n  // Reuse a free index if there is one, otherwise grow.\n  if (freeTableIndexes.length) {\n    return freeTableIndexes.pop();\n  }\n  // Grow the table\n  try {\n    wasmTable.grow(1);\n  } catch (err) {\n    if (!(err instanceof RangeError)) {\n      throw err;\n    }\n    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';\n  }\n  return wasmTable.length - 1;\n}\n\n// Add a wasm function to the table.\nfunction addFunctionWasm(func, sig) {\n  // Check if the function is already in the table, to ensure each function\n  // gets a unique index. First, create the map if this is the first use.\n  if (!functionsInTableMap) {\n    functionsInTableMap = new WeakMap();\n    for (var i = 0; i < wasmTable.length; i++) {\n      var item = wasmTable.get(i);\n      // Ignore null values.\n      if (item) {\n        functionsInTableMap.set(item, i);\n      }\n    }\n  }\n  if (functionsInTableMap.has(func)) {\n    return functionsInTableMap.get(func);\n  }\n\n  // It's not in the table, add it now.\n\n  var ret = getEmptyTableSlot();\n\n  // Set the new value.\n  try {\n    // Attempting to call this with JS function will cause of table.set() to fail\n    wasmTable.set(ret, func);\n  } catch (err) {\n    if (!(err instanceof TypeError)) {\n      throw err;\n    }\n    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction: ' + func);\n    var wrapped = convertJsFunctionToWasm(func, sig);\n    wasmTable.set(ret, wrapped);\n  }\n\n  functionsInTableMap.set(func, ret);\n\n  return ret;\n}\n\nfunction removeFunction(index) {\n  functionsInTableMap.delete(wasmTable.get(index));\n  freeTableIndexes.push(index);\n}\n\n// 'sig' parameter is required for the llvm backend but only when func is not\n// already a WebAssembly function.\nfunction addFunction(func, sig) {\n  assert(typeof func !== 'undefined');\n\n  return addFunctionWasm(func, sig);\n}\n\n// end include: runtime_functions.js\n// include: runtime_debug.js\n\n\n// end include: runtime_debug.js\nfunction makeBigInt(low, high, unsigned) {\n  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));\n}\n\nvar tempRet0 = 0;\n\nvar setTempRet0 = function(value) {\n  tempRet0 = value;\n};\n\nvar getTempRet0 = function() {\n  return tempRet0;\n};\n\nfunction getCompilerSetting(name) {\n  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';\n}\n\n// JS library code refers to Atomics in the manner used from asm.js, provide\n// the same API here.\nvar Atomics_load = Atomics.load;\nvar Atomics_store = Atomics.store;\nvar Atomics_compareExchange = Atomics.compareExchange;\n\n\n\n// === Preamble library stuff ===\n\n// Documentation for the public APIs defined in this file must be updated in:\n//    site/source/docs/api_reference/preamble.js.rst\n// A prebuilt local version of the documentation is available at:\n//    site/build/text/docs/api_reference/preamble.js.txt\n// You can also build docs locally as HTML or other formats in site/\n// An online HTML version (which may be of a different version of Emscripten)\n//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html\n\nvar wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) Object.defineProperty(Module, 'wasmBinary', { configurable: true, get: function() { abort('Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\nvar noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) Object.defineProperty(Module, 'noExitRuntime', { configurable: true, get: function() { abort('Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\n\nif (typeof WebAssembly !== 'object') {\n  abort('no native wasm support detected');\n}\n\n// include: runtime_safe_heap.js\n\n\n// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.\n// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)\n\n/** @param {number} ptr\n    @param {number} value\n    @param {string} type\n    @param {number|boolean=} noSafe */\nfunction setValue(ptr, value, type, noSafe) {\n  type = type || 'i8';\n  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit\n    switch(type) {\n      case 'i1': HEAP8[((ptr)>>0)]=value; break;\n      case 'i8': HEAP8[((ptr)>>0)]=value; break;\n      case 'i16': HEAP16[((ptr)>>1)]=value; break;\n      case 'i32': HEAP32[((ptr)>>2)]=value; break;\n      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;\n      case 'float': HEAPF32[((ptr)>>2)]=value; break;\n      case 'double': HEAPF64[((ptr)>>3)]=value; break;\n      default: abort('invalid type for setValue: ' + type);\n    }\n}\n\n/** @param {number} ptr\n    @param {string} type\n    @param {number|boolean=} noSafe */\nfunction getValue(ptr, type, noSafe) {\n  type = type || 'i8';\n  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit\n    switch(type) {\n      case 'i1': return HEAP8[((ptr)>>0)];\n      case 'i8': return HEAP8[((ptr)>>0)];\n      case 'i16': return HEAP16[((ptr)>>1)];\n      case 'i32': return HEAP32[((ptr)>>2)];\n      case 'i64': return HEAP32[((ptr)>>2)];\n      case 'float': return HEAPF32[((ptr)>>2)];\n      case 'double': return HEAPF64[((ptr)>>3)];\n      default: abort('invalid type for getValue: ' + type);\n    }\n  return null;\n}\n\n// end include: runtime_safe_heap.js\n// Wasm globals\n\nvar wasmMemory;\n\n// For sending to workers.\nvar wasmModule;\n// Only workers actually use these field, but we refer to them from\n// library_pthread (which exists on all threads) so this definition is useful\n// to avoid accessing the global scope.\nvar threadInfoStruct = 0;\nvar selfThreadId = 0;\n\n//========================================\n// Runtime essentials\n//========================================\n\n// whether we are quitting the application. no code should run after this.\n// set in exit() and abort()\nvar ABORT = false;\n\n// set by exit() and abort().  Passed to 'onExit' handler.\n// NOTE: This is also used as the process return code code in shell environments\n// but only when noExitRuntime is false.\nvar EXITSTATUS = 0;\n\n/** @type {function(*, string=)} */\nfunction assert(condition, text) {\n  if (!condition) {\n    abort('Assertion failed: ' + text);\n  }\n}\n\n// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)\nfunction getCFunc(ident) {\n  var func = Module['_' + ident]; // closure exported function\n  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');\n  return func;\n}\n\n// C calling interface.\n/** @param {string|null=} returnType\n    @param {Array=} argTypes\n    @param {Arguments|Array=} args\n    @param {Object=} opts */\nfunction ccall(ident, returnType, argTypes, args, opts) {\n  // For fast lookup of conversion functions\n  var toC = {\n    'string': function(str) {\n      var ret = 0;\n      if (str !== null && str !== undefined && str !== 0) { // null string\n        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\\0'\n        var len = (str.length << 2) + 1;\n        ret = stackAlloc(len);\n        stringToUTF8(str, ret, len);\n      }\n      return ret;\n    },\n    'array': function(arr) {\n      var ret = stackAlloc(arr.length);\n      writeArrayToMemory(arr, ret);\n      return ret;\n    }\n  };\n\n  function convertReturnValue(ret) {\n    if (returnType === 'string') return UTF8ToString(ret);\n    if (returnType === 'boolean') return Boolean(ret);\n    return ret;\n  }\n\n  var func = getCFunc(ident);\n  var cArgs = [];\n  var stack = 0;\n  assert(returnType !== 'array', 'Return type should not be \"array\".');\n  if (args) {\n    for (var i = 0; i < args.length; i++) {\n      var converter = toC[argTypes[i]];\n      if (converter) {\n        if (stack === 0) stack = stackSave();\n        cArgs[i] = converter(args[i]);\n      } else {\n        cArgs[i] = args[i];\n      }\n    }\n  }\n  var ret = func.apply(null, cArgs);\n\n  ret = convertReturnValue(ret);\n  if (stack !== 0) stackRestore(stack);\n  return ret;\n}\n\n/** @param {string=} returnType\n    @param {Array=} argTypes\n    @param {Object=} opts */\nfunction cwrap(ident, returnType, argTypes, opts) {\n  return function() {\n    return ccall(ident, returnType, argTypes, arguments, opts);\n  }\n}\n\n// We used to include malloc/free by default in the past. Show a helpful error in\n// builds with assertions.\n\nvar ALLOC_NORMAL = 0; // Tries to use _malloc()\nvar ALLOC_STACK = 1; // Lives for the duration of the current function call\n\n// allocate(): This is for internal use. You can use it yourself as well, but the interface\n//             is a little tricky (see docs right below). The reason is that it is optimized\n//             for multiple syntaxes to save space in generated code. So you should\n//             normally not use allocate(), and instead allocate memory using _malloc(),\n//             initialize it with setValue(), and so forth.\n// @slab: An array of data.\n// @allocator: How to allocate memory, see ALLOC_*\n/** @type {function((Uint8Array|Array<number>), number)} */\nfunction allocate(slab, allocator) {\n  var ret;\n  assert(typeof allocator === 'number', 'allocate no longer takes a type argument')\n  assert(typeof slab !== 'number', 'allocate no longer takes a number as arg0')\n\n  if (allocator == ALLOC_STACK) {\n    ret = stackAlloc(slab.length);\n  } else {\n    ret = _malloc(slab.length);\n  }\n\n  if (slab.subarray || slab.slice) {\n    HEAPU8.set(/** @type {!Uint8Array} */(slab), ret);\n  } else {\n    HEAPU8.set(new Uint8Array(slab), ret);\n  }\n  return ret;\n}\n\n// include: runtime_strings.js\n\n\n// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.\n\n// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns\n// a copy of that string as a Javascript String object.\n\n/**\n * @param {number} idx\n * @param {number=} maxBytesToRead\n * @return {string}\n */\nfunction UTF8ArrayToString(heap, idx, maxBytesToRead) {\n  var endIdx = idx + maxBytesToRead;\n\n    var str = '';\n    while (!(idx >= endIdx)) {\n      // For UTF8 byte structure, see:\n      // http://en.wikipedia.org/wiki/UTF-8#Description\n      // https://www.ietf.org/rfc/rfc2279.txt\n      // https://tools.ietf.org/html/rfc3629\n      var u0 = heap[idx++];\n      // If not building with TextDecoder enabled, we don't know the string length, so scan for \\0 byte.\n      // If building with TextDecoder, we know exactly at what byte index the string ends, so checking for nulls here would be redundant.\n      if (!u0) return str;\n      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }\n      var u1 = heap[idx++] & 63;\n      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }\n      var u2 = heap[idx++] & 63;\n      if ((u0 & 0xF0) == 0xE0) {\n        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;\n      } else {\n        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');\n        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);\n      }\n\n      if (u0 < 0x10000) {\n        str += String.fromCharCode(u0);\n      } else {\n        var ch = u0 - 0x10000;\n        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));\n      }\n    }\n  return str;\n}\n\n// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a\n// copy of that string as a Javascript String object.\n// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit\n//                 this parameter to scan the string until the first \\0 byte. If maxBytesToRead is\n//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the\n//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will\n//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)\n//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may\n//                 throw JS JIT optimizations off, so it is worth to consider consistently using one\n//                 style or the other.\n/**\n * @param {number} ptr\n * @param {number=} maxBytesToRead\n * @return {string}\n */\nfunction UTF8ToString(ptr, maxBytesToRead) {\n  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';\n}\n\n// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',\n// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.\n// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.\n// Parameters:\n//   str: the Javascript string to copy.\n//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.\n//   outIdx: The starting offset in the array to begin the copying.\n//   maxBytesToWrite: The maximum number of bytes this function can write to the array.\n//                    This count should include the null terminator,\n//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.\n//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.\n// Returns the number of bytes written, EXCLUDING the null terminator.\n\nfunction stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {\n  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.\n    return 0;\n\n  var startIdx = outIdx;\n  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.\n  for (var i = 0; i < str.length; ++i) {\n    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.\n    // See http://unicode.org/faq/utf_bom.html#utf16-3\n    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629\n    var u = str.charCodeAt(i); // possibly a lead surrogate\n    if (u >= 0xD800 && u <= 0xDFFF) {\n      var u1 = str.charCodeAt(++i);\n      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);\n    }\n    if (u <= 0x7F) {\n      if (outIdx >= endIdx) break;\n      heap[outIdx++] = u;\n    } else if (u <= 0x7FF) {\n      if (outIdx + 1 >= endIdx) break;\n      heap[outIdx++] = 0xC0 | (u >> 6);\n      heap[outIdx++] = 0x80 | (u & 63);\n    } else if (u <= 0xFFFF) {\n      if (outIdx + 2 >= endIdx) break;\n      heap[outIdx++] = 0xE0 | (u >> 12);\n      heap[outIdx++] = 0x80 | ((u >> 6) & 63);\n      heap[outIdx++] = 0x80 | (u & 63);\n    } else {\n      if (outIdx + 3 >= endIdx) break;\n      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');\n      heap[outIdx++] = 0xF0 | (u >> 18);\n      heap[outIdx++] = 0x80 | ((u >> 12) & 63);\n      heap[outIdx++] = 0x80 | ((u >> 6) & 63);\n      heap[outIdx++] = 0x80 | (u & 63);\n    }\n  }\n  // Null-terminate the pointer to the buffer.\n  heap[outIdx] = 0;\n  return outIdx - startIdx;\n}\n\n// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',\n// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.\n// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.\n// Returns the number of bytes written, EXCLUDING the null terminator.\n\nfunction stringToUTF8(str, outPtr, maxBytesToWrite) {\n  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');\n  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);\n}\n\n// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.\nfunction lengthBytesUTF8(str) {\n  var len = 0;\n  for (var i = 0; i < str.length; ++i) {\n    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.\n    // See http://unicode.org/faq/utf_bom.html#utf16-3\n    var u = str.charCodeAt(i); // possibly a lead surrogate\n    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);\n    if (u <= 0x7F) ++len;\n    else if (u <= 0x7FF) len += 2;\n    else if (u <= 0xFFFF) len += 3;\n    else len += 4;\n  }\n  return len;\n}\n\n// end include: runtime_strings.js\n// include: runtime_strings_extra.js\n\n\n// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.\n\n// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns\n// a copy of that string as a Javascript String object.\n\nfunction AsciiToString(ptr) {\n  var str = '';\n  while (1) {\n    var ch = HEAPU8[((ptr++)>>0)];\n    if (!ch) return str;\n    str += String.fromCharCode(ch);\n  }\n}\n\n// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',\n// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.\n\nfunction stringToAscii(str, outPtr) {\n  return writeAsciiToMemory(str, outPtr, false);\n}\n\n// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns\n// a copy of that string as a Javascript String object.\n\nfunction UTF16ToString(ptr, maxBytesToRead) {\n  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');\n    var i = 0;\n\n    var str = '';\n    while (1) {\n      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];\n      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;\n      ++i;\n      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.\n      str += String.fromCharCode(codeUnit);\n    }\n}\n\n// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',\n// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.\n// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.\n// Parameters:\n//   str: the Javascript string to copy.\n//   outPtr: Byte address in Emscripten HEAP where to write the string to.\n//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null\n//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.\n//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.\n// Returns the number of bytes written, EXCLUDING the null terminator.\n\nfunction stringToUTF16(str, outPtr, maxBytesToWrite) {\n  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');\n  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');\n  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.\n  if (maxBytesToWrite === undefined) {\n    maxBytesToWrite = 0x7FFFFFFF;\n  }\n  if (maxBytesToWrite < 2) return 0;\n  maxBytesToWrite -= 2; // Null terminator.\n  var startPtr = outPtr;\n  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;\n  for (var i = 0; i < numCharsToWrite; ++i) {\n    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.\n    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate\n    HEAP16[((outPtr)>>1)]=codeUnit;\n    outPtr += 2;\n  }\n  // Null-terminate the pointer to the HEAP.\n  HEAP16[((outPtr)>>1)]=0;\n  return outPtr - startPtr;\n}\n\n// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.\n\nfunction lengthBytesUTF16(str) {\n  return str.length*2;\n}\n\nfunction UTF32ToString(ptr, maxBytesToRead) {\n  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');\n  var i = 0;\n\n  var str = '';\n  // If maxBytesToRead is not passed explicitly, it will be undefined, and this\n  // will always evaluate to true. This saves on code size.\n  while (!(i >= maxBytesToRead / 4)) {\n    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];\n    if (utf32 == 0) break;\n    ++i;\n    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.\n    // See http://unicode.org/faq/utf_bom.html#utf16-3\n    if (utf32 >= 0x10000) {\n      var ch = utf32 - 0x10000;\n      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));\n    } else {\n      str += String.fromCharCode(utf32);\n    }\n  }\n  return str;\n}\n\n// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',\n// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.\n// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.\n// Parameters:\n//   str: the Javascript string to copy.\n//   outPtr: Byte address in Emscripten HEAP where to write the string to.\n//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null\n//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.\n//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.\n// Returns the number of bytes written, EXCLUDING the null terminator.\n\nfunction stringToUTF32(str, outPtr, maxBytesToWrite) {\n  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');\n  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');\n  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.\n  if (maxBytesToWrite === undefined) {\n    maxBytesToWrite = 0x7FFFFFFF;\n  }\n  if (maxBytesToWrite < 4) return 0;\n  var startPtr = outPtr;\n  var endPtr = startPtr + maxBytesToWrite - 4;\n  for (var i = 0; i < str.length; ++i) {\n    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.\n    // See http://unicode.org/faq/utf_bom.html#utf16-3\n    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate\n    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {\n      var trailSurrogate = str.charCodeAt(++i);\n      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);\n    }\n    HEAP32[((outPtr)>>2)]=codeUnit;\n    outPtr += 4;\n    if (outPtr + 4 > endPtr) break;\n  }\n  // Null-terminate the pointer to the HEAP.\n  HEAP32[((outPtr)>>2)]=0;\n  return outPtr - startPtr;\n}\n\n// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.\n\nfunction lengthBytesUTF32(str) {\n  var len = 0;\n  for (var i = 0; i < str.length; ++i) {\n    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.\n    // See http://unicode.org/faq/utf_bom.html#utf16-3\n    var codeUnit = str.charCodeAt(i);\n    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.\n    len += 4;\n  }\n\n  return len;\n}\n\n// Allocate heap space for a JS string, and write it there.\n// It is the responsibility of the caller to free() that memory.\nfunction allocateUTF8(str) {\n  var size = lengthBytesUTF8(str) + 1;\n  var ret = _malloc(size);\n  if (ret) stringToUTF8Array(str, HEAP8, ret, size);\n  return ret;\n}\n\n// Allocate stack space for a JS string, and write it there.\nfunction allocateUTF8OnStack(str) {\n  var size = lengthBytesUTF8(str) + 1;\n  var ret = stackAlloc(size);\n  stringToUTF8Array(str, HEAP8, ret, size);\n  return ret;\n}\n\n// Deprecated: This function should not be called because it is unsafe and does not provide\n// a maximum length limit of how many bytes it is allowed to write. Prefer calling the\n// function stringToUTF8Array() instead, which takes in a maximum length that can be used\n// to be secure from out of bounds writes.\n/** @deprecated\n    @param {boolean=} dontAddNull */\nfunction writeStringToMemory(string, buffer, dontAddNull) {\n  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');\n\n  var /** @type {number} */ lastChar, /** @type {number} */ end;\n  if (dontAddNull) {\n    // stringToUTF8Array always appends null. If we don't want to do that, remember the\n    // character that existed at the location where the null will be placed, and restore\n    // that after the write (below).\n    end = buffer + lengthBytesUTF8(string);\n    lastChar = HEAP8[end];\n  }\n  stringToUTF8(string, buffer, Infinity);\n  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.\n}\n\nfunction writeArrayToMemory(array, buffer) {\n  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')\n  HEAP8.set(array, buffer);\n}\n\n/** @param {boolean=} dontAddNull */\nfunction writeAsciiToMemory(str, buffer, dontAddNull) {\n  for (var i = 0; i < str.length; ++i) {\n    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);\n    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);\n  }\n  // Null-terminate the pointer to the HEAP.\n  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;\n}\n\n// end include: runtime_strings_extra.js\n// Memory management\n\nvar PAGE_SIZE = 16384;\nvar WASM_PAGE_SIZE = 65536;\n\nfunction alignUp(x, multiple) {\n  if (x % multiple > 0) {\n    x += multiple - (x % multiple);\n  }\n  return x;\n}\n\nvar HEAP,\n/** @type {ArrayBuffer} */\n  buffer,\n/** @type {Int8Array} */\n  HEAP8,\n/** @type {Uint8Array} */\n  HEAPU8,\n/** @type {Int16Array} */\n  HEAP16,\n/** @type {Uint16Array} */\n  HEAPU16,\n/** @type {Int32Array} */\n  HEAP32,\n/** @type {Uint32Array} */\n  HEAPU32,\n/** @type {Float32Array} */\n  HEAPF32,\n/** @type {Float64Array} */\n  HEAPF64;\n\nfunction updateGlobalBufferAndViews(buf) {\n  buffer = buf;\n  Module['HEAP8'] = HEAP8 = new Int8Array(buf);\n  Module['HEAP16'] = HEAP16 = new Int16Array(buf);\n  Module['HEAP32'] = HEAP32 = new Int32Array(buf);\n  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);\n  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);\n  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);\n  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);\n  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);\n}\n\nvar STACK_BASE = 5383488,\n    STACKTOP = STACK_BASE,\n    STACK_MAX = 140608;\n\nassert(STACK_BASE % 16 === 0, 'stack must start aligned');\n\nif (ENVIRONMENT_IS_PTHREAD) {\n  // At the 'load' stage of Worker startup, we are just loading this script\n  // but not ready to run yet. At 'run' we receive proper values for the stack\n  // etc. and can launch a pthread. Set some fake values there meanwhile to\n  // catch bugs, then set the real values in establishStackSpace later.\n  STACK_MAX = STACKTOP = STACK_MAX = 0x7FFFFFFF;\n}\n\nvar TOTAL_STACK = 5242880;\nif (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')\n\nvar INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 67108864;if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) Object.defineProperty(Module, 'INITIAL_MEMORY', { configurable: true, get: function() { abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)') } });\n\nassert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');\n\n// check for full engine support (use string 'subarray' to avoid closure compiler confusion)\nassert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,\n       'JS engine does not provide full typed array support');\n\n// In non-standalone/normal mode, we create the memory here.\n// include: runtime_init_memory.js\n\n\n// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm\n// memory is created in the wasm, not in JS.)\nif (ENVIRONMENT_IS_PTHREAD) {\n  wasmMemory = Module['wasmMemory'];\n  buffer = Module['buffer'];\n} else {\n\n  if (Module['wasmMemory']) {\n    wasmMemory = Module['wasmMemory'];\n  } else\n  {\n    wasmMemory = new WebAssembly.Memory({\n      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE\n      ,\n      'maximum': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE\n      ,\n      'shared': true\n    });\n    if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {\n      err('requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag');\n      if (ENVIRONMENT_IS_NODE) {\n        console.log('(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)');\n      }\n      throw Error('bad memory');\n    }\n  }\n\n}\n\nif (wasmMemory) {\n  buffer = wasmMemory.buffer;\n}\n\n// If the user provides an incorrect length, just use that length instead rather than providing the user to\n// specifically provide the memory length with Module['INITIAL_MEMORY'].\nINITIAL_INITIAL_MEMORY = buffer.byteLength;\nassert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);\nupdateGlobalBufferAndViews(buffer);\n\nif (!ENVIRONMENT_IS_PTHREAD) { // Pthreads have already initialized these variables in src/worker.js, where they were passed to the thread worker at startup time\n}\n\n// end include: runtime_init_memory.js\n\n// include: runtime_init_table.js\n// In regular non-RELOCATABLE mode the table is exported\n// from the wasm module and this will be assigned once\n// the exports are available.\nvar wasmTable;\n\n// end include: runtime_init_table.js\n// include: runtime_stack_check.js\n\n\n// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.\nfunction writeStackCookie() {\n  assert((STACK_MAX & 3) == 0);\n  // The stack grows downwards\n  HEAPU32[(STACK_MAX >> 2)+1] = 0x2135467;\n  HEAPU32[(STACK_MAX >> 2)+2] = 0x89BACDFE;\n  // Also test the global address 0 for integrity.\n  HEAP32[0] = 0x63736d65; /* 'emsc' */\n}\n\nfunction checkStackCookie() {\n  if (ABORT) return;\n  var cookie1 = HEAPU32[(STACK_MAX >> 2)+1];\n  var cookie2 = HEAPU32[(STACK_MAX >> 2)+2];\n  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {\n    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));\n  }\n  // Also test the global address 0 for integrity.\n  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');\n}\n\n// end include: runtime_stack_check.js\n// include: runtime_assertions.js\n\n\n// Endianness check (note: assumes compiler arch was little-endian)\n(function() {\n  var h16 = new Int16Array(1);\n  var h8 = new Int8Array(h16.buffer);\n  h16[0] = 0x6373;\n  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';\n})();\n\nfunction abortFnPtrError(ptr, sig) {\n\tabort(\"Invalid function pointer \" + ptr + \" called with signature '\" + sig + \"'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.\");\n}\n\n// end include: runtime_assertions.js\nvar __ATPRERUN__  = []; // functions called before the runtime is initialized\nvar __ATINIT__    = []; // functions called during startup\nvar __ATMAIN__    = []; // functions called when main() is to be run\nvar __ATEXIT__    = []; // functions called during shutdown\nvar __ATPOSTRUN__ = []; // functions called after the main() is called\n\nvar runtimeInitialized = false;\nvar runtimeExited = false;\n\nif (ENVIRONMENT_IS_PTHREAD) runtimeInitialized = true; // The runtime is hosted in the main thread, and bits shared to pthreads via SharedArrayBuffer. No need to init again in pthread.\n\nfunction preRun() {\n  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.\n\n  if (Module['preRun']) {\n    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];\n    while (Module['preRun'].length) {\n      addOnPreRun(Module['preRun'].shift());\n    }\n  }\n\n  callRuntimeCallbacks(__ATPRERUN__);\n}\n\nfunction initRuntime() {\n  checkStackCookie();\n  assert(!runtimeInitialized);\n  runtimeInitialized = true;\n  \n  callRuntimeCallbacks(__ATINIT__);\n}\n\nfunction preMain() {\n  checkStackCookie();\n  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.\n  \n  callRuntimeCallbacks(__ATMAIN__);\n}\n\nfunction exitRuntime() {\n  checkStackCookie();\n  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.\n  runtimeExited = true;\n}\n\nfunction postRun() {\n  checkStackCookie();\n  if (ENVIRONMENT_IS_PTHREAD) return; // PThreads reuse the runtime from the main thread.\n\n  if (Module['postRun']) {\n    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];\n    while (Module['postRun'].length) {\n      addOnPostRun(Module['postRun'].shift());\n    }\n  }\n\n  callRuntimeCallbacks(__ATPOSTRUN__);\n}\n\nfunction addOnPreRun(cb) {\n  __ATPRERUN__.unshift(cb);\n}\n\nfunction addOnInit(cb) {\n  __ATINIT__.unshift(cb);\n}\n\nfunction addOnPreMain(cb) {\n  __ATMAIN__.unshift(cb);\n}\n\nfunction addOnExit(cb) {\n}\n\nfunction addOnPostRun(cb) {\n  __ATPOSTRUN__.unshift(cb);\n}\n\n// include: runtime_math.js\n\n\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul\n\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround\n\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32\n\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc\n\nassert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');\nassert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');\nassert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');\nassert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');\n\n// end include: runtime_math.js\n// A counter of dependencies for calling run(). If we need to\n// do asynchronous work before running, increment this and\n// decrement it. Incrementing must happen in a place like\n// Module.preRun (used by emcc to add file preloading).\n// Note that you can add dependencies in preRun, even though\n// it happens right before run - run will be postponed until\n// the dependencies are met.\nvar runDependencies = 0;\nvar runDependencyWatcher = null;\nvar dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled\nvar runDependencyTracking = {};\n\nfunction getUniqueRunDependency(id) {\n  var orig = id;\n  while (1) {\n    if (!runDependencyTracking[id]) return id;\n    id = orig + Math.random();\n  }\n}\n\nfunction addRunDependency(id) {\n  // We should never get here in pthreads (could no-op this out if called in pthreads, but that might indicate a bug in caller side,\n  // so good to be very explicit)\n  assert(!ENVIRONMENT_IS_PTHREAD, \"addRunDependency cannot be used in a pthread worker\");\n  runDependencies++;\n\n  if (Module['monitorRunDependencies']) {\n    Module['monitorRunDependencies'](runDependencies);\n  }\n\n  if (id) {\n    assert(!runDependencyTracking[id]);\n    runDependencyTracking[id] = 1;\n    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {\n      // Check for missing dependencies every few seconds\n      runDependencyWatcher = setInterval(function() {\n        if (ABORT) {\n          clearInterval(runDependencyWatcher);\n          runDependencyWatcher = null;\n          return;\n        }\n        var shown = false;\n        for (var dep in runDependencyTracking) {\n          if (!shown) {\n            shown = true;\n            err('still waiting on run dependencies:');\n          }\n          err('dependency: ' + dep);\n        }\n        if (shown) {\n          err('(end of list)');\n        }\n      }, 10000);\n    }\n  } else {\n    err('warning: run dependency added without ID');\n  }\n}\n\nfunction removeRunDependency(id) {\n  runDependencies--;\n\n  if (Module['monitorRunDependencies']) {\n    Module['monitorRunDependencies'](runDependencies);\n  }\n\n  if (id) {\n    assert(runDependencyTracking[id]);\n    delete runDependencyTracking[id];\n  } else {\n    err('warning: run dependency removed without ID');\n  }\n  if (runDependencies == 0) {\n    if (runDependencyWatcher !== null) {\n      clearInterval(runDependencyWatcher);\n      runDependencyWatcher = null;\n    }\n    if (dependenciesFulfilled) {\n      var callback = dependenciesFulfilled;\n      dependenciesFulfilled = null;\n      callback(); // can add another dependenciesFulfilled\n    }\n  }\n}\n\nModule[\"preloadedImages\"] = {}; // maps url to image data\nModule[\"preloadedAudios\"] = {}; // maps url to audio data\n\n/** @param {string|number=} what */\nfunction abort(what) {\n  if (Module['onAbort']) {\n    Module['onAbort'](what);\n  }\n\n  if (ENVIRONMENT_IS_PTHREAD) console.error('Pthread aborting at ' + new Error().stack);\n  what += '';\n  err(what);\n\n  ABORT = true;\n  EXITSTATUS = 1;\n\n  var output = 'abort(' + what + ') at ' + stackTrace();\n  what = output;\n\n  // Use a wasm runtime error, because a JS error might be seen as a foreign\n  // exception, which means we'd run destructors on it. We need the error to\n  // simply make the program stop.\n  var e = new WebAssembly.RuntimeError(what);\n\n  readyPromiseReject(e);\n  // Throw the error whether or not MODULARIZE is set because abort is used\n  // in code paths apart from instantiation where an exception is expected\n  // to be thrown when abort is called.\n  throw e;\n}\n\n// {{MEM_INITIALIZER}}\n\n// include: memoryprofiler.js\n\n\n// end include: memoryprofiler.js\n// show errors on likely calls to FS when it was not included\nvar FS = {\n  error: function() {\n    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');\n  },\n  init: function() { FS.error() },\n  createDataFile: function() { FS.error() },\n  createPreloadedFile: function() { FS.error() },\n  createLazyFile: function() { FS.error() },\n  open: function() { FS.error() },\n  mkdev: function() { FS.error() },\n  registerDevice: function() { FS.error() },\n  analyzePath: function() { FS.error() },\n  loadFilesFromDB: function() { FS.error() },\n\n  ErrnoError: function ErrnoError() { FS.error() },\n};\nModule['FS_createDataFile'] = FS.createDataFile;\nModule['FS_createPreloadedFile'] = FS.createPreloadedFile;\n\n// include: URIUtils.js\n\n\nfunction hasPrefix(str, prefix) {\n  return String.prototype.startsWith ?\n      str.startsWith(prefix) :\n      str.indexOf(prefix) === 0;\n}\n\n// Prefix of data URIs emitted by SINGLE_FILE and related options.\nvar dataURIPrefix = 'data:application/octet-stream;base64,';\n\n// Indicates whether filename is a base64 data URI.\nfunction isDataURI(filename) {\n  return hasPrefix(filename, dataURIPrefix);\n}\n\nvar fileURIPrefix = \"file://\";\n\n// Indicates whether filename is delivered via file protocol (as opposed to http/https)\nfunction isFileURI(filename) {\n  return hasPrefix(filename, fileURIPrefix);\n}\n\n// end include: URIUtils.js\nfunction createExportWrapper(name, fixedasm) {\n  return function() {\n    var displayName = name;\n    var asm = fixedasm;\n    if (!fixedasm) {\n      asm = Module['asm'];\n    }\n    assert(runtimeInitialized, 'native function `' + displayName + '` called before runtime initialization');\n    assert(!runtimeExited, 'native function `' + displayName + '` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)');\n    if (!asm[name]) {\n      assert(asm[name], 'exported native function `' + displayName + '` not found');\n    }\n    return asm[name].apply(null, arguments);\n  };\n}\n\nvar wasmBinaryFile = 'libffmpeg.wasm';\nif (!isDataURI(wasmBinaryFile)) {\n  wasmBinaryFile = locateFile(wasmBinaryFile);\n}\n\nfunction getBinary() {\n  try {\n    if (wasmBinary) {\n      return new Uint8Array(wasmBinary);\n    }\n\n    if (readBinary) {\n      return readBinary(wasmBinaryFile);\n    } else {\n      throw \"both async and sync fetching of the wasm failed\";\n    }\n  }\n  catch (err) {\n    abort(err);\n  }\n}\n\nfunction getBinaryPromise() {\n  // If we don't have the binary yet, and have the Fetch api, use that;\n  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web\n  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'\n      // Let's not use fetch to get objects over file:// as it's most likely Cordova which doesn't support fetch for file://\n      && !isFileURI(wasmBinaryFile)\n      ) {\n    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {\n      if (!response['ok']) {\n        throw \"failed to load wasm binary file at '\" + wasmBinaryFile + \"'\";\n      }\n      return response['arrayBuffer']();\n    }).catch(function () {\n      return getBinary();\n    });\n  }\n  // Otherwise, getBinary should be able to get it synchronously\n  return Promise.resolve().then(getBinary);\n}\n\n// Create the wasm instance.\n// Receives the wasm imports, returns the exports.\nfunction createWasm() {\n  // prepare imports\n  var info = {\n    'env': asmLibraryArg,\n    'wasi_snapshot_preview1': asmLibraryArg\n  };\n  // Load the wasm module and create an instance of using native support in the JS engine.\n  // handle a generated wasm instance, receiving its exports and\n  // performing other necessary setup\n  /** @param {WebAssembly.Module=} module*/\n  function receiveInstance(instance, module) {\n    var exports = instance.exports;\n\n    Module['asm'] = exports;\n\n    wasmTable = Module['asm']['__indirect_function_table'];\n    assert(wasmTable, \"table not found in wasm exports\");\n\n    // We now have the Wasm module loaded up, keep a reference to the compiled module so we can post it to the workers.\n    wasmModule = module;\n    // Instantiation is synchronous in pthreads and we assert on run dependencies.\n    if (!ENVIRONMENT_IS_PTHREAD) {\n      var numWorkersToLoad = PThread.unusedWorkers.length;\n      PThread.unusedWorkers.forEach(function(w) { PThread.loadWasmModuleToWorker(w, function() {\n        // PTHREAD_POOL_DELAY_LOAD==0: we wanted to synchronously wait until the Worker pool\n        // has loaded up. If all Workers have finished loading up the Wasm Module, proceed with main()\n        if (!--numWorkersToLoad) removeRunDependency('wasm-instantiate');\n      })});\n    }\n  }\n  // we can't run yet (except in a pthread, where we have a custom sync instantiator)\n  if (!ENVIRONMENT_IS_PTHREAD) { addRunDependency('wasm-instantiate'); }\n\n  // Async compilation can be confusing when an error on the page overwrites Module\n  // (for example, if the order of elements is wrong, and the one defining Module is\n  // later), so we save Module and check it later.\n  var trueModule = Module;\n  function receiveInstantiatedSource(output) {\n    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.\n    // receiveInstance() will swap in the exports (to Module.asm) so they can be called\n    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');\n    trueModule = null;\n    receiveInstance(output['instance'], output['module']);\n  }\n\n  function instantiateArrayBuffer(receiver) {\n    return getBinaryPromise().then(function(binary) {\n      return WebAssembly.instantiate(binary, info);\n    }).then(receiver, function(reason) {\n      err('failed to asynchronously prepare wasm: ' + reason);\n\n      abort(reason);\n    });\n  }\n\n  // Prefer streaming instantiation if available.\n  function instantiateAsync() {\n    if (!wasmBinary &&\n        typeof WebAssembly.instantiateStreaming === 'function' &&\n        !isDataURI(wasmBinaryFile) &&\n        // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.\n        !isFileURI(wasmBinaryFile) &&\n        typeof fetch === 'function') {\n      return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {\n        var result = WebAssembly.instantiateStreaming(response, info);\n        return result.then(receiveInstantiatedSource, function(reason) {\n            // We expect the most common failure cause to be a bad MIME type for the binary,\n            // in which case falling back to ArrayBuffer instantiation should work.\n            err('wasm streaming compile failed: ' + reason);\n            err('falling back to ArrayBuffer instantiation');\n            return instantiateArrayBuffer(receiveInstantiatedSource);\n          });\n      });\n    } else {\n      return instantiateArrayBuffer(receiveInstantiatedSource);\n    }\n  }\n  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback\n  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel\n  // to any other async startup actions they are performing.\n  if (Module['instantiateWasm']) {\n    try {\n      var exports = Module['instantiateWasm'](info, receiveInstance);\n      return exports;\n    } catch(e) {\n      err('Module.instantiateWasm callback failed with error: ' + e);\n      return false;\n    }\n  }\n\n  // If instantiation fails, reject the module ready promise.\n  instantiateAsync().catch(readyPromiseReject);\n  return {}; // no exports yet; we'll fill them in later\n}\n\n// Globals used by JS i64 conversions\nvar tempDouble;\nvar tempI64;\n\n// === Body ===\n\nvar ASM_CONSTS = {\n  130012: function() {throw 'Canceled!'},  \n 130232: function($0, $1) {setTimeout(function() { _do_emscripten_dispatch_to_thread($0, $1); }, 0);}\n};\nfunction initPthreadsJS(){ PThread.initRuntime(); }\n\n\n\n\n\n  function abortStackOverflow(allocSize) {\n      abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');\n    }\n\n  function callRuntimeCallbacks(callbacks) {\n      while(callbacks.length > 0) {\n        var callback = callbacks.shift();\n        if (typeof callback == 'function') {\n          callback(Module); // Pass the module as the first argument.\n          continue;\n        }\n        var func = callback.func;\n        if (typeof func === 'number') {\n          if (callback.arg === undefined) {\n            wasmTable.get(func)();\n          } else {\n            wasmTable.get(func)(callback.arg);\n          }\n        } else {\n          func(callback.arg === undefined ? null : callback.arg);\n        }\n      }\n    }\n\n  function demangle(func) {\n      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');\n      return func;\n    }\n\n  function demangleAll(text) {\n      var regex =\n        /\\b_Z[\\w\\d_]+/g;\n      return text.replace(regex,\n        function(x) {\n          var y = demangle(x);\n          return x === y ? x : (y + ' [' + x + ']');\n        });\n    }\n\n  function dynCallLegacy(sig, ptr, args) {\n      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \\'' + sig + '\\'');\n      if (args && args.length) {\n        // j (64-bit integer) must be passed in as two numbers [low 32, high 32].\n        assert(args.length === sig.substring(1).replace(/j/g, '--').length);\n      } else {\n        assert(sig.length == 1);\n      }\n      if (args && args.length) {\n        return Module['dynCall_' + sig].apply(null, [ptr].concat(args));\n      }\n      return Module['dynCall_' + sig].call(null, ptr);\n    }\n  function dynCall(sig, ptr, args) {\n      // Without WASM_BIGINT support we cannot directly call function with i64 as\n      // part of thier signature, so we rely the dynCall functions generated by\n      // wasm-emscripten-finalize\n      if (sig.indexOf('j') != -1) {\n        return dynCallLegacy(sig, ptr, args);\n      }\n      assert(wasmTable.get(ptr), 'missing table entry in dynCall: ' + ptr);\n      return wasmTable.get(ptr).apply(null, args)\n    }\n  Module[\"dynCall\"] = dynCall;\n\n  var __pthread_ptr=0;\n  \n  var __pthread_is_main_runtime_thread=0;\n  \n  var __pthread_is_main_browser_thread=0;\n  function registerPthreadPtr(pthreadPtr, isMainBrowserThread, isMainRuntimeThread) {\n      pthreadPtr = pthreadPtr|0;\n      isMainBrowserThread = isMainBrowserThread|0;\n      isMainRuntimeThread = isMainRuntimeThread|0;\n      __pthread_ptr = pthreadPtr;\n      __pthread_is_main_browser_thread = isMainBrowserThread;\n      __pthread_is_main_runtime_thread = isMainRuntimeThread;\n    }\n  Module[\"registerPthreadPtr\"] = registerPthreadPtr;\n  \n  var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};\n  \n  function _emscripten_futex_wake(addr, count) {\n      if (addr <= 0 || addr > HEAP8.length || addr&3 != 0 || count < 0) return -28;\n      if (count == 0) return 0;\n      // Waking (at least) INT_MAX waiters is defined to mean wake all callers.\n      // For Atomics.notify() API Infinity is to be passed in that case.\n      if (count >= 2147483647) count = Infinity;\n  \n      // See if main thread is waiting on this address? If so, wake it up by resetting its wake location to zero.\n      // Note that this is not a fair procedure, since we always wake main thread first before any workers, so\n      // this scheme does not adhere to real queue-based waiting.\n      assert(PThread.mainThreadFutex > 0);\n      var mainThreadWaitAddress = Atomics.load(HEAP32, PThread.mainThreadFutex >> 2);\n      var mainThreadWoken = 0;\n      if (mainThreadWaitAddress == addr) {\n        // We only use mainThreadFutex on the main browser thread, where we\n        // cannot block while we wait. Therefore we should only see it set from\n        // other threads, and not on the main thread itself. In other words, the\n        // main thread must never try to wake itself up!\n        assert(!ENVIRONMENT_IS_WEB);\n        var loadedAddr = Atomics.compareExchange(HEAP32, PThread.mainThreadFutex >> 2, mainThreadWaitAddress, 0);\n        if (loadedAddr == mainThreadWaitAddress) {\n          --count;\n          mainThreadWoken = 1;\n          if (count <= 0) return 1;\n        }\n      }\n  \n      // Wake any workers waiting on this address.\n      var ret = Atomics.notify(HEAP32, addr >> 2, count);\n      if (ret >= 0) return ret + mainThreadWoken;\n      throw 'Atomics.notify returned an unexpected value ' + ret;\n    }\n  Module[\"_emscripten_futex_wake\"] = _emscripten_futex_wake;\n  \n  function killThread(pthread_ptr) {\n      if (ENVIRONMENT_IS_PTHREAD) throw 'Internal Error! killThread() can only ever be called from main application thread!';\n      if (!pthread_ptr) throw 'Internal Error! Null pthread_ptr in killThread!';\n      HEAP32[(((pthread_ptr)+(12))>>2)]=0;\n      var pthread = PThread.pthreads[pthread_ptr];\n      pthread.worker.terminate();\n      PThread.freeThreadData(pthread);\n      // The worker was completely nuked (not just the pthread execution it was hosting), so remove it from running workers\n      // but don't put it back to the pool.\n      PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker), 1); // Not a running Worker anymore.\n      pthread.worker.pthread = undefined;\n    }\n  \n  function cancelThread(pthread_ptr) {\n      if (ENVIRONMENT_IS_PTHREAD) throw 'Internal Error! cancelThread() can only ever be called from main application thread!';\n      if (!pthread_ptr) throw 'Internal Error! Null pthread_ptr in cancelThread!';\n      var pthread = PThread.pthreads[pthread_ptr];\n      pthread.worker.postMessage({ 'cmd': 'cancel' });\n    }\n  \n  function cleanupThread(pthread_ptr) {\n      if (ENVIRONMENT_IS_PTHREAD) throw 'Internal Error! cleanupThread() can only ever be called from main application thread!';\n      if (!pthread_ptr) throw 'Internal Error! Null pthread_ptr in cleanupThread!';\n      HEAP32[(((pthread_ptr)+(12))>>2)]=0;\n      var pthread = PThread.pthreads[pthread_ptr];\n      if (pthread) {\n        var worker = pthread.worker;\n        PThread.returnWorkerToPool(worker);\n      }\n    }\n  var PThread={MAIN_THREAD_ID:1,mainThreadInfo:{schedPolicy:0,schedPrio:0},unusedWorkers:[],runningWorkers:[],initMainThreadBlock:function() {\n        assert(!ENVIRONMENT_IS_PTHREAD);\n  \n        var pthreadPoolSize = 5;\n        // Start loading up the Worker pool, if requested.\n        for(var i = 0; i < pthreadPoolSize; ++i) {\n          PThread.allocateUnusedWorker();\n        }\n      },initRuntime:function() {\n  \n        PThread.mainThreadBlock = _malloc(232);\n  \n        for (var i = 0; i < 232/4; ++i) HEAPU32[PThread.mainThreadBlock/4+i] = 0;\n  \n        // The pthread struct has a field that points to itself - this is used as\n          // a magic ID to detect whether the pthread_t structure is 'alive'.\n        HEAP32[(((PThread.mainThreadBlock)+(12))>>2)]=PThread.mainThreadBlock;\n  \n        // pthread struct robust_list head should point to itself.\n        var headPtr = PThread.mainThreadBlock + 156;\n        HEAP32[((headPtr)>>2)]=headPtr;\n  \n        // Allocate memory for thread-local storage.\n        var tlsMemory = _malloc(512);\n        for (var i = 0; i < 128; ++i) HEAPU32[tlsMemory/4+i] = 0;\n        Atomics.store(HEAPU32, (PThread.mainThreadBlock + 104 ) >> 2, tlsMemory); // Init thread-local-storage memory array.\n        Atomics.store(HEAPU32, (PThread.mainThreadBlock + 40 ) >> 2, PThread.mainThreadBlock); // Main thread ID.\n        Atomics.store(HEAPU32, (PThread.mainThreadBlock + 44 ) >> 2, 42); // Process ID.\n  \n        PThread.initShared();\n  \n        // Pass the thread address inside the asm.js scope to store it for fast\n        // access that avoids the need for a FFI out.  Global constructors trying\n        // to access this value will read the wrong value, but that is UB anyway.\n        registerPthreadPtr(PThread.mainThreadBlock, /*isMainBrowserThread=*/!ENVIRONMENT_IS_WORKER, /*isMainRuntimeThread=*/1);\n        _emscripten_register_main_browser_thread_id(PThread.mainThreadBlock);\n      },initWorker:function() {\n        PThread.initShared();\n        // The promise resolve function typically gets called as part of the execution\n        // of the Module `run`. The workers/pthreads don't execute `run` here, they\n        // call `run` in response to a message at a later time, so the creation\n        // promise can be resolved, marking the pthread-Module as initialized.\n        readyPromiseResolve(Module);\n  \n      },initShared:function() {\n        PThread.mainThreadFutex = _main_thread_futex;\n        assert(PThread.mainThreadFutex > 0);\n      },pthreads:{},threadExitHandlers:[],setThreadStatus:function() {},runExitHandlers:function() {\n        while (PThread.threadExitHandlers.length > 0) {\n          PThread.threadExitHandlers.pop()();\n        }\n  \n        // Call into the musl function that runs destructors of all thread-specific data.\n        if (ENVIRONMENT_IS_PTHREAD && threadInfoStruct) ___pthread_tsd_run_dtors();\n      },threadExit:function(exitCode) {\n        var tb = _pthread_self();\n        if (tb) { // If we haven't yet exited?\n          err('Pthread 0x' + tb.toString(16) + ' exited.');\n          Atomics.store(HEAPU32, (tb + 4 ) >> 2, exitCode);\n          // When we publish this, the main thread is free to deallocate the thread object and we are done.\n          // Therefore set threadInfoStruct = 0; above to 'release' the object in this worker thread.\n          Atomics.store(HEAPU32, (tb + 0 ) >> 2, 1);\n  \n          // Disable all cancellation so that executing the cleanup handlers won't trigger another JS\n          // canceled exception to be thrown.\n          Atomics.store(HEAPU32, (tb + 60 ) >> 2, 1/*PTHREAD_CANCEL_DISABLE*/);\n          Atomics.store(HEAPU32, (tb + 64 ) >> 2, 0/*PTHREAD_CANCEL_DEFERRED*/);\n          PThread.runExitHandlers();\n  \n          _emscripten_futex_wake(tb + 0, 2147483647);\n          registerPthreadPtr(0, 0, 0); // Unregister the thread block also inside the asm.js scope.\n          threadInfoStruct = 0;\n          if (ENVIRONMENT_IS_PTHREAD) {\n            // Note: in theory we would like to return any offscreen canvases back to the main thread,\n            // but if we ever fetched a rendering context for them that would not be valid, so we don't try.\n            postMessage({ 'cmd': 'exit' });\n          }\n        }\n      },threadCancel:function() {\n        PThread.runExitHandlers();\n        Atomics.store(HEAPU32, (threadInfoStruct + 4 ) >> 2, -1/*PTHREAD_CANCELED*/);\n        Atomics.store(HEAPU32, (threadInfoStruct + 0 ) >> 2, 1); // Mark the thread as no longer running.\n        _emscripten_futex_wake(threadInfoStruct + 0, 2147483647); // wake all threads\n        threadInfoStruct = selfThreadId = 0; // Not hosting a pthread anymore in this worker, reset the info structures to null.\n        registerPthreadPtr(0, 0, 0); // Unregister the thread block also inside the asm.js scope.\n        postMessage({ 'cmd': 'cancelDone' });\n      },terminateAllThreads:function() {\n        for (var t in PThread.pthreads) {\n          var pthread = PThread.pthreads[t];\n          if (pthread && pthread.worker) {\n            PThread.returnWorkerToPool(pthread.worker);\n          }\n        }\n        PThread.pthreads = {};\n  \n        for (var i = 0; i < PThread.unusedWorkers.length; ++i) {\n          var worker = PThread.unusedWorkers[i];\n          assert(!worker.pthread); // This Worker should not be hosting a pthread at this time.\n          worker.terminate();\n        }\n        PThread.unusedWorkers = [];\n  \n        for (var i = 0; i < PThread.runningWorkers.length; ++i) {\n          var worker = PThread.runningWorkers[i];\n          var pthread = worker.pthread;\n          assert(pthread, 'This Worker should have a pthread it is executing');\n          PThread.freeThreadData(pthread);\n          worker.terminate();\n        }\n        PThread.runningWorkers = [];\n      },freeThreadData:function(pthread) {\n        if (!pthread) return;\n        if (pthread.threadInfoStruct) {\n          var tlsMemory = HEAP32[(((pthread.threadInfoStruct)+(104))>>2)];\n          HEAP32[(((pthread.threadInfoStruct)+(104))>>2)]=0;\n          _free(tlsMemory);\n          _free(pthread.threadInfoStruct);\n        }\n        pthread.threadInfoStruct = 0;\n        if (pthread.allocatedOwnStack && pthread.stackBase) _free(pthread.stackBase);\n        pthread.stackBase = 0;\n        if (pthread.worker) pthread.worker.pthread = null;\n      },returnWorkerToPool:function(worker) {\n        delete PThread.pthreads[worker.pthread.thread];\n        //Note: worker is intentionally not terminated so the pool can dynamically grow.\n        PThread.unusedWorkers.push(worker);\n        PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1); // Not a running Worker anymore\n        PThread.freeThreadData(worker.pthread);\n        // Detach the worker from the pthread object, and return it to the worker pool as an unused worker.\n        worker.pthread = undefined;\n      },receiveObjectTransfer:function(data) {\n      },loadWasmModuleToWorker:function(worker, onFinishedLoading) {\n        worker.onmessage = function(e) {\n          var d = e['data'];\n          var cmd = d['cmd'];\n          // Sometimes we need to backproxy events to the calling thread (e.g.\n          // HTML5 DOM events handlers such as\n          // emscripten_set_mousemove_callback()), so keep track in a globally\n          // accessible variable about the thread that initiated the proxying.\n          if (worker.pthread) PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct;\n  \n          // If this message is intended to a recipient that is not the main thread, forward it to the target thread.\n          if (d['targetThread'] && d['targetThread'] != _pthread_self()) {\n            var thread = PThread.pthreads[d.targetThread];\n            if (thread) {\n              thread.worker.postMessage(e.data, d['transferList']);\n            } else {\n              console.error('Internal error! Worker sent a message \"' + cmd + '\" to target pthread ' + d['targetThread'] + ', but that thread no longer exists!');\n            }\n            PThread.currentProxiedOperationCallerThread = undefined;\n            return;\n          }\n  \n          if (cmd === 'processQueuedMainThreadWork') {\n            // TODO: Must post message to main Emscripten thread in PROXY_TO_WORKER mode.\n            _emscripten_main_thread_process_queued_calls();\n          } else if (cmd === 'spawnThread') {\n            spawnThread(e.data);\n          } else if (cmd === 'cleanupThread') {\n            cleanupThread(d['thread']);\n          } else if (cmd === 'killThread') {\n            killThread(d['thread']);\n          } else if (cmd === 'cancelThread') {\n            cancelThread(d['thread']);\n          } else if (cmd === 'loaded') {\n            worker.loaded = true;\n            if (onFinishedLoading) onFinishedLoading(worker);\n            // If this Worker is already pending to start running a thread, launch the thread now\n            if (worker.runPthread) {\n              worker.runPthread();\n              delete worker.runPthread;\n            }\n          } else if (cmd === 'print') {\n            out('Thread ' + d['threadId'] + ': ' + d['text']);\n          } else if (cmd === 'printErr') {\n            err('Thread ' + d['threadId'] + ': ' + d['text']);\n          } else if (cmd === 'alert') {\n            alert('Thread ' + d['threadId'] + ': ' + d['text']);\n          } else if (cmd === 'exit') {\n            var detached = worker.pthread && Atomics.load(HEAPU32, (worker.pthread.thread + 68) >> 2);\n            if (detached) {\n              PThread.returnWorkerToPool(worker);\n            }\n          } else if (cmd === 'cancelDone') {\n            PThread.returnWorkerToPool(worker);\n          } else if (cmd === 'objectTransfer') {\n            PThread.receiveObjectTransfer(e.data);\n          } else if (e.data.target === 'setimmediate') {\n            worker.postMessage(e.data); // Worker wants to postMessage() to itself to implement setImmediate() emulation.\n          } else {\n            err(\"worker sent an unknown command \" + cmd);\n          }\n          PThread.currentProxiedOperationCallerThread = undefined;\n        };\n  \n        worker.onerror = function(e) {\n          err('pthread sent an error! ' + e.filename + ':' + e.lineno + ': ' + e.message);\n        };\n  \n        if (ENVIRONMENT_IS_NODE) {\n          worker.on('message', function(data) {\n            worker.onmessage({ data: data });\n          });\n          worker.on('error', function(data) {\n            worker.onerror(data);\n          });\n          worker.on('exit', function(data) {\n            // TODO: update the worker queue?\n            // See: https://github.com/emscripten-core/emscripten/issues/9763\n          });\n        }\n  \n        assert(wasmMemory instanceof WebAssembly.Memory, 'WebAssembly memory should have been loaded by now!');\n        assert(wasmModule instanceof WebAssembly.Module, 'WebAssembly Module should have been loaded by now!');\n  \n        // Ask the new worker to load up the Emscripten-compiled page. This is a heavy operation.\n        worker.postMessage({\n          'cmd': 'load',\n          // If the application main .js file was loaded from a Blob, then it is not possible\n          // to access the URL of the current script that could be passed to a Web Worker so that\n          // it could load up the same file. In that case, developer must either deliver the Blob\n          // object in Module['mainScriptUrlOrBlob'], or a URL to it, so that pthread Workers can\n          // independently load up the same main application file.\n          'urlOrBlob': Module['mainScriptUrlOrBlob'] || _scriptDir,\n          'wasmMemory': wasmMemory,\n          'wasmModule': wasmModule,\n        });\n      },allocateUnusedWorker:function() {\n        // Allow HTML module to configure the location where the 'worker.js' file will be loaded from,\n        // via Module.locateFile() function. If not specified, then the default URL 'worker.js' relative\n        // to the main html file is loaded.\n        var pthreadMainJs = locateFile('libffmpeg.worker.js');\n        PThread.unusedWorkers.push(new Worker(pthreadMainJs));\n      },getNewWorker:function() {\n        if (PThread.unusedWorkers.length == 0) {\n          PThread.allocateUnusedWorker();\n          PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);\n        }\n        if (PThread.unusedWorkers.length > 0) return PThread.unusedWorkers.pop();\n        else return null;\n      },busySpinWait:function(msecs) {\n        var t = performance.now() + msecs;\n        while(performance.now() < t) {\n          ;\n        }\n      }};\n  function establishStackSpace(stackTop, stackMax) {\n      STACK_BASE = STACKTOP = stackTop;\n      STACK_MAX = stackMax;\n  \n      // Call inside wasm module to set up the stack frame for this pthread in asm.js/wasm module scope\n      stackRestore(stackTop);\n  \n      // Write the stack cookie last, after we have set up the proper bounds and\n      // current position of the stack.\n      writeStackCookie();\n    }\n  Module[\"establishStackSpace\"] = establishStackSpace;\n\n  function getNoExitRuntime() {\n      return noExitRuntime;\n    }\n  Module[\"getNoExitRuntime\"] = getNoExitRuntime;\n\n  function jsStackTrace() {\n      var error = new Error();\n      if (!error.stack) {\n        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,\n        // so try that as a special-case.\n        try {\n          throw new Error();\n        } catch(e) {\n          error = e;\n        }\n        if (!error.stack) {\n          return '(no stack trace available)';\n        }\n      }\n      return error.stack.toString();\n    }\n\n  function stackTrace() {\n      var js = jsStackTrace();\n      if (Module['extraStackTrace']) js += '\\n' + Module['extraStackTrace']();\n      return demangleAll(js);\n    }\n\n  function ___assert_fail(condition, filename, line, func) {\n      abort('Assertion failed: ' + UTF8ToString(condition) + ', at: ' + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);\n    }\n\n  var _emscripten_get_now;if (ENVIRONMENT_IS_NODE) {\n    _emscripten_get_now = function() {\n      var t = process['hrtime']();\n      return t[0] * 1e3 + t[1] / 1e6;\n    };\n  } else if (ENVIRONMENT_IS_PTHREAD) {\n    _emscripten_get_now = function() { return performance.now() - Module['__performance_now_clock_drift']; };\n  } else if (typeof dateNow !== 'undefined') {\n    _emscripten_get_now = dateNow;\n  } else _emscripten_get_now = function() { return performance.now(); }\n  ;\n  \n  var _emscripten_get_now_is_monotonic=true;;\n  \n  function setErrNo(value) {\n      HEAP32[((___errno_location())>>2)]=value;\n      return value;\n    }\n  function _clock_gettime(clk_id, tp) {\n      // int clock_gettime(clockid_t clk_id, struct timespec *tp);\n      var now;\n      if (clk_id === 0) {\n        now = Date.now();\n      } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {\n        now = _emscripten_get_now();\n      } else {\n        setErrNo(28);\n        return -1;\n      }\n      HEAP32[((tp)>>2)]=(now/1000)|0; // seconds\n      HEAP32[(((tp)+(4))>>2)]=((now % 1000)*1000*1000)|0; // nanoseconds\n      return 0;\n    }\n  function ___clock_gettime(a0,a1\n  ) {\n  return _clock_gettime(a0,a1);\n  }\n\n  var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream, curr) {\n        var buffer = SYSCALLS.buffers[stream];\n        assert(buffer);\n        if (curr === 0 || curr === 10) {\n          (stream === 1 ? out : err)(UTF8ArrayToString(buffer, 0));\n          buffer.length = 0;\n        } else {\n          buffer.push(curr);\n        }\n      },varargs:undefined,get:function() {\n        assert(SYSCALLS.varargs != undefined);\n        SYSCALLS.varargs += 4;\n        var ret = HEAP32[(((SYSCALLS.varargs)-(4))>>2)];\n        return ret;\n      },getStr:function(ptr) {\n        var ret = UTF8ToString(ptr);\n        return ret;\n      },get64:function(low, high) {\n        if (low >= 0) assert(high === 0);\n        else assert(high === -1);\n        return low;\n      }};\n  function ___sys_fcntl64(fd, cmd, varargs) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 1, fd, cmd, varargs);\n  SYSCALLS.varargs = varargs;\n  \n      return 0;\n    }\n  \n\n  function ___sys_open(path, flags, varargs) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 1, path, flags, varargs);\n  SYSCALLS.varargs = varargs;\n  \n  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');\n  }\n  \n\n  function ___sys_read(fd, buf, count) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(3, 1, fd, buf, count);\n  \n  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');\n  }\n  \n\n  function __emscripten_notify_thread_queue(targetThreadId, mainThreadId) {\n      if (targetThreadId == mainThreadId) {\n        postMessage({'cmd' : 'processQueuedMainThreadWork'});\n      } else if (ENVIRONMENT_IS_PTHREAD) {\n        postMessage({'targetThread': targetThreadId, 'cmd': 'processThreadQueue'});\n      } else {\n        var pthread = PThread.pthreads[targetThreadId];\n        var worker = pthread && pthread.worker;\n        if (!worker) {\n          err('Cannot send message to thread with ID ' + targetThreadId + ', unknown thread ID!');\n          return /*0*/;\n        }\n        worker.postMessage({'cmd' : 'processThreadQueue'});\n      }\n      return 1;\n    }\n\n  function _abort() {\n      abort();\n    }\n\n  function _clock() {\n      if (_clock.start === undefined) _clock.start = Date.now();\n      return ((Date.now() - _clock.start) * (1000000 / 1000))|0;\n    }\n\n  function _emscripten_asm_const_int(code, sigPtr, argbuf) {\n      var args = readAsmConstArgs(sigPtr, argbuf);\n      return ASM_CONSTS[code].apply(null, args);\n    }\n\n  function _emscripten_check_blocking_allowed() {\n      if (ENVIRONMENT_IS_NODE) return;\n  \n      if (ENVIRONMENT_IS_WORKER) return; // Blocking in a worker/pthread is fine.\n  \n      warnOnce('Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread');\n  \n    }\n\n  function _emscripten_conditional_set_current_thread_status_js(expectedStatus, newStatus) {\n    }\n  function _emscripten_conditional_set_current_thread_status(expectedStatus, newStatus) {\n      expectedStatus = expectedStatus|0;\n      newStatus = newStatus|0;\n    }\n\n  function _emscripten_futex_wait(addr, val, timeout) {\n      if (addr <= 0 || addr > HEAP8.length || addr&3 != 0) return -28;\n      // We can do a normal blocking wait anywhere but on the main browser thread.\n      if (!ENVIRONMENT_IS_WEB) {\n        var ret = Atomics.wait(HEAP32, addr >> 2, val, timeout);\n        if (ret === 'timed-out') return -73;\n        if (ret === 'not-equal') return -6;\n        if (ret === 'ok') return 0;\n        throw 'Atomics.wait returned an unexpected value ' + ret;\n      } else {\n        // First, check if the value is correct for us to wait on.\n        if (Atomics.load(HEAP32, addr >> 2) != val) {\n          return -6;\n        }\n  \n        // Atomics.wait is not available in the main browser thread, so simulate it via busy spinning.\n        var tNow = performance.now();\n        var tEnd = tNow + timeout;\n  \n        // Register globally which address the main thread is simulating to be\n        // waiting on. When zero, the main thread is not waiting on anything, and on\n        // nonzero, the contents of the address pointed by PThread.mainThreadFutex\n        // tell which address the main thread is simulating its wait on.\n        // We need to be careful of recursion here: If we wait on a futex, and\n        // then call _emscripten_main_thread_process_queued_calls() below, that\n        // will call code that takes the proxying mutex - which can once more\n        // reach this code in a nested call. To avoid interference between the\n        // two (there is just a single mainThreadFutex at a time), unmark\n        // ourselves before calling the potentially-recursive call. See below for\n        // how we handle the case of our futex being notified during the time in\n        // between when we are not set as the value of mainThreadFutex.\n        assert(PThread.mainThreadFutex > 0);\n        var lastAddr = Atomics.exchange(HEAP32, PThread.mainThreadFutex >> 2, addr);\n        // We must not have already been waiting.\n        assert(lastAddr == 0);\n  \n        while (1) {\n          // Check for a timeout.\n          tNow = performance.now();\n          if (tNow > tEnd) {\n            // We timed out, so stop marking ourselves as waiting.\n            lastAddr = Atomics.exchange(HEAP32, PThread.mainThreadFutex >> 2, 0);\n            // The current value must have been our address which we set, or\n            // in a race it was set to 0 which means another thread just allowed\n            // us to run, but (tragically) that happened just a bit too late.\n            assert(lastAddr == addr || lastAddr == 0);\n            return -73;\n          }\n          // We are performing a blocking loop here, so we must handle proxied\n          // events from pthreads, to avoid deadlocks.\n          // Note that we have to do so carefully, as we may take a lock while\n          // doing so, which can recurse into this function; stop marking\n          // ourselves as waiting while we do so.\n          lastAddr = Atomics.exchange(HEAP32, PThread.mainThreadFutex >> 2, 0);\n          assert(lastAddr == addr || lastAddr == 0);\n          if (lastAddr == 0) {\n            // We were told to stop waiting, so stop.\n            break;\n          }\n          _emscripten_main_thread_process_queued_calls();\n  \n          // Check the value, as if we were starting the futex all over again.\n          // This handles the following case:\n          //\n          //  * wait on futex A\n          //  * recurse into emscripten_main_thread_process_queued_calls(),\n          //    which waits on futex B. that sets the mainThreadFutex address to\n          //    futex B, and there is no longer any mention of futex A.\n          //  * a worker is done with futex A. it checks mainThreadFutex but does\n          //    not see A, so it does nothing special for the main thread.\n          //  * a worker is done with futex B. it flips mainThreadMutex from B\n          //    to 0, ending the wait on futex B.\n          //  * we return to the wait on futex A. mainThreadFutex is 0, but that\n          //    is because of futex B being done - we can't tell from\n          //    mainThreadFutex whether A is done or not. therefore, check the\n          //    memory value of the futex.\n          //\n          // That case motivates the design here. Given that, checking the memory\n          // address is also necessary for other reasons: we unset and re-set our\n          // address in mainThreadFutex around calls to\n          // emscripten_main_thread_process_queued_calls(), and a worker could\n          // attempt to wake us up right before/after such times.\n          //\n          // Note that checking the memory value of the futex is valid to do: we\n          // could easily have been delayed (relative to the worker holding on\n          // to futex A), which means we could be starting all of our work at the\n          // later time when there is no need to block. The only \"odd\" thing is\n          // that we may have caused side effects in that \"delay\" time. But the\n          // only side effects we can have are to call\n          // emscripten_main_thread_process_queued_calls(). That is always ok to\n          // do on the main thread (it's why it is ok for us to call it in the\n          // middle of this function, and elsewhere). So if we check the value\n          // here and return, it's the same is if what happened on the main thread\n          // was the same as calling emscripten_main_thread_process_queued_calls()\n          // a few times times before calling emscripten_futex_wait().\n          if (Atomics.load(HEAP32, addr >> 2) != val) {\n            return -6;\n          }\n  \n          // Mark us as waiting once more, and continue the loop.\n          lastAddr = Atomics.exchange(HEAP32, PThread.mainThreadFutex >> 2, addr);\n          assert(lastAddr == 0);\n        }\n        return 0;\n      }\n    }\n\n\n\n  function _emscripten_is_main_browser_thread() {\n      // Semantically the same as testing \"!ENVIRONMENT_IS_WORKER\" outside the asm.js scope\n      return __pthread_is_main_browser_thread|0;\n    }\n\n  function _emscripten_is_main_runtime_thread() {\n      // Semantically the same as testing \"!ENVIRONMENT_IS_PTHREAD\" outside the asm.js scope\n      return __pthread_is_main_runtime_thread|0;\n    }\n\n  function _emscripten_memcpy_big(dest, src, num) {\n      HEAPU8.copyWithin(dest, src, src + num);\n    }\n\n  function _emscripten_num_logical_cores() {\n      if (ENVIRONMENT_IS_NODE) return require('os').cpus().length;\n      return navigator['hardwareConcurrency'];\n    }\n\n  /** @type{function(number, (number|boolean), ...(number|boolean))} */\n  function _emscripten_proxy_to_main_thread_js(index, sync) {\n      // Additional arguments are passed after those two, which are the actual\n      // function arguments.\n      // The serialization buffer contains the number of call params, and then\n      // all the args here.\n      // We also pass 'sync' to C separately, since C needs to look at it.\n      var numCallArgs = arguments.length - 2;\n      if (numCallArgs > 20-1) throw 'emscripten_proxy_to_main_thread_js: Too many arguments ' + numCallArgs + ' to proxied function idx=' + index + ', maximum supported is ' + (20-1) + '!';\n      // Allocate a buffer, which will be copied by the C code.\n      var stack = stackSave();\n      // First passed parameter specifies the number of arguments to the function.\n      var args = stackAlloc(numCallArgs * 8);\n      var b = args >> 3;\n      for (var i = 0; i < numCallArgs; i++) {\n        HEAPF64[b + i] = arguments[2 + i];\n      }\n      var ret = _emscripten_run_in_main_runtime_thread_js(index, numCallArgs, args, sync);\n      stackRestore(stack);\n      return ret;\n    }\n  \n  var _emscripten_receive_on_main_thread_js_callArgs=[];\n  \n  var readAsmConstArgsArray=[];\n  function readAsmConstArgs(sigPtr, buf) {\n      // Nobody should have mutated _readAsmConstArgsArray underneath us to be something else than an array.\n      assert(Array.isArray(readAsmConstArgsArray));\n      // The input buffer is allocated on the stack, so it must be stack-aligned.\n      assert(buf % 16 == 0);\n      readAsmConstArgsArray.length = 0;\n      var ch;\n      // Most arguments are i32s, so shift the buffer pointer so it is a plain\n      // index into HEAP32.\n      buf >>= 2;\n      while (ch = HEAPU8[sigPtr++]) {\n        assert(ch === 100/*'d'*/ || ch === 102/*'f'*/ || ch === 105 /*'i'*/);\n        // A double takes two 32-bit slots, and must also be aligned - the backend\n        // will emit padding to avoid that.\n        var double = ch < 105;\n        if (double && (buf & 1)) buf++;\n        readAsmConstArgsArray.push(double ? HEAPF64[buf++ >> 1] : HEAP32[buf]);\n        ++buf;\n      }\n      return readAsmConstArgsArray;\n    }\n  function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {\n      _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;\n      var b = args >> 3;\n      for (var i = 0; i < numCallArgs; i++) {\n        _emscripten_receive_on_main_thread_js_callArgs[i] = HEAPF64[b + i];\n      }\n      // Proxied JS library funcs are encoded as positive values, and\n      // EM_ASMs as negative values (see include_asm_consts)\n      var isEmAsmConst = index < 0;\n      var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];\n      assert(func.length == numCallArgs, 'Call args mismatch in emscripten_receive_on_main_thread_js');\n      return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs);\n    }\n\n  function _emscripten_get_heap_size() {\n      return HEAPU8.length;\n    }\n  \n  function abortOnCannotGrowMemory(requestedSize) {\n      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');\n    }\n  function _emscripten_resize_heap(requestedSize) {\n      requestedSize = requestedSize >>> 0;\n      abortOnCannotGrowMemory(requestedSize);\n    }\n\n  var JSEvents={inEventHandler:0,removeAllEventListeners:function() {\n        for(var i = JSEvents.eventHandlers.length-1; i >= 0; --i) {\n          JSEvents._removeHandler(i);\n        }\n        JSEvents.eventHandlers = [];\n        JSEvents.deferredCalls = [];\n      },registerRemoveEventListeners:function() {\n        if (!JSEvents.removeEventListenersRegistered) {\n          __ATEXIT__.push(JSEvents.removeAllEventListeners);\n          JSEvents.removeEventListenersRegistered = true;\n        }\n      },deferredCalls:[],deferCall:function(targetFunction, precedence, argsList) {\n        function arraysHaveEqualContent(arrA, arrB) {\n          if (arrA.length != arrB.length) return false;\n  \n          for(var i in arrA) {\n            if (arrA[i] != arrB[i]) return false;\n          }\n          return true;\n        }\n        // Test if the given call was already queued, and if so, don't add it again.\n        for(var i in JSEvents.deferredCalls) {\n          var call = JSEvents.deferredCalls[i];\n          if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {\n            return;\n          }\n        }\n        JSEvents.deferredCalls.push({\n          targetFunction: targetFunction,\n          precedence: precedence,\n          argsList: argsList\n        });\n  \n        JSEvents.deferredCalls.sort(function(x,y) { return x.precedence < y.precedence; });\n      },removeDeferredCalls:function(targetFunction) {\n        for(var i = 0; i < JSEvents.deferredCalls.length; ++i) {\n          if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {\n            JSEvents.deferredCalls.splice(i, 1);\n            --i;\n          }\n        }\n      },canPerformEventHandlerRequests:function() {\n        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;\n      },runDeferredCalls:function() {\n        if (!JSEvents.canPerformEventHandlerRequests()) {\n          return;\n        }\n        for(var i = 0; i < JSEvents.deferredCalls.length; ++i) {\n          var call = JSEvents.deferredCalls[i];\n          JSEvents.deferredCalls.splice(i, 1);\n          --i;\n          call.targetFunction.apply(null, call.argsList);\n        }\n      },eventHandlers:[],removeAllHandlersOnTarget:function(target, eventTypeString) {\n        for(var i = 0; i < JSEvents.eventHandlers.length; ++i) {\n          if (JSEvents.eventHandlers[i].target == target && \n            (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {\n             JSEvents._removeHandler(i--);\n           }\n        }\n      },_removeHandler:function(i) {\n        var h = JSEvents.eventHandlers[i];\n        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);\n        JSEvents.eventHandlers.splice(i, 1);\n      },registerOrRemoveHandler:function(eventHandler) {\n        var jsEventHandler = function jsEventHandler(event) {\n          // Increment nesting count for the event handler.\n          ++JSEvents.inEventHandler;\n          JSEvents.currentEventHandler = eventHandler;\n          // Process any old deferred calls the user has placed.\n          JSEvents.runDeferredCalls();\n          // Process the actual event, calls back to user C code handler.\n          eventHandler.handlerFunc(event);\n          // Process any new deferred calls that were placed right now from this event handler.\n          JSEvents.runDeferredCalls();\n          // Out of event handler - restore nesting count.\n          --JSEvents.inEventHandler;\n        };\n        \n        if (eventHandler.callbackfunc) {\n          eventHandler.eventListenerFunc = jsEventHandler;\n          eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);\n          JSEvents.eventHandlers.push(eventHandler);\n          JSEvents.registerRemoveEventListeners();\n        } else {\n          for(var i = 0; i < JSEvents.eventHandlers.length; ++i) {\n            if (JSEvents.eventHandlers[i].target == eventHandler.target\n             && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {\n               JSEvents._removeHandler(i--);\n             }\n          }\n        }\n      },queueEventHandlerOnThread_iiii:function(targetThread, eventHandlerFunc, eventTypeId, eventData, userData) {\n        var stackTop = stackSave();\n        var varargs = stackAlloc(12);\n        HEAP32[((varargs)>>2)]=eventTypeId;\n        HEAP32[(((varargs)+(4))>>2)]=eventData;\n        HEAP32[(((varargs)+(8))>>2)]=userData;\n        __emscripten_call_on_thread(0, targetThread, 637534208, eventHandlerFunc, eventData, varargs);\n        stackRestore(stackTop);\n      },getTargetThreadForEventCallback:function(targetThread) {\n        switch(targetThread) {\n          case 1: return 0; // The event callback for the current event should be called on the main browser thread. (0 == don't proxy)\n          case 2: return PThread.currentProxiedOperationCallerThread; // The event callback for the current event should be backproxied to the thread that is registering the event.\n          default: return targetThread; // The event callback for the current event should be proxied to the given specific thread.\n        }\n      },getNodeNameForTarget:function(target) {\n        if (!target) return '';\n        if (target == window) return '#window';\n        if (target == screen) return '#screen';\n        return (target && target.nodeName) ? target.nodeName : '';\n      },fullscreenEnabled:function() {\n        return document.fullscreenEnabled\n        // Safari 13.0.3 on macOS Catalina 10.15.1 still ships with prefixed webkitFullscreenEnabled.\n        // TODO: If Safari at some point ships with unprefixed version, update the version check above.\n        || document.webkitFullscreenEnabled\n         ;\n      }};\n  \n  function stringToNewUTF8(jsString) {\n      var length = lengthBytesUTF8(jsString)+1;\n      var cString = _malloc(length);\n      stringToUTF8(jsString, cString, length);\n      return cString;\n    }\n  function _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height) {\n      var stackTop = stackSave();\n      var varargs = stackAlloc(12);\n      var targetCanvasPtr = 0;\n      if (targetCanvas) {\n        targetCanvasPtr = stringToNewUTF8(targetCanvas);\n      }\n      HEAP32[((varargs)>>2)]=targetCanvasPtr;\n      HEAP32[(((varargs)+(4))>>2)]=width;\n      HEAP32[(((varargs)+(8))>>2)]=height;\n      // Note: If we are also a pthread, the call below could theoretically be done synchronously. However if the target pthread is waiting for a mutex from us, then\n      // these two threads will deadlock. At the moment, we'd like to consider that this kind of deadlock would be an Emscripten runtime bug, although if\n      // emscripten_set_canvas_element_size() was documented to require running an event in the queue of thread that owns the OffscreenCanvas, then that might be ok.\n      // (safer this way however)\n      __emscripten_call_on_thread(0, targetThread, 657457152, 0, targetCanvasPtr /* satellite data */, varargs);\n      stackRestore(stackTop);\n    }\n  function _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, targetCanvas, width, height) {\n      targetCanvas = targetCanvas ? UTF8ToString(targetCanvas) : '';\n      _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height);\n    }\n  \n  function maybeCStringToJsString(cString) {\n      // \"cString > 2\" checks if the input is a number, and isn't of the special\n      // values we accept here, EMSCRIPTEN_EVENT_TARGET_* (which map to 0, 1, 2).\n      // In other words, if cString > 2 then it's a pointer to a valid place in\n      // memory, and points to a C string.\n      return cString > 2 ? UTF8ToString(cString) : cString;\n    }\n  \n  var specialHTMLTargets=[0, typeof document !== 'undefined' ? document : 0, typeof window !== 'undefined' ? window : 0];\n  function findEventTarget(target) {\n      target = maybeCStringToJsString(target);\n      var domElement = specialHTMLTargets[target] || (typeof document !== 'undefined' ? document.querySelector(target) : undefined);\n      return domElement;\n    }\n  function findCanvasEventTarget(target) { return findEventTarget(target); }\n  function _emscripten_set_canvas_element_size_calling_thread(target, width, height) {\n      var canvas = findCanvasEventTarget(target);\n      if (!canvas) return -4;\n  \n      if (canvas.canvasSharedPtr) {\n        // N.B. We hold the canvasSharedPtr info structure as the authoritative source for specifying the size of a canvas\n        // since the actual canvas size changes are asynchronous if the canvas is owned by an OffscreenCanvas on another thread.\n        // Therefore when setting the size, eagerly set the size of the canvas on the calling thread here, though this thread\n        // might not be the one that actually ends up specifying the size, but the actual size change may be dispatched\n        // as an asynchronous event below.\n        HEAP32[((canvas.canvasSharedPtr)>>2)]=width;\n        HEAP32[(((canvas.canvasSharedPtr)+(4))>>2)]=height;\n      }\n  \n      if (canvas.offscreenCanvas || !canvas.controlTransferredOffscreen) {\n        if (canvas.offscreenCanvas) canvas = canvas.offscreenCanvas;\n        var autoResizeViewport = false;\n        if (canvas.GLctxObject && canvas.GLctxObject.GLctx) {\n          var prevViewport = canvas.GLctxObject.GLctx.getParameter(0xBA2 /* GL_VIEWPORT */);\n          // TODO: Perhaps autoResizeViewport should only be true if FBO 0 is currently active?\n          autoResizeViewport = (prevViewport[0] === 0 && prevViewport[1] === 0 && prevViewport[2] === canvas.width && prevViewport[3] === canvas.height);\n        }\n        canvas.width = width;\n        canvas.height = height;\n        if (autoResizeViewport) {\n          // TODO: Add -s CANVAS_RESIZE_SETS_GL_VIEWPORT=0/1 option (default=1). This is commonly done and several graphics engines depend on this,\n          // but this can be quite disruptive.\n          canvas.GLctxObject.GLctx.viewport(0, 0, width, height);\n        }\n      } else if (canvas.canvasSharedPtr) {\n        var targetThread = HEAP32[(((canvas.canvasSharedPtr)+(8))>>2)];\n        _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, target, width, height);\n        return 1; // This will have to be done asynchronously\n      } else {\n        return -4;\n      }\n      return 0;\n    }\n  \n  function _emscripten_set_canvas_element_size_main_thread(target, width, height) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(4, 1, target, width, height);\n   return _emscripten_set_canvas_element_size_calling_thread(target, width, height); }\n  \n  function _emscripten_set_canvas_element_size(target, width, height) {\n      var canvas = findCanvasEventTarget(target);\n      if (canvas) {\n        return _emscripten_set_canvas_element_size_calling_thread(target, width, height);\n      } else {\n        return _emscripten_set_canvas_element_size_main_thread(target, width, height);\n      }\n    }\n\n  function _emscripten_set_current_thread_status_js(newStatus) {\n    }\n  function _emscripten_set_current_thread_status(newStatus) {\n      newStatus = newStatus|0;\n    }\n\n  function __webgl_enable_ANGLE_instanced_arrays(ctx) {\n      // Extension available in WebGL 1 from Firefox 26 and Google Chrome 30 onwards. Core feature in WebGL 2.\n      var ext = ctx.getExtension('ANGLE_instanced_arrays');\n      if (ext) {\n        ctx['vertexAttribDivisor'] = function(index, divisor) { ext['vertexAttribDivisorANGLE'](index, divisor); };\n        ctx['drawArraysInstanced'] = function(mode, first, count, primcount) { ext['drawArraysInstancedANGLE'](mode, first, count, primcount); };\n        ctx['drawElementsInstanced'] = function(mode, count, type, indices, primcount) { ext['drawElementsInstancedANGLE'](mode, count, type, indices, primcount); };\n        return 1;\n      }\n    }\n  \n  function __webgl_enable_OES_vertex_array_object(ctx) {\n      // Extension available in WebGL 1 from Firefox 25 and WebKit 536.28/desktop Safari 6.0.3 onwards. Core feature in WebGL 2.\n      var ext = ctx.getExtension('OES_vertex_array_object');\n      if (ext) {\n        ctx['createVertexArray'] = function() { return ext['createVertexArrayOES'](); };\n        ctx['deleteVertexArray'] = function(vao) { ext['deleteVertexArrayOES'](vao); };\n        ctx['bindVertexArray'] = function(vao) { ext['bindVertexArrayOES'](vao); };\n        ctx['isVertexArray'] = function(vao) { return ext['isVertexArrayOES'](vao); };\n        return 1;\n      }\n    }\n  \n  function __webgl_enable_WEBGL_draw_buffers(ctx) {\n      // Extension available in WebGL 1 from Firefox 28 onwards. Core feature in WebGL 2.\n      var ext = ctx.getExtension('WEBGL_draw_buffers');\n      if (ext) {\n        ctx['drawBuffers'] = function(n, bufs) { ext['drawBuffersWEBGL'](n, bufs); };\n        return 1;\n      }\n    }\n  \n  function __webgl_enable_WEBGL_multi_draw(ctx) {\n      // Closure is expected to be allowed to minify the '.multiDrawWebgl' property, so not accessing it quoted.\n      return !!(ctx.multiDrawWebgl = ctx.getExtension('WEBGL_multi_draw'));\n    }\n  var GL={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],uniforms:[],shaders:[],vaos:[],contexts:{},offscreenCanvases:{},timerQueriesEXT:[],programInfos:{},stringCache:{},unpackAlignment:4,recordError:function recordError(errorCode) {\n        if (!GL.lastError) {\n          GL.lastError = errorCode;\n        }\n      },getNewId:function(table) {\n        var ret = GL.counter++;\n        for (var i = table.length; i < ret; i++) {\n          table[i] = null;\n        }\n        return ret;\n      },getSource:function(shader, count, string, length) {\n        var source = '';\n        for (var i = 0; i < count; ++i) {\n          var len = length ? HEAP32[(((length)+(i*4))>>2)] : -1;\n          source += UTF8ToString(HEAP32[(((string)+(i*4))>>2)], len < 0 ? undefined : len);\n        }\n        return source;\n      },createContext:function(canvas, webGLContextAttributes) {\n  \n        var ctx = \n          (canvas.getContext(\"webgl\", webGLContextAttributes)\n            // https://caniuse.com/#feat=webgl\n            );\n  \n        if (!ctx) return 0;\n  \n        var handle = GL.registerContext(ctx, webGLContextAttributes);\n  \n        return handle;\n      },registerContext:function(ctx, webGLContextAttributes) {\n        // with pthreads a context is a location in memory with some synchronized data between threads\n        var handle = _malloc(8);\n        HEAP32[(((handle)+(4))>>2)]=_pthread_self(); // the thread pointer of the thread that owns the control of the context\n  \n        var context = {\n          handle: handle,\n          attributes: webGLContextAttributes,\n          version: webGLContextAttributes.majorVersion,\n          GLctx: ctx\n        };\n  \n        // Store the created context object so that we can access the context given a canvas without having to pass the parameters again.\n        if (ctx.canvas) ctx.canvas.GLctxObject = context;\n        GL.contexts[handle] = context;\n        if (typeof webGLContextAttributes.enableExtensionsByDefault === 'undefined' || webGLContextAttributes.enableExtensionsByDefault) {\n          GL.initExtensions(context);\n        }\n  \n        return handle;\n      },makeContextCurrent:function(contextHandle) {\n  \n        GL.currentContext = GL.contexts[contextHandle]; // Active Emscripten GL layer context object.\n        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx; // Active WebGL context object.\n        return !(contextHandle && !GLctx);\n      },getContext:function(contextHandle) {\n        return GL.contexts[contextHandle];\n      },deleteContext:function(contextHandle) {\n        if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;\n        if (typeof JSEvents === 'object') JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas); // Release all JS event handlers on the DOM element that the GL context is associated with since the context is now deleted.\n        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined; // Make sure the canvas object no longer refers to the context object so there are no GC surprises.\n        _free(GL.contexts[contextHandle].handle);\n        GL.contexts[contextHandle] = null;\n      },initExtensions:function(context) {\n        // If this function is called without a specific context object, init the extensions of the currently active context.\n        if (!context) context = GL.currentContext;\n  \n        if (context.initExtensionsDone) return;\n        context.initExtensionsDone = true;\n  \n        var GLctx = context.GLctx;\n  \n        // Detect the presence of a few extensions manually, this GL interop layer itself will need to know if they exist.\n  \n        // Extensions that are only available in WebGL 1 (the calls will be no-ops if called on a WebGL 2 context active)\n        __webgl_enable_ANGLE_instanced_arrays(GLctx);\n        __webgl_enable_OES_vertex_array_object(GLctx);\n        __webgl_enable_WEBGL_draw_buffers(GLctx);\n  \n        GLctx.disjointTimerQueryExt = GLctx.getExtension(\"EXT_disjoint_timer_query\");\n        __webgl_enable_WEBGL_multi_draw(GLctx);\n  \n        // These are the 'safe' feature-enabling extensions that don't add any performance impact related to e.g. debugging, and\n        // should be enabled by default so that client GLES2/GL code will not need to go through extra hoops to get its stuff working.\n        // As new extensions are ratified at http://www.khronos.org/registry/webgl/extensions/ , feel free to add your new extensions\n        // here, as long as they don't produce a performance impact for users that might not be using those extensions.\n        // E.g. debugging-related extensions should probably be off by default.\n        var automaticallyEnabledExtensions = [ // Khronos ratified WebGL extensions ordered by number (no debug extensions):\n                                               \"OES_texture_float\", \"OES_texture_half_float\", \"OES_standard_derivatives\",\n                                               \"OES_vertex_array_object\", \"WEBGL_compressed_texture_s3tc\", \"WEBGL_depth_texture\",\n                                               \"OES_element_index_uint\", \"EXT_texture_filter_anisotropic\", \"EXT_frag_depth\",\n                                               \"WEBGL_draw_buffers\", \"ANGLE_instanced_arrays\", \"OES_texture_float_linear\",\n                                               \"OES_texture_half_float_linear\", \"EXT_blend_minmax\", \"EXT_shader_texture_lod\",\n                                               \"EXT_texture_norm16\",\n                                               // Community approved WebGL extensions ordered by number:\n                                               \"WEBGL_compressed_texture_pvrtc\", \"EXT_color_buffer_half_float\", \"WEBGL_color_buffer_float\",\n                                               \"EXT_sRGB\", \"WEBGL_compressed_texture_etc1\", \"EXT_disjoint_timer_query\",\n                                               \"WEBGL_compressed_texture_etc\", \"WEBGL_compressed_texture_astc\", \"EXT_color_buffer_float\",\n                                               \"WEBGL_compressed_texture_s3tc_srgb\", \"EXT_disjoint_timer_query_webgl2\",\n                                               // Old style prefixed forms of extensions (but still currently used on e.g. iPhone Xs as\n                                               // tested on iOS 12.4.1):\n                                               \"WEBKIT_WEBGL_compressed_texture_pvrtc\"];\n  \n        function shouldEnableAutomatically(extension) {\n          var ret = false;\n          automaticallyEnabledExtensions.forEach(function(include) {\n            if (extension.indexOf(include) != -1) {\n              ret = true;\n            }\n          });\n          return ret;\n        }\n  \n        var exts = GLctx.getSupportedExtensions() || []; // .getSupportedExtensions() can return null if context is lost, so coerce to empty array.\n        exts.forEach(function(ext) {\n          if (automaticallyEnabledExtensions.indexOf(ext) != -1) {\n            GLctx.getExtension(ext); // Calling .getExtension enables that extension permanently, no need to store the return value to be enabled.\n          }\n        });\n      },populateUniformTable:function(program) {\n        var p = GL.programs[program];\n        var ptable = GL.programInfos[program] = {\n          uniforms: {},\n          maxUniformLength: 0, // This is eagerly computed below, since we already enumerate all uniforms anyway.\n          maxAttributeLength: -1, // This is lazily computed and cached, computed when/if first asked, \"-1\" meaning not computed yet.\n          maxUniformBlockNameLength: -1 // Lazily computed as well\n        };\n  \n        var utable = ptable.uniforms;\n        // A program's uniform table maps the string name of an uniform to an integer location of that uniform.\n        // The global GL.uniforms map maps integer locations to WebGLUniformLocations.\n        var numUniforms = GLctx.getProgramParameter(p, 0x8B86/*GL_ACTIVE_UNIFORMS*/);\n        for (var i = 0; i < numUniforms; ++i) {\n          var u = GLctx.getActiveUniform(p, i);\n  \n          var name = u.name;\n          ptable.maxUniformLength = Math.max(ptable.maxUniformLength, name.length+1);\n  \n          // If we are dealing with an array, e.g. vec4 foo[3], strip off the array index part to canonicalize that \"foo\", \"foo[]\",\n          // and \"foo[0]\" will mean the same. Loop below will populate foo[1] and foo[2].\n          if (name.slice(-1) == ']') {\n            name = name.slice(0, name.lastIndexOf('['));\n          }\n  \n          // Optimize memory usage slightly: If we have an array of uniforms, e.g. 'vec3 colors[3];', then\n          // only store the string 'colors' in utable, and 'colors[0]', 'colors[1]' and 'colors[2]' will be parsed as 'colors'+i.\n          // Note that for the GL.uniforms table, we still need to fetch the all WebGLUniformLocations for all the indices.\n          var loc = GLctx.getUniformLocation(p, name);\n          if (loc) {\n            var id = GL.getNewId(GL.uniforms);\n            utable[name] = [u.size, id];\n            GL.uniforms[id] = loc;\n  \n            for (var j = 1; j < u.size; ++j) {\n              var n = name + '['+j+']';\n              loc = GLctx.getUniformLocation(p, n);\n              id = GL.getNewId(GL.uniforms);\n  \n              GL.uniforms[id] = loc;\n            }\n          }\n        }\n      }};\n  \n  var __emscripten_webgl_power_preferences=['default', 'low-power', 'high-performance'];\n  function _emscripten_webgl_do_create_context(target, attributes) {\n      assert(attributes);\n      var contextAttributes = {};\n      var a = attributes >> 2;\n      contextAttributes['alpha'] = !!HEAP32[a + (0>>2)];\n      contextAttributes['depth'] = !!HEAP32[a + (4>>2)];\n      contextAttributes['stencil'] = !!HEAP32[a + (8>>2)];\n      contextAttributes['antialias'] = !!HEAP32[a + (12>>2)];\n      contextAttributes['premultipliedAlpha'] = !!HEAP32[a + (16>>2)];\n      contextAttributes['preserveDrawingBuffer'] = !!HEAP32[a + (20>>2)];\n      var powerPreference = HEAP32[a + (24>>2)];\n      contextAttributes['powerPreference'] = __emscripten_webgl_power_preferences[powerPreference];\n      contextAttributes['failIfMajorPerformanceCaveat'] = !!HEAP32[a + (28>>2)];\n      contextAttributes.majorVersion = HEAP32[a + (32>>2)];\n      contextAttributes.minorVersion = HEAP32[a + (36>>2)];\n      contextAttributes.enableExtensionsByDefault = HEAP32[a + (40>>2)];\n      contextAttributes.explicitSwapControl = HEAP32[a + (44>>2)];\n      contextAttributes.proxyContextToMainThread = HEAP32[a + (48>>2)];\n      contextAttributes.renderViaOffscreenBackBuffer = HEAP32[a + (52>>2)];\n  \n      var canvas = findCanvasEventTarget(target);\n  \n      if (!canvas) {\n        return 0;\n      }\n  \n      if (contextAttributes.explicitSwapControl) {\n        return 0;\n      }\n  \n      var contextHandle = GL.createContext(canvas, contextAttributes);\n      return contextHandle;\n    }\n  function _emscripten_webgl_create_context(a0,a1\n  ) {\n  return _emscripten_webgl_do_create_context(a0,a1);\n  }\n\n  var ENV={};\n  \n  function getExecutableName() {\n      return thisProgram || './this.program';\n    }\n  function getEnvStrings() {\n      if (!getEnvStrings.strings) {\n        // Default values.\n        // Browser language detection #8751\n        var lang = ((typeof navigator === 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';\n        var env = {\n          'USER': 'web_user',\n          'LOGNAME': 'web_user',\n          'PATH': '/',\n          'PWD': '/',\n          'HOME': '/home/web_user',\n          'LANG': lang,\n          '_': getExecutableName()\n        };\n        // Apply the user-provided values, if any.\n        for (var x in ENV) {\n          env[x] = ENV[x];\n        }\n        var strings = [];\n        for (var x in env) {\n          strings.push(x + '=' + env[x]);\n        }\n        getEnvStrings.strings = strings;\n      }\n      return getEnvStrings.strings;\n    }\n  function _environ_get(__environ, environ_buf) {\n      var bufSize = 0;\n      getEnvStrings().forEach(function(string, i) {\n        var ptr = environ_buf + bufSize;\n        HEAP32[(((__environ)+(i * 4))>>2)]=ptr;\n        writeAsciiToMemory(string, ptr);\n        bufSize += string.length + 1;\n      });\n      return 0;\n    }\n\n  function _environ_sizes_get(penviron_count, penviron_buf_size) {\n      var strings = getEnvStrings();\n      HEAP32[((penviron_count)>>2)]=strings.length;\n      var bufSize = 0;\n      strings.forEach(function(string) {\n        bufSize += string.length + 1;\n      });\n      HEAP32[((penviron_buf_size)>>2)]=bufSize;\n      return 0;\n    }\n\n  function _fd_close(fd) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(5, 1, fd);\n  \n      abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');\n      return 0;\n    }\n  \n\n  function _fd_fdstat_get(fd, pbuf) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(6, 1, fd, pbuf);\n  \n      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0\n      var type = fd == 1 || fd == 2 ? 2 : abort();\n      HEAP8[((pbuf)>>0)]=type;\n      // TODO HEAP16[(((pbuf)+(2))>>1)]=?;\n      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(8))>>2)]=tempI64[0],HEAP32[(((pbuf)+(12))>>2)]=tempI64[1]);\n      // TODO (tempI64 = [?>>>0,(tempDouble=?,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math.min((+(Math.floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[(((pbuf)+(16))>>2)]=tempI64[0],HEAP32[(((pbuf)+(20))>>2)]=tempI64[1]);\n      return 0;\n    }\n  \n\n  function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(7, 1, fd, offset_low, offset_high, whence, newOffset);\n  \n  abort('it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM');\n  }\n  \n\n  function flush_NO_FILESYSTEM() {\n      // flush anything remaining in the buffers during shutdown\n      if (typeof _fflush !== 'undefined') _fflush(0);\n      var buffers = SYSCALLS.buffers;\n      if (buffers[1].length) SYSCALLS.printChar(1, 10);\n      if (buffers[2].length) SYSCALLS.printChar(2, 10);\n    }\n  function _fd_write(fd, iov, iovcnt, pnum) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(8, 1, fd, iov, iovcnt, pnum);\n  \n      // hack to support printf in SYSCALLS_REQUIRE_FILESYSTEM=0\n      var num = 0;\n      for (var i = 0; i < iovcnt; i++) {\n        var ptr = HEAP32[(((iov)+(i*8))>>2)];\n        var len = HEAP32[(((iov)+(i*8 + 4))>>2)];\n        for (var j = 0; j < len; j++) {\n          SYSCALLS.printChar(fd, HEAPU8[ptr+j]);\n        }\n        num += len;\n      }\n      HEAP32[((pnum)>>2)]=num\n      return 0;\n    }\n  \n\n  function _gettimeofday(ptr) {\n      var now = Date.now();\n      HEAP32[((ptr)>>2)]=(now/1000)|0; // seconds\n      HEAP32[(((ptr)+(4))>>2)]=((now % 1000)*1000)|0; // microseconds\n      return 0;\n    }\n\n  function _gmtime_r(time, tmPtr) {\n      var date = new Date(HEAP32[((time)>>2)]*1000);\n      HEAP32[((tmPtr)>>2)]=date.getUTCSeconds();\n      HEAP32[(((tmPtr)+(4))>>2)]=date.getUTCMinutes();\n      HEAP32[(((tmPtr)+(8))>>2)]=date.getUTCHours();\n      HEAP32[(((tmPtr)+(12))>>2)]=date.getUTCDate();\n      HEAP32[(((tmPtr)+(16))>>2)]=date.getUTCMonth();\n      HEAP32[(((tmPtr)+(20))>>2)]=date.getUTCFullYear()-1900;\n      HEAP32[(((tmPtr)+(24))>>2)]=date.getUTCDay();\n      HEAP32[(((tmPtr)+(36))>>2)]=0;\n      HEAP32[(((tmPtr)+(32))>>2)]=0;\n      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);\n      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;\n      HEAP32[(((tmPtr)+(28))>>2)]=yday;\n      // Allocate a string \"GMT\" for us to point to.\n      if (!_gmtime_r.GMTString) _gmtime_r.GMTString = allocateUTF8(\"GMT\");\n      HEAP32[(((tmPtr)+(40))>>2)]=_gmtime_r.GMTString;\n      return tmPtr;\n    }\n\n  function _tzset() {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(9, 1);\n  \n      // TODO: Use (malleable) environment variables instead of system settings.\n      if (_tzset.called) return;\n      _tzset.called = true;\n  \n      var currentYear = new Date().getFullYear();\n      var winter = new Date(currentYear, 0, 1);\n      var summer = new Date(currentYear, 6, 1);\n      var winterOffset = winter.getTimezoneOffset();\n      var summerOffset = summer.getTimezoneOffset();\n  \n      // Local standard timezone offset. Local standard time is not adjusted for daylight savings.\n      // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST). \n      // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).\n      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);\n  \n      // timezone is specified as seconds west of UTC (\"The external variable\n      // `timezone` shall be set to the difference, in seconds, between\n      // Coordinated Universal Time (UTC) and local standard time.\"), the same\n      // as returned by stdTimezoneOffset.\n      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html\n      HEAP32[((__get_timezone())>>2)]=stdTimezoneOffset * 60;\n  \n      HEAP32[((__get_daylight())>>2)]=Number(winterOffset != summerOffset);\n  \n      function extractZone(date) {\n        var match = date.toTimeString().match(/\\(([A-Za-z ]+)\\)$/);\n        return match ? match[1] : \"GMT\";\n      };\n      var winterName = extractZone(winter);\n      var summerName = extractZone(summer);\n      var winterNamePtr = allocateUTF8(winterName);\n      var summerNamePtr = allocateUTF8(summerName);\n      if (summerOffset < winterOffset) {\n        // Northern hemisphere\n        HEAP32[((__get_tzname())>>2)]=winterNamePtr;\n        HEAP32[(((__get_tzname())+(4))>>2)]=summerNamePtr;\n      } else {\n        HEAP32[((__get_tzname())>>2)]=summerNamePtr;\n        HEAP32[(((__get_tzname())+(4))>>2)]=winterNamePtr;\n      }\n    }\n  \n  function _localtime_r(time, tmPtr) {\n      _tzset();\n      var date = new Date(HEAP32[((time)>>2)]*1000);\n      HEAP32[((tmPtr)>>2)]=date.getSeconds();\n      HEAP32[(((tmPtr)+(4))>>2)]=date.getMinutes();\n      HEAP32[(((tmPtr)+(8))>>2)]=date.getHours();\n      HEAP32[(((tmPtr)+(12))>>2)]=date.getDate();\n      HEAP32[(((tmPtr)+(16))>>2)]=date.getMonth();\n      HEAP32[(((tmPtr)+(20))>>2)]=date.getFullYear()-1900;\n      HEAP32[(((tmPtr)+(24))>>2)]=date.getDay();\n  \n      var start = new Date(date.getFullYear(), 0, 1);\n      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;\n      HEAP32[(((tmPtr)+(28))>>2)]=yday;\n      HEAP32[(((tmPtr)+(36))>>2)]=-(date.getTimezoneOffset() * 60);\n  \n      // Attention: DST is in December in South, and some regions don't have DST at all.\n      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();\n      var winterOffset = start.getTimezoneOffset();\n      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;\n      HEAP32[(((tmPtr)+(32))>>2)]=dst;\n  \n      var zonePtr = HEAP32[(((__get_tzname())+(dst ? 4 : 0))>>2)];\n      HEAP32[(((tmPtr)+(40))>>2)]=zonePtr;\n  \n      return tmPtr;\n    }\n\n  function _mktime(tmPtr) {\n      _tzset();\n      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,\n                          HEAP32[(((tmPtr)+(16))>>2)],\n                          HEAP32[(((tmPtr)+(12))>>2)],\n                          HEAP32[(((tmPtr)+(8))>>2)],\n                          HEAP32[(((tmPtr)+(4))>>2)],\n                          HEAP32[((tmPtr)>>2)],\n                          0);\n  \n      // There's an ambiguous hour when the time goes back; the tm_isdst field is\n      // used to disambiguate it.  Date() basically guesses, so we fix it up if it\n      // guessed wrong, or fill in tm_isdst with the guess if it's -1.\n      var dst = HEAP32[(((tmPtr)+(32))>>2)];\n      var guessedOffset = date.getTimezoneOffset();\n      var start = new Date(date.getFullYear(), 0, 1);\n      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();\n      var winterOffset = start.getTimezoneOffset();\n      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South\n      if (dst < 0) {\n        // Attention: some regions don't have DST at all.\n        HEAP32[(((tmPtr)+(32))>>2)]=Number(summerOffset != winterOffset && dstOffset == guessedOffset);\n      } else if ((dst > 0) != (dstOffset == guessedOffset)) {\n        var nonDstOffset = Math.max(winterOffset, summerOffset);\n        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;\n        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.\n        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);\n      }\n  \n      HEAP32[(((tmPtr)+(24))>>2)]=date.getDay();\n      var yday = ((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))|0;\n      HEAP32[(((tmPtr)+(28))>>2)]=yday;\n  \n      return (date.getTime() / 1000)|0;\n    }\n\n  function _pthread_cleanup_pop(execute) {\n      var routine = PThread.threadExitHandlers.pop();\n      if (execute) routine();\n    }\n\n  function _pthread_cleanup_push(routine, arg) {\n      PThread.threadExitHandlers.push(function() { wasmTable.get(routine)(arg) });\n    }\n\n  function spawnThread(threadParams) {\n      if (ENVIRONMENT_IS_PTHREAD) throw 'Internal Error! spawnThread() can only ever be called from main application thread!';\n  \n      var worker = PThread.getNewWorker();\n  \n      if (worker.pthread !== undefined) throw 'Internal error!';\n      if (!threadParams.pthread_ptr) throw 'Internal error, no pthread ptr!';\n      PThread.runningWorkers.push(worker);\n  \n      // Allocate memory for thread-local storage and initialize it to zero.\n      var tlsMemory = _malloc(128 * 4);\n      for (var i = 0; i < 128; ++i) {\n        HEAP32[(((tlsMemory)+(i*4))>>2)]=0;\n      }\n  \n      var stackHigh = threadParams.stackBase + threadParams.stackSize;\n  \n      // Create a pthread info object to represent this thread.\n      var pthread = PThread.pthreads[threadParams.pthread_ptr] = {\n        worker: worker,\n        stackBase: threadParams.stackBase,\n        stackSize: threadParams.stackSize,\n        allocatedOwnStack: threadParams.allocatedOwnStack,\n        thread: threadParams.pthread_ptr,\n        // Info area for this thread in Emscripten HEAP (shared)\n        threadInfoStruct: threadParams.pthread_ptr\n      };\n      var tis = pthread.threadInfoStruct >> 2;\n      Atomics.store(HEAPU32, tis + (0 >> 2), 0); // threadStatus <- 0, meaning not yet exited.\n      Atomics.store(HEAPU32, tis + (4 >> 2), 0); // threadExitCode <- 0.\n      Atomics.store(HEAPU32, tis + (8 >> 2), 0); // profilerBlock <- 0.\n      Atomics.store(HEAPU32, tis + (68 >> 2), threadParams.detached);\n      Atomics.store(HEAPU32, tis + (104 >> 2), tlsMemory); // Init thread-local-storage memory array.\n      Atomics.store(HEAPU32, tis + (48 >> 2), 0); // Mark initial status to unused.\n      Atomics.store(HEAPU32, tis + (40 >> 2), pthread.threadInfoStruct); // Main thread ID.\n      Atomics.store(HEAPU32, tis + (44 >> 2), 42); // Process ID.\n  \n      Atomics.store(HEAPU32, tis + (108 >> 2), threadParams.stackSize);\n      Atomics.store(HEAPU32, tis + (84 >> 2), threadParams.stackSize);\n      Atomics.store(HEAPU32, tis + (80 >> 2), stackHigh);\n      Atomics.store(HEAPU32, tis + (108 + 8 >> 2), stackHigh);\n      Atomics.store(HEAPU32, tis + (108 + 12 >> 2), threadParams.detached);\n      Atomics.store(HEAPU32, tis + (108 + 20 >> 2), threadParams.schedPolicy);\n      Atomics.store(HEAPU32, tis + (108 + 24 >> 2), threadParams.schedPrio);\n  \n      var global_libc = _emscripten_get_global_libc();\n      var global_locale = global_libc + 40;\n      Atomics.store(HEAPU32, tis + (176 >> 2), global_locale);\n  \n      worker.pthread = pthread;\n      var msg = {\n          'cmd': 'run',\n          'start_routine': threadParams.startRoutine,\n          'arg': threadParams.arg,\n          'threadInfoStruct': threadParams.pthread_ptr,\n          'selfThreadId': threadParams.pthread_ptr, // TODO: Remove this since thread ID is now the same as the thread address.\n          'parentThreadId': threadParams.parent_pthread_ptr,\n          'stackBase': threadParams.stackBase,\n          'stackSize': threadParams.stackSize\n      };\n      worker.runPthread = function() {\n        // Ask the worker to start executing its pthread entry point function.\n        msg.time = performance.now();\n        worker.postMessage(msg, threadParams.transferList);\n      };\n      if (worker.loaded) {\n        worker.runPthread();\n        delete worker.runPthread;\n      }\n    }\n  \n  function _pthread_getschedparam(thread, policy, schedparam) {\n      if (!policy && !schedparam) return ERRNO_CODES.EINVAL;\n  \n      if (!thread) {\n        err('pthread_getschedparam called with a null thread pointer!');\n        return ERRNO_CODES.ESRCH;\n      }\n      var self = HEAP32[(((thread)+(12))>>2)];\n      if (self !== thread) {\n        err('pthread_getschedparam attempted on thread ' + thread + ', which does not point to a valid thread, or does not exist anymore!');\n        return ERRNO_CODES.ESRCH;\n      }\n  \n      var schedPolicy = Atomics.load(HEAPU32, (thread + 108 + 20 ) >> 2);\n      var schedPrio = Atomics.load(HEAPU32, (thread + 108 + 24 ) >> 2);\n  \n      if (policy) HEAP32[((policy)>>2)]=schedPolicy;\n      if (schedparam) HEAP32[((schedparam)>>2)]=schedPrio;\n      return 0;\n    }\n  \n  function _pthread_self() {\n      return __pthread_ptr|0;\n    }\n  Module[\"_pthread_self\"] = _pthread_self;\n  \n  function resetPrototype(constructor, attrs) {\n      var object = Object.create(constructor.prototype);\n      for (var key in attrs) {\n        if (attrs.hasOwnProperty(key)) {\n          object[key] = attrs[key];\n        }\n      }\n      return object;\n    }\n  function _pthread_create(pthread_ptr, attr, start_routine, arg) {\n      if (typeof SharedArrayBuffer === 'undefined') {\n        err('Current environment does not support SharedArrayBuffer, pthreads are not available!');\n        return 6;\n      }\n      if (!pthread_ptr) {\n        err('pthread_create called with a null thread pointer!');\n        return 28;\n      }\n  \n      // List of JS objects that will transfer ownership to the Worker hosting the thread\n      var transferList = [];\n      var error = 0;\n  \n      // Synchronously proxy the thread creation to main thread if possible. If we\n      // need to transfer ownership of objects, then proxy asynchronously via\n      // postMessage.\n      if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {\n        return _emscripten_sync_run_in_main_thread_4(687865856, pthread_ptr, attr, start_routine, arg);\n      }\n  \n      // If on the main thread, and accessing Canvas/OffscreenCanvas failed, abort\n      // with the detected error.\n      if (error) return error;\n  \n      var stackSize = 0;\n      var stackBase = 0;\n      // Default thread attr is PTHREAD_CREATE_JOINABLE, i.e. start as not detached.\n      var detached = 0;\n      var schedPolicy = 0; /*SCHED_OTHER*/\n      var schedPrio = 0;\n      if (attr) {\n        stackSize = HEAP32[((attr)>>2)];\n        // Musl has a convention that the stack size that is stored to the pthread\n        // attribute structure is always musl's #define DEFAULT_STACK_SIZE\n        // smaller than the actual created stack size. That is, stored stack size\n        // of 0 would mean a stack of DEFAULT_STACK_SIZE in size. All musl\n        // functions hide this impl detail, and offset the size transparently, so\n        // pthread_*() API user does not see this offset when operating with\n        // the pthread API. When reading the structure directly on JS side\n        // however, we need to offset the size manually here.\n        stackSize += 81920 /*DEFAULT_STACK_SIZE*/;\n        stackBase = HEAP32[(((attr)+(8))>>2)];\n        detached = HEAP32[(((attr)+(12))>>2)] !== 0/*PTHREAD_CREATE_JOINABLE*/;\n        var inheritSched = HEAP32[(((attr)+(16))>>2)] === 0/*PTHREAD_INHERIT_SCHED*/;\n        if (inheritSched) {\n          var prevSchedPolicy = HEAP32[(((attr)+(20))>>2)];\n          var prevSchedPrio = HEAP32[(((attr)+(24))>>2)];\n          // If we are inheriting the scheduling properties from the parent\n          // thread, we need to identify the parent thread properly - this\n          // function call may be getting proxied, in which case _pthread_self()\n          // will point to the thread performing the proxying, not the thread that\n          // initiated the call.\n          var parentThreadPtr = PThread.currentProxiedOperationCallerThread ? PThread.currentProxiedOperationCallerThread : _pthread_self();\n          _pthread_getschedparam(parentThreadPtr, attr + 20, attr + 24);\n          schedPolicy = HEAP32[(((attr)+(20))>>2)];\n          schedPrio = HEAP32[(((attr)+(24))>>2)];\n          HEAP32[(((attr)+(20))>>2)]=prevSchedPolicy;\n          HEAP32[(((attr)+(24))>>2)]=prevSchedPrio;\n        } else {\n          schedPolicy = HEAP32[(((attr)+(20))>>2)];\n          schedPrio = HEAP32[(((attr)+(24))>>2)];\n        }\n      } else {\n        // According to\n        // http://man7.org/linux/man-pages/man3/pthread_create.3.html, default\n        // stack size if not specified is 2 MB, so follow that convention.\n        stackSize = 2097152;\n      }\n      // If allocatedOwnStack == true, then the pthread impl maintains the stack allocation.\n      var allocatedOwnStack = stackBase == 0;\n      if (allocatedOwnStack) {\n        // Allocate a stack if the user doesn't want to place the stack in a\n        // custom memory area.\n        stackBase = _memalign(16, stackSize);\n      } else {\n        // Musl stores the stack base address assuming stack grows downwards, so\n        // adjust it to Emscripten convention that the\n        // stack grows upwards instead.\n        stackBase -= stackSize;\n        assert(stackBase > 0);\n      }\n  \n      // Allocate thread block (pthread_t structure).\n      var threadInfoStruct = _malloc(232);\n      // zero-initialize thread structure.\n      for (var i = 0; i < 232 >> 2; ++i) HEAPU32[(threadInfoStruct>>2) + i] = 0;\n      HEAP32[((pthread_ptr)>>2)]=threadInfoStruct;\n  \n      // The pthread struct has a field that points to itself - this is used as a\n      // magic ID to detect whether the pthread_t structure is 'alive'.\n      HEAP32[(((threadInfoStruct)+(12))>>2)]=threadInfoStruct;\n  \n      // pthread struct robust_list head should point to itself.\n      var headPtr = threadInfoStruct + 156;\n      HEAP32[((headPtr)>>2)]=headPtr;\n  \n      var threadParams = {\n        stackBase: stackBase,\n        stackSize: stackSize,\n        allocatedOwnStack: allocatedOwnStack,\n        schedPolicy: schedPolicy,\n        schedPrio: schedPrio,\n        detached: detached,\n        startRoutine: start_routine,\n        pthread_ptr: threadInfoStruct,\n        parent_pthread_ptr: _pthread_self(),\n        arg: arg,\n        transferList: transferList\n      };\n  \n      if (ENVIRONMENT_IS_PTHREAD) {\n        // The prepopulated pool of web workers that can host pthreads is stored\n        // in the main JS thread. Therefore if a pthread is attempting to spawn a\n        // new thread, the thread creation must be deferred to the main JS thread.\n        threadParams.cmd = 'spawnThread';\n        postMessage(threadParams, transferList);\n      } else {\n        // We are the main thread, so we have the pthread warmup pool in this\n        // thread and can fire off JS thread creation directly ourselves.\n        spawnThread(threadParams);\n      }\n  \n      return 0;\n    }\n\n  function __pthread_testcancel_js() {\n      if (!ENVIRONMENT_IS_PTHREAD) return;\n      if (!threadInfoStruct) return;\n      var cancelDisabled = Atomics.load(HEAPU32, (threadInfoStruct + 60 ) >> 2);\n      if (cancelDisabled) return;\n      var canceled = Atomics.load(HEAPU32, (threadInfoStruct + 0 ) >> 2);\n      if (canceled == 2) throw 'Canceled!';\n    }\n  function __emscripten_do_pthread_join(thread, status, block) {\n      if (!thread) {\n        err('pthread_join attempted on a null thread pointer!');\n        return ERRNO_CODES.ESRCH;\n      }\n      if (ENVIRONMENT_IS_PTHREAD && selfThreadId == thread) {\n        err('PThread ' + thread + ' is attempting to join to itself!');\n        return ERRNO_CODES.EDEADLK;\n      }\n      else if (!ENVIRONMENT_IS_PTHREAD && PThread.mainThreadBlock == thread) {\n        err('Main thread ' + thread + ' is attempting to join to itself!');\n        return ERRNO_CODES.EDEADLK;\n      }\n      var self = HEAP32[(((thread)+(12))>>2)];\n      if (self !== thread) {\n        err('pthread_join attempted on thread ' + thread + ', which does not point to a valid thread, or does not exist anymore!');\n        return ERRNO_CODES.ESRCH;\n      }\n  \n      var detached = Atomics.load(HEAPU32, (thread + 68 ) >> 2);\n      if (detached) {\n        err('Attempted to join thread ' + thread + ', which was already detached!');\n        return ERRNO_CODES.EINVAL; // The thread is already detached, can no longer join it!\n      }\n  \n      if (block) {\n        _emscripten_check_blocking_allowed();\n      }\n  \n      for (;;) {\n        var threadStatus = Atomics.load(HEAPU32, (thread + 0 ) >> 2);\n        if (threadStatus == 1) { // Exited?\n          var threadExitCode = Atomics.load(HEAPU32, (thread + 4 ) >> 2);\n          if (status) HEAP32[((status)>>2)]=threadExitCode;\n          Atomics.store(HEAPU32, (thread + 68 ) >> 2, 1); // Mark the thread as detached.\n  \n          if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread);\n          else postMessage({ 'cmd': 'cleanupThread', 'thread': thread });\n          return 0;\n        }\n        if (!block) {\n          return ERRNO_CODES.EBUSY;\n        }\n        // TODO HACK! Replace the _js variant with just _pthread_testcancel:\n        //_pthread_testcancel();\n        __pthread_testcancel_js();\n        // In main runtime thread (the thread that initialized the Emscripten C\n        // runtime and launched main()), assist pthreads in performing operations\n        // that they need to access the Emscripten main runtime for.\n        if (!ENVIRONMENT_IS_PTHREAD) _emscripten_main_thread_process_queued_calls();\n        _emscripten_futex_wait(thread + 0, threadStatus, ENVIRONMENT_IS_PTHREAD ? 100 : 1);\n      }\n    }\n  function _pthread_join(thread, status) {\n      return __emscripten_do_pthread_join(thread, status, true);\n    }\n\n\n  function _setTempRet0($i) {\n      setTempRet0(($i) | 0);\n    }\n\n  function _sysconf(name) {\n  if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(10, 1, name);\n  \n      // long sysconf(int name);\n      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html\n      switch(name) {\n        case 30: return 16384;\n        case 85:\n          var maxHeapSize = HEAPU8.length;\n          return maxHeapSize / 16384;\n        case 132:\n        case 133:\n        case 12:\n        case 137:\n        case 138:\n        case 15:\n        case 235:\n        case 16:\n        case 17:\n        case 18:\n        case 19:\n        case 20:\n        case 149:\n        case 13:\n        case 10:\n        case 236:\n        case 153:\n        case 9:\n        case 21:\n        case 22:\n        case 159:\n        case 154:\n        case 14:\n        case 77:\n        case 78:\n        case 139:\n        case 80:\n        case 81:\n        case 82:\n        case 68:\n        case 67:\n        case 164:\n        case 11:\n        case 29:\n        case 47:\n        case 48:\n        case 95:\n        case 52:\n        case 51:\n        case 46:\n        case 79:\n          return 200809;\n        case 27:\n        case 246:\n        case 127:\n        case 128:\n        case 23:\n        case 24:\n        case 160:\n        case 161:\n        case 181:\n        case 182:\n        case 242:\n        case 183:\n        case 184:\n        case 243:\n        case 244:\n        case 245:\n        case 165:\n        case 178:\n        case 179:\n        case 49:\n        case 50:\n        case 168:\n        case 169:\n        case 175:\n        case 170:\n        case 171:\n        case 172:\n        case 97:\n        case 76:\n        case 32:\n        case 173:\n        case 35:\n          return -1;\n        case 176:\n        case 177:\n        case 7:\n        case 155:\n        case 8:\n        case 157:\n        case 125:\n        case 126:\n        case 92:\n        case 93:\n        case 129:\n        case 130:\n        case 131:\n        case 94:\n        case 91:\n          return 1;\n        case 74:\n        case 60:\n        case 69:\n        case 70:\n        case 4:\n          return 1024;\n        case 31:\n        case 42:\n        case 72:\n          return 32;\n        case 87:\n        case 26:\n        case 33:\n          return 2147483647;\n        case 34:\n        case 1:\n          return 47839;\n        case 38:\n        case 36:\n          return 99;\n        case 43:\n        case 37:\n          return 2048;\n        case 0: return 2097152;\n        case 3: return 65536;\n        case 28: return 32768;\n        case 44: return 32767;\n        case 75: return 16384;\n        case 39: return 1000;\n        case 89: return 700;\n        case 71: return 256;\n        case 40: return 255;\n        case 2: return 100;\n        case 180: return 64;\n        case 25: return 20;\n        case 5: return 16;\n        case 6: return 6;\n        case 73: return 4;\n        case 84: {\n          if (typeof navigator === 'object') return navigator['hardwareConcurrency'] || 1;\n          return 1;\n        }\n      }\n      setErrNo(28);\n      return -1;\n    }\n  \n\nif (!ENVIRONMENT_IS_PTHREAD) PThread.initMainThreadBlock();;\nvar GLctx;;\n\n // proxiedFunctionTable specifies the list of functions that can be called either synchronously or asynchronously from other threads in postMessage()d or internally queued events. This way a pthread in a Worker can synchronously access e.g. the DOM on the main thread.\n\nvar proxiedFunctionTable = [null,___sys_fcntl64,___sys_open,___sys_read,_emscripten_set_canvas_element_size_main_thread,_fd_close,_fd_fdstat_get,_fd_seek,_fd_write,_tzset,_sysconf];\n\nvar ASSERTIONS = true;\n\n\n\n/** @type {function(string, boolean=, number=)} */\nfunction intArrayFromString(stringy, dontAddNull, length) {\n  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;\n  var u8array = new Array(len);\n  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);\n  if (dontAddNull) u8array.length = numBytesWritten;\n  return u8array;\n}\n\nfunction intArrayToString(array) {\n  var ret = [];\n  for (var i = 0; i < array.length; i++) {\n    var chr = array[i];\n    if (chr > 0xFF) {\n      if (ASSERTIONS) {\n        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');\n      }\n      chr &= 0xFF;\n    }\n    ret.push(String.fromCharCode(chr));\n  }\n  return ret.join('');\n}\n\n\n\nif (!ENVIRONMENT_IS_PTHREAD) __ATINIT__.push({ func: function() { ___wasm_call_ctors() } });\nvar asmLibraryArg = {\n  \"__assert_fail\": ___assert_fail,\n  \"__clock_gettime\": ___clock_gettime,\n  \"__sys_fcntl64\": ___sys_fcntl64,\n  \"__sys_open\": ___sys_open,\n  \"__sys_read\": ___sys_read,\n  \"_emscripten_notify_thread_queue\": __emscripten_notify_thread_queue,\n  \"abort\": _abort,\n  \"clock\": _clock,\n  \"emscripten_asm_const_int\": _emscripten_asm_const_int,\n  \"emscripten_check_blocking_allowed\": _emscripten_check_blocking_allowed,\n  \"emscripten_conditional_set_current_thread_status\": _emscripten_conditional_set_current_thread_status,\n  \"emscripten_futex_wait\": _emscripten_futex_wait,\n  \"emscripten_futex_wake\": _emscripten_futex_wake,\n  \"emscripten_get_now\": _emscripten_get_now,\n  \"emscripten_is_main_browser_thread\": _emscripten_is_main_browser_thread,\n  \"emscripten_is_main_runtime_thread\": _emscripten_is_main_runtime_thread,\n  \"emscripten_memcpy_big\": _emscripten_memcpy_big,\n  \"emscripten_num_logical_cores\": _emscripten_num_logical_cores,\n  \"emscripten_receive_on_main_thread_js\": _emscripten_receive_on_main_thread_js,\n  \"emscripten_resize_heap\": _emscripten_resize_heap,\n  \"emscripten_set_canvas_element_size\": _emscripten_set_canvas_element_size,\n  \"emscripten_set_current_thread_status\": _emscripten_set_current_thread_status,\n  \"emscripten_webgl_create_context\": _emscripten_webgl_create_context,\n  \"environ_get\": _environ_get,\n  \"environ_sizes_get\": _environ_sizes_get,\n  \"fd_close\": _fd_close,\n  \"fd_fdstat_get\": _fd_fdstat_get,\n  \"fd_seek\": _fd_seek,\n  \"fd_write\": _fd_write,\n  \"gettimeofday\": _gettimeofday,\n  \"gmtime_r\": _gmtime_r,\n  \"initPthreadsJS\": initPthreadsJS,\n  \"localtime_r\": _localtime_r,\n  \"memory\": wasmMemory || Module['wasmMemory'],\n  \"mktime\": _mktime,\n  \"pthread_cleanup_pop\": _pthread_cleanup_pop,\n  \"pthread_cleanup_push\": _pthread_cleanup_push,\n  \"pthread_create\": _pthread_create,\n  \"pthread_join\": _pthread_join,\n  \"pthread_self\": _pthread_self,\n  \"setTempRet0\": _setTempRet0,\n  \"sysconf\": _sysconf\n};\nvar asm = createWasm();\n/** @type {function(...*):?} */\nvar ___wasm_call_ctors = Module[\"___wasm_call_ctors\"] = createExportWrapper(\"__wasm_call_ctors\");\n\n/** @type {function(...*):?} */\nvar _init_decoder = Module[\"_init_decoder\"] = createExportWrapper(\"init_decoder\");\n\n/** @type {function(...*):?} */\nvar _decode_buffer = Module[\"_decode_buffer\"] = createExportWrapper(\"decode_buffer\");\n\n/** @type {function(...*):?} */\nvar _flush_decoder = Module[\"_flush_decoder\"] = createExportWrapper(\"flush_decoder\");\n\n/** @type {function(...*):?} */\nvar _close_decoder = Module[\"_close_decoder\"] = createExportWrapper(\"close_decoder\");\n\n/** @type {function(...*):?} */\nvar ___errno_location = Module[\"___errno_location\"] = createExportWrapper(\"__errno_location\");\n\n/** @type {function(...*):?} */\nvar _free = Module[\"_free\"] = createExportWrapper(\"free\");\n\n/** @type {function(...*):?} */\nvar _malloc = Module[\"_malloc\"] = createExportWrapper(\"malloc\");\n\n/** @type {function(...*):?} */\nvar _emscripten_get_global_libc = Module[\"_emscripten_get_global_libc\"] = createExportWrapper(\"emscripten_get_global_libc\");\n\n/** @type {function(...*):?} */\nvar ___em_js__initPthreadsJS = Module[\"___em_js__initPthreadsJS\"] = createExportWrapper(\"__em_js__initPthreadsJS\");\n\n/** @type {function(...*):?} */\nvar ___emscripten_pthread_data_constructor = Module[\"___emscripten_pthread_data_constructor\"] = createExportWrapper(\"__emscripten_pthread_data_constructor\");\n\n/** @type {function(...*):?} */\nvar _memset = Module[\"_memset\"] = createExportWrapper(\"memset\");\n\n/** @type {function(...*):?} */\nvar __get_tzname = Module[\"__get_tzname\"] = createExportWrapper(\"_get_tzname\");\n\n/** @type {function(...*):?} */\nvar __get_daylight = Module[\"__get_daylight\"] = createExportWrapper(\"_get_daylight\");\n\n/** @type {function(...*):?} */\nvar __get_timezone = Module[\"__get_timezone\"] = createExportWrapper(\"_get_timezone\");\n\n/** @type {function(...*):?} */\nvar stackSave = Module[\"stackSave\"] = createExportWrapper(\"stackSave\");\n\n/** @type {function(...*):?} */\nvar stackRestore = Module[\"stackRestore\"] = createExportWrapper(\"stackRestore\");\n\n/** @type {function(...*):?} */\nvar stackAlloc = Module[\"stackAlloc\"] = createExportWrapper(\"stackAlloc\");\n\n/** @type {function(...*):?} */\nvar _memalign = Module[\"_memalign\"] = createExportWrapper(\"memalign\");\n\n/** @type {function(...*):?} */\nvar _emscripten_main_browser_thread_id = Module[\"_emscripten_main_browser_thread_id\"] = createExportWrapper(\"emscripten_main_browser_thread_id\");\n\n/** @type {function(...*):?} */\nvar ___pthread_tsd_run_dtors = Module[\"___pthread_tsd_run_dtors\"] = createExportWrapper(\"__pthread_tsd_run_dtors\");\n\n/** @type {function(...*):?} */\nvar _emscripten_main_thread_process_queued_calls = Module[\"_emscripten_main_thread_process_queued_calls\"] = createExportWrapper(\"emscripten_main_thread_process_queued_calls\");\n\n/** @type {function(...*):?} */\nvar _emscripten_current_thread_process_queued_calls = Module[\"_emscripten_current_thread_process_queued_calls\"] = createExportWrapper(\"emscripten_current_thread_process_queued_calls\");\n\n/** @type {function(...*):?} */\nvar _emscripten_register_main_browser_thread_id = Module[\"_emscripten_register_main_browser_thread_id\"] = createExportWrapper(\"emscripten_register_main_browser_thread_id\");\n\n/** @type {function(...*):?} */\nvar _do_emscripten_dispatch_to_thread = Module[\"_do_emscripten_dispatch_to_thread\"] = createExportWrapper(\"do_emscripten_dispatch_to_thread\");\n\n/** @type {function(...*):?} */\nvar _emscripten_async_run_in_main_thread = Module[\"_emscripten_async_run_in_main_thread\"] = createExportWrapper(\"emscripten_async_run_in_main_thread\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread = Module[\"_emscripten_sync_run_in_main_thread\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_0 = Module[\"_emscripten_sync_run_in_main_thread_0\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_0\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_1 = Module[\"_emscripten_sync_run_in_main_thread_1\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_1\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_2 = Module[\"_emscripten_sync_run_in_main_thread_2\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_2\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_xprintf_varargs = Module[\"_emscripten_sync_run_in_main_thread_xprintf_varargs\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_xprintf_varargs\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_3 = Module[\"_emscripten_sync_run_in_main_thread_3\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_3\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_4 = Module[\"_emscripten_sync_run_in_main_thread_4\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_4\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_5 = Module[\"_emscripten_sync_run_in_main_thread_5\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_5\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_6 = Module[\"_emscripten_sync_run_in_main_thread_6\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_6\");\n\n/** @type {function(...*):?} */\nvar _emscripten_sync_run_in_main_thread_7 = Module[\"_emscripten_sync_run_in_main_thread_7\"] = createExportWrapper(\"emscripten_sync_run_in_main_thread_7\");\n\n/** @type {function(...*):?} */\nvar _emscripten_run_in_main_runtime_thread_js = Module[\"_emscripten_run_in_main_runtime_thread_js\"] = createExportWrapper(\"emscripten_run_in_main_runtime_thread_js\");\n\n/** @type {function(...*):?} */\nvar __emscripten_call_on_thread = Module[\"__emscripten_call_on_thread\"] = createExportWrapper(\"_emscripten_call_on_thread\");\n\n/** @type {function(...*):?} */\nvar _emscripten_tls_init = Module[\"_emscripten_tls_init\"] = createExportWrapper(\"emscripten_tls_init\");\n\n/** @type {function(...*):?} */\nvar dynCall_jiji = Module[\"dynCall_jiji\"] = createExportWrapper(\"dynCall_jiji\");\n\nvar _ff_h264_cabac_tables = Module['_ff_h264_cabac_tables'] = 38970;\nvar _main_thread_futex = Module['_main_thread_futex'] = 139028;\n\n\n\n// === Auto-generated postamble setup entry stuff ===\n\nif (!Object.getOwnPropertyDescriptor(Module, \"intArrayFromString\")) Module[\"intArrayFromString\"] = function() { abort(\"'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"intArrayToString\")) Module[\"intArrayToString\"] = function() { abort(\"'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"ccall\")) Module[\"ccall\"] = function() { abort(\"'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"cwrap\")) Module[\"cwrap\"] = function() { abort(\"'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"setValue\")) Module[\"setValue\"] = function() { abort(\"'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getValue\")) Module[\"getValue\"] = function() { abort(\"'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"allocate\")) Module[\"allocate\"] = function() { abort(\"'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"UTF8ArrayToString\")) Module[\"UTF8ArrayToString\"] = function() { abort(\"'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"UTF8ToString\")) Module[\"UTF8ToString\"] = function() { abort(\"'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stringToUTF8Array\")) Module[\"stringToUTF8Array\"] = function() { abort(\"'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stringToUTF8\")) Module[\"stringToUTF8\"] = function() { abort(\"'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"lengthBytesUTF8\")) Module[\"lengthBytesUTF8\"] = function() { abort(\"'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stackTrace\")) Module[\"stackTrace\"] = function() { abort(\"'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"addOnPreRun\")) Module[\"addOnPreRun\"] = function() { abort(\"'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"addOnInit\")) Module[\"addOnInit\"] = function() { abort(\"'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"addOnPreMain\")) Module[\"addOnPreMain\"] = function() { abort(\"'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"addOnExit\")) Module[\"addOnExit\"] = function() { abort(\"'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"addOnPostRun\")) Module[\"addOnPostRun\"] = function() { abort(\"'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeStringToMemory\")) Module[\"writeStringToMemory\"] = function() { abort(\"'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeArrayToMemory\")) Module[\"writeArrayToMemory\"] = function() { abort(\"'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeAsciiToMemory\")) Module[\"writeAsciiToMemory\"] = function() { abort(\"'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"addRunDependency\")) Module[\"addRunDependency\"] = function() { abort(\"'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"removeRunDependency\")) Module[\"removeRunDependency\"] = function() { abort(\"'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_createFolder\")) Module[\"FS_createFolder\"] = function() { abort(\"'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_createPath\")) Module[\"FS_createPath\"] = function() { abort(\"'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_createDataFile\")) Module[\"FS_createDataFile\"] = function() { abort(\"'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_createPreloadedFile\")) Module[\"FS_createPreloadedFile\"] = function() { abort(\"'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_createLazyFile\")) Module[\"FS_createLazyFile\"] = function() { abort(\"'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_createLink\")) Module[\"FS_createLink\"] = function() { abort(\"'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_createDevice\")) Module[\"FS_createDevice\"] = function() { abort(\"'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"FS_unlink\")) Module[\"FS_unlink\"] = function() { abort(\"'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getLEB\")) Module[\"getLEB\"] = function() { abort(\"'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getFunctionTables\")) Module[\"getFunctionTables\"] = function() { abort(\"'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"alignFunctionTables\")) Module[\"alignFunctionTables\"] = function() { abort(\"'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"registerFunctions\")) Module[\"registerFunctions\"] = function() { abort(\"'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nModule[\"addFunction\"] = addFunction;\nModule[\"removeFunction\"] = removeFunction;\nif (!Object.getOwnPropertyDescriptor(Module, \"getFuncWrapper\")) Module[\"getFuncWrapper\"] = function() { abort(\"'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"prettyPrint\")) Module[\"prettyPrint\"] = function() { abort(\"'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"makeBigInt\")) Module[\"makeBigInt\"] = function() { abort(\"'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"dynCall\")) Module[\"dynCall\"] = function() { abort(\"'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getCompilerSetting\")) Module[\"getCompilerSetting\"] = function() { abort(\"'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"print\")) Module[\"print\"] = function() { abort(\"'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"printErr\")) Module[\"printErr\"] = function() { abort(\"'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getTempRet0\")) Module[\"getTempRet0\"] = function() { abort(\"'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"setTempRet0\")) Module[\"setTempRet0\"] = function() { abort(\"'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"callMain\")) Module[\"callMain\"] = function() { abort(\"'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"abort\")) Module[\"abort\"] = function() { abort(\"'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stringToNewUTF8\")) Module[\"stringToNewUTF8\"] = function() { abort(\"'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"abortOnCannotGrowMemory\")) Module[\"abortOnCannotGrowMemory\"] = function() { abort(\"'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"emscripten_realloc_buffer\")) Module[\"emscripten_realloc_buffer\"] = function() { abort(\"'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"ENV\")) Module[\"ENV\"] = function() { abort(\"'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"ERRNO_CODES\")) Module[\"ERRNO_CODES\"] = function() { abort(\"'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"ERRNO_MESSAGES\")) Module[\"ERRNO_MESSAGES\"] = function() { abort(\"'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"setErrNo\")) Module[\"setErrNo\"] = function() { abort(\"'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"DNS\")) Module[\"DNS\"] = function() { abort(\"'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getHostByName\")) Module[\"getHostByName\"] = function() { abort(\"'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"GAI_ERRNO_MESSAGES\")) Module[\"GAI_ERRNO_MESSAGES\"] = function() { abort(\"'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"Protocols\")) Module[\"Protocols\"] = function() { abort(\"'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"Sockets\")) Module[\"Sockets\"] = function() { abort(\"'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getRandomDevice\")) Module[\"getRandomDevice\"] = function() { abort(\"'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"traverseStack\")) Module[\"traverseStack\"] = function() { abort(\"'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"UNWIND_CACHE\")) Module[\"UNWIND_CACHE\"] = function() { abort(\"'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"withBuiltinMalloc\")) Module[\"withBuiltinMalloc\"] = function() { abort(\"'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"readAsmConstArgsArray\")) Module[\"readAsmConstArgsArray\"] = function() { abort(\"'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"readAsmConstArgs\")) Module[\"readAsmConstArgs\"] = function() { abort(\"'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"mainThreadEM_ASM\")) Module[\"mainThreadEM_ASM\"] = function() { abort(\"'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"jstoi_q\")) Module[\"jstoi_q\"] = function() { abort(\"'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"jstoi_s\")) Module[\"jstoi_s\"] = function() { abort(\"'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getExecutableName\")) Module[\"getExecutableName\"] = function() { abort(\"'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"listenOnce\")) Module[\"listenOnce\"] = function() { abort(\"'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"autoResumeAudioContext\")) Module[\"autoResumeAudioContext\"] = function() { abort(\"'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"dynCallLegacy\")) Module[\"dynCallLegacy\"] = function() { abort(\"'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getDynCaller\")) Module[\"getDynCaller\"] = function() { abort(\"'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"dynCall\")) Module[\"dynCall\"] = function() { abort(\"'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"callRuntimeCallbacks\")) Module[\"callRuntimeCallbacks\"] = function() { abort(\"'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"abortStackOverflow\")) Module[\"abortStackOverflow\"] = function() { abort(\"'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"reallyNegative\")) Module[\"reallyNegative\"] = function() { abort(\"'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"unSign\")) Module[\"unSign\"] = function() { abort(\"'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"reSign\")) Module[\"reSign\"] = function() { abort(\"'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"formatString\")) Module[\"formatString\"] = function() { abort(\"'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"PATH\")) Module[\"PATH\"] = function() { abort(\"'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"PATH_FS\")) Module[\"PATH_FS\"] = function() { abort(\"'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"SYSCALLS\")) Module[\"SYSCALLS\"] = function() { abort(\"'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"syscallMmap2\")) Module[\"syscallMmap2\"] = function() { abort(\"'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"syscallMunmap\")) Module[\"syscallMunmap\"] = function() { abort(\"'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"flush_NO_FILESYSTEM\")) Module[\"flush_NO_FILESYSTEM\"] = function() { abort(\"'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"JSEvents\")) Module[\"JSEvents\"] = function() { abort(\"'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"specialHTMLTargets\")) Module[\"specialHTMLTargets\"] = function() { abort(\"'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"maybeCStringToJsString\")) Module[\"maybeCStringToJsString\"] = function() { abort(\"'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"findEventTarget\")) Module[\"findEventTarget\"] = function() { abort(\"'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"findCanvasEventTarget\")) Module[\"findCanvasEventTarget\"] = function() { abort(\"'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"polyfillSetImmediate\")) Module[\"polyfillSetImmediate\"] = function() { abort(\"'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"demangle\")) Module[\"demangle\"] = function() { abort(\"'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"demangleAll\")) Module[\"demangleAll\"] = function() { abort(\"'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"jsStackTrace\")) Module[\"jsStackTrace\"] = function() { abort(\"'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stackTrace\")) Module[\"stackTrace\"] = function() { abort(\"'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getEnvStrings\")) Module[\"getEnvStrings\"] = function() { abort(\"'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"checkWasiClock\")) Module[\"checkWasiClock\"] = function() { abort(\"'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeI53ToI64\")) Module[\"writeI53ToI64\"] = function() { abort(\"'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeI53ToI64Clamped\")) Module[\"writeI53ToI64Clamped\"] = function() { abort(\"'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeI53ToI64Signaling\")) Module[\"writeI53ToI64Signaling\"] = function() { abort(\"'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeI53ToU64Clamped\")) Module[\"writeI53ToU64Clamped\"] = function() { abort(\"'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeI53ToU64Signaling\")) Module[\"writeI53ToU64Signaling\"] = function() { abort(\"'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"readI53FromI64\")) Module[\"readI53FromI64\"] = function() { abort(\"'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"readI53FromU64\")) Module[\"readI53FromU64\"] = function() { abort(\"'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"convertI32PairToI53\")) Module[\"convertI32PairToI53\"] = function() { abort(\"'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"convertU32PairToI53\")) Module[\"convertU32PairToI53\"] = function() { abort(\"'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"exceptionLast\")) Module[\"exceptionLast\"] = function() { abort(\"'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"exceptionCaught\")) Module[\"exceptionCaught\"] = function() { abort(\"'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"ExceptionInfoAttrs\")) Module[\"ExceptionInfoAttrs\"] = function() { abort(\"'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"ExceptionInfo\")) Module[\"ExceptionInfo\"] = function() { abort(\"'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"CatchInfo\")) Module[\"CatchInfo\"] = function() { abort(\"'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"exception_addRef\")) Module[\"exception_addRef\"] = function() { abort(\"'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"exception_decRef\")) Module[\"exception_decRef\"] = function() { abort(\"'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"Browser\")) Module[\"Browser\"] = function() { abort(\"'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"funcWrappers\")) Module[\"funcWrappers\"] = function() { abort(\"'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getFuncWrapper\")) Module[\"getFuncWrapper\"] = function() { abort(\"'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"setMainLoop\")) Module[\"setMainLoop\"] = function() { abort(\"'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"tempFixedLengthArray\")) Module[\"tempFixedLengthArray\"] = function() { abort(\"'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"miniTempWebGLFloatBuffers\")) Module[\"miniTempWebGLFloatBuffers\"] = function() { abort(\"'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"heapObjectForWebGLType\")) Module[\"heapObjectForWebGLType\"] = function() { abort(\"'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"heapAccessShiftForWebGLHeap\")) Module[\"heapAccessShiftForWebGLHeap\"] = function() { abort(\"'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"GL\")) Module[\"GL\"] = function() { abort(\"'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"emscriptenWebGLGet\")) Module[\"emscriptenWebGLGet\"] = function() { abort(\"'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"computeUnpackAlignedImageSize\")) Module[\"computeUnpackAlignedImageSize\"] = function() { abort(\"'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"emscriptenWebGLGetTexPixelData\")) Module[\"emscriptenWebGLGetTexPixelData\"] = function() { abort(\"'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"emscriptenWebGLGetUniform\")) Module[\"emscriptenWebGLGetUniform\"] = function() { abort(\"'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"emscriptenWebGLGetVertexAttrib\")) Module[\"emscriptenWebGLGetVertexAttrib\"] = function() { abort(\"'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"writeGLArray\")) Module[\"writeGLArray\"] = function() { abort(\"'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"AL\")) Module[\"AL\"] = function() { abort(\"'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"SDL_unicode\")) Module[\"SDL_unicode\"] = function() { abort(\"'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"SDL_ttfContext\")) Module[\"SDL_ttfContext\"] = function() { abort(\"'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"SDL_audio\")) Module[\"SDL_audio\"] = function() { abort(\"'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"SDL\")) Module[\"SDL\"] = function() { abort(\"'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"SDL_gfx\")) Module[\"SDL_gfx\"] = function() { abort(\"'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"GLUT\")) Module[\"GLUT\"] = function() { abort(\"'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"EGL\")) Module[\"EGL\"] = function() { abort(\"'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"GLFW_Window\")) Module[\"GLFW_Window\"] = function() { abort(\"'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"GLFW\")) Module[\"GLFW\"] = function() { abort(\"'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"GLEW\")) Module[\"GLEW\"] = function() { abort(\"'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"IDBStore\")) Module[\"IDBStore\"] = function() { abort(\"'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"runAndAbortIfError\")) Module[\"runAndAbortIfError\"] = function() { abort(\"'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nModule[\"PThread\"] = PThread;\nif (!Object.getOwnPropertyDescriptor(Module, \"killThread\")) Module[\"killThread\"] = function() { abort(\"'killThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"cleanupThread\")) Module[\"cleanupThread\"] = function() { abort(\"'cleanupThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"cancelThread\")) Module[\"cancelThread\"] = function() { abort(\"'cancelThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"spawnThread\")) Module[\"spawnThread\"] = function() { abort(\"'spawnThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"registerPthreadPtr\")) Module[\"registerPthreadPtr\"] = function() { abort(\"'registerPthreadPtr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"establishStackSpace\")) Module[\"establishStackSpace\"] = function() { abort(\"'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"getNoExitRuntime\")) Module[\"getNoExitRuntime\"] = function() { abort(\"'getNoExitRuntime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"resetPrototype\")) Module[\"resetPrototype\"] = function() { abort(\"'resetPrototype' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"warnOnce\")) Module[\"warnOnce\"] = function() { abort(\"'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stackSave\")) Module[\"stackSave\"] = function() { abort(\"'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stackRestore\")) Module[\"stackRestore\"] = function() { abort(\"'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stackAlloc\")) Module[\"stackAlloc\"] = function() { abort(\"'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"AsciiToString\")) Module[\"AsciiToString\"] = function() { abort(\"'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stringToAscii\")) Module[\"stringToAscii\"] = function() { abort(\"'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"UTF16ToString\")) Module[\"UTF16ToString\"] = function() { abort(\"'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stringToUTF16\")) Module[\"stringToUTF16\"] = function() { abort(\"'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"lengthBytesUTF16\")) Module[\"lengthBytesUTF16\"] = function() { abort(\"'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"UTF32ToString\")) Module[\"UTF32ToString\"] = function() { abort(\"'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"stringToUTF32\")) Module[\"stringToUTF32\"] = function() { abort(\"'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"lengthBytesUTF32\")) Module[\"lengthBytesUTF32\"] = function() { abort(\"'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"allocateUTF8\")) Module[\"allocateUTF8\"] = function() { abort(\"'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nif (!Object.getOwnPropertyDescriptor(Module, \"allocateUTF8OnStack\")) Module[\"allocateUTF8OnStack\"] = function() { abort(\"'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") };\nModule[\"writeStackCookie\"] = writeStackCookie;\nModule[\"checkStackCookie\"] = checkStackCookie;\nModule[\"PThread\"] = PThread;\nModule[\"_pthread_self\"] = _pthread_self;\nModule[\"wasmMemory\"] = wasmMemory;\nModule[\"ExitStatus\"] = ExitStatus;\nif (!Object.getOwnPropertyDescriptor(Module, \"ALLOC_NORMAL\")) Object.defineProperty(Module, \"ALLOC_NORMAL\", { configurable: true, get: function() { abort(\"'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") } });\nif (!Object.getOwnPropertyDescriptor(Module, \"ALLOC_STACK\")) Object.defineProperty(Module, \"ALLOC_STACK\", { configurable: true, get: function() { abort(\"'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\") } });\n\nvar calledRun;\n\n/**\n * @constructor\n * @this {ExitStatus}\n */\nfunction ExitStatus(status) {\n  this.name = \"ExitStatus\";\n  this.message = \"Program terminated with exit(\" + status + \")\";\n  this.status = status;\n}\n\nvar calledMain = false;\n\ndependenciesFulfilled = function runCaller() {\n  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)\n  if (!calledRun) run();\n  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled\n};\n\n/** @type {function(Array=)} */\nfunction run(args) {\n  args = args || arguments_;\n\n  if (runDependencies > 0) {\n    return;\n  }\n\n  writeStackCookie();\n\n  preRun();\n\n  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later\n\n  function doRun() {\n    // run may have just been called through dependencies being fulfilled just in this very frame,\n    // or while the async setStatus time below was happening\n    if (calledRun) return;\n    calledRun = true;\n    Module['calledRun'] = true;\n\n    if (ABORT) return;\n\n    initRuntime();\n\n    preMain();\n\n    readyPromiseResolve(Module);\n    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();\n\n    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module[\"onRuntimeInitialized\"]');\n\n    postRun();\n  }\n\n  if (Module['setStatus']) {\n    Module['setStatus']('Running...');\n    setTimeout(function() {\n      setTimeout(function() {\n        Module['setStatus']('');\n      }, 1);\n      doRun();\n    }, 1);\n  } else\n  {\n    doRun();\n  }\n  checkStackCookie();\n}\nModule['run'] = run;\n\nfunction checkUnflushedContent() {\n  // Compiler settings do not allow exiting the runtime, so flushing\n  // the streams is not possible. but in ASSERTIONS mode we check\n  // if there was something to flush, and if so tell the user they\n  // should request that the runtime be exitable.\n  // Normally we would not even include flush() at all, but in ASSERTIONS\n  // builds we do so just for this check, and here we see if there is any\n  // content to flush, that is, we check if there would have been\n  // something a non-ASSERTIONS build would have not seen.\n  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0\n  // mode (which has its own special function for this; otherwise, all\n  // the code is inside libc)\n  var print = out;\n  var printErr = err;\n  var has = false;\n  out = err = function(x) {\n    has = true;\n  }\n  try { // it doesn't matter if it fails\n    var flush = flush_NO_FILESYSTEM;\n    if (flush) flush();\n  } catch(e) {}\n  out = print;\n  err = printErr;\n  if (has) {\n    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');\n    warnOnce('(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)');\n  }\n}\n\n/** @param {boolean|number=} implicit */\nfunction exit(status, implicit) {\n  checkUnflushedContent();\n\n  // if this is just main exit-ing implicitly, and the status is 0, then we\n  // don't need to do anything here and can just leave. if the status is\n  // non-zero, though, then we need to report it.\n  // (we may have warned about this earlier, if a situation justifies doing so)\n  if (implicit && noExitRuntime && status === 0) {\n    return;\n  }\n\n  if (noExitRuntime) {\n    // if exit() was called, we may warn the user if the runtime isn't actually being shut down\n    if (!implicit) {\n      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';\n      readyPromiseReject(msg);\n      err(msg);\n    }\n  } else {\n    PThread.terminateAllThreads();\n\n    EXITSTATUS = status;\n\n    exitRuntime();\n\n    if (Module['onExit']) Module['onExit'](status);\n\n    ABORT = true;\n  }\n\n  quit_(status, new ExitStatus(status));\n}\n\nif (Module['preInit']) {\n  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];\n  while (Module['preInit'].length > 0) {\n    Module['preInit'].pop()();\n  }\n}\n\nif (!ENVIRONMENT_IS_PTHREAD) // EXIT_RUNTIME=0 only applies to default behavior of the main browser thread\n  noExitRuntime = true;\n\nif (!ENVIRONMENT_IS_PTHREAD) {\n  run();\n} else {\n  PThread.initWorker();\n}\n\n\n\n\n\n\n\n  return WASMDecoder.ready\n}\n);\n})();\nif (typeof exports === 'object' && typeof module === 'object')\n      module.exports = WASMDecoder;\n    else if (typeof define === 'function' && define['amd'])\n      define([], function() { return WASMDecoder; });\n    else if (typeof exports === 'object')\n      exports[\"WASMDecoder\"] = WASMDecoder;\n    ");

/***/ }),

/***/ "./lib/libffmpeg.worker.txt":
/*!**********************************!*\
  !*** ./lib/libffmpeg.worker.txt ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/**\n * @license\n * Copyright 2015 The Emscripten Authors\n * SPDX-License-Identifier: MIT\n */\n\n// Pthread Web Worker startup routine:\n// This is the entry point file that is loaded first by each Web Worker\n// that executes pthreads on the Emscripten application.\n\n// Thread-local:\nvar threadInfoStruct = 0; // Info area for this thread in Emscripten HEAP (shared). If zero, this worker is not currently hosting an executing pthread.\nvar selfThreadId = 0; // The ID of this thread. 0 if not hosting a pthread.\nvar parentThreadId = 0; // The ID of the parent pthread that launched this thread.\n\nvar Module = {};\n\nfunction assert(condition, text) {\n  if (!condition) abort('Assertion failed: ' + text);\n}\n\nfunction threadPrintErr() {\n  var text = Array.prototype.slice.call(arguments).join(' ');\n  console.error(text);\n}\nfunction threadAlert() {\n  var text = Array.prototype.slice.call(arguments).join(' ');\n  postMessage({cmd: 'alert', text: text, threadId: selfThreadId});\n}\n// We don't need out() for now, but may need to add it if we want to use it\n// here. Or, if this code all moves into the main JS, that problem will go\n// away. (For now, adding it here increases code size for no benefit.)\nvar out = function() {\n  throw 'out() is not defined in worker.js.';\n}\nvar err = threadPrintErr;\nthis.alert = threadAlert;\n\nModule['instantiateWasm'] = function(info, receiveInstance) {\n  // Instantiate from the module posted from the main thread.\n  // We can just use sync instantiation in the worker.\n  var instance = new WebAssembly.Instance(Module['wasmModule'], info);\n  // We don't need the module anymore; new threads will be spawned from the main thread.\n  Module['wasmModule'] = null;\n  receiveInstance(instance); // The second 'module' parameter is intentionally null here, we don't need to keep a ref to the Module object from here.\n  return instance.exports;\n};\n\nthis.onmessage = function(e) {\n  try {\n    if (e.data.cmd === 'load') { // Preload command that is called once per worker to parse and load the Emscripten code.\n\n      // Module and memory were sent from main thread\n      Module['wasmModule'] = e.data.wasmModule;\n\n      Module['wasmMemory'] = e.data.wasmMemory;\n\n      Module['buffer'] = Module['wasmMemory'].buffer;\n\n      Module['ENVIRONMENT_IS_PTHREAD'] = true;\n\n      if (typeof e.data.urlOrBlob === 'string') {\n        importScripts(e.data.urlOrBlob);\n      } else {\n        var objectUrl = URL.createObjectURL(e.data.urlOrBlob);\n        importScripts(objectUrl);\n        URL.revokeObjectURL(objectUrl);\n      }\n      WASMDecoder(Module).then(function (instance) {\n        Module = instance;\n        postMessage({ 'cmd': 'loaded' });\n      });\n\n    } else if (e.data.cmd === 'objectTransfer') {\n      Module['PThread'].receiveObjectTransfer(e.data);\n    } else if (e.data.cmd === 'run') {\n      // This worker was idle, and now should start executing its pthread entry\n      // point.\n      // performance.now() is specced to return a wallclock time in msecs since\n      // that Web Worker/main thread launched. However for pthreads this can\n      // cause subtle problems in emscripten_get_now() as this essentially\n      // would measure time from pthread_create(), meaning that the clocks\n      // between each threads would be wildly out of sync. Therefore sync all\n      // pthreads to the clock on the main browser thread, so that different\n      // threads see a somewhat coherent clock across each of them\n      // (+/- 0.1msecs in testing).\n      Module['__performance_now_clock_drift'] = performance.now() - e.data.time;\n      threadInfoStruct = e.data.threadInfoStruct;\n\n      // Pass the thread address inside the asm.js scope to store it for fast access that avoids the need for a FFI out.\n      Module['registerPthreadPtr'](threadInfoStruct, /*isMainBrowserThread=*/0, /*isMainRuntimeThread=*/0);\n\n      selfThreadId = e.data.selfThreadId;\n      parentThreadId = e.data.parentThreadId;\n      // Establish the stack frame for this thread in global scope\n      // The stack grows downwards\n      var max = e.data.stackBase;\n      var top = e.data.stackBase + e.data.stackSize;\n      assert(threadInfoStruct);\n      assert(selfThreadId);\n      assert(parentThreadId);\n      assert(top != 0);\n      assert(max != 0);\n      assert(top > max);\n      // Also call inside JS module to set up the stack frame for this pthread in JS module scope\n      Module['establishStackSpace'](top, max);\n      Module['_emscripten_tls_init']();\n      Module['writeStackCookie']();\n\n      Module['PThread'].receiveObjectTransfer(e.data);\n      Module['PThread'].setThreadStatus(Module['_pthread_self'](), 1/*EM_THREAD_STATUS_RUNNING*/);\n\n      try {\n        // pthread entry points are always of signature 'void *ThreadMain(void *arg)'\n        // Native codebases sometimes spawn threads with other thread entry point signatures,\n        // such as void ThreadMain(void *arg), void *ThreadMain(), or void ThreadMain().\n        // That is not acceptable per C/C++ specification, but x86 compiler ABI extensions\n        // enable that to work. If you find the following line to crash, either change the signature\n        // to \"proper\" void *ThreadMain(void *arg) form, or try linking with the Emscripten linker\n        // flag -s EMULATE_FUNCTION_POINTER_CASTS=1 to add in emulation for this x86 ABI extension.\n        var result = Module['dynCall']('ii', e.data.start_routine, [e.data.arg]);\n\n        Module['checkStackCookie']();\n        // The thread might have finished without calling pthread_exit(). If so, then perform the exit operation ourselves.\n        // (This is a no-op if explicit pthread_exit() had been called prior.)\n        if (!Module['getNoExitRuntime']())\n          Module['PThread'].threadExit(result);\n      } catch(ex) {\n        if (ex === 'Canceled!') {\n          Module['PThread'].threadCancel();\n        } else if (ex != 'unwind') {\n          Atomics.store(Module['HEAPU32'], (threadInfoStruct + 4 /*C_STRUCTS.pthread.threadExitCode*/ ) >> 2, (ex instanceof Module['ExitStatus']) ? ex.status : -2 /*A custom entry specific to Emscripten denoting that the thread crashed.*/);\n\n          Atomics.store(Module['HEAPU32'], (threadInfoStruct + 0 /*C_STRUCTS.pthread.threadStatus*/ ) >> 2, 1); // Mark the thread as no longer running.\n          if (typeof(Module['_emscripten_futex_wake']) !== \"function\") {\n            err(\"Thread Initialisation failed.\");\n            throw ex;\n          }\n          Module['_emscripten_futex_wake'](threadInfoStruct + 0 /*C_STRUCTS.pthread.threadStatus*/, 0x7FFFFFFF/*INT_MAX*/); // Wake all threads waiting on this thread to finish.\n          if (!(ex instanceof Module['ExitStatus'])) throw ex;\n        } else {\n          // else e == 'unwind', and we should fall through here and keep the pthread alive for asynchronous events.\n          err('Pthread 0x' + threadInfoStruct.toString(16) + ' completed its pthread main entry point with an unwind, keeping the pthread worker alive for asynchronous operation.');\n        }\n      }\n    } else if (e.data.cmd === 'cancel') { // Main thread is asking for a pthread_cancel() on this thread.\n      if (threadInfoStruct) {\n        Module['PThread'].threadCancel();\n      }\n    } else if (e.data.target === 'setimmediate') {\n      // no-op\n    } else if (e.data.cmd === 'processThreadQueue') {\n      if (threadInfoStruct) { // If this thread is actually running?\n        Module['_emscripten_current_thread_process_queued_calls']();\n      }\n    } else {\n      err('worker.js received unknown command ' + e.data.cmd);\n      err(e.data);\n    }\n  } catch(ex) {\n    err('worker.js onmessage() captured an uncaught exception: ' + ex);\n    if (ex && ex.stack) err(ex.stack);\n    throw ex;\n  }\n};\n\n// Node.js support\nif (typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string') {\n  // Create as web-worker-like an environment as we can.\n  self = {\n    location: {\n      href: __filename\n    }\n  };\n\n  var onmessage = this.onmessage;\n\n  var nodeWorkerThreads = require('worker_threads');\n\n  global.Worker = nodeWorkerThreads.Worker;\n\n  var parentPort = nodeWorkerThreads.parentPort;\n\n  parentPort.on('message', function(data) {\n    onmessage({ data: data });\n  });\n\n  var nodeFS = require('fs');\n\n  var nodeRead = function(filename) {\n    return nodeFS.readFileSync(filename, 'utf8');\n  };\n\n  function globalEval(x) {\n    global.require = require;\n    global.Module = Module;\n    eval.call(null, x);\n  }\n\n  importScripts = function(f) {\n    globalEval(nodeRead(f));\n  };\n\n  postMessage = function(msg) {\n    parentPort.postMessage(msg);\n  };\n\n  if (typeof performance === 'undefined') {\n    performance = {\n      now: function() {\n        return Date.now();\n      }\n    };\n  }\n}\n\n\n");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1621331564776
      var cssReload = __webpack_require__(/*! ./node_modules/_mini-css-extract-plugin@1.6.0@mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/_mini-css-extract-plugin@1.6.0@mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.i, {"esModule":false,"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

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
  Scale["renderAvgErrorTime"] = "s";
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
    canplay: false,
    canuse: {
      sab: !!window.SharedArrayBuffer,
      oc: !!window.OffscreenCanvas
    },
    playurl: new URLSearchParams(window.location.search).get('playurl') || ''
  }),
      state = _useState[0],
      setState = _useState[1];

  var performanceStatus = state.performanceStatus,
      metadata = state.metadata,
      currentTime = state.currentTime,
      frameInfo = state.frameInfo,
      isplaying = state.isplaying,
      bufferedTime = state.bufferedTime,
      canuse = state.canuse,
      playurl = state.playurl,
      canplay = state.canplay;

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
    setState(function (pstate) {
      return Object.assign(Object.assign({}, pstate), {
        canplay: true
      });
    });
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
      var player = new _player_player__WEBPACK_IMPORTED_MODULE_3__["default"](playurl, {
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
  }, !canplay && Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Loading, null), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
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

var Loading = function () {
  return Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "loadingio-spinner-spin-dmvtdca2aj"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "ldio-wn0659u2uqr"
  }, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null)), Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(rax__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null))));
};

/***/ }),

/***/ "./src/pages/webUI.ts":
/*!****************************!*\
  !*** ./src/pages/webUI.ts ***!
  \****************************/
/*! exports provided: getPieOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPieOption", function() { return getPieOption; });
var getPieOption = function (data) {
  var formatSize = function (size) {
    if (size < 1024) {
      return size.toFixed(2) + "B";
    } else if (size < 1024) {
      return (size / 1024).toFixed(2) + "KB";
    } else {
      return (size / 1024 / 1024).toFixed(2) + "MB";
    }
  };

  data = data.map(function (i) {
    i.name += "" + formatSize(i.value);
    return i;
  });
  var option = {
    title: {
      text: '内存占用',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [{
      name: '内存使用',
      type: 'pie',
      radius: ['30%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '15',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: data
    }]
  };
  return option;
};

/***/ }),

/***/ "./src/player/adapter/window.ts":
/*!**************************************!*\
  !*** ./src/player/adapter/window.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowWrapper; });
/* harmony import */ var _decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decode */ "./src/player/decode/index.ts");
/* harmony import */ var _render_workerRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/workerRender */ "./src/player/render/workerRender.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");
/* harmony import */ var _utils_channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/channel */ "./src/player/utils/channel.ts");





var WindowWrapper = /*#__PURE__*/function () {
  function WindowWrapper() {
    this.channels = {};
    this.bindEvent();
    this.init();
  }

  var _proto = WindowWrapper.prototype;

  _proto.init = function init() {
    self.postMessage({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].WORKERREADY,
      payload: {}
    });
  };

  _proto.run = function run(option) {
    if (option === null || option === void 0 ? void 0 : option.canvas) {
      this.workerRenderManager = new _render_workerRender__WEBPACK_IMPORTED_MODULE_1__["default"](Object.assign(Object.assign({}, option), {
        video2img: this.channels.video2img
      }));
    }

    this.channels = {
      video2img: new _utils_channel__WEBPACK_IMPORTED_MODULE_3__["default"]({
        maxLength: option.offscreenRendering ? option.maxFramesNumber : 1,
        checkOverflow: function checkOverflow() {
          return false;
        }
      }),
      demux2video: new _utils_channel__WEBPACK_IMPORTED_MODULE_3__["default"]({
        maxLength: option.maxDemuxNumber,
        checkOverflow: function checkOverflow() {
          return true;
        }
      })
    };
    this.decodeController = new _decode__WEBPACK_IMPORTED_MODULE_0__["default"](Object.assign(Object.assign({}, option), {
      baseTime: option.baseTime,
      demux2video: this.channels.demux2video,
      video2img: this.channels.video2img
    }));
  };

  _proto.bindEvent = function bindEvent() {
    self.onmessage = this.handleMsg.bind(this);
  };

  _proto.showThis = function showThis() {
    console.log(this);
  };

  _proto.destroy = function destroy() {};

  _proto.handleRecievePacket = function handleRecievePacket(packet) {
    this.channels.demux2video.forcePipe(packet);
  };

  _proto.handleMsg = function handleMsg(_ref) {
    var data = _ref.data;

    switch (data.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].INITOPTION:
        this.run(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].GETVIDOEPACKET:
        this.handleRecievePacket(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].SHOWTHIS:
        this.showThis();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].WORKERDESTROY:
        this.destroy();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].RENDERVIDEO:
        this.workerRenderManager.renderVideo(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].CHANGECHANNELSTATUS:
        this.decodeController.changeChannelStatus(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].SEEKING:
        this.decodeController.seek(data.payload.time);
        break;

      default:
        console.warn(_constants__WEBPACK_IMPORTED_MODULE_2__["ERROR_MSG"].UNHANDLE_WORKER_TYPE);
        break;
    }
  };

  return WindowWrapper;
}();



/***/ }),

/***/ "./src/player/adapter/worker.ts":
/*!**************************************!*\
  !*** ./src/player/adapter/worker.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerManager; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/http */ "./src/player/utils/http.ts");
/* harmony import */ var _format_hls_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../format/hls/loader */ "./src/player/format/hls/loader.ts");
/* harmony import */ var _utils_channel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/channel */ "./src/player/utils/channel.ts");
/* harmony import */ var _decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decode */ "./src/player/decode/index.ts");
/* harmony import */ var _render_workerRender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render/workerRender */ "./src/player/render/workerRender.ts");


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








var EventEmitter = __webpack_require__(/*! events */ "./node_modules/_events@3.3.0@events/events.js");

var WorkerManager = /*#__PURE__*/function () {
  function WorkerManager() {
    this.channels = {};
    this.bindEvent();
    this.init();
  }

  var _proto = WorkerManager.prototype;

  _proto.init = function init() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self.postMessage({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].WORKERREADY,
                payload: {}
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  _proto.run = function run(option) {
    if (option === void 0) {
      option = {};
    }

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.channels = {
                buffer2packet: new _utils_channel__WEBPACK_IMPORTED_MODULE_4__["default"]({
                  // maxLength: 1,
                  checkOverflow: function checkOverflow() {
                    return true;
                  }
                }),
                packet2frame: new _utils_channel__WEBPACK_IMPORTED_MODULE_4__["default"]({
                  maxLength: option.maxDemuxNumber,
                  checkOverflow: function checkOverflow() {
                    return true;
                  }
                }),
                frame2gui: new _utils_channel__WEBPACK_IMPORTED_MODULE_4__["default"]({
                  maxLength: option.offscreenRendering ? option.maxFramesNumber : 1,
                  checkOverflow: function checkOverflow() {
                    return false;
                  }
                })
              };

              if (option === null || option === void 0 ? void 0 : option.canvas) {
                this.workerRenderManager = new _render_workerRender__WEBPACK_IMPORTED_MODULE_6__["default"](Object.assign(Object.assign({}, option), {
                  video2img: this.channels.frame2gui
                }));
              }

              this.httpLoader = new _utils_http__WEBPACK_IMPORTED_MODULE_2__["default"]({
                channel: this.channels.buffer2packet
              });
              this.loader = new _format_hls_loader__WEBPACK_IMPORTED_MODULE_3__["default"](this.workerEvent, Object.assign(Object.assign({}, option), {
                status: _constants__WEBPACK_IMPORTED_MODULE_1__["loaderStatus"].worker,
                bf2demuxChannel: this.channels.buffer2packet,
                demux2videoChannel: this.channels.packet2frame,
                getData: function getData(url) {
                  return _this.httpLoader.getData(url);
                },
                flushHttp: function flushHttp() {
                  return _this.httpLoader.flush();
                }
              }));
              this.decodeController = new _decode__WEBPACK_IMPORTED_MODULE_5__["default"](Object.assign(Object.assign({}, option), {
                baseTime: _format_hls_loader__WEBPACK_IMPORTED_MODULE_3__["default"].baseTime,
                demux2video: this.channels.packet2frame,
                video2img: this.channels.frame2gui
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };

  _proto.bindEvent = function bindEvent() {
    this.workerEvent = new EventEmitter();
    self.onmessage = this.handleMsg.bind(this);
    this.workerEvent.on(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].LOADEDMETADATA, function (payload) {
      self.postMessage({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].GETMETADATA,
        payload: payload
      });
    });
  };

  _proto.destroy = function destroy() {
    this.workerEvent = null;
    this.httpLoader = null;
    this.loader = null;
  };

  _proto.showThis = function showThis() {
    console.log(this);
  }
  /**
   * 获取内存使用情况
   */
  ;

  _proto.getUseBufferSize = function getUseBufferSize() {
    var getLength = function (datas) {
      var size = 0;
      datas.map(function (i) {
        var _a, _b, _c, _d, _e, _f, _g, _h;

        if ((_a = i.data) === null || _a === void 0 ? void 0 : _a.byteLength) {
          size += (_b = i.data) === null || _b === void 0 ? void 0 : _b.byteLength;
        }

        if ((_c = i.buf_u) === null || _c === void 0 ? void 0 : _c.byteLength) {
          size += (_d = i.buf_u) === null || _d === void 0 ? void 0 : _d.byteLength;
          size += (_e = i.buf_y) === null || _e === void 0 ? void 0 : _e.byteLength;
          size += (_f = i.buf_v) === null || _f === void 0 ? void 0 : _f.byteLength;
        }

        if ((_g = i.data_byte) === null || _g === void 0 ? void 0 : _g.byteLength) {
          size += (_h = i.data_byte) === null || _h === void 0 ? void 0 : _h.byteLength;
        }
      });
      return size;
    };

    self.postMessage({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].RECIEVEBUFFERWORKERSIZE,
      payload: {
        bf: getLength(this.channels.buffer2packet.datas),
        packet: getLength(this.channels.packet2frame.datas),
        frame: getLength(this.channels.frame2gui.datas)
      }
    });
  };

  _proto.handleMsg = function handleMsg(_ref) {
    var data = _ref.data;

    switch (data.type) {
      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].INITOPTION:
        this.run(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].GETWORKERBUFFERSIZE:
        this.getUseBufferSize();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].SHOWTHIS:
        this.showThis();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].WORKERDESTROY:
        this.destroy();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].REQUESTLOAD:
        this.httpLoader.handleLoaderMsg(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].RENDERVIDEO:
        this.workerRenderManager.renderVideo(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].CHANGECHANNELSTATUS:
        this.decodeController.changeChannelStatus(data.payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].SEEKING:
        this.loader.seek(data.payload.time);
        this.decodeController.seek(data.payload.time);
        break;

      default:
        console.warn(_constants__WEBPACK_IMPORTED_MODULE_1__["ERROR_MSG"].UNHANDLE_WORKER_TYPE);
        break;
    }
  };

  return WorkerManager;
}();



/***/ }),

/***/ "./src/player/constants/index.ts":
/*!***************************************!*\
  !*** ./src/player/constants/index.ts ***!
  \***************************************/
/*! exports provided: loaderStatus, Loader, WorkerEvent, ManagerEvent, DemuxType, PlayerEvent, defaultOption, FORMAT, ERROR_MSG, NalUnitType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderStatus", function() { return loaderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerEvent", function() { return WorkerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerEvent", function() { return ManagerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemuxType", function() { return DemuxType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerEvent", function() { return PlayerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOption", function() { return defaultOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMAT", function() { return FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MSG", function() { return ERROR_MSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NalUnitType", function() { return NalUnitType; });
var loaderStatus;

(function (loaderStatus) {
  loaderStatus["worker"] = "worker";
  loaderStatus["window"] = "window";
})(loaderStatus || (loaderStatus = {}));

var Loader = function (event, option) {
  this.event = event;
  this.option = option;
};
var WorkerEvent;

(function (WorkerEvent) {
  WorkerEvent["REQUESTLOAD"] = "requestLoad";
  WorkerEvent["DOWNLOAD"] = "download"; // http worker 加载完毕

  WorkerEvent["HTTPREADY"] = "httpReady";
  WorkerEvent["WORKERREADY"] = "workerReady";
  WorkerEvent["WORKERDESTROY"] = "workerDestroy"; // decode worker 加载完成

  WorkerEvent["DECODEREADY"] = "decodeReady";
  WorkerEvent["INITOPTION"] = "initOption";
  WorkerEvent["GETVIDOEPACKET"] = "getVideoPacket"; // 获取 一帧数据

  WorkerEvent["GETVIDEOFRAME"] = "getVideoFrame";
  WorkerEvent["FLUSHDECODE"] = "flushDecode";
  WorkerEvent["FLUSHDECODEEND"] = "flushDecodeEnd";
  WorkerEvent["FLUSHHTTP"] = "flushHttp";
  WorkerEvent["SHOWTHIS"] = "showThis";
  WorkerEvent["GETAUDIOPACKET"] = "getAudioPacket";
  WorkerEvent["RENDERVIDEO"] = "renderVideo";
  WorkerEvent["CHANGECHANNELSTATUS"] = "changeChannelStatus";
  WorkerEvent["GETMETADATA"] = "getMetadata";
  WorkerEvent["SEEKING"] = "seeking";
  WorkerEvent["GETWORKERBUFFERSIZE"] = "getWorkerBufferSize";
  WorkerEvent["RECIEVEBUFFERWORKERSIZE"] = "recieveWorkerBufferSize";
})(WorkerEvent || (WorkerEvent = {}));

var ManagerEvent;

(function (ManagerEvent) {
  ManagerEvent["RECIEVEBUFFER"] = "recieveBuffer";
  ManagerEvent["DEMUXBUFFER"] = "demuxBuffer";
  ManagerEvent["GETVIDEOFRAME"] = "getVideoFrame";
  ManagerEvent["GETAUDIOFRAME"] = "getAudioFrame";
  ManagerEvent["AUDIOCONTEXTCREATE"] = "audioContextCreate";
  ManagerEvent["GETAUDIOPACKET"] = "getAudioPacket"; // 清楚所有缓冲内容

  ManagerEvent["FLUSH"] = "flush";
})(ManagerEvent || (ManagerEvent = {}));

var DemuxType;

(function (DemuxType) {
  DemuxType["VIDEO"] = "video";
  DemuxType["AAC"] = "aac";
})(DemuxType || (DemuxType = {}));

var PlayerEvent;

(function (PlayerEvent) {
  PlayerEvent["VIDEOREADY"] = "videoReady";
  PlayerEvent["AUDIOREADY"] = "audioReady";
  PlayerEvent["RECIEVEBUFFERWORKERSIZE"] = "recieveWorkerBufferSize";
  PlayerEvent["LOADFRAMEINFO"] = "loadFrameInfo";
  PlayerEvent["CANPLAY"] = "canplay";
  PlayerEvent["DURATIONCHANGE"] = "durationchange";
  PlayerEvent["LOADEDMETADATA"] = "loadedmetadata";
  PlayerEvent["PROGRESS"] = "progress";
  PlayerEvent["SEEKING"] = "seeking";
  PlayerEvent["SEEKED"] = "seeked";
  PlayerEvent["PLAYING"] = "playing";
  PlayerEvent["VOLUMECHANGE"] = "volumechange";
  PlayerEvent["TIMEUPATE"] = "timeupdate";
  PlayerEvent["PAUSE"] = "pause"; // 未支持

  PlayerEvent["ENDED"] = "ended";
})(PlayerEvent || (PlayerEvent = {}));

var defaultOption = {
  defaultVolume: 0.5,
  bufferSize: 2048,
  audioFlushTime: 1000,
  videoReadyNumber: 10,
  audioReadyDuration: 0.1,
  autoPlay: false,
  type: 'hls',
  maxAppendDecodeNumber: 300,
  maxFramesNumber: 15,
  maxDemuxNumber: 1000,
  getFpsCount: 60,
  useOffscreenRender: true,
  offscreenRendering: false,
  hasAppendLoader: false,
  seekDropFrame: false
};
var FORMAT;

(function (FORMAT) {
  FORMAT["HLS"] = "hls";
})(FORMAT || (FORMAT = {}));

var ERROR_MSG;

(function (ERROR_MSG) {
  ERROR_MSG["SOURCE_NULL"] = "\u627E\u4E0D\u5230\u64AD\u653E\u8D44\u6E90\u5730\u5740";
  ERROR_MSG["PARSESOURCE"] = "\u89E3\u6790\u8D44\u6E90\u5931\u8D25";
  ERROR_MSG["UNHANDLE_FORMAT"] = "\u4E0D\u652F\u6301\u7684\u5C01\u88C5\u683C\u5F0F";
  ERROR_MSG["REQUEST_REPEAT"] = "\u91CD\u590D\u8BF7\u6C42";
  ERROR_MSG["UNHANDLE_WORKER_TYPE"] = "\u4E0D\u652F\u6301\u7684 worker \u4E8B\u4EF6";
  ERROR_MSG["WORKER_RENDER_ERROR"] = "\u79BB\u5C4F\u6E32\u67D3\u9519\u8BEF";
})(ERROR_MSG || (ERROR_MSG = {}));

var NalUnitType;

(function (NalUnitType) {
  NalUnitType[NalUnitType["HEVC_NAL_TRAIL_N"] = 0] = "HEVC_NAL_TRAIL_N";
  NalUnitType[NalUnitType["HEVC_NAL_TSA_N"] = 2] = "HEVC_NAL_TSA_N";
  NalUnitType[NalUnitType["HEVC_NAL_STSA_N"] = 4] = "HEVC_NAL_STSA_N";
  NalUnitType[NalUnitType["HEVC_NAL_RADL_N"] = 6] = "HEVC_NAL_RADL_N";
  NalUnitType[NalUnitType["HEVC_NAL_RASL_N"] = 8] = "HEVC_NAL_RASL_N";
})(NalUnitType || (NalUnitType = {})); // export {
//   Loader,
//   EventEmitter,
//   IPacket,
//   IOption,
//   loaderStatus,
//   loaderOption,
//   IVideoFrame,
// };

/***/ }),

/***/ "./src/player/decode/audio.ts":
/*!************************************!*\
  !*** ./src/player/decode/audio.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioDecoder; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");


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



var AudioDecoder = /*#__PURE__*/function () {
  function AudioDecoder(event, option) {
    this.event = event;
    this.option = option;
    this.actx = null;
    this.audioBuffer = new ArrayBuffer(0);
    this.state = {
      flushing: false,
      appendTimes: 0
    };
    this.aduioFrameStartTime = null; // 表示每次喂入解码器 frame 的起播时间

    this.init();
  }

  var _proto = AudioDecoder.prototype;

  _proto.appendAudioBuffer = function appendAudioBuffer(data) {
    // console.log('收到pak', data.PTS, data.data_byte.byteLength)
    if (this.state.flushing) return;

    if (!this.aduioFrameStartTime) {
      // console.log('设置 aduioFrameStartTime', data.PTS, data);
      this.aduioFrameStartTime = data.PTS;
    }

    var view = new Uint8Array((this.audioBuffer.byteLength | 0) + (data.data_byte.buffer.byteLength | 0));
    view.set(new Uint8Array(this.audioBuffer), 0);
    view.set(new Uint8Array(data.data_byte), this.audioBuffer.byteLength | 0);
    this.audioBuffer = view.buffer;
  };

  _proto.flush = function flush() {
    this.state.flushing = true;
    this.audioBuffer = new ArrayBuffer(0);
    this.aduioFrameStartTime = null;

    if (this.state.appendTimes === 0) {
      this.state.flushing = false;
    }
  };

  _proto.init = function init() {
    this.initAudioContext();
    this.intervalId = window.setInterval(this.decodeAudioData.bind(this), this.option.audioFlushTime);
  };

  _proto.initAudioContext = function initAudioContext() {
    if (!this.actx) {
      var AudioContext = window.AudioContext // Default
      || window.webkitAudioContext // Safari and old versions of Chrome
      || false;
      if (!AudioContext) return;
      this.actx = new AudioContext();
      this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["ManagerEvent"].AUDIOCONTEXTCREATE, this.actx);
    }
  } // todo 修复音频问题
  ;

  _proto.decodeAudioData = function decodeAudioData() {
    var _a;

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      var audioPts, sendbuffer;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if ((_a = this.audioBuffer) === null || _a === void 0 ? void 0 : _a.byteLength) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              audioPts = this.aduioFrameStartTime; // console.log('添加 buffer', this.audioBuffer, this.audioBuffer.byteLength, audioPts);

              this.aduioFrameStartTime = null;
              this.state.appendTimes += 1;
              sendbuffer = this.audioBuffer.slice(0); // console.log('送入buffer', sendbuffer.byteLength)

              this.actx.decodeAudioData(sendbuffer, function (buffer) {
                var _a, _b, _c;

                _this.state.appendTimes -= 1;
                var frames = window.player.manager.asyncManager.audioFrames;
                var times = 0;

                if ((_a = frames[frames.length - 1]) === null || _a === void 0 ? void 0 : _a.duration) {
                  times = ((_b = frames[frames.length - 1]) === null || _b === void 0 ? void 0 : _b.duration) + ((_c = frames[frames.length - 1]) === null || _c === void 0 ? void 0 : _c.ptsTime) - audioPts * _this.option.baseTime;

                  if (Math.abs(times) > 0.01) {
                    console.warn('音频解码误差，', times);
                    console.log("\u89E3\u7801\u540E\uFF0C buffer \u957F\u5EA6:%f, \u65F6\u95F4\u5DEE\uFF1A%f, pts: %f, \u8D77\u59CB\u65F6\u95F4\u6233%f", buffer.duration, times, audioPts, audioPts * _this.option.baseTime);
                  }
                }

                if (_this.state.flushing) {
                  if (_this.state.appendTimes === 0) {
                    _this.state.flushing = false;
                  }
                } else {
                  _this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["ManagerEvent"].GETAUDIOFRAME, {
                    buffer: buffer,
                    pts: audioPts,
                    duration: buffer.duration,
                    ptsTime: audioPts * _this.option.baseTime
                  });
                }
              }); // buffer 喂入解码区，该buffer 在js 环境下无法访问， https://github.com/WebAudio/web-audio-api/issues/1175

              this.audioBuffer = new ArrayBuffer(0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };

  _proto.destroy = function destroy() {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }

    this.actx = null;
    this.aduioFrameStartTime = null;
    this.audioBuffer = new ArrayBuffer(0);
  };

  return AudioDecoder;
}();



/***/ }),

/***/ "./src/player/decode/index.ts":
/*!************************************!*\
  !*** ./src/player/decode/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DecodeController; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video */ "./src/player/decode/video.ts");


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


 // import AudioDecoder from "../decode/audioDecoder";

/**
 * 该模块作用，负责控制音视频编解码，控制解码时机
 */

var DecodeController = /*#__PURE__*/function () {
  function DecodeController(option) {
    this.option = option;
    this.state = {
      decodeWorkerReady: false,
      videoBuffer: [],
      intervalId: {},
      flushing: false,
      stopping: false
    };
    this.init();
    this.run();
  }

  var _proto = DecodeController.prototype;

  _proto.run = function run() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var packet;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.state.stopping) {
                _context.next = 10;
                break;
              }

              _context.next = 3;
              return this.option.video2img.pipe(null);

            case 3:
              _context.next = 5;
              return this.option.demux2video.read();

            case 5:
              packet = _context.sent;
              _context.next = 8;
              return this.videoDecoder.decodeData(packet);

            case 8:
              _context.next = 0;
              break;

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };

  _proto.seek = function seek(time) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.option.video2img.clear();
              this.videoDecoder.seek(time);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };

  _proto.init = function init() {
    this.videoDecoder = new _video__WEBPACK_IMPORTED_MODULE_2__["default"](Object.assign(Object.assign({}, this.option), {
      handleDecodeRecieve: this.handleDecodeRecieve.bind(this)
    }));
  }
  /**
   * 1. 离屏渲染下，收到的解码图片存在 worker 中
   * 2. 非离屏下，收到的图片发送到主线程渲染
   * 3. 同步工作放到主线程
   *
   * 4. 非离屏下, 主线程此处控制 是否继续存储
   * @param frame 解码图片
   */
  ;

  _proto.handleDecodeRecieve = function handleDecodeRecieve(frame) {
    if (this.option.offscreenRendering) {
      // 采用 offscrenn 渲染
      this.option.video2img.forcePipe(frame);
      self.postMessage({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].GETVIDEOFRAME,
        payload: {
          pts: frame.pts,
          decodeTime: frame.decodeTime,
          renderTime: frame.renderTime,
          width: frame.width,
          height: frame.height,
          sendTime: Date.now()
        }
      });
    } else {
      // 主线程渲染
      self.postMessage({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["WorkerEvent"].GETVIDEOFRAME,
        payload: frame
      }, [frame.buf_u.buffer, frame.buf_v.buffer, frame.buf_y.buffer]);
    }
  };

  _proto.changeChannelStatus = function changeChannelStatus(_ref) {
    var status = _ref.status;

    if (status) {
      // 阻塞管道
      this.option.video2img.forcePipe(null);
    } else {
      // 释放管道
      this.option.video2img.forceRead();
    }
  };

  return DecodeController;
}();



/***/ }),

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

    this.instance._init_decoder(cb, 0, 0); // this.state.flushing = false;


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



/***/ }),

/***/ "./src/player/format/hls/demux/M3U8Parse.ts":
/*!**************************************************!*\
  !*** ./src/player/format/hls/demux/M3U8Parse.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return M3U8Parse; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var m3u8_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! m3u8-parser */ "./node_modules/_m3u8-parser@4.6.0@m3u8-parser/dist/m3u8-parser.es.js");


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



var M3U8Parse = /*#__PURE__*/function () {
  function M3U8Parse() {}

  M3U8Parse.parse = function parse(url) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, baseUrl, source;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);

            case 2:
              res = _context.sent;
              baseUrl = M3U8Parse.getBaseUrl(url);

              if (!(res.status === 200)) {
                _context.next = 15;
                break;
              }

              _context.next = 7;
              return res.text();

            case 7:
              source = _context.sent;
              M3U8Parse.parser.push(source);
              M3U8Parse.parser.end();
              M3U8Parse.parser.manifest.duration = 0;
              M3U8Parse.parser.manifest.segments.every(function (item) {
                M3U8Parse.parser.manifest.duration += item.duration;
                return item.uri = baseUrl + item.uri;
              });
              return _context.abrupt("return", M3U8Parse.parser.manifest);

            case 15:
              throw '资源下载失败: ' + url;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  M3U8Parse.getBaseUrl = function getBaseUrl(url) {
    var lastSlash = url.lastIndexOf('/');
    return url.substr(0, lastSlash + 1);
  };

  return M3U8Parse;
}();


M3U8Parse.parser = new m3u8_parser__WEBPACK_IMPORTED_MODULE_1__["Parser"]();

/***/ }),

/***/ "./src/player/format/hls/demux/tsDemuxer.ts":
/*!**************************************************!*\
  !*** ./src/player/format/hls/demux/tsDemuxer.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Demuxer; });
/* harmony import */ var demuxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! demuxer */ "./node_modules/_demuxer@2.3.0@demuxer/dist/demuxer.all.esm.js");


var Demuxer = /*#__PURE__*/function () {
  function Demuxer(option) {
    this.option = option;
    this.state = {
      demuxUrl: null,
      pesBf: [],
      hasDecodingDate: false,
      flushing: false,
      destroy: false
    };
    this.demuxer = new demuxer__WEBPACK_IMPORTED_MODULE_0__["TSDemux"]({
      debug: true,
      enableWorker: false,
      onlyDemuxElementary: true
    });
    this.bindEvent();
  }

  var _proto = Demuxer.prototype;

  _proto.flush = function flush() {
    // if (this.state.hasDecodingDate) {
    //   this.state.flushing = true;
    // }
    this.state.demuxUrl = null;
    this.demuxer.reset();
  };

  _proto.handleRecieveBuffer = function handleRecieveBuffer(_ref) {
    var _ref$data = _ref.data,
        data = _ref$data === void 0 ? new ArrayBuffer(0) : _ref$data,
        done = _ref.done,
        url = _ref.url;

    if (!this.state.demuxUrl) {
      this.state.demuxUrl = url;
    } else if (this.state.demuxUrl !== url) {
      return console.warn("\u6570\u636E\u52A0\u8F7D\u8D85\u524D demux url: " + this.state.demuxUrl + ", recieve url: " + url);
    }

    data.byteLength !== 0 && this.demuxer.push(data, {
      done: true
    }); // 该分片解析完毕 

    if (done) {
      this.state.demuxUrl = null;
    }
  };

  _proto.bindEvent = function bindEvent() {
    this.demuxer.on(demuxer__WEBPACK_IMPORTED_MODULE_0__["Events"].DEMUX_DATA, this.handleRecieveDemuxData.bind(this));
    this.demuxer.on(demuxer__WEBPACK_IMPORTED_MODULE_0__["Events"].DONE, this.handleDemuxDone.bind(this));
  };

  _proto.handleRecieveDemuxData = function handleRecieveDemuxData(data) {
    this.state.hasDecodingDate = true;

    if (this.state.flushing) {
      return;
    }

    this.option.handleRecievePacket(data);
  };

  _proto.handleDemuxDone = function handleDemuxDone() {
    this.state.hasDecodingDate = false;

    if (this.state.flushing) {
      this.state.flushing = false;
    }
  };

  return Demuxer;
}();



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

/***/ "./src/player/manager/async.ts":
/*!*************************************!*\
  !*** ./src/player/manager/async.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncManager; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");
/* harmony import */ var _render_yuvRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/yuvRender */ "./src/player/render/yuvRender.ts");
/* harmony import */ var _render_audioRender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/audioRender */ "./src/player/render/audioRender.ts");
/* harmony import */ var _render_provider_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render/provider/audio */ "./src/player/render/provider/audio/index.ts");
/* harmony import */ var _render_provider_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render/provider/video */ "./src/player/render/provider/video/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/player/utils/index.ts");


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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






 // const debug = require('debug')('red: asyncManager');

var AsyncManager = /*#__PURE__*/function () {
  function AsyncManager(event, option) {
    var _this = this;

    this.event = event;
    this.option = option;
    this.emitProgressEventTh = _utils__WEBPACK_IMPORTED_MODULE_6__["default"].throttle(function () {
      return _this.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].PROGRESS)();
    }, 100);
    this.emitTimeUpdateEventTh = _utils__WEBPACK_IMPORTED_MODULE_6__["default"].throttle(function () {
      return _this.emitEvent(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].TIMEUPATE)();
    }, 100);
    this.state = {
      videoReady: false,
      audioReady: false,
      videoRafId: null
    };
    this.playerState = {
      currentTime: 0,
      playing: false,
      audioAppendTime: 0,
      playStartTime: 0,
      shouldRenderPoster: true,
      videoLoading: false,
      audioSeeking: false,
      videoSeeking: false,
      isChannelLocking: false,
      documentVisibility: false
    };
    this.performanceState = {
      decodeCount: 0,
      decodeSumTime: 0,
      decodeAvgTime: 0,
      fpsCount: 0,
      fps: 0
    };
    this.init();
    this.bindEvent();
  }
  /**
   * 在缓冲区内设置 currentTime，直接渲染对应 frame
   * 不在缓冲区，设置等待状态，获取对应帧后，再去渲染
   */


  var _proto = AsyncManager.prototype;

  _proto.seek = function seek(time) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log('seek window async', time);
              this.playerState.currentTime = time;
              this.playerState.playStartTime = this.playerState.currentTime - this.audioRender.currentTime;
              this.playerState.shouldRenderPoster = true;
              this.playerState.audioSeeking = true;
              this.playerState.videoSeeking = true;
              this.playerState.isChannelLocking = false;
              this.flush();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };

  _proto.run = function run() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  };

  _proto.destroy = function destroy() {
    // this.videoFrames = null;
    this.audioFrames = null;
    this.videoRender = null;
    this.audioRender = null;
    this.videoProvider = null;
    this.audioProvider = null;
    this.playerState = {
      currentTime: 0,
      playing: false,
      audioSeeking: false,
      videoSeeking: false,
      audioAppendTime: 0,
      shouldRenderPoster: true,
      videoLoading: false,
      isChannelLocking: false,
      playStartTime: 0,
      documentVisibility: false
    };
    this.state = {
      videoReady: false,
      audioReady: false,
      videoRafId: null
    };
    this.performanceState = null;
    this.frameInfo = null;
  }
  /**
   * 获取当前已解码部分 缓冲区长度
   */
  ;

  _proto.getBuffer = function getBuffer() {
    var audioFrames = this.audioFrames;
    var videoFrames = this.option.video2img.datas;

    if (videoFrames.length && audioFrames.length) {
      var videoEnd = videoFrames[0].renderTime;
      var videoStart = videoFrames[videoFrames.length - 1].renderTime;
      var audioStart = audioFrames[0].ptsTime;
      var audioEnd = audioFrames[audioFrames.length - 1].ptsTime + audioFrames[audioFrames.length - 1].buffer.duration;
      return {
        start: Math.max(videoStart, audioStart),
        end: Math.min(videoEnd, audioEnd)
      };
    }

    return {
      start: 0,
      end: 0
    };
  };

  _proto.play = function play() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.playerState.playing) {
                this.audioRender.play();
              }

              return _context3.abrupt("return");

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
  };

  _proto.pause = function pause() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (this.playerState.playing) {
                this.playerState.playing = false;
                this.audioRender.pause();
                this.videoPause();
                this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].PAUSE);
              }

              return _context4.abrupt("return");

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
  };

  _proto.flush = function flush() {
    this.option.video2img.clear();
    this.audioFrames.length = 0;
  };

  _proto.init = function init() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              this.audioRender = new _render_audioRender__WEBPACK_IMPORTED_MODULE_3__["default"](this.event, Object.assign(Object.assign({}, this.option), {
                handleAudioProcess: this.handleAudioProcess.bind(this)
              }));

              if (!this.option.offscreenRendering) {
                this.videoRender = new _render_yuvRender__WEBPACK_IMPORTED_MODULE_2__["default"](this.option);
              }

              this.audioFrames = [];
              this.audioProvider = new _render_provider_audio__WEBPACK_IMPORTED_MODULE_4__["default"]({
                audioFrames: this.audioFrames
              }, this.option);
              this.videoProvider = new _render_provider_video__WEBPACK_IMPORTED_MODULE_5__["default"]({
                videoFrames: this.option.video2img.datas
              }, this.option);
              this.frameInfo = null;

            case 6:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
  };

  _proto.bindEvent = function bindEvent() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.event.on(_constants__WEBPACK_IMPORTED_MODULE_1__["ManagerEvent"].GETVIDEOFRAME, this.handleRecieveVideoFrame.bind(this));
              this.event.on(_constants__WEBPACK_IMPORTED_MODULE_1__["ManagerEvent"].GETAUDIOFRAME, this.handleRecieveAudioFrame.bind(this));
              this.event.on(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].LOADEDMETADATA, this.handleRecieveMetaData.bind(this));
              this.event.on(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].PLAYING, this.handleAudioPlay.bind(this));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));
  };

  _proto.handleRecieveVideoFrame = function handleRecieveVideoFrame(frame) {
    // Utils.log(frame.renderTime);
    this.performanceState.decodeCount++;
    this.performanceState.decodeSumTime += frame.decodeTime;
    this.performanceState.decodeAvgTime = this.performanceState.decodeSumTime / this.performanceState.decodeCount;
    this.option.video2img.forcePipe(frame);
    var videoFrames = this.option.video2img.datas;

    if (frame.renderTime > this.playerState.currentTime && this.playerState.shouldRenderPoster) {
      this.playerState.shouldRenderPoster = false;
      this.playerState.currentTime = frame.renderTime;
      this.emitTimeUpdateEventTh();
      this.renderVideoFrame(frame.renderTime);
    }

    if (!this.state.videoReady && (videoFrames === null || videoFrames === void 0 ? void 0 : videoFrames.length) >= this.option.videoReadyNumber) {
      this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].VIDEOREADY);
      this.state.videoReady = true;
      this.checkCanPlay();
    }

    if (!this.option.offscreenRendering && videoFrames.length > this.option.maxFramesNumber && !this.playerState.isChannelLocking) {
      this.option.changeChannelStatus(true);
      this.playerState.isChannelLocking = true;
    }

    if (this.playerState.videoSeeking) {
      this.playerState.videoSeeking = false;
      this.checkSeekend();
    }

    if (this.playerState.videoLoading && videoFrames.length >= this.option.videoReadyNumber) {
      this.changeVideoLoadingStatus(false);
    }

    this.emitProgressEventTh();

    if (!this.frameInfo) {
      this.frameInfo = {
        width: frame.width,
        height: frame.height
      };
      this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].LOADFRAMEINFO, this.frameInfo);
    }
  };

  _proto.handleRecieveAudioFrame = function handleRecieveAudioFrame(data) {
    var _this2 = this;

    var start = data.ptsTime;
    var currentTime = this.playerState.currentTime; // 无用 audiubuffer 直接丢弃

    if (start + data.buffer.duration < currentTime) return;
    this.audioFrames.push(data);
    /**
     * seek 后，此处调整音频 起始时间.
     */

    if (this.playerState.audioSeeking) {
      while (this.audioFrames.length > 0) {
        var frames = this.audioFrames.shift();
        var audioStartTime = frames.ptsTime;

        if (currentTime < audioStartTime + frames.buffer.duration) {
          var seekTime = Math.max(currentTime - audioStartTime, 0);
          frames.useOffset = Math.floor(seekTime / frames.buffer.duration * frames.buffer.length);
          this.audioFrames.unshift(frames);
          this.playerState.audioSeeking = false;
          this.checkSeekend();
          return;
        }
      }
    }

    if (!this.state.audioReady) {
      var duration = this.option.audioReadyDuration;
      this.audioFrames.find(function (item) {
        duration -= item.buffer.duration;

        if (duration <= 0) {
          _this2.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].AUDIOREADY);

          _this2.state.audioReady = true;

          _this2.checkCanPlay();
        }
      });
    }
  }
  /**
   * todo： 兼容 仅包含音频或者视频的流。
   */
  ;

  _proto.checkCanPlay = function checkCanPlay() {
    var _this$state = this.state,
        audioReady = _this$state.audioReady,
        videoReady = _this$state.videoReady;

    if (audioReady && videoReady) {
      this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].CANPLAY);
    }
  };

  _proto.renderVideoFrame = function renderVideoFrame(time, frame) {
    var index = null;

    try {
      if (!frame) {
        if (!this.option.video2img.datas.length && !this.playerState.videoLoading) {
          // console.log('卡断');
          this.changeVideoLoadingStatus(true);
          return;
        }

        var provider = this.videoProvider.provider(time);

        if (!provider) {
          return;
        }

        if (provider.clear && this.option.offscreenRendering) {
          this.changeVideoLoadingStatus(true);
          this.option.callWorkerRender({
            clear: true,
            length: provider.clearLen
          });
          return;
        }

        frame = provider.frame;
        index = provider.index;
      }

      if (this.option.offscreenRendering) {
        // 离屏渲染
        !isNaN(index) && this.option.callWorkerRender({
          index: index,
          pts: frame === null || frame === void 0 ? void 0 : frame.pts,
          frame: frame
        });
      } else {
        frame && this.videoRender.drawFrame(frame);

        if (this.playerState.isChannelLocking) {
          this.option.changeChannelStatus(false);
          this.playerState.isChannelLocking = false;
        }
      }
    } catch (e) {
      console.error("\u6E32\u67D3\u56FE\u50CF\u5931\u8D25, " + e.message);
    }
  };

  _proto.handleAudioProcess = function handleAudioProcess(audioProcessingEvent) {
    if (this.playerState.videoLoading) return; // console.log('handleAudioProcess');

    var outputBuffer = audioProcessingEvent.outputBuffer;
    var sourceSize = outputBuffer.length;

    var _this$audioProvider$p = this.audioProvider.provider(sourceSize),
        left = _this$audioProvider$p.left,
        right = _this$audioProvider$p.right,
        audioTime = _this$audioProvider$p.audioTime,
        hasCopySize = _this$audioProvider$p.hasCopySize;

    var leftOutBf = outputBuffer.getChannelData(0);
    var rightOutBf = outputBuffer.getChannelData(1);
    leftOutBf.set(left);
    rightOutBf.set(right);

    if (hasCopySize === 0) {
      return;
    } // this.playerState.audioAppendTime = this.audioRender.currentTime;


    if (hasCopySize < sourceSize) {
      var emptyArray = new Float32Array(sourceSize - hasCopySize);
      leftOutBf.set(emptyArray, hasCopySize);
      rightOutBf.set(emptyArray, hasCopySize);
    }

    if (audioTime !== 0) {
      // this.playerState.currentTime = audioTime;
      this.emitTimeUpdateEventTh();
    }
  };

  _proto.videoPlay = function videoPlay() {
    var _this3 = this;

    if (this.playerState.videoLoading) {
      // console.log('卡顿，循环读取上一帧', this.playerState.currentTime);
      // this.playerState.audioAppendTime = this.audioRender.currentTime;
      this.renderVideoFrame(this.playerState.currentTime);
    } else {
      // console.log(this.playerState.playStartTime, this.audioRender.currentTime);
      var currentTime = this.playerState.playStartTime + this.audioRender.currentTime; // console.log('循环时间: ', currentTime - this.playerState.lastRenderTime);

      this.playerState.currentTime = currentTime;
      this.emitTimeUpdateEventTh(); // console.log('正常读取帧', currentTime);

      this.renderVideoFrame(this.playerState.currentTime);
    }

    this.state.videoRafId = requestAnimationFrame(function (now) {
      _this3.performanceState.fpsCount++;

      if (!_this3.playerState.lastRenderTime) {
        _this3.playerState.lastRenderTime = now;
      } // console.log(this.performanceState.fpsCount, this.option.getFpsCount);


      if (_this3.performanceState.fpsCount >= _this3.option.getFpsCount) {
        _this3.performanceState.fps = Math.floor(1000 * _this3.performanceState.fpsCount / (now - _this3.playerState.lastRenderTime));
        _this3.playerState.lastRenderTime = null;
        _this3.performanceState.fpsCount = 0;
      }

      _this3.videoPlay();
    });
  };

  _proto.videoPause = function videoPause() {
    // this.playerState.audioAppendTime = this.audioRender.currentTime;
    this.state.videoRafId && window.cancelAnimationFrame(this.state.videoRafId);
  };

  _proto.checkSeekend = function checkSeekend() {
    this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].SEEKED);
  }
  /**
   * 修改videoload 状态
   * @param status true 暂停 audio 播放，反之
   */
  ;

  _proto.changeVideoLoadingStatus = function changeVideoLoadingStatus(status) {
    // console.log('changestatus', status);
    if (status && !this.playerState.videoLoading) {
      this.playerState.videoLoading = true;
      this.audioRender.pause();
    } else if (!status && this.playerState.videoLoading) {
      if (this.option.video2img.datas.length >= this.option.videoReadyNumber) {
        this.playerState.videoLoading = false;
        this.audioRender.play();
      }
    }
  };

  _proto.handleRecieveMetaData = function handleRecieveMetaData(_ref) {
    var _ref$startTime = _ref.startTime,
        startTime = _ref$startTime === void 0 ? 0 : _ref$startTime;
    this.playerState.playStartTime = startTime;
    this.emitTimeUpdateEventTh();
  };

  _proto.handleAudioPlay = function handleAudioPlay() {
    if (!this.playerState.playing) {
      this.playerState.playing = true;
      this.videoPlay();
    }
  };

  _proto.emitEvent = function emitEvent(event) {
    var _this4 = this;

    return function () {
      return _this4.event.emit(event);
    };
  };

  _createClass(AsyncManager, [{
    key: "currentTime",
    get: function get() {
      return this.playerState.currentTime;
    },
    set: function set(time) {
      // console.log('change currentTime', time);
      this.renderVideoFrame(time);

      while (this.audioFrames.length > 0) {
        var frames = this.audioFrames.shift();
        var audioStartTime = frames.ptsTime;

        if (time < audioStartTime + frames.buffer.duration) {
          frames.useOffset = Math.floor((time - audioStartTime) / frames.buffer.duration * frames.buffer.length);
          this.audioFrames.unshift(frames);
          this.playerState.currentTime = time;
          return;
        }
      }
    }
  }, {
    key: "performanceStatus",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.performanceState), this.videoProvider.providerState), {
        frameLength: this.option.video2img.datas.length
      });
    }
  }, {
    key: "volumn",
    get: function get() {
      return this.audioRender.volumn;
    },
    set: function set(data) {
      this.audioRender.volumn = data;
    }
  }]);

  return AsyncManager;
}();



/***/ }),

/***/ "./src/player/manager/index.ts":
/*!*************************************!*\
  !*** ./src/player/manager/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayerManager; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./async */ "./src/player/manager/async.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");
/* harmony import */ var webworkify_webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webworkify-webpack */ "./node_modules/_webworkify-webpack@2.1.5@webworkify-webpack/index.js");
/* harmony import */ var webworkify_webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webworkify_webpack__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _decode_audio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../decode/audio */ "./src/player/decode/audio.ts");
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/http */ "./src/player/utils/http.ts");
/* harmony import */ var _utils_channel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/channel */ "./src/player/utils/channel.ts");


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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







/**
 * td:
 * 今日进度 已经将音频传输给 window
 * a 离屏播放
 * window 环境下
 * 1. 播放音频
 * 2. 离屏下，将第一步时间传给worker
 * done
 * worker 环境下
 * 1. 同步播放视频
 * done
 * b 非离屏播放
 * done
 * c seek 支持
 * done
 * d 性能检查
 * no done
 */

var PlayerManager = /*#__PURE__*/function () {
  function PlayerManager(event, option) {
    this.event = event;
    this.option = option;
    this.state = {
      destroy: false
    };
    this.hasAppendLoader = false; // private windowAdapter: WindowAdapter;

    this.channels = {};
    this.metadata = {
      duration: 0,
      startTime: null
    };
    this.initEnvironment();
    this.init();
    this.bindEvent();
  }

  var _proto = PlayerManager.prototype;

  _proto.init = function init() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.channels = {
                bf2demux: new _utils_channel__WEBPACK_IMPORTED_MODULE_6__["default"]({
                  maxLength: 4,
                  checkOverflow: function checkOverflow() {
                    return true;
                  }
                }),
                demux2video: new _utils_channel__WEBPACK_IMPORTED_MODULE_6__["default"]({
                  maxLength: this.option.maxDemuxNumber,
                  checkOverflow: function checkOverflow() {
                    return true;
                  }
                }),
                video2img: new _utils_channel__WEBPACK_IMPORTED_MODULE_6__["default"]({
                  maxLength: this.option.maxFramesNumber,
                  checkOverflow: function checkOverflow() {
                    return false;
                  }
                })
              };
              this.asyncManager = new _async__WEBPACK_IMPORTED_MODULE_1__["default"](this.event, Object.assign(Object.assign({}, this.option), {
                video2img: this.channels.video2img,
                callWorkerRender: this.callWorkerRender.bind(this),
                changeChannelStatus: this.changeChannelStatus.bind(this)
              }));
              this.audioDecoder = new _decode_audio__WEBPACK_IMPORTED_MODULE_4__["default"](this.event, this.option);

              if (this.option.loader) {
                this.hasAppendLoader = true;
                this.httpLoader = new _utils_http__WEBPACK_IMPORTED_MODULE_5__["default"]({
                  channel: this.channels.bf2demux
                });
                this.loader = new this.option.loader(this.event, Object.assign(Object.assign({}, this.option), {
                  status: _constants__WEBPACK_IMPORTED_MODULE_2__["loaderStatus"].window,
                  bf2demuxChannel: this.channels.bf2demux,
                  demux2videoChannel: this.channels.demux2video,
                  getData: function getData(url) {
                    return _this.httpLoader.getData(url);
                  },
                  flushHttp: function flushHttp() {
                    return _this.httpLoader.flush();
                  }
                }));
                delete this.option.loader;
                this.worker = webworkify_webpack__WEBPACK_IMPORTED_MODULE_3___default()(/*require.resolve*/(/*! ../adapter/window.ts */ "./src/player/adapter/window.ts"));
              } else {
                this.worker = webworkify_webpack__WEBPACK_IMPORTED_MODULE_3___default()(/*require.resolve*/(/*! ../adapter/worker.ts */ "./src/player/adapter/worker.ts"));
              }

              this.worker.onmessage = this.handleWorkerMsg.bind(this); // this.worker.onerror = (e) => { throw e };

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };

  _proto.run = function run() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
  };

  _proto.destroy = function destroy() {
    this.worker = null;
    this.state = {
      destroy: true
    };
  };

  _proto.play = function play() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.asyncManager.play();

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
  };

  _proto.pause = function pause() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.asyncManager.pause();

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
  };

  /**
   *
   * @param time 跳转时间
   */
  _proto.seek = function seek(time) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var duration, startTime, bufferd;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["PlayerEvent"].SEEKING);
              duration = this.duration;
              startTime = this.metadata.startTime;

              if (!(!duration || !startTime)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return");

            case 5:
              if (time > duration) time = duration;
              if (time < this.metadata.startTime) time = this.metadata.startTime;
              bufferd = this.buffered;

              if (time > bufferd.start && time < bufferd.end) {
                this.asyncManager.currentTime = time;
              } else {
                if (!this.hasAppendLoader) {
                  // 使用直接编译的 loader
                  this.worker.postMessage({
                    type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].SEEKING,
                    payload: {
                      time: time
                    }
                  });
                } else {
                  this.loader.seek(time);
                }

                this.asyncManager.seek(time); // debug('超出当前缓冲区');
              }

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
  };

  _proto.bindEvent = function bindEvent() {
    this.event.on(_constants__WEBPACK_IMPORTED_MODULE_2__["PlayerEvent"].CANPLAY, this.handleCanPlay.bind(this));
    this.event.on(_constants__WEBPACK_IMPORTED_MODULE_2__["PlayerEvent"].LOADEDMETADATA, this.handleRecieveMetaData.bind(this));
    this.event.on(_constants__WEBPACK_IMPORTED_MODULE_2__["ManagerEvent"].GETAUDIOPACKET, this.handleRecieveAudioPacket.bind(this));
    document.addEventListener('visibilitychange', this.handleDocumentVisbilityChange.bind(this));
  };

  _proto.handleCanPlay = function handleCanPlay() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (this.option.autoPlay) {
                this.play();
              }

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));
  };

  _proto.handleDocumentVisbilityChange = function handleDocumentVisbilityChange() {
    if (document.hidden) {
      this.pause();
    }
  };

  _proto.callWorkerReady = function callWorkerReady() {
    if (this.option.offscreenRendering) {
      this.option.canvas = this.option.canvas.transferControlToOffscreen();
      this.worker.postMessage({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].INITOPTION,
        payload: this.option
      }, [this.option.canvas]);
    } else {
      var obj = {};

      for (var key in this.option) {
        if (key !== 'canvas') {
          obj[key] = this.option[key];
        }
      }

      this.worker.postMessage({
        type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].INITOPTION,
        payload: obj
      });
    }

    if (this.hasAppendLoader) {
      this.getChannlData();
    }
  };

  _proto.showWorker = function showWorker() {
    this.worker.postMessage({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].SHOWTHIS
    });
  };

  _proto.getWorkerBfSize = function getWorkerBfSize() {
    this.worker.postMessage({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].GETWORKERBUFFERSIZE
    });
  };

  _proto.handleWorkerMsg = function handleWorkerMsg(_ref) {
    var data = _ref.data;

    var _ref2 = data || {},
        type = _ref2.type,
        payload = _ref2.payload;

    switch (type) {
      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].WORKERREADY:
        this.callWorkerReady();
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].GETAUDIOPACKET:
        this.audioDecoder.appendAudioBuffer(payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].GETVIDEOFRAME:
        this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["ManagerEvent"].GETVIDEOFRAME, payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].GETMETADATA:
        this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["PlayerEvent"].LOADEDMETADATA, payload);
        this.handleRecieveMetaData(payload);
        break;

      case _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].RECIEVEBUFFERWORKERSIZE:
        this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["PlayerEvent"].RECIEVEBUFFERWORKERSIZE, payload);
        break;

      default:
        break;
    }
  };

  _proto.initEnvironment = function initEnvironment() {
    if (this.option.useOffscreenRender && window.OffscreenCanvas) {
      this.option.offscreenRendering = true;
    }
  };

  _proto.callWorkerRender = function callWorkerRender(payload) {
    this.worker.postMessage({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].RENDERVIDEO,
      payload: payload
    });
  };

  _proto.handleRecieveMetaData = function handleRecieveMetaData(payload) {
    this.metadata = payload;
    this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_2__["PlayerEvent"].DURATIONCHANGE);
  };

  _proto.getChannlData = function getChannlData() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      var _this2 = this;

      var _loop;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function () {
                var packet;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return _this2.channels.video2img.pipe(null);

                      case 2:
                        _context7.next = 4;
                        return _this2.channels.demux2video.read();

                      case 4:
                        packet = _context7.sent;
                        _context7.next = 7;
                        return new Promise(function (resolve) {
                          setTimeout(function () {
                            _this2.worker.postMessage({
                              type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].GETVIDOEPACKET,
                              payload: packet
                            }, [packet.data_byte.buffer]);

                            resolve();
                          }, 100);
                        });

                      case 7:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _loop);
              });

            case 1:
              if (this.state.destroy) {
                _context8.next = 5;
                break;
              }

              return _context8.delegateYield(_loop(), "t0", 3);

            case 3:
              _context8.next = 1;
              break;

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee7, this);
    }));
  };

  _proto.handleRecieveAudioPacket = function handleRecieveAudioPacket(packet) {
    this.audioDecoder.appendAudioBuffer(packet);
  }
  /**
   * 冻结worker decode 管道
   * @param status true 冻结, false 解冻
   */
  ;

  _proto.changeChannelStatus = function changeChannelStatus(status) {
    // console.log('changeChannelStatus', status);
    if (this.hasAppendLoader) {
      !status && this.channels.video2img.unlockPipe();
    }

    this.worker.postMessage({
      type: _constants__WEBPACK_IMPORTED_MODULE_2__["WorkerEvent"].CHANGECHANNELSTATUS,
      payload: {
        status: status
      }
    });
  };

  _createClass(PlayerManager, [{
    key: "buffered",
    get: function get() {
      return this.asyncManager.getBuffer();
    }
  }, {
    key: "duration",
    get: function get() {
      return this.metadata.duration;
    }
  }, {
    key: "currentTime",
    get: function get() {
      return this.asyncManager.currentTime;
    }
  }, {
    key: "performanceStatus",
    get: function get() {
      return this.asyncManager.performanceStatus;
    }
  }, {
    key: "volumn",
    get: function get() {
      return this.asyncManager.volumn;
    },
    set: function set(data) {
      this.asyncManager.volumn = data;
    }
  }, {
    key: "bufferSize",
    get: function get() {
      this.getWorkerBfSize();
      return {};
    }
  }]);

  return PlayerManager;
}();



/***/ }),

/***/ "./src/player/player.ts":
/*!******************************!*\
  !*** ./src/player/player.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ "./src/player/manager/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/player/constants/index.ts");


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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



var EventEmitter = __webpack_require__(/*! events */ "./node_modules/_events@3.3.0@events/events.js");



var Player = /*#__PURE__*/function () {
  function Player(url, option) {
    this.url = url;
    this.option = option;
    this.event = new EventEmitter();
    this.init();
  }

  var _proto = Player.prototype;

  _proto.play = function play() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.manager.play());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };

  _proto.pause = function pause() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.manager.pause());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };

  _proto.on = function on(name, cb) {
    this.event.on(name, cb);
  };

  _proto.getBufferSize = function getBufferSize() {
    return this.manager.bufferSize;
  };

  _proto.seek = function seek(time) {
    return this.manager.seek(time);
  };

  _proto.init = function init() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.option = Object.assign(_constants__WEBPACK_IMPORTED_MODULE_2__["defaultOption"], this.option);
              this.managerInit();
              this.bindEvent();
              this.run();

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
  };

  _proto.managerInit = function managerInit() {
    this.manager = new _manager__WEBPACK_IMPORTED_MODULE_1__["default"](this.event, Object.assign({
      url: this.url
    }, this.option));
  };

  _proto.run = function run() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.manager.run();

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
  };

  _proto.bindEvent = function bindEvent() {};

  _createClass(Player, [{
    key: "duration",
    get: function get() {
      return this.manager.duration;
    }
  }, {
    key: "buffered",
    get: function get() {
      return this.manager.buffered;
    }
  }, {
    key: "performanceStatus",
    get: function get() {
      return this.manager.performanceStatus;
    }
  }, {
    key: "currentTime",
    get: function get() {
      return this.manager.currentTime;
    }
  }, {
    key: "volumn",
    get: function get() {
      return this.manager.volumn;
    },
    set: function set(data) {
      this.manager.volumn = data;
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/player/render/audioRender.ts":
/*!******************************************!*\
  !*** ./src/player/render/audioRender.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioRender; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/player/constants/index.ts");


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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



var AudioRender = /*#__PURE__*/function () {
  function AudioRender(event, option) {
    this.event = event;
    this.option = option;
    this.scriptNode = null;
    this.gainNode = null;
    this.state = {
      volumn: null
    };
    this.bindEvent();
  }

  var _proto = AudioRender.prototype;

  _proto.destroy = function destroy() {
    this.actx = null;
  };

  _proto.bindEvent = function bindEvent() {
    this.event.on(_constants__WEBPACK_IMPORTED_MODULE_1__["ManagerEvent"].AUDIOCONTEXTCREATE, this.handleaudioContextCreateSuccess.bind(this));
  };

  _proto.handleaudioContextCreateSuccess = function handleaudioContextCreateSuccess(actx) {
    this.actx = actx;
    this.initActxEvent();
    this.actx.onstatechange = this.handleAudioStateChange.bind(this);
  };

  _proto.initActxEvent = function initActxEvent() {
    // this.actx
    this.scriptNode = this.actx.createScriptProcessor(this.option.bufferSize, 2, 2);
    this.gainNode = this.actx.createGain();
    this.gainNode.gain.value = this.option.defaultVolume;
    this.scriptNode.onaudioprocess = this.option.handleAudioProcess;
    this.scriptNode.connect(this.gainNode);
    this.gainNode.connect(this.actx.destination);
    this.state.volumn = this.option.defaultVolume;
    this.pause();
  };

  _proto.play = function play() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                if (_this.actx.state === 'suspended') {
                  _this.actx.resume().then(function () {
                    resolve();
                  }).catch(function (e) {
                    console.log('audio play error', e);
                  });
                } else {
                  resolve();
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

  _proto.pause = function pause() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(this.actx && this.actx.state !== 'suspended')) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return this.actx.suspend();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };

  _proto.handleAudioStateChange = function handleAudioStateChange() {
    if (this.actx.state === 'running') {
      this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["PlayerEvent"].PLAYING);
    }
  };

  _createClass(AudioRender, [{
    key: "volumn",
    get: function get() {
      return this.state.volumn;
    },
    set: function set(data) {
      this.state.volumn = data;
      this.gainNode.gain.value = data;
    }
  }, {
    key: "currentTime",
    get: function get() {
      return this.actx.currentTime;
    }
  }]);

  return AudioRender;
}();



/***/ }),

/***/ "./src/player/render/provider/audio/defaultProcessor.ts":
/*!**************************************************************!*\
  !*** ./src/player/render/provider/audio/defaultProcessor.ts ***!
  \**************************************************************/
/*! exports provided: Processor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Processor", function() { return Processor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefualtProcessor; });
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Processor = function () {};

var DefualtProcessor = /*#__PURE__*/function (_Processor) {
  _inheritsLoose(DefualtProcessor, _Processor);

  function DefualtProcessor(config, option) {
    var _this = _Processor.call(this) || this;

    _this.config = config;
    _this.option = option;
    return _this;
  }

  var _proto = DefualtProcessor.prototype;

  _proto.provider = function provider(length) {
    var audioFrames = this.config.audioFrames;
    var res = {
      left: new Float32Array(length),
      right: new Float32Array(length),
      hasCopySize: 0,
      audioTime: 0
    };

    while (audioFrames.length > 0) {
      var originFrame = audioFrames.shift();
      var _originFrame$useOffse = originFrame.useOffset,
          useOffset = _originFrame$useOffse === void 0 ? 0 : _originFrame$useOffse,
          pts = originFrame.pts;
      var leftBf = originFrame.buffer.getChannelData(0);
      var rightBf = originFrame.buffer.numberOfChannels > 1 ? originFrame.buffer.getChannelData(1) : originFrame.buffer.getChannelData(0);
      var canCopyOver = length - res.hasCopySize - (leftBf.length - useOffset); //P2 TODO: 兼容其他类型的 pts, 解决

      res.audioTime = useOffset / leftBf.length * originFrame.buffer.duration + pts * this.option.baseTime;

      if (canCopyOver > 0) {
        // 该 frame 被完全使用，丢弃
        res.left.set(leftBf.slice(useOffset, leftBf.length), res.hasCopySize);
        res.right.set(rightBf.slice(useOffset, rightBf.length), res.hasCopySize);
        res.hasCopySize += leftBf.length - useOffset;
      } else {
        // 该 frame 部分被使用
        var endOffset = length - res.hasCopySize + useOffset;
        res.left.set(leftBf.slice(useOffset, endOffset), res.hasCopySize);
        res.right.set(rightBf.slice(useOffset, endOffset), res.hasCopySize);
        originFrame.useOffset = endOffset;
        res.hasCopySize += length - res.hasCopySize;
        audioFrames.unshift(originFrame);
        break;
      }
    }

    return res;
  };

  return DefualtProcessor;
}(Processor);



/***/ }),

/***/ "./src/player/render/provider/audio/index.ts":
/*!***************************************************!*\
  !*** ./src/player/render/provider/audio/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AudioProvider; });
/* harmony import */ var _defaultProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultProcessor */ "./src/player/render/provider/audio/defaultProcessor.ts");


var AudioProvider = /*#__PURE__*/function () {
  function AudioProvider(config, option) {
    this.config = config;
    this.option = option;
    this.init();
  }

  var _proto = AudioProvider.prototype;

  _proto.provider = function provider(size) {
    var res = this.defaultProcessor.provider(size); // this.audioTime = res.audioTime;

    return res;
  };

  _proto.destroy = function destroy() {
    this.defaultProcessor = null;
  };

  _proto.init = function init() {
    this.defaultProcessor = new _defaultProcessor__WEBPACK_IMPORTED_MODULE_0__["default"](this.config, this.option);
  };

  return AudioProvider;
}();



/***/ }),

/***/ "./src/player/render/provider/video/defaultProcessor.ts":
/*!**************************************************************!*\
  !*** ./src/player/render/provider/video/defaultProcessor.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultProcessor; });
var DefaultProcessor = /*#__PURE__*/function () {
  function DefaultProcessor(config) {
    this.config = config;
    this.performanceState = {
      dropFrames: 0,
      renderCount: 0,
      renderAvgErrorTime: 0,
      lastSelectTime: 0
    };
  } // 选择最接近的那一帧。超时帧直接丢弃


  var _proto = DefaultProcessor.prototype;

  _proto.provider = function provider(currentTime) {
    // console.log('provider', currentTime);
    var videoFrames = this.config.videoFrames;
    var len = videoFrames.length;
    if (!len) return null;

    if (videoFrames[len - 1].renderTime === currentTime) {
      var item = videoFrames.shift();
      this.selectFrame(item);
      return {
        index: len - 1,
        frame: item
      };
    }

    var index = len - 1;

    for (; index >= 0; index--) {
      if (videoFrames[index].renderTime >= currentTime) break;
    } // 找到某帧符合规则


    if (index >= 0) {
      // if (index)
      if (index < len - 1) {
        if (index < len - 2) {
          // console.log('丢帧', len - 1 - index);
          this.performanceState.dropFrames += len - 1 - index;
        }

        var frame = videoFrames[index + 1];
        this.selectFrame(frame);
        var errorTime = frame.renderTime - currentTime; // console.log('当前时间: %f, 选择时间: %f', currentTime, frame.renderTime, errorTime);

        this.performanceState.renderCount++;

        if (this.performanceState.renderCount > 1) {
          this.performanceState.renderAvgErrorTime = (this.performanceState.renderAvgErrorTime * (this.performanceState.renderCount - 1) + errorTime) / this.performanceState.renderCount;
        } else {
          this.performanceState.renderAvgErrorTime = errorTime;
        } // this.performanceState.renderAvgErrorTime = Number(this.performanceState.renderAvgErrorTime.toFixed(2));


        videoFrames.length = index + 1;
        return {
          index: index + 1,
          frame: frame
        };
      }
    } else {
      var clearLen = videoFrames.length;
      videoFrames.length = 0;
      return {
        clear: true,
        clearLen: clearLen
      };
    }

    return null;
  };

  _proto.destroy = function destroy() {
    this.performanceState = {
      dropFrames: 0,
      renderCount: 0,
      renderAvgErrorTime: 0,
      lastSelectTime: 0
    };
  };

  _proto.selectFrame = function selectFrame(frame) {
    if (frame.pts < this.performanceState.lastSelectTime) {// console.warn('选取时间大于上次选取时间', frame, [...this.config.videoFrames]);
    }

    this.performanceState.lastSelectTime = frame.pts;
  };

  return DefaultProcessor;
}();



/***/ }),

/***/ "./src/player/render/provider/video/index.ts":
/*!***************************************************!*\
  !*** ./src/player/render/provider/video/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoProvider; });
/* harmony import */ var _defaultProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultProcessor */ "./src/player/render/provider/video/defaultProcessor.ts");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // const debug = require('debug')('red: videoProvider');

var VideoProvider = /*#__PURE__*/function () {
  function VideoProvider(config, option) {
    this.config = config;
    this.option = option;
    this.lastAppendTime = null;
    this.init();
  }

  var _proto = VideoProvider.prototype;

  _proto.provider = function provider(currentTime) {
    if (this.lastAppendTime === currentTime) {
      // debug('重复渲染');
      return null;
    }

    this.lastAppendTime = currentTime;
    var res = this.defaultProcessor.provider(currentTime); // if (res && res.frame) {
    //   // debug('视频帧误差 timing: ', (currentTime / this.option.baseTime - res.frame.pts) * this.option.baseTime)
    // } else {
    //   // debug('未找到最接近视频帧');
    // }

    return res;
  };

  _proto.destroy = function destroy() {
    this.defaultProcessor = null;
  };

  _proto.init = function init() {
    this.defaultProcessor = new _defaultProcessor__WEBPACK_IMPORTED_MODULE_0__["default"](this.config, this.option);
  };

  _createClass(VideoProvider, [{
    key: "providerState",
    get: function get() {
      return this.defaultProcessor.performanceState;
    }
  }]);

  return VideoProvider;
}();



/***/ }),

/***/ "./src/player/render/workerRender.ts":
/*!*******************************************!*\
  !*** ./src/player/render/workerRender.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkerRenderManager; });
/* harmony import */ var _yuvRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yuvRender */ "./src/player/render/yuvRender.ts");
// import { ManagerEvent, PlayerEvent } from "../constants";

/**
 * todo: 切换屏幕后，audio 时间持续增加，但是解码区的停止了，所以当释放时，需要把demux中没用的 buffer 移除掉。
 */

var WorkerRenderManager = /*#__PURE__*/function () {
  function WorkerRenderManager(option) {
    this.option = option;
    this.init();
  }

  var _proto = WorkerRenderManager.prototype;

  _proto.renderVideo = function renderVideo(payload) {
    var datas = this.option.video2img.datas;

    if (payload.clear && payload.length && datas.length >= payload.length) {
      datas.length = datas.length - payload.length;
      this.option.video2img.unlockPipe();
      return;
    }

    if (!isNaN(payload.index) && datas.length) {
      var frame = datas[payload.index];

      if (!frame || !frame.pts || frame.pts !== payload.pts) {
        // debugger
        // console.warn(ERROR_MSG.WORKER_RENDER_ERROR + `select pts: ${frame.pts}, input pts: ${payload.pts}`)
        for (var i = datas.length - 1; i > 0; i--) {
          if (datas[i].pts === payload.pts) {
            frame = datas[i];
            break;
          }
        }

        if (!frame || frame.pts !== payload.pts) {
          console.warn('未找到准确帧', payload.pts, [].concat(datas), frame);
          return;
        }
      }

      this.videoRender.drawFrame(frame); // if (datas.length - payload.index > 1) {
      //   // debugger
      //   console.warn('离屏渲染 跳帧', datas.length - payload.index);
      // }

      datas.splice(payload.index, datas.length - payload.index);
      this.option.video2img.unlockPipe();
    }
  };

  _proto.init = function init() {
    this.videoRender = new _yuvRender__WEBPACK_IMPORTED_MODULE_0__["default"](this.option);
  };

  return WorkerRenderManager;
}();



/***/ }),

/***/ "./src/player/render/yuvRender.ts":
/*!****************************************!*\
  !*** ./src/player/render/yuvRender.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YuvRender; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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

var yuvBuffer = __webpack_require__(/*! yuv-buffer */ "./node_modules/_yuv-buffer@1.0.0@yuv-buffer/yuv-buffer.js");

var yuvCanvas = __webpack_require__(/*! yuv-canvas */ "./node_modules/_yuv-canvas@1.2.6@yuv-canvas/src/yuv-canvas.js"); // const debug = require('debug')('red: yuvRender');


var YuvRender = /*#__PURE__*/function () {
  function YuvRender(option) {
    this.option = option;
    this.render = null;
    this.init(); // console.log(this.option.canvas, 'his.option.canvas');
    // debug(this.option)
  }

  var _proto = YuvRender.prototype;

  _proto.drawFrame = function drawFrame(data) {
    if (data) {
      var width = data.width,
          height = data.height;
      var format = yuvBuffer.format({
        width: width,
        height: height,
        chromaHeight: height / 2,
        chromaWidth: width / 2
      });
      var frame = yuvBuffer.frame(format, {
        bytes: data.buf_y,
        stride: data.stride_y
      }, {
        bytes: data.buf_u,
        stride: data.stride_u
      }, {
        bytes: data.buf_v,
        stride: data.stride_v
      });
      this.render.drawFrame(frame);
    }
  };

  _proto.init = function init() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // this.render = {};
              this.render = yuvCanvas.attach(this.option.canvas, {
                webGL: true
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  };

  return YuvRender;
}();



/***/ }),

/***/ "./src/player/utils/channel.ts":
/*!*************************************!*\
  !*** ./src/player/utils/channel.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Channel; });
var Channel = /*#__PURE__*/function () {
  function Channel(option) {
    this.option = option;
    this.datas = [];
    this.readStatus = {
      isBlocking: false,
      resolve: null,
      cb: null
    };
    this.pipeStatus = {
      isBlocking: false,
      resolve: null,
      cb: null
    };
  }

  var _proto = Channel.prototype;

  _proto.clear = function clear() {
    this.datas.length = 0;

    if (this.pipeStatus.isBlocking) {
      this.pipeStatus.resolve && this.pipeStatus.resolve();
      this.pipeStatus = {
        isBlocking: false,
        resolve: null,
        cb: null
      };
    }
  };

  _proto.pipe = function pipe(data) {
    var _this = this;

    if (this.pipeStatus.isBlocking) {
      throw '管道阻塞状态，重复调用';
    }

    return new Promise(function (resolve) {
      if (_this.checkChannelStatus()) {
        // 未阻塞
        data && _this.forcePipe(data);
        _this.pipeStatus.isBlocking = false;
        _this.pipeStatus.resolve = null;
        resolve();
      } else {
        // 阻塞
        _this.pipeStatus.resolve = resolve;

        if (data) {
          _this.pipeStatus.cb = function () {
            return _this.datas.unshift(data);
          };
        }

        _this.pipeStatus.isBlocking = true;
      }
    });
  };

  _proto.forcePipe = function forcePipe(data) {
    if (this.readStatus.isBlocking) {
      this.readStatus.resolve && this.readStatus.resolve(data);
      this.readStatus.isBlocking = false;
      this.readStatus.resolve = null;
    } else {
      this.datas.unshift(data);
    }
  };

  _proto.read = function read() {
    var _this2 = this;

    if (this.readStatus.isBlocking) {
      throw '管道读阻塞，重复调用';
    }

    return new Promise(function (resolve) {
      if (_this2.datas.length) {
        // 管道内有数据
        var data = _this2.datas.pop();

        if (_this2.pipeStatus.isBlocking && _this2.checkChannelStatus()) {
          _this2.pipeStatus.cb && _this2.pipeStatus.cb();
          _this2.pipeStatus.resolve && _this2.pipeStatus.resolve();
          _this2.pipeStatus = {
            isBlocking: false,
            resolve: null,
            cb: null
          };
        }

        resolve(data);
      } else {
        // 管道内没有数据，阻塞
        _this2.readStatus = {
          isBlocking: true,
          resolve: resolve,
          cb: null
        };
      }
    });
  };

  _proto.forceRead = function forceRead() {
    var data = this.datas.pop();

    if (this.pipeStatus.isBlocking && this.checkChannelStatus()) {
      this.pipeStatus.cb && this.pipeStatus.cb();
      this.pipeStatus.resolve && this.pipeStatus.resolve();
      this.pipeStatus = {
        isBlocking: false,
        resolve: null,
        cb: null
      };
    }

    return data;
  };

  _proto.unlockPipe = function unlockPipe() {
    // 解锁写管道
    if (this.pipeStatus.isBlocking && this.checkChannelStatus()) {
      this.pipeStatus.cb && this.pipeStatus.cb();
      this.pipeStatus.resolve && this.pipeStatus.resolve();
      this.pipeStatus = {
        isBlocking: false,
        resolve: null,
        cb: null
      };
    }
  }
  /**
   * true 代表管道未填充满
   */
  ;

  _proto.checkChannelStatus = function checkChannelStatus() {
    var cmd = true;

    if (this.option.maxLength) {
      cmd = this.datas.length < this.option.maxLength;
    } else {
      cmd = this.option.checkOverflow(this.datas);
    }

    return cmd;
  };

  return Channel;
}(); // const c = new Channel<number>({
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




/***/ }),

/***/ "./src/player/utils/http.ts":
/*!**********************************!*\
  !*** ./src/player/utils/http.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HttpLoader; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/_@babel_runtime@7.14.0@@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


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

var HttpLoader = /*#__PURE__*/function () {
  function HttpLoader(option) {
    this.option = option;
    this.state = {
      flusing: false,
      readers: {},
      bf: new ArrayBuffer(0),
      recieveBfLen: 0 // 设置为 0，表示 每个url 的资源加载完，才会返回

    };
  } // 并行 url 支持。当前不支持


  var _proto = HttpLoader.prototype;

  _proto.handleLoaderMsg = function handleLoaderMsg(_ref) {
    var url = _ref.url,
        urls = _ref.urls;
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var i;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(urls === null || urls === void 0 ? void 0 : urls.length)) {
                _context.next = 11;
                break;
              }

              console.warn('urls 并行加载将导致 缓冲流不被阻塞!'); // 阻塞的本质是 reader 语句执行时要await .

              i = 0;

            case 3:
              if (!(i < urls.length)) {
                _context.next = 9;
                break;
              }

              _context.next = 6;
              return this.getData(urls[i]);

            case 6:
              i++;
              _context.next = 3;
              break;

            case 9:
              _context.next = 13;
              break;

            case 11:
              _context.next = 13;
              return this.getData(url);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  } // 清除当前所有缓冲
  ;

  _proto.flush = function flush() {
    for (var key in this.state.readers) {
      this.state.readers[key].cancel();
    }

    this.state.readers = {};
  };

  _proto.getData = function getData(url) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var res, type, reader;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(url).then(function (res) {
                return res;
              });

            case 2:
              res = _context2.sent;
              type = res.headers.get('content-type');

              if (!type.includes('video')) {
                _context2.next = 8;
                break;
              }

              reader = res.body.getReader();
              this.state.readers[url] = reader;
              return _context2.abrupt("return", this.newGetbf(reader, url));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  } // private async getBuffer(reader: ReadableStreamDefaultReader<Uint8Array>, url: string) {
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
  ;

  _proto.newGetbf = function newGetbf(reader, url) {
    var _a, _b;

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var _this = this;

      var done, res, emitBf, view;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              done = false;

            case 1:
              if (done) {
                _context4.next = 22;
                break;
              }

              _context4.next = 4;
              return reader.read();

            case 4:
              res = _context4.sent;
              done = res.done;

              emitBf = function () {
                return __awaiter(_this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  var buffer;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          buffer = this.state.bf.slice(0);
                          this.state.bf = new ArrayBuffer(0);
                          _context3.next = 4;
                          return this.option.channel.pipe({
                            data: buffer,
                            url: url,
                            done: done
                          });

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3, this);
                }));
              };

              if (!done) {
                _context4.next = 13;
                break;
              }

              this.state.readers[url] && delete this.state.readers[url];
              _context4.next = 11;
              return emitBf();

            case 11:
              _context4.next = 20;
              break;

            case 13:
              // copy bf
              view = new Uint8Array((((_a = res.value) === null || _a === void 0 ? void 0 : _a.buffer.byteLength) | 0) + (this.state.bf.byteLength | 0));
              view.set(new Uint8Array(this.state.bf), 0);
              view.set(new Uint8Array((_b = res.value) === null || _b === void 0 ? void 0 : _b.buffer), this.state.bf.byteLength | 0);
              this.state.bf = view.buffer;

              if (!(this.state.recieveBfLen && this.state.recieveBfLen < this.state.bf.byteLength)) {
                _context4.next = 20;
                break;
              }

              _context4.next = 20;
              return emitBf();

            case 20:
              _context4.next = 1;
              break;

            case 22:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
  };

  return HttpLoader;
}();



/***/ }),

/***/ "./src/player/utils/index.ts":
/*!***********************************!*\
  !*** ./src/player/utils/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Utils; });
// import { , FORMAT, ERROR_MSG } from "../constants";
var Utils = /*#__PURE__*/function () {
  function Utils() {}

  Utils.appendBuffer = function appendBuffer(buf1, buf2) {
    // let tmp = new Uint8Array((buf1.byteLength) + (buf2.byteLength));
    // tmp.set(new Uint8Array(buf1), 0);
    // tmp.set(new Uint8Array(buf2), buf1.byteLength);
    var view = new Uint8Array(buf1.byteLength + buf2.byteLength);
    view.set(new Uint8Array(buf1), 0);
    view.set(new Uint8Array(buf2), buf1.byteLength); // this.audioBuffer = view.buffer;

    return view.buffer;
  } // public static pts2time(pts: number, type: FORMAT) {
  //   if (type === FORMAT.HLS) {
  //     return pts * BASE_TIME.TS;
  //   } else {
  //     console.warn(ERROR_MSG.UNHANDLE_FORMAT);
  //     return null;
  //   }
  // }
  ;

  Utils.throttle = function throttle(fn, delay) {
    var start = 0;
    return function () {
      if (Date.now() - start >= delay) {
        start = Date.now();
        fn && fn();
      }
    };
  };

  Utils.log = function log() {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    console.log.apply(null, ['player log ==>'].concat(arg));
  };

  return Utils;
}();



/***/ })

}]);
//# sourceMappingURL=pages_index.chunk.js.map