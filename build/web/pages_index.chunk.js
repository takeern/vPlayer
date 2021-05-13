(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages_index.chunk"],{

/***/ "./lib/libffmpeg.txt":
/*!***************************!*\
  !*** ./lib/libffmpeg.txt ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nvar WASMDecoder = (function() {\n  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;\n  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;\n  return (\nfunction(WASMDecoder) {\n  WASMDecoder = WASMDecoder || {};\n\nvar Module=typeof WASMDecoder!==\"undefined\"?WASMDecoder:{};var readyPromiseResolve,readyPromiseReject;Module[\"ready\"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_init_decoder\")){Object.defineProperty(Module[\"ready\"],\"_init_decoder\",{configurable:true,get:function(){abort(\"You are getting _init_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_init_decoder\",{configurable:true,set:function(){abort(\"You are setting _init_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_decode_buffer\")){Object.defineProperty(Module[\"ready\"],\"_decode_buffer\",{configurable:true,get:function(){abort(\"You are getting _decode_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_decode_buffer\",{configurable:true,set:function(){abort(\"You are setting _decode_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_flush_decoder\")){Object.defineProperty(Module[\"ready\"],\"_flush_decoder\",{configurable:true,get:function(){abort(\"You are getting _flush_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_flush_decoder\",{configurable:true,set:function(){abort(\"You are setting _flush_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_close_decoder\")){Object.defineProperty(Module[\"ready\"],\"_close_decoder\",{configurable:true,get:function(){abort(\"You are getting _close_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_close_decoder\",{configurable:true,set:function(){abort(\"You are setting _close_decoder on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_sbrk\")){Object.defineProperty(Module[\"ready\"],\"_sbrk\",{configurable:true,get:function(){abort(\"You are getting _sbrk on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_sbrk\",{configurable:true,set:function(){abort(\"You are setting _sbrk on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_stackSave\")){Object.defineProperty(Module[\"ready\"],\"_stackSave\",{configurable:true,get:function(){abort(\"You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_stackSave\",{configurable:true,set:function(){abort(\"You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_stackRestore\")){Object.defineProperty(Module[\"ready\"],\"_stackRestore\",{configurable:true,get:function(){abort(\"You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_stackRestore\",{configurable:true,set:function(){abort(\"You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_stackAlloc\")){Object.defineProperty(Module[\"ready\"],\"_stackAlloc\",{configurable:true,get:function(){abort(\"You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_stackAlloc\",{configurable:true,set:function(){abort(\"You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"___data_end\")){Object.defineProperty(Module[\"ready\"],\"___data_end\",{configurable:true,get:function(){abort(\"You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"___data_end\",{configurable:true,set:function(){abort(\"You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"___wasm_call_ctors\")){Object.defineProperty(Module[\"ready\"],\"___wasm_call_ctors\",{configurable:true,get:function(){abort(\"You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"___wasm_call_ctors\",{configurable:true,set:function(){abort(\"You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"___errno_location\")){Object.defineProperty(Module[\"ready\"],\"___errno_location\",{configurable:true,get:function(){abort(\"You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"___errno_location\",{configurable:true,set:function(){abort(\"You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_emscripten_get_global_libc\")){Object.defineProperty(Module[\"ready\"],\"_emscripten_get_global_libc\",{configurable:true,get:function(){abort(\"You are getting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_emscripten_get_global_libc\",{configurable:true,set:function(){abort(\"You are setting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"___pthread_tsd_run_dtors\")){Object.defineProperty(Module[\"ready\"],\"___pthread_tsd_run_dtors\",{configurable:true,get:function(){abort(\"You are getting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"___pthread_tsd_run_dtors\",{configurable:true,set:function(){abort(\"You are setting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"registerPthreadPtr\")){Object.defineProperty(Module[\"ready\"],\"registerPthreadPtr\",{configurable:true,get:function(){abort(\"You are getting registerPthreadPtr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"registerPthreadPtr\",{configurable:true,set:function(){abort(\"You are setting registerPthreadPtr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_pthread_self\")){Object.defineProperty(Module[\"ready\"],\"_pthread_self\",{configurable:true,get:function(){abort(\"You are getting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_pthread_self\",{configurable:true,set:function(){abort(\"You are setting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"___emscripten_pthread_data_constructor\")){Object.defineProperty(Module[\"ready\"],\"___emscripten_pthread_data_constructor\",{configurable:true,get:function(){abort(\"You are getting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"___emscripten_pthread_data_constructor\",{configurable:true,set:function(){abort(\"You are setting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_emscripten_futex_wake\")){Object.defineProperty(Module[\"ready\"],\"_emscripten_futex_wake\",{configurable:true,get:function(){abort(\"You are getting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_emscripten_futex_wake\",{configurable:true,set:function(){abort(\"You are setting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_memalign\")){Object.defineProperty(Module[\"ready\"],\"_memalign\",{configurable:true,get:function(){abort(\"You are getting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_memalign\",{configurable:true,set:function(){abort(\"You are setting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"dynCall\")){Object.defineProperty(Module[\"ready\"],\"dynCall\",{configurable:true,get:function(){abort(\"You are getting dynCall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"dynCall\",{configurable:true,set:function(){abort(\"You are setting dynCall on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"establishStackSpace\")){Object.defineProperty(Module[\"ready\"],\"establishStackSpace\",{configurable:true,get:function(){abort(\"You are getting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"establishStackSpace\",{configurable:true,set:function(){abort(\"You are setting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"getNoExitRuntime\")){Object.defineProperty(Module[\"ready\"],\"getNoExitRuntime\",{configurable:true,get:function(){abort(\"You are getting getNoExitRuntime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"getNoExitRuntime\",{configurable:true,set:function(){abort(\"You are setting getNoExitRuntime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_malloc\")){Object.defineProperty(Module[\"ready\"],\"_malloc\",{configurable:true,get:function(){abort(\"You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_malloc\",{configurable:true,set:function(){abort(\"You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_free\")){Object.defineProperty(Module[\"ready\"],\"_free\",{configurable:true,get:function(){abort(\"You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_free\",{configurable:true,set:function(){abort(\"You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_emscripten_main_thread_process_queued_calls\")){Object.defineProperty(Module[\"ready\"],\"_emscripten_main_thread_process_queued_calls\",{configurable:true,get:function(){abort(\"You are getting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_emscripten_main_thread_process_queued_calls\",{configurable:true,set:function(){abort(\"You are setting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"_memset\")){Object.defineProperty(Module[\"ready\"],\"_memset\",{configurable:true,get:function(){abort(\"You are getting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"_memset\",{configurable:true,set:function(){abort(\"You are setting _memset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"__get_tzname\")){Object.defineProperty(Module[\"ready\"],\"__get_tzname\",{configurable:true,get:function(){abort(\"You are getting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"__get_tzname\",{configurable:true,set:function(){abort(\"You are setting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"__get_daylight\")){Object.defineProperty(Module[\"ready\"],\"__get_daylight\",{configurable:true,get:function(){abort(\"You are getting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"__get_daylight\",{configurable:true,set:function(){abort(\"You are setting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"__get_timezone\")){Object.defineProperty(Module[\"ready\"],\"__get_timezone\",{configurable:true,get:function(){abort(\"You are getting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"__get_timezone\",{configurable:true,set:function(){abort(\"You are setting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"__emscripten_call_on_thread\")){Object.defineProperty(Module[\"ready\"],\"__emscripten_call_on_thread\",{configurable:true,get:function(){abort(\"You are getting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"__emscripten_call_on_thread\",{configurable:true,set:function(){abort(\"You are setting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}if(!Object.getOwnPropertyDescriptor(Module[\"ready\"],\"onRuntimeInitialized\")){Object.defineProperty(Module[\"ready\"],\"onRuntimeInitialized\",{configurable:true,get:function(){abort(\"You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}});Object.defineProperty(Module[\"ready\"],\"onRuntimeInitialized\",{configurable:true,set:function(){abort(\"You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js\")}})}var moduleOverrides={};var key;for(key in Module){if(Module.hasOwnProperty(key)){moduleOverrides[key]=Module[key]}}var arguments_=[];var thisProgram=\"./this.program\";var quit_=function(status,toThrow){throw toThrow};var ENVIRONMENT_IS_WEB=false;var ENVIRONMENT_IS_WORKER=false;var ENVIRONMENT_IS_NODE=false;var ENVIRONMENT_IS_SHELL=false;ENVIRONMENT_IS_WEB=typeof window===\"object\";ENVIRONMENT_IS_WORKER=typeof importScripts===\"function\";ENVIRONMENT_IS_NODE=typeof process===\"object\"&&typeof process.versions===\"object\"&&typeof process.versions.node===\"string\";ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;if(Module[\"ENVIRONMENT\"]){throw new Error(\"Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)\")}var ENVIRONMENT_IS_PTHREAD=Module[\"ENVIRONMENT_IS_PTHREAD\"]||false;if(ENVIRONMENT_IS_PTHREAD){buffer=Module[\"buffer\"]}var scriptDirectory=\"\";function locateFile(path){if(Module[\"locateFile\"]){return Module[\"locateFile\"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;var nodeFS;var nodePath;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require(\"path\").dirname(scriptDirectory)+\"/\"}else{scriptDirectory=__dirname+\"/\"}read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=require(\"fs\");if(!nodePath)nodePath=require(\"path\");filename=nodePath[\"normalize\"](filename);return nodeFS[\"readFileSync\"](filename,binary?null:\"utf8\")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret};if(process[\"argv\"].length>1){thisProgram=process[\"argv\"][1].replace(/\\\\/g,\"/\")}arguments_=process[\"argv\"].slice(2);process[\"on\"](\"uncaughtException\",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process[\"on\"](\"unhandledRejection\",abort);quit_=function(status){process[\"exit\"](status)};Module[\"inspect\"]=function(){return\"[Emscripten Module object]\"};var nodeWorkerThreads;try{nodeWorkerThreads=require(\"worker_threads\")}catch(e){console.error('The \"worker_threads\" module is not supported in this node.js build - perhaps a newer version is needed?');throw e}global.Worker=nodeWorkerThreads.Worker}else if(ENVIRONMENT_IS_SHELL){if(typeof read!=\"undefined\"){read_=function shell_read(f){return read(f)}}readBinary=function readBinary(f){var data;if(typeof readbuffer===\"function\"){return new Uint8Array(readbuffer(f))}data=read(f,\"binary\");assert(typeof data===\"object\");return data};if(typeof scriptArgs!=\"undefined\"){arguments_=scriptArgs}else if(typeof arguments!=\"undefined\"){arguments_=arguments}if(typeof quit===\"function\"){quit_=function(status){quit(status)}}if(typeof print!==\"undefined\"){if(typeof console===\"undefined\")console={};console.log=print;console.warn=console.error=typeof printErr!==\"undefined\"?printErr:print}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!==\"undefined\"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf(\"blob:\")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.lastIndexOf(\"/\")+1)}else{scriptDirectory=\"\"}if(ENVIRONMENT_IS_NODE){read_=function shell_read(filename,binary){if(!nodeFS)nodeFS=require(\"fs\");if(!nodePath)nodePath=require(\"path\");filename=nodePath[\"normalize\"](filename);return nodeFS[\"readFileSync\"](filename,binary?null:\"utf8\")};readBinary=function readBinary(filename){var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}assert(ret.buffer);return ret}}else{read_=function shell_read(url){var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=function readBinary(url){var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,false);xhr.responseType=\"arraybuffer\";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=function readAsync(url,onload,onerror){var xhr=new XMLHttpRequest;xhr.open(\"GET\",url,true);xhr.responseType=\"arraybuffer\";xhr.onload=function xhr_onload(){if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=function(title){document.title=title}}else{throw new Error(\"environment detection error\")}if(ENVIRONMENT_IS_NODE){if(typeof performance===\"undefined\"){global.performance=require(\"perf_hooks\").performance}}var out=Module[\"print\"]||console.log.bind(console);var err=Module[\"printErr\"]||console.warn.bind(console);for(key in moduleOverrides){if(moduleOverrides.hasOwnProperty(key)){Module[key]=moduleOverrides[key]}}moduleOverrides=null;if(Module[\"arguments\"])arguments_=Module[\"arguments\"];if(!Object.getOwnPropertyDescriptor(Module,\"arguments\"))Object.defineProperty(Module,\"arguments\",{configurable:true,get:function(){abort(\"Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});if(Module[\"thisProgram\"])thisProgram=Module[\"thisProgram\"];if(!Object.getOwnPropertyDescriptor(Module,\"thisProgram\"))Object.defineProperty(Module,\"thisProgram\",{configurable:true,get:function(){abort(\"Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});if(Module[\"quit\"])quit_=Module[\"quit\"];if(!Object.getOwnPropertyDescriptor(Module,\"quit\"))Object.defineProperty(Module,\"quit\",{configurable:true,get:function(){abort(\"Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});assert(typeof Module[\"memoryInitializerPrefixURL\"]===\"undefined\",\"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead\");assert(typeof Module[\"pthreadMainPrefixURL\"]===\"undefined\",\"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead\");assert(typeof Module[\"cdInitializerPrefixURL\"]===\"undefined\",\"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead\");assert(typeof Module[\"filePackagePrefixURL\"]===\"undefined\",\"Module.filePackagePrefixURL option was removed, use Module.locateFile instead\");assert(typeof Module[\"read\"]===\"undefined\",\"Module.read option was removed (modify read_ in JS)\");assert(typeof Module[\"readAsync\"]===\"undefined\",\"Module.readAsync option was removed (modify readAsync in JS)\");assert(typeof Module[\"readBinary\"]===\"undefined\",\"Module.readBinary option was removed (modify readBinary in JS)\");assert(typeof Module[\"setWindowTitle\"]===\"undefined\",\"Module.setWindowTitle option was removed (modify setWindowTitle in JS)\");assert(typeof Module[\"TOTAL_MEMORY\"]===\"undefined\",\"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY\");if(!Object.getOwnPropertyDescriptor(Module,\"read\"))Object.defineProperty(Module,\"read\",{configurable:true,get:function(){abort(\"Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});if(!Object.getOwnPropertyDescriptor(Module,\"readAsync\"))Object.defineProperty(Module,\"readAsync\",{configurable:true,get:function(){abort(\"Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});if(!Object.getOwnPropertyDescriptor(Module,\"readBinary\"))Object.defineProperty(Module,\"readBinary\",{configurable:true,get:function(){abort(\"Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});if(!Object.getOwnPropertyDescriptor(Module,\"setWindowTitle\"))Object.defineProperty(Module,\"setWindowTitle\",{configurable:true,get:function(){abort(\"Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});assert(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER||ENVIRONMENT_IS_NODE,\"Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)\");var STACK_ALIGN=16;function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}}function convertJsFunctionToWasm(func,sig){if(typeof WebAssembly.Function===\"function\"){var typeNames={\"i\":\"i32\",\"j\":\"i64\",\"f\":\"f32\",\"d\":\"f64\"};var type={parameters:[],results:sig[0]==\"v\"?[]:[typeNames[sig[0]]]};for(var i=1;i<sig.length;++i){type.parameters.push(typeNames[sig[i]])}return new WebAssembly.Function(type,func)}var typeSection=[1,0,1,96];var sigRet=sig.slice(0,1);var sigParam=sig.slice(1);var typeCodes={\"i\":127,\"j\":126,\"f\":125,\"d\":124};typeSection.push(sigParam.length);for(var i=0;i<sigParam.length;++i){typeSection.push(typeCodes[sigParam[i]])}if(sigRet==\"v\"){typeSection.push(0)}else{typeSection=typeSection.concat([1,typeCodes[sigRet]])}typeSection[1]=typeSection.length-2;var bytes=new Uint8Array([0,97,115,109,1,0,0,0].concat(typeSection,[2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0]));var module=new WebAssembly.Module(bytes);var instance=new WebAssembly.Instance(module,{\"e\":{\"f\":func}});var wrappedFunc=instance.exports[\"f\"];return wrappedFunc}var freeTableIndexes=[];var functionsInTableMap;function getEmptyTableSlot(){if(freeTableIndexes.length){return freeTableIndexes.pop()}try{wasmTable.grow(1)}catch(err){if(!(err instanceof RangeError)){throw err}throw\"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.\"}return wasmTable.length-1}function addFunctionWasm(func,sig){if(!functionsInTableMap){functionsInTableMap=new WeakMap;for(var i=0;i<wasmTable.length;i++){var item=wasmTable.get(i);if(item){functionsInTableMap.set(item,i)}}}if(functionsInTableMap.has(func)){return functionsInTableMap.get(func)}var ret=getEmptyTableSlot();try{wasmTable.set(ret,func)}catch(err){if(!(err instanceof TypeError)){throw err}assert(typeof sig!==\"undefined\",\"Missing signature argument to addFunction: \"+func);var wrapped=convertJsFunctionToWasm(func,sig);wasmTable.set(ret,wrapped)}functionsInTableMap.set(func,ret);return ret}function removeFunction(index){functionsInTableMap.delete(wasmTable.get(index));freeTableIndexes.push(index)}function addFunction(func,sig){assert(typeof func!==\"undefined\");return addFunctionWasm(func,sig)}var tempRet0=0;var setTempRet0=function(value){tempRet0=value};var Atomics_load=Atomics.load;var Atomics_store=Atomics.store;var Atomics_compareExchange=Atomics.compareExchange;var wasmBinary;if(Module[\"wasmBinary\"])wasmBinary=Module[\"wasmBinary\"];if(!Object.getOwnPropertyDescriptor(Module,\"wasmBinary\"))Object.defineProperty(Module,\"wasmBinary\",{configurable:true,get:function(){abort(\"Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});var noExitRuntime;if(Module[\"noExitRuntime\"])noExitRuntime=Module[\"noExitRuntime\"];if(!Object.getOwnPropertyDescriptor(Module,\"noExitRuntime\"))Object.defineProperty(Module,\"noExitRuntime\",{configurable:true,get:function(){abort(\"Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});if(typeof WebAssembly!==\"object\"){abort(\"no native wasm support detected\")}var wasmMemory;var wasmModule;var threadInfoStruct=0;var selfThreadId=0;var ABORT=false;var EXITSTATUS=0;function assert(condition,text){if(!condition){abort(\"Assertion failed: \"+text)}}function getCFunc(ident){var func=Module[\"_\"+ident];assert(func,\"Cannot call unknown function \"+ident+\", make sure it is exported\");return func}function ccall(ident,returnType,argTypes,args,opts){var toC={\"string\":function(str){var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},\"array\":function(arr){var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType===\"string\")return UTF8ToString(ret);if(returnType===\"boolean\")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;assert(returnType!==\"array\",'Return type should not be \"array\".');if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);ret=convertReturnValue(ret);if(stack!==0)stackRestore(stack);return ret}var ALLOC_STACK=1;function UTF8ArrayToString(heap,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var str=\"\";while(!(idx>=endIdx)){var u0=heap[idx++];if(!u0)return str;if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heap[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heap[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{if((u0&248)!=240)warnOnce(\"Invalid UTF-8 leading byte 0x\"+u0.toString(16)+\" encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!\");u0=(u0&7)<<18|u1<<12|u2<<6|heap[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):\"\"}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;if(u>=2097152)warnOnce(\"Invalid Unicode code point 0x\"+u.toString(16)+\" encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).\");heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){assert(typeof maxBytesToWrite==\"number\",\"stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!\");return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}function lengthBytesUTF8(str){var len=0;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343)u=65536+((u&1023)<<10)|str.charCodeAt(++i)&1023;if(u<=127)++len;else if(u<=2047)len+=2;else if(u<=65535)len+=3;else len+=4}return len}function allocateUTF8(str){var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8Array(str,HEAP8,ret,size);return ret}function writeArrayToMemory(array,buffer){assert(array.length>=0,\"writeArrayToMemory array must have a length (should be an array or typed array)\");HEAP8.set(array,buffer)}function writeAsciiToMemory(str,buffer,dontAddNull){for(var i=0;i<str.length;++i){assert(str.charCodeAt(i)===str.charCodeAt(i)&255);HEAP8[buffer++>>0]=str.charCodeAt(i)}if(!dontAddNull)HEAP8[buffer>>0]=0}var WASM_PAGE_SIZE=65536;var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module[\"HEAP8\"]=HEAP8=new Int8Array(buf);Module[\"HEAP16\"]=HEAP16=new Int16Array(buf);Module[\"HEAP32\"]=HEAP32=new Int32Array(buf);Module[\"HEAPU8\"]=HEAPU8=new Uint8Array(buf);Module[\"HEAPU16\"]=HEAPU16=new Uint16Array(buf);Module[\"HEAPU32\"]=HEAPU32=new Uint32Array(buf);Module[\"HEAPF32\"]=HEAPF32=new Float32Array(buf);Module[\"HEAPF64\"]=HEAPF64=new Float64Array(buf)}var STACK_BASE=5383472,STACKTOP=STACK_BASE,STACK_MAX=140592;assert(STACK_BASE%16===0,\"stack must start aligned\");if(ENVIRONMENT_IS_PTHREAD){STACK_MAX=STACKTOP=STACK_MAX=2147483647}var TOTAL_STACK=5242880;if(Module[\"TOTAL_STACK\"])assert(TOTAL_STACK===Module[\"TOTAL_STACK\"],\"the stack size can no longer be determined at runtime\");var INITIAL_INITIAL_MEMORY=Module[\"INITIAL_MEMORY\"]||67108864;if(!Object.getOwnPropertyDescriptor(Module,\"INITIAL_MEMORY\"))Object.defineProperty(Module,\"INITIAL_MEMORY\",{configurable:true,get:function(){abort(\"Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)\")}});assert(INITIAL_INITIAL_MEMORY>=TOTAL_STACK,\"INITIAL_MEMORY should be larger than TOTAL_STACK, was \"+INITIAL_INITIAL_MEMORY+\"! (TOTAL_STACK=\"+TOTAL_STACK+\")\");assert(typeof Int32Array!==\"undefined\"&&typeof Float64Array!==\"undefined\"&&Int32Array.prototype.subarray!==undefined&&Int32Array.prototype.set!==undefined,\"JS engine does not provide full typed array support\");if(ENVIRONMENT_IS_PTHREAD){wasmMemory=Module[\"wasmMemory\"];buffer=Module[\"buffer\"]}else{if(Module[\"wasmMemory\"]){wasmMemory=Module[\"wasmMemory\"]}else{wasmMemory=new WebAssembly.Memory({\"initial\":INITIAL_INITIAL_MEMORY/WASM_PAGE_SIZE,\"maximum\":INITIAL_INITIAL_MEMORY/WASM_PAGE_SIZE,\"shared\":true});if(!(wasmMemory.buffer instanceof SharedArrayBuffer)){err(\"requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag\");if(ENVIRONMENT_IS_NODE){console.log(\"(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)\")}throw Error(\"bad memory\")}}}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_INITIAL_MEMORY=buffer.byteLength;assert(INITIAL_INITIAL_MEMORY%WASM_PAGE_SIZE===0);updateGlobalBufferAndViews(buffer);if(!ENVIRONMENT_IS_PTHREAD){}var wasmTable;function writeStackCookie(){assert((STACK_MAX&3)==0);HEAPU32[(STACK_MAX>>2)+1]=34821223;HEAPU32[(STACK_MAX>>2)+2]=2310721022;HEAP32[0]=1668509029}function checkStackCookie(){if(ABORT)return;var cookie1=HEAPU32[(STACK_MAX>>2)+1];var cookie2=HEAPU32[(STACK_MAX>>2)+2];if(cookie1!=34821223||cookie2!=2310721022){abort(\"Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x\"+cookie2.toString(16)+\" \"+cookie1.toString(16))}if(HEAP32[0]!==1668509029)abort(\"Runtime error: The application has corrupted its heap memory area (address zero)!\")}(function(){var h16=new Int16Array(1);var h8=new Int8Array(h16.buffer);h16[0]=25459;if(h8[0]!==115||h8[1]!==99)throw\"Runtime error: expected the system to be little-endian!\"})();var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATEXIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeExited=false;if(ENVIRONMENT_IS_PTHREAD)runtimeInitialized=true;function preRun(){if(ENVIRONMENT_IS_PTHREAD)return;if(Module[\"preRun\"]){if(typeof Module[\"preRun\"]==\"function\")Module[\"preRun\"]=[Module[\"preRun\"]];while(Module[\"preRun\"].length){addOnPreRun(Module[\"preRun\"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){checkStackCookie();assert(!runtimeInitialized);runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){checkStackCookie();if(ENVIRONMENT_IS_PTHREAD)return;callRuntimeCallbacks(__ATMAIN__)}function exitRuntime(){checkStackCookie();if(ENVIRONMENT_IS_PTHREAD)return;runtimeExited=true}function postRun(){checkStackCookie();if(ENVIRONMENT_IS_PTHREAD)return;if(Module[\"postRun\"]){if(typeof Module[\"postRun\"]==\"function\")Module[\"postRun\"]=[Module[\"postRun\"]];while(Module[\"postRun\"].length){addOnPostRun(Module[\"postRun\"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}assert(Math.imul,\"This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill\");assert(Math.fround,\"This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill\");assert(Math.clz32,\"This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill\");assert(Math.trunc,\"This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill\");var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;var runDependencyTracking={};function addRunDependency(id){assert(!ENVIRONMENT_IS_PTHREAD,\"addRunDependency cannot be used in a pthread worker\");runDependencies++;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}if(id){assert(!runDependencyTracking[id]);runDependencyTracking[id]=1;if(runDependencyWatcher===null&&typeof setInterval!==\"undefined\"){runDependencyWatcher=setInterval(function(){if(ABORT){clearInterval(runDependencyWatcher);runDependencyWatcher=null;return}var shown=false;for(var dep in runDependencyTracking){if(!shown){shown=true;err(\"still waiting on run dependencies:\")}err(\"dependency: \"+dep)}if(shown){err(\"(end of list)\")}},1e4)}}else{err(\"warning: run dependency added without ID\")}}function removeRunDependency(id){runDependencies--;if(Module[\"monitorRunDependencies\"]){Module[\"monitorRunDependencies\"](runDependencies)}if(id){assert(runDependencyTracking[id]);delete runDependencyTracking[id]}else{err(\"warning: run dependency removed without ID\")}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module[\"preloadedImages\"]={};Module[\"preloadedAudios\"]={};function abort(what){if(Module[\"onAbort\"]){Module[\"onAbort\"](what)}if(ENVIRONMENT_IS_PTHREAD)console.error(\"Pthread aborting at \"+(new Error).stack);what+=\"\";err(what);ABORT=true;EXITSTATUS=1;var output=\"abort(\"+what+\") at \"+stackTrace();what=output;var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var FS={error:function(){abort(\"Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1\")},init:function(){FS.error()},createDataFile:function(){FS.error()},createPreloadedFile:function(){FS.error()},createLazyFile:function(){FS.error()},open:function(){FS.error()},mkdev:function(){FS.error()},registerDevice:function(){FS.error()},analyzePath:function(){FS.error()},loadFilesFromDB:function(){FS.error()},ErrnoError:function ErrnoError(){FS.error()}};Module[\"FS_createDataFile\"]=FS.createDataFile;Module[\"FS_createPreloadedFile\"]=FS.createPreloadedFile;function hasPrefix(str,prefix){return String.prototype.startsWith?str.startsWith(prefix):str.indexOf(prefix)===0}var dataURIPrefix=\"data:application/octet-stream;base64,\";function isDataURI(filename){return hasPrefix(filename,dataURIPrefix)}var fileURIPrefix=\"file://\";function isFileURI(filename){return hasPrefix(filename,fileURIPrefix)}function createExportWrapper(name,fixedasm){return function(){var displayName=name;var asm=fixedasm;if(!fixedasm){asm=Module[\"asm\"]}assert(runtimeInitialized,\"native function `\"+displayName+\"` called before runtime initialization\");assert(!runtimeExited,\"native function `\"+displayName+\"` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)\");if(!asm[name]){assert(asm[name],\"exported native function `\"+displayName+\"` not found\")}return asm[name].apply(null,arguments)}}var wasmBinaryFile=\"libffmpeg.wasm\";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(){try{if(wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(wasmBinaryFile)}else{throw\"both async and sync fetching of the wasm failed\"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)&&typeof fetch===\"function\"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:\"same-origin\"}).then(function(response){if(!response[\"ok\"]){throw\"failed to load wasm binary file at '\"+wasmBinaryFile+\"'\"}return response[\"arrayBuffer\"]()}).catch(function(){return getBinary()})}return Promise.resolve().then(getBinary)}function createWasm(){var info={\"env\":asmLibraryArg,\"wasi_snapshot_preview1\":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module[\"asm\"]=exports;wasmTable=Module[\"asm\"][\"__indirect_function_table\"];assert(wasmTable,\"table not found in wasm exports\");wasmModule=module;if(!ENVIRONMENT_IS_PTHREAD){var numWorkersToLoad=PThread.unusedWorkers.length;PThread.unusedWorkers.forEach(function(w){PThread.loadWasmModuleToWorker(w,function(){if(!--numWorkersToLoad)removeRunDependency(\"wasm-instantiate\")})})}}if(!ENVIRONMENT_IS_PTHREAD){addRunDependency(\"wasm-instantiate\")}var trueModule=Module;function receiveInstantiatedSource(output){assert(Module===trueModule,\"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?\");trueModule=null;receiveInstance(output[\"instance\"],output[\"module\"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(receiver,function(reason){err(\"failed to asynchronously prepare wasm: \"+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming===\"function\"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch===\"function\"){return fetch(wasmBinaryFile,{credentials:\"same-origin\"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiatedSource,function(reason){err(\"wasm streaming compile failed: \"+reason);err(\"falling back to ArrayBuffer instantiation\");return instantiateArrayBuffer(receiveInstantiatedSource)})})}else{return instantiateArrayBuffer(receiveInstantiatedSource)}}if(Module[\"instantiateWasm\"]){try{var exports=Module[\"instantiateWasm\"](info,receiveInstance);return exports}catch(e){err(\"Module.instantiateWasm callback failed with error: \"+e);return false}}instantiateAsync().catch(readyPromiseReject);return{}}var tempDouble;var tempI64;var ASM_CONSTS={129900:function($0,$1){if(typeof emscriptenMemoryProfiler!==\"undefined\")emscriptenMemoryProfiler.onSbrkGrow($0,$1)},129999:function(){throw\"Canceled!\"},130219:function($0,$1){setTimeout(function(){_do_emscripten_dispatch_to_thread($0,$1)},0)}};function initPthreadsJS(){PThread.initRuntime()}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback==\"function\"){callback(Module);continue}var func=callback.func;if(typeof func===\"number\"){if(callback.arg===undefined){wasmTable.get(func)()}else{wasmTable.get(func)(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}function demangle(func){warnOnce(\"warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling\");return func}function demangleAll(text){var regex=/\\b_Z[\\w\\d_]+/g;return text.replace(regex,function(x){var y=demangle(x);return x===y?x:y+\" [\"+x+\"]\"})}function dynCallLegacy(sig,ptr,args){assert(\"dynCall_\"+sig in Module,\"bad function pointer type - no table for sig '\"+sig+\"'\");if(args&&args.length){assert(args.length===sig.substring(1).replace(/j/g,\"--\").length)}else{assert(sig.length==1)}if(args&&args.length){return Module[\"dynCall_\"+sig].apply(null,[ptr].concat(args))}return Module[\"dynCall_\"+sig].call(null,ptr)}function dynCall(sig,ptr,args){if(sig.indexOf(\"j\")!=-1){return dynCallLegacy(sig,ptr,args)}assert(wasmTable.get(ptr),\"missing table entry in dynCall: \"+ptr);return wasmTable.get(ptr).apply(null,args)}Module[\"dynCall\"]=dynCall;var __pthread_ptr=0;var __pthread_is_main_runtime_thread=0;var __pthread_is_main_browser_thread=0;function registerPthreadPtr(pthreadPtr,isMainBrowserThread,isMainRuntimeThread){pthreadPtr=pthreadPtr|0;isMainBrowserThread=isMainBrowserThread|0;isMainRuntimeThread=isMainRuntimeThread|0;__pthread_ptr=pthreadPtr;__pthread_is_main_browser_thread=isMainBrowserThread;__pthread_is_main_runtime_thread=isMainRuntimeThread}Module[\"registerPthreadPtr\"]=registerPthreadPtr;var ERRNO_CODES={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135};function _emscripten_futex_wake(addr,count){if(addr<=0||addr>HEAP8.length||addr&3!=0||count<0)return-28;if(count==0)return 0;if(count>=2147483647)count=Infinity;assert(PThread.mainThreadFutex>0);var mainThreadWaitAddress=Atomics.load(HEAP32,PThread.mainThreadFutex>>2);var mainThreadWoken=0;if(mainThreadWaitAddress==addr){assert(!ENVIRONMENT_IS_WEB);var loadedAddr=Atomics.compareExchange(HEAP32,PThread.mainThreadFutex>>2,mainThreadWaitAddress,0);if(loadedAddr==mainThreadWaitAddress){--count;mainThreadWoken=1;if(count<=0)return 1}}var ret=Atomics.notify(HEAP32,addr>>2,count);if(ret>=0)return ret+mainThreadWoken;throw\"Atomics.notify returned an unexpected value \"+ret}Module[\"_emscripten_futex_wake\"]=_emscripten_futex_wake;function killThread(pthread_ptr){if(ENVIRONMENT_IS_PTHREAD)throw\"Internal Error! killThread() can only ever be called from main application thread!\";if(!pthread_ptr)throw\"Internal Error! Null pthread_ptr in killThread!\";HEAP32[pthread_ptr+12>>2]=0;var pthread=PThread.pthreads[pthread_ptr];pthread.worker.terminate();PThread.freeThreadData(pthread);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker),1);pthread.worker.pthread=undefined}function cancelThread(pthread_ptr){if(ENVIRONMENT_IS_PTHREAD)throw\"Internal Error! cancelThread() can only ever be called from main application thread!\";if(!pthread_ptr)throw\"Internal Error! Null pthread_ptr in cancelThread!\";var pthread=PThread.pthreads[pthread_ptr];pthread.worker.postMessage({\"cmd\":\"cancel\"})}function cleanupThread(pthread_ptr){if(ENVIRONMENT_IS_PTHREAD)throw\"Internal Error! cleanupThread() can only ever be called from main application thread!\";if(!pthread_ptr)throw\"Internal Error! Null pthread_ptr in cleanupThread!\";HEAP32[pthread_ptr+12>>2]=0;var pthread=PThread.pthreads[pthread_ptr];if(pthread){var worker=pthread.worker;PThread.returnWorkerToPool(worker)}}var PThread={MAIN_THREAD_ID:1,mainThreadInfo:{schedPolicy:0,schedPrio:0},unusedWorkers:[],runningWorkers:[],initMainThreadBlock:function(){assert(!ENVIRONMENT_IS_PTHREAD);var pthreadPoolSize=5;for(var i=0;i<pthreadPoolSize;++i){PThread.allocateUnusedWorker()}},initRuntime:function(){PThread.mainThreadBlock=_malloc(232);for(var i=0;i<232/4;++i)HEAPU32[PThread.mainThreadBlock/4+i]=0;HEAP32[PThread.mainThreadBlock+12>>2]=PThread.mainThreadBlock;var headPtr=PThread.mainThreadBlock+156;HEAP32[headPtr>>2]=headPtr;var tlsMemory=_malloc(512);for(var i=0;i<128;++i)HEAPU32[tlsMemory/4+i]=0;Atomics.store(HEAPU32,PThread.mainThreadBlock+104>>2,tlsMemory);Atomics.store(HEAPU32,PThread.mainThreadBlock+40>>2,PThread.mainThreadBlock);Atomics.store(HEAPU32,PThread.mainThreadBlock+44>>2,42);PThread.initShared();registerPthreadPtr(PThread.mainThreadBlock,!ENVIRONMENT_IS_WORKER,1);_emscripten_register_main_browser_thread_id(PThread.mainThreadBlock)},initWorker:function(){PThread.initShared();readyPromiseResolve(Module)},initShared:function(){PThread.mainThreadFutex=_main_thread_futex;assert(PThread.mainThreadFutex>0)},pthreads:{},threadExitHandlers:[],setThreadStatus:function(){},runExitHandlers:function(){while(PThread.threadExitHandlers.length>0){PThread.threadExitHandlers.pop()()}if(ENVIRONMENT_IS_PTHREAD&&threadInfoStruct)___pthread_tsd_run_dtors()},threadExit:function(exitCode){var tb=_pthread_self();if(tb){err(\"Pthread 0x\"+tb.toString(16)+\" exited.\");Atomics.store(HEAPU32,tb+4>>2,exitCode);Atomics.store(HEAPU32,tb+0>>2,1);Atomics.store(HEAPU32,tb+60>>2,1);Atomics.store(HEAPU32,tb+64>>2,0);PThread.runExitHandlers();_emscripten_futex_wake(tb+0,2147483647);registerPthreadPtr(0,0,0);threadInfoStruct=0;if(ENVIRONMENT_IS_PTHREAD){postMessage({\"cmd\":\"exit\"})}}},threadCancel:function(){PThread.runExitHandlers();Atomics.store(HEAPU32,threadInfoStruct+4>>2,-1);Atomics.store(HEAPU32,threadInfoStruct+0>>2,1);_emscripten_futex_wake(threadInfoStruct+0,2147483647);threadInfoStruct=selfThreadId=0;registerPthreadPtr(0,0,0);postMessage({\"cmd\":\"cancelDone\"})},terminateAllThreads:function(){for(var t in PThread.pthreads){var pthread=PThread.pthreads[t];if(pthread&&pthread.worker){PThread.returnWorkerToPool(pthread.worker)}}PThread.pthreads={};for(var i=0;i<PThread.unusedWorkers.length;++i){var worker=PThread.unusedWorkers[i];assert(!worker.pthread);worker.terminate()}PThread.unusedWorkers=[];for(var i=0;i<PThread.runningWorkers.length;++i){var worker=PThread.runningWorkers[i];var pthread=worker.pthread;assert(pthread,\"This Worker should have a pthread it is executing\");PThread.freeThreadData(pthread);worker.terminate()}PThread.runningWorkers=[]},freeThreadData:function(pthread){if(!pthread)return;if(pthread.threadInfoStruct){var tlsMemory=HEAP32[pthread.threadInfoStruct+104>>2];HEAP32[pthread.threadInfoStruct+104>>2]=0;_free(tlsMemory);_free(pthread.threadInfoStruct)}pthread.threadInfoStruct=0;if(pthread.allocatedOwnStack&&pthread.stackBase)_free(pthread.stackBase);pthread.stackBase=0;if(pthread.worker)pthread.worker.pthread=null},returnWorkerToPool:function(worker){delete PThread.pthreads[worker.pthread.thread];PThread.unusedWorkers.push(worker);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker),1);PThread.freeThreadData(worker.pthread);worker.pthread=undefined},receiveObjectTransfer:function(data){},loadWasmModuleToWorker:function(worker,onFinishedLoading){worker.onmessage=function(e){var d=e[\"data\"];var cmd=d[\"cmd\"];if(worker.pthread)PThread.currentProxiedOperationCallerThread=worker.pthread.threadInfoStruct;if(d[\"targetThread\"]&&d[\"targetThread\"]!=_pthread_self()){var thread=PThread.pthreads[d.targetThread];if(thread){thread.worker.postMessage(e.data,d[\"transferList\"])}else{console.error('Internal error! Worker sent a message \"'+cmd+'\" to target pthread '+d[\"targetThread\"]+\", but that thread no longer exists!\")}PThread.currentProxiedOperationCallerThread=undefined;return}if(cmd===\"processQueuedMainThreadWork\"){_emscripten_main_thread_process_queued_calls()}else if(cmd===\"spawnThread\"){spawnThread(e.data)}else if(cmd===\"cleanupThread\"){cleanupThread(d[\"thread\"])}else if(cmd===\"killThread\"){killThread(d[\"thread\"])}else if(cmd===\"cancelThread\"){cancelThread(d[\"thread\"])}else if(cmd===\"loaded\"){worker.loaded=true;if(onFinishedLoading)onFinishedLoading(worker);if(worker.runPthread){worker.runPthread();delete worker.runPthread}}else if(cmd===\"print\"){out(\"Thread \"+d[\"threadId\"]+\": \"+d[\"text\"])}else if(cmd===\"printErr\"){err(\"Thread \"+d[\"threadId\"]+\": \"+d[\"text\"])}else if(cmd===\"alert\"){alert(\"Thread \"+d[\"threadId\"]+\": \"+d[\"text\"])}else if(cmd===\"exit\"){var detached=worker.pthread&&Atomics.load(HEAPU32,worker.pthread.thread+68>>2);if(detached){PThread.returnWorkerToPool(worker)}}else if(cmd===\"cancelDone\"){PThread.returnWorkerToPool(worker)}else if(cmd===\"objectTransfer\"){PThread.receiveObjectTransfer(e.data)}else if(e.data.target===\"setimmediate\"){worker.postMessage(e.data)}else{err(\"worker sent an unknown command \"+cmd)}PThread.currentProxiedOperationCallerThread=undefined};worker.onerror=function(e){err(\"pthread sent an error! \"+e.filename+\":\"+e.lineno+\": \"+e.message)};if(ENVIRONMENT_IS_NODE){worker.on(\"message\",function(data){worker.onmessage({data:data})});worker.on(\"error\",function(data){worker.onerror(data)});worker.on(\"exit\",function(data){})}assert(wasmMemory instanceof WebAssembly.Memory,\"WebAssembly memory should have been loaded by now!\");assert(wasmModule instanceof WebAssembly.Module,\"WebAssembly Module should have been loaded by now!\");worker.postMessage({\"cmd\":\"load\",\"urlOrBlob\":Module[\"mainScriptUrlOrBlob\"]||_scriptDir,\"wasmMemory\":wasmMemory,\"wasmModule\":wasmModule})},allocateUnusedWorker:function(){var pthreadMainJs=locateFile(\"libffmpeg.worker.js\");PThread.unusedWorkers.push(new Worker(pthreadMainJs))},getNewWorker:function(){if(PThread.unusedWorkers.length==0){PThread.allocateUnusedWorker();PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])}if(PThread.unusedWorkers.length>0)return PThread.unusedWorkers.pop();else return null},busySpinWait:function(msecs){var t=performance.now()+msecs;while(performance.now()<t){}}};function establishStackSpace(stackTop,stackMax){STACK_BASE=STACKTOP=stackTop;STACK_MAX=stackMax;stackRestore(stackTop);writeStackCookie()}Module[\"establishStackSpace\"]=establishStackSpace;function getNoExitRuntime(){return noExitRuntime}Module[\"getNoExitRuntime\"]=getNoExitRuntime;function jsStackTrace(){var error=new Error;if(!error.stack){try{throw new Error}catch(e){error=e}if(!error.stack){return\"(no stack trace available)\"}}return error.stack.toString()}function stackTrace(){var js=jsStackTrace();if(Module[\"extraStackTrace\"])js+=\"\\n\"+Module[\"extraStackTrace\"]();return demangleAll(js)}function ___assert_fail(condition,filename,line,func){abort(\"Assertion failed: \"+UTF8ToString(condition)+\", at: \"+[filename?UTF8ToString(filename):\"unknown filename\",line,func?UTF8ToString(func):\"unknown function\"])}var _emscripten_get_now;if(ENVIRONMENT_IS_NODE){_emscripten_get_now=function(){var t=process[\"hrtime\"]();return t[0]*1e3+t[1]/1e6}}else if(ENVIRONMENT_IS_PTHREAD){_emscripten_get_now=function(){return performance.now()-Module[\"__performance_now_clock_drift\"]}}else if(typeof dateNow!==\"undefined\"){_emscripten_get_now=dateNow}else _emscripten_get_now=function(){return performance.now()};var _emscripten_get_now_is_monotonic=true;function setErrNo(value){HEAP32[___errno_location()>>2]=value;return value}function _clock_gettime(clk_id,tp){var now;if(clk_id===0){now=Date.now()}else if((clk_id===1||clk_id===4)&&_emscripten_get_now_is_monotonic){now=_emscripten_get_now()}else{setErrNo(28);return-1}HEAP32[tp>>2]=now/1e3|0;HEAP32[tp+4>>2]=now%1e3*1e3*1e3|0;return 0}function ___clock_gettime(a0,a1){return _clock_gettime(a0,a1)}var SYSCALLS={mappings:{},buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];assert(buffer);if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:undefined,get:function(){assert(SYSCALLS.varargs!=undefined);SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},get64:function(low,high){if(low>=0)assert(high===0);else assert(high===-1);return low}};function ___sys_fcntl64(fd,cmd,varargs){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(1,1,fd,cmd,varargs);SYSCALLS.varargs=varargs;return 0}function ___sys_open(path,flags,varargs){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(2,1,path,flags,varargs);SYSCALLS.varargs=varargs;abort(\"it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM\")}function ___sys_read(fd,buf,count){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(3,1,fd,buf,count);abort(\"it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM\")}function __emscripten_notify_thread_queue(targetThreadId,mainThreadId){if(targetThreadId==mainThreadId){postMessage({\"cmd\":\"processQueuedMainThreadWork\"})}else if(ENVIRONMENT_IS_PTHREAD){postMessage({\"targetThread\":targetThreadId,\"cmd\":\"processThreadQueue\"})}else{var pthread=PThread.pthreads[targetThreadId];var worker=pthread&&pthread.worker;if(!worker){err(\"Cannot send message to thread with ID \"+targetThreadId+\", unknown thread ID!\");return}worker.postMessage({\"cmd\":\"processThreadQueue\"})}return 1}function _abort(){abort()}function _clock(){if(_clock.start===undefined)_clock.start=Date.now();return(Date.now()-_clock.start)*(1e6/1e3)|0}function _emscripten_asm_const_int(code,sigPtr,argbuf){var args=readAsmConstArgs(sigPtr,argbuf);return ASM_CONSTS[code].apply(null,args)}function _emscripten_check_blocking_allowed(){if(ENVIRONMENT_IS_NODE)return;if(ENVIRONMENT_IS_WORKER)return;warnOnce(\"Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread\")}function _emscripten_conditional_set_current_thread_status(expectedStatus,newStatus){expectedStatus=expectedStatus|0;newStatus=newStatus|0}function _emscripten_futex_wait(addr,val,timeout){if(addr<=0||addr>HEAP8.length||addr&3!=0)return-28;if(!ENVIRONMENT_IS_WEB){var ret=Atomics.wait(HEAP32,addr>>2,val,timeout);if(ret===\"timed-out\")return-73;if(ret===\"not-equal\")return-6;if(ret===\"ok\")return 0;throw\"Atomics.wait returned an unexpected value \"+ret}else{if(Atomics.load(HEAP32,addr>>2)!=val){return-6}var tNow=performance.now();var tEnd=tNow+timeout;assert(PThread.mainThreadFutex>0);var lastAddr=Atomics.exchange(HEAP32,PThread.mainThreadFutex>>2,addr);assert(lastAddr==0);while(1){tNow=performance.now();if(tNow>tEnd){lastAddr=Atomics.exchange(HEAP32,PThread.mainThreadFutex>>2,0);assert(lastAddr==addr||lastAddr==0);return-73}lastAddr=Atomics.exchange(HEAP32,PThread.mainThreadFutex>>2,0);assert(lastAddr==addr||lastAddr==0);if(lastAddr==0){break}_emscripten_main_thread_process_queued_calls();if(Atomics.load(HEAP32,addr>>2)!=val){return-6}lastAddr=Atomics.exchange(HEAP32,PThread.mainThreadFutex>>2,addr);assert(lastAddr==0)}return 0}}function _emscripten_is_main_browser_thread(){return __pthread_is_main_browser_thread|0}function _emscripten_is_main_runtime_thread(){return __pthread_is_main_runtime_thread|0}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}function _emscripten_num_logical_cores(){if(ENVIRONMENT_IS_NODE)return require(\"os\").cpus().length;return navigator[\"hardwareConcurrency\"]}function _emscripten_proxy_to_main_thread_js(index,sync){var numCallArgs=arguments.length-2;if(numCallArgs>20-1)throw\"emscripten_proxy_to_main_thread_js: Too many arguments \"+numCallArgs+\" to proxied function idx=\"+index+\", maximum supported is \"+(20-1)+\"!\";var stack=stackSave();var args=stackAlloc(numCallArgs*8);var b=args>>3;for(var i=0;i<numCallArgs;i++){HEAPF64[b+i]=arguments[2+i]}var ret=_emscripten_run_in_main_runtime_thread_js(index,numCallArgs,args,sync);stackRestore(stack);return ret}var _emscripten_receive_on_main_thread_js_callArgs=[];var readAsmConstArgsArray=[];function readAsmConstArgs(sigPtr,buf){assert(Array.isArray(readAsmConstArgsArray));assert(buf%16==0);readAsmConstArgsArray.length=0;var ch;buf>>=2;while(ch=HEAPU8[sigPtr++]){assert(ch===100||ch===102||ch===105);var double=ch<105;if(double&&buf&1)buf++;readAsmConstArgsArray.push(double?HEAPF64[buf++>>1]:HEAP32[buf]);++buf}return readAsmConstArgsArray}function _emscripten_receive_on_main_thread_js(index,numCallArgs,args){_emscripten_receive_on_main_thread_js_callArgs.length=numCallArgs;var b=args>>3;for(var i=0;i<numCallArgs;i++){_emscripten_receive_on_main_thread_js_callArgs[i]=HEAPF64[b+i]}var isEmAsmConst=index<0;var func=!isEmAsmConst?proxiedFunctionTable[index]:ASM_CONSTS[-index-1];assert(func.length==numCallArgs,\"Call args mismatch in emscripten_receive_on_main_thread_js\");return func.apply(null,_emscripten_receive_on_main_thread_js_callArgs)}function abortOnCannotGrowMemory(requestedSize){abort(\"Cannot enlarge memory arrays to size \"+requestedSize+\" bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value \"+HEAP8.length+\", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 \")}function _emscripten_resize_heap(requestedSize){requestedSize=requestedSize>>>0;abortOnCannotGrowMemory(requestedSize)}var JSEvents={inEventHandler:0,removeAllEventListeners:function(){for(var i=JSEvents.eventHandlers.length-1;i>=0;--i){JSEvents._removeHandler(i)}JSEvents.eventHandlers=[];JSEvents.deferredCalls=[]},registerRemoveEventListeners:function(){if(!JSEvents.removeEventListenersRegistered){__ATEXIT__.push(JSEvents.removeAllEventListeners);JSEvents.removeEventListenersRegistered=true}},deferredCalls:[],deferCall:function(targetFunction,precedence,argsList){function arraysHaveEqualContent(arrA,arrB){if(arrA.length!=arrB.length)return false;for(var i in arrA){if(arrA[i]!=arrB[i])return false}return true}for(var i in JSEvents.deferredCalls){var call=JSEvents.deferredCalls[i];if(call.targetFunction==targetFunction&&arraysHaveEqualContent(call.argsList,argsList)){return}}JSEvents.deferredCalls.push({targetFunction:targetFunction,precedence:precedence,argsList:argsList});JSEvents.deferredCalls.sort(function(x,y){return x.precedence<y.precedence})},removeDeferredCalls:function(targetFunction){for(var i=0;i<JSEvents.deferredCalls.length;++i){if(JSEvents.deferredCalls[i].targetFunction==targetFunction){JSEvents.deferredCalls.splice(i,1);--i}}},canPerformEventHandlerRequests:function(){return JSEvents.inEventHandler&&JSEvents.currentEventHandler.allowsDeferredCalls},runDeferredCalls:function(){if(!JSEvents.canPerformEventHandlerRequests()){return}for(var i=0;i<JSEvents.deferredCalls.length;++i){var call=JSEvents.deferredCalls[i];JSEvents.deferredCalls.splice(i,1);--i;call.targetFunction.apply(null,call.argsList)}},eventHandlers:[],removeAllHandlersOnTarget:function(target,eventTypeString){for(var i=0;i<JSEvents.eventHandlers.length;++i){if(JSEvents.eventHandlers[i].target==target&&(!eventTypeString||eventTypeString==JSEvents.eventHandlers[i].eventTypeString)){JSEvents._removeHandler(i--)}}},_removeHandler:function(i){var h=JSEvents.eventHandlers[i];h.target.removeEventListener(h.eventTypeString,h.eventListenerFunc,h.useCapture);JSEvents.eventHandlers.splice(i,1)},registerOrRemoveHandler:function(eventHandler){var jsEventHandler=function jsEventHandler(event){++JSEvents.inEventHandler;JSEvents.currentEventHandler=eventHandler;JSEvents.runDeferredCalls();eventHandler.handlerFunc(event);JSEvents.runDeferredCalls();--JSEvents.inEventHandler};if(eventHandler.callbackfunc){eventHandler.eventListenerFunc=jsEventHandler;eventHandler.target.addEventListener(eventHandler.eventTypeString,jsEventHandler,eventHandler.useCapture);JSEvents.eventHandlers.push(eventHandler);JSEvents.registerRemoveEventListeners()}else{for(var i=0;i<JSEvents.eventHandlers.length;++i){if(JSEvents.eventHandlers[i].target==eventHandler.target&&JSEvents.eventHandlers[i].eventTypeString==eventHandler.eventTypeString){JSEvents._removeHandler(i--)}}}},queueEventHandlerOnThread_iiii:function(targetThread,eventHandlerFunc,eventTypeId,eventData,userData){var stackTop=stackSave();var varargs=stackAlloc(12);HEAP32[varargs>>2]=eventTypeId;HEAP32[varargs+4>>2]=eventData;HEAP32[varargs+8>>2]=userData;__emscripten_call_on_thread(0,targetThread,637534208,eventHandlerFunc,eventData,varargs);stackRestore(stackTop)},getTargetThreadForEventCallback:function(targetThread){switch(targetThread){case 1:return 0;case 2:return PThread.currentProxiedOperationCallerThread;default:return targetThread}},getNodeNameForTarget:function(target){if(!target)return\"\";if(target==window)return\"#window\";if(target==screen)return\"#screen\";return target&&target.nodeName?target.nodeName:\"\"},fullscreenEnabled:function(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}};function stringToNewUTF8(jsString){var length=lengthBytesUTF8(jsString)+1;var cString=_malloc(length);stringToUTF8(jsString,cString,length);return cString}function _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread,targetCanvas,width,height){var stackTop=stackSave();var varargs=stackAlloc(12);var targetCanvasPtr=0;if(targetCanvas){targetCanvasPtr=stringToNewUTF8(targetCanvas)}HEAP32[varargs>>2]=targetCanvasPtr;HEAP32[varargs+4>>2]=width;HEAP32[varargs+8>>2]=height;__emscripten_call_on_thread(0,targetThread,657457152,0,targetCanvasPtr,varargs);stackRestore(stackTop)}function _emscripten_set_offscreencanvas_size_on_target_thread(targetThread,targetCanvas,width,height){targetCanvas=targetCanvas?UTF8ToString(targetCanvas):\"\";_emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread,targetCanvas,width,height)}function maybeCStringToJsString(cString){return cString>2?UTF8ToString(cString):cString}var specialHTMLTargets=[0,typeof document!==\"undefined\"?document:0,typeof window!==\"undefined\"?window:0];function findEventTarget(target){target=maybeCStringToJsString(target);var domElement=specialHTMLTargets[target]||(typeof document!==\"undefined\"?document.querySelector(target):undefined);return domElement}function findCanvasEventTarget(target){return findEventTarget(target)}function _emscripten_set_canvas_element_size_calling_thread(target,width,height){var canvas=findCanvasEventTarget(target);if(!canvas)return-4;if(canvas.canvasSharedPtr){HEAP32[canvas.canvasSharedPtr>>2]=width;HEAP32[canvas.canvasSharedPtr+4>>2]=height}if(canvas.offscreenCanvas||!canvas.controlTransferredOffscreen){if(canvas.offscreenCanvas)canvas=canvas.offscreenCanvas;var autoResizeViewport=false;if(canvas.GLctxObject&&canvas.GLctxObject.GLctx){var prevViewport=canvas.GLctxObject.GLctx.getParameter(2978);autoResizeViewport=prevViewport[0]===0&&prevViewport[1]===0&&prevViewport[2]===canvas.width&&prevViewport[3]===canvas.height}canvas.width=width;canvas.height=height;if(autoResizeViewport){canvas.GLctxObject.GLctx.viewport(0,0,width,height)}}else if(canvas.canvasSharedPtr){var targetThread=HEAP32[canvas.canvasSharedPtr+8>>2];_emscripten_set_offscreencanvas_size_on_target_thread(targetThread,target,width,height);return 1}else{return-4}return 0}function _emscripten_set_canvas_element_size_main_thread(target,width,height){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(4,1,target,width,height);return _emscripten_set_canvas_element_size_calling_thread(target,width,height)}function _emscripten_set_canvas_element_size(target,width,height){var canvas=findCanvasEventTarget(target);if(canvas){return _emscripten_set_canvas_element_size_calling_thread(target,width,height)}else{return _emscripten_set_canvas_element_size_main_thread(target,width,height)}}function _emscripten_set_current_thread_status(newStatus){newStatus=newStatus|0}function _emscripten_trace_js_configure(collector_url,application){EmscriptenTrace.configure(collector_url,application)}function _emscripten_trace_configure_for_google_wtf(){EmscriptenTrace.configureForGoogleWTF()}function _emscripten_trace_js_enter_context(name){if(EmscriptenTrace.postEnabled){var now=EmscriptenTrace.now();EmscriptenTrace.post([EmscriptenTrace.EVENT_ENTER_CONTEXT,now,name])}if(EmscriptenTrace.googleWTFEnabled){EmscriptenTrace.googleWTFEnterScope(name)}}function _emscripten_trace_exit_context(){if(EmscriptenTrace.postEnabled){var now=EmscriptenTrace.now();EmscriptenTrace.post([EmscriptenTrace.EVENT_EXIT_CONTEXT,now])}if(EmscriptenTrace.googleWTFEnabled){EmscriptenTrace.googleWTFExitScope()}}function _emscripten_trace_js_log_message(channel,message){if(EmscriptenTrace.postEnabled){var now=EmscriptenTrace.now();EmscriptenTrace.post([EmscriptenTrace.EVENT_LOG_MESSAGE,now,channel,message])}}function _emscripten_trace_js_mark(message){if(EmscriptenTrace.postEnabled){var now=EmscriptenTrace.now();EmscriptenTrace.post([EmscriptenTrace.EVENT_LOG_MESSAGE,now,\"MARK\",message])}if(EmscriptenTrace.googleWTFEnabled){window[\"wtf\"].trace.mark(message)}}var EmscriptenTrace={worker:null,collectorEnabled:false,googleWTFEnabled:false,testingEnabled:false,googleWTFData:{scopeStack:[],cachedScopes:{}},DATA_VERSION:1,EVENT_ALLOCATE:\"allocate\",EVENT_ANNOTATE_TYPE:\"annotate-type\",EVENT_APPLICATION_NAME:\"application-name\",EVENT_ASSOCIATE_STORAGE_SIZE:\"associate-storage-size\",EVENT_ENTER_CONTEXT:\"enter-context\",EVENT_EXIT_CONTEXT:\"exit-context\",EVENT_FRAME_END:\"frame-end\",EVENT_FRAME_RATE:\"frame-rate\",EVENT_FRAME_START:\"frame-start\",EVENT_FREE:\"free\",EVENT_LOG_MESSAGE:\"log-message\",EVENT_MEMORY_LAYOUT:\"memory-layout\",EVENT_OFF_HEAP:\"off-heap\",EVENT_REALLOCATE:\"reallocate\",EVENT_REPORT_ERROR:\"report-error\",EVENT_SESSION_NAME:\"session-name\",EVENT_TASK_ASSOCIATE_DATA:\"task-associate-data\",EVENT_TASK_END:\"task-end\",EVENT_TASK_RESUME:\"task-resume\",EVENT_TASK_START:\"task-start\",EVENT_TASK_SUSPEND:\"task-suspend\",EVENT_USER_NAME:\"user-name\",init:function(){Module[\"emscripten_trace_configure\"]=_emscripten_trace_js_configure;Module[\"emscripten_trace_configure_for_google_wtf\"]=_emscripten_trace_configure_for_google_wtf;Module[\"emscripten_trace_enter_context\"]=_emscripten_trace_js_enter_context;Module[\"emscripten_trace_exit_context\"]=_emscripten_trace_exit_context;Module[\"emscripten_trace_log_message\"]=_emscripten_trace_js_log_message;Module[\"emscripten_trace_mark\"]=_emscripten_trace_js_mark},loadWorkerViaXHR:function(url,ready,scope){var req=new XMLHttpRequest;req.addEventListener(\"load\",function(){var blob=new Blob([this.responseText],{type:\"text/javascript\"});var worker=new Worker(window.URL.createObjectURL(blob));if(ready){ready.call(scope,worker)}},req);req.open(\"get\",url,false);req.send()},configure:function(collector_url,application){EmscriptenTrace.now=_emscripten_get_now;var now=new Date;var session_id=now.getTime().toString()+\"_\"+Math.floor(Math.random()*100+1).toString();EmscriptenTrace.loadWorkerViaXHR(collector_url+\"worker.js\",function(worker){EmscriptenTrace.worker=worker;EmscriptenTrace.worker.addEventListener(\"error\",function(e){console.log(\"TRACE WORKER ERROR:\");console.log(e)},false);EmscriptenTrace.worker.postMessage({\"cmd\":\"configure\",\"data_version\":EmscriptenTrace.DATA_VERSION,\"session_id\":session_id,\"url\":collector_url});EmscriptenTrace.configured=true;EmscriptenTrace.collectorEnabled=true;EmscriptenTrace.postEnabled=true});EmscriptenTrace.post([EmscriptenTrace.EVENT_APPLICATION_NAME,application]);EmscriptenTrace.post([EmscriptenTrace.EVENT_SESSION_NAME,now.toISOString()])},configureForTest:function(){EmscriptenTrace.postEnabled=true;EmscriptenTrace.testingEnabled=true;EmscriptenTrace.now=function(){return 0}},configureForGoogleWTF:function(){if(window&&window[\"wtf\"]){EmscriptenTrace.googleWTFEnabled=true}else{console.log(\"GOOGLE WTF NOT AVAILABLE TO ENABLE\")}},post:function(entry){if(EmscriptenTrace.postEnabled&&EmscriptenTrace.collectorEnabled){EmscriptenTrace.worker.postMessage({\"cmd\":\"post\",\"entry\":entry})}else if(EmscriptenTrace.postEnabled&&EmscriptenTrace.testingEnabled){out(\"Tracing \"+entry)}},googleWTFEnterScope:function(name){var scopeEvent=EmscriptenTrace.googleWTFData[\"cachedScopes\"][name];if(!scopeEvent){scopeEvent=window[\"wtf\"].trace.events.createScope(name);EmscriptenTrace.googleWTFData[\"cachedScopes\"][name]=scopeEvent}var scope=scopeEvent();EmscriptenTrace.googleWTFData[\"scopeStack\"].push(scope)},googleWTFExitScope:function(){var scope=EmscriptenTrace.googleWTFData[\"scopeStack\"].pop();window[\"wtf\"].trace.leaveScope(scope)}};function _emscripten_trace_record_allocation(address,size){if(typeof Module[\"onMalloc\"]===\"function\")Module[\"onMalloc\"](address,size);if(EmscriptenTrace.postEnabled){var now=EmscriptenTrace.now();EmscriptenTrace.post([EmscriptenTrace.EVENT_ALLOCATE,now,address,size])}}function _emscripten_trace_record_free(address){if(typeof Module[\"onFree\"]===\"function\")Module[\"onFree\"](address);if(EmscriptenTrace.postEnabled){var now=EmscriptenTrace.now();EmscriptenTrace.post([EmscriptenTrace.EVENT_FREE,now,address])}}function _emscripten_trace_record_reallocation(old_address,new_address,size){if(typeof Module[\"onRealloc\"]===\"function\")Module[\"onRealloc\"](old_address,new_address,size);if(EmscriptenTrace.postEnabled){var now=EmscriptenTrace.now();EmscriptenTrace.post([EmscriptenTrace.EVENT_REALLOCATE,now,old_address,new_address,size])}}function __webgl_enable_ANGLE_instanced_arrays(ctx){var ext=ctx.getExtension(\"ANGLE_instanced_arrays\");if(ext){ctx[\"vertexAttribDivisor\"]=function(index,divisor){ext[\"vertexAttribDivisorANGLE\"](index,divisor)};ctx[\"drawArraysInstanced\"]=function(mode,first,count,primcount){ext[\"drawArraysInstancedANGLE\"](mode,first,count,primcount)};ctx[\"drawElementsInstanced\"]=function(mode,count,type,indices,primcount){ext[\"drawElementsInstancedANGLE\"](mode,count,type,indices,primcount)};return 1}}function __webgl_enable_OES_vertex_array_object(ctx){var ext=ctx.getExtension(\"OES_vertex_array_object\");if(ext){ctx[\"createVertexArray\"]=function(){return ext[\"createVertexArrayOES\"]()};ctx[\"deleteVertexArray\"]=function(vao){ext[\"deleteVertexArrayOES\"](vao)};ctx[\"bindVertexArray\"]=function(vao){ext[\"bindVertexArrayOES\"](vao)};ctx[\"isVertexArray\"]=function(vao){return ext[\"isVertexArrayOES\"](vao)};return 1}}function __webgl_enable_WEBGL_draw_buffers(ctx){var ext=ctx.getExtension(\"WEBGL_draw_buffers\");if(ext){ctx[\"drawBuffers\"]=function(n,bufs){ext[\"drawBuffersWEBGL\"](n,bufs)};return 1}}function __webgl_enable_WEBGL_multi_draw(ctx){return!!(ctx.multiDrawWebgl=ctx.getExtension(\"WEBGL_multi_draw\"))}var GL={counter:1,buffers:[],programs:[],framebuffers:[],renderbuffers:[],textures:[],uniforms:[],shaders:[],vaos:[],contexts:{},offscreenCanvases:{},timerQueriesEXT:[],programInfos:{},stringCache:{},unpackAlignment:4,recordError:function recordError(errorCode){if(!GL.lastError){GL.lastError=errorCode}},getNewId:function(table){var ret=GL.counter++;for(var i=table.length;i<ret;i++){table[i]=null}return ret},getSource:function(shader,count,string,length){var source=\"\";for(var i=0;i<count;++i){var len=length?HEAP32[length+i*4>>2]:-1;source+=UTF8ToString(HEAP32[string+i*4>>2],len<0?undefined:len)}return source},createContext:function(canvas,webGLContextAttributes){var ctx=canvas.getContext(\"webgl\",webGLContextAttributes);if(!ctx)return 0;var handle=GL.registerContext(ctx,webGLContextAttributes);return handle},registerContext:function(ctx,webGLContextAttributes){var handle=_malloc(8);HEAP32[handle+4>>2]=_pthread_self();var context={handle:handle,attributes:webGLContextAttributes,version:webGLContextAttributes.majorVersion,GLctx:ctx};if(ctx.canvas)ctx.canvas.GLctxObject=context;GL.contexts[handle]=context;if(typeof webGLContextAttributes.enableExtensionsByDefault===\"undefined\"||webGLContextAttributes.enableExtensionsByDefault){GL.initExtensions(context)}return handle},makeContextCurrent:function(contextHandle){GL.currentContext=GL.contexts[contextHandle];Module.ctx=GLctx=GL.currentContext&&GL.currentContext.GLctx;return!(contextHandle&&!GLctx)},getContext:function(contextHandle){return GL.contexts[contextHandle]},deleteContext:function(contextHandle){if(GL.currentContext===GL.contexts[contextHandle])GL.currentContext=null;if(typeof JSEvents===\"object\")JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);if(GL.contexts[contextHandle]&&GL.contexts[contextHandle].GLctx.canvas)GL.contexts[contextHandle].GLctx.canvas.GLctxObject=undefined;_free(GL.contexts[contextHandle].handle);GL.contexts[contextHandle]=null},initExtensions:function(context){if(!context)context=GL.currentContext;if(context.initExtensionsDone)return;context.initExtensionsDone=true;var GLctx=context.GLctx;__webgl_enable_ANGLE_instanced_arrays(GLctx);__webgl_enable_OES_vertex_array_object(GLctx);__webgl_enable_WEBGL_draw_buffers(GLctx);GLctx.disjointTimerQueryExt=GLctx.getExtension(\"EXT_disjoint_timer_query\");__webgl_enable_WEBGL_multi_draw(GLctx);var automaticallyEnabledExtensions=[\"OES_texture_float\",\"OES_texture_half_float\",\"OES_standard_derivatives\",\"OES_vertex_array_object\",\"WEBGL_compressed_texture_s3tc\",\"WEBGL_depth_texture\",\"OES_element_index_uint\",\"EXT_texture_filter_anisotropic\",\"EXT_frag_depth\",\"WEBGL_draw_buffers\",\"ANGLE_instanced_arrays\",\"OES_texture_float_linear\",\"OES_texture_half_float_linear\",\"EXT_blend_minmax\",\"EXT_shader_texture_lod\",\"EXT_texture_norm16\",\"WEBGL_compressed_texture_pvrtc\",\"EXT_color_buffer_half_float\",\"WEBGL_color_buffer_float\",\"EXT_sRGB\",\"WEBGL_compressed_texture_etc1\",\"EXT_disjoint_timer_query\",\"WEBGL_compressed_texture_etc\",\"WEBGL_compressed_texture_astc\",\"EXT_color_buffer_float\",\"WEBGL_compressed_texture_s3tc_srgb\",\"EXT_disjoint_timer_query_webgl2\",\"WEBKIT_WEBGL_compressed_texture_pvrtc\"];var exts=GLctx.getSupportedExtensions()||[];exts.forEach(function(ext){if(automaticallyEnabledExtensions.indexOf(ext)!=-1){GLctx.getExtension(ext)}})},populateUniformTable:function(program){var p=GL.programs[program];var ptable=GL.programInfos[program]={uniforms:{},maxUniformLength:0,maxAttributeLength:-1,maxUniformBlockNameLength:-1};var utable=ptable.uniforms;var numUniforms=GLctx.getProgramParameter(p,35718);for(var i=0;i<numUniforms;++i){var u=GLctx.getActiveUniform(p,i);var name=u.name;ptable.maxUniformLength=Math.max(ptable.maxUniformLength,name.length+1);if(name.slice(-1)==\"]\"){name=name.slice(0,name.lastIndexOf(\"[\"))}var loc=GLctx.getUniformLocation(p,name);if(loc){var id=GL.getNewId(GL.uniforms);utable[name]=[u.size,id];GL.uniforms[id]=loc;for(var j=1;j<u.size;++j){var n=name+\"[\"+j+\"]\";loc=GLctx.getUniformLocation(p,n);id=GL.getNewId(GL.uniforms);GL.uniforms[id]=loc}}}}};var __emscripten_webgl_power_preferences=[\"default\",\"low-power\",\"high-performance\"];function _emscripten_webgl_do_create_context(target,attributes){assert(attributes);var contextAttributes={};var a=attributes>>2;contextAttributes[\"alpha\"]=!!HEAP32[a+(0>>2)];contextAttributes[\"depth\"]=!!HEAP32[a+(4>>2)];contextAttributes[\"stencil\"]=!!HEAP32[a+(8>>2)];contextAttributes[\"antialias\"]=!!HEAP32[a+(12>>2)];contextAttributes[\"premultipliedAlpha\"]=!!HEAP32[a+(16>>2)];contextAttributes[\"preserveDrawingBuffer\"]=!!HEAP32[a+(20>>2)];var powerPreference=HEAP32[a+(24>>2)];contextAttributes[\"powerPreference\"]=__emscripten_webgl_power_preferences[powerPreference];contextAttributes[\"failIfMajorPerformanceCaveat\"]=!!HEAP32[a+(28>>2)];contextAttributes.majorVersion=HEAP32[a+(32>>2)];contextAttributes.minorVersion=HEAP32[a+(36>>2)];contextAttributes.enableExtensionsByDefault=HEAP32[a+(40>>2)];contextAttributes.explicitSwapControl=HEAP32[a+(44>>2)];contextAttributes.proxyContextToMainThread=HEAP32[a+(48>>2)];contextAttributes.renderViaOffscreenBackBuffer=HEAP32[a+(52>>2)];var canvas=findCanvasEventTarget(target);if(!canvas){return 0}if(contextAttributes.explicitSwapControl){return 0}var contextHandle=GL.createContext(canvas,contextAttributes);return contextHandle}function _emscripten_webgl_create_context(a0,a1){return _emscripten_webgl_do_create_context(a0,a1)}var ENV={};function getExecutableName(){return thisProgram||\"./this.program\"}function getEnvStrings(){if(!getEnvStrings.strings){var lang=(typeof navigator===\"object\"&&navigator.languages&&navigator.languages[0]||\"C\").replace(\"-\",\"_\")+\".UTF-8\";var env={\"USER\":\"web_user\",\"LOGNAME\":\"web_user\",\"PATH\":\"/\",\"PWD\":\"/\",\"HOME\":\"/home/web_user\",\"LANG\":lang,\"_\":getExecutableName()};for(var x in ENV){env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(x+\"=\"+env[x])}getEnvStrings.strings=strings}return getEnvStrings.strings}function _environ_get(__environ,environ_buf){var bufSize=0;getEnvStrings().forEach(function(string,i){var ptr=environ_buf+bufSize;HEAP32[__environ+i*4>>2]=ptr;writeAsciiToMemory(string,ptr);bufSize+=string.length+1});return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){var strings=getEnvStrings();HEAP32[penviron_count>>2]=strings.length;var bufSize=0;strings.forEach(function(string){bufSize+=string.length+1});HEAP32[penviron_buf_size>>2]=bufSize;return 0}function _fd_close(fd){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(5,1,fd);abort(\"it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM\");return 0}function _fd_fdstat_get(fd,pbuf){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(6,1,fd,pbuf);var type=fd==1||fd==2?2:abort();HEAP8[pbuf>>0]=type;return 0}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(7,1,fd,offset_low,offset_high,whence,newOffset);abort(\"it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM\")}function flush_NO_FILESYSTEM(){if(typeof _fflush!==\"undefined\")_fflush(0);var buffers=SYSCALLS.buffers;if(buffers[1].length)SYSCALLS.printChar(1,10);if(buffers[2].length)SYSCALLS.printChar(2,10)}function _fd_write(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(8,1,fd,iov,iovcnt,pnum);var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAP32[iov+i*8>>2];var len=HEAP32[iov+(i*8+4)>>2];for(var j=0;j<len;j++){SYSCALLS.printChar(fd,HEAPU8[ptr+j])}num+=len}HEAP32[pnum>>2]=num;return 0}function _gettimeofday(ptr){var now=Date.now();HEAP32[ptr>>2]=now/1e3|0;HEAP32[ptr+4>>2]=now%1e3*1e3|0;return 0}function _gmtime_r(time,tmPtr){var date=new Date(HEAP32[time>>2]*1e3);HEAP32[tmPtr>>2]=date.getUTCSeconds();HEAP32[tmPtr+4>>2]=date.getUTCMinutes();HEAP32[tmPtr+8>>2]=date.getUTCHours();HEAP32[tmPtr+12>>2]=date.getUTCDate();HEAP32[tmPtr+16>>2]=date.getUTCMonth();HEAP32[tmPtr+20>>2]=date.getUTCFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getUTCDay();HEAP32[tmPtr+36>>2]=0;HEAP32[tmPtr+32>>2]=0;var start=Date.UTC(date.getUTCFullYear(),0,1,0,0,0,0);var yday=(date.getTime()-start)/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday;if(!_gmtime_r.GMTString)_gmtime_r.GMTString=allocateUTF8(\"GMT\");HEAP32[tmPtr+40>>2]=_gmtime_r.GMTString;return tmPtr}function _tzset(){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(9,1);if(_tzset.called)return;_tzset.called=true;var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);HEAP32[__get_timezone()>>2]=stdTimezoneOffset*60;HEAP32[__get_daylight()>>2]=Number(winterOffset!=summerOffset);function extractZone(date){var match=date.toTimeString().match(/\\(([A-Za-z ]+)\\)$/);return match?match[1]:\"GMT\"}var winterName=extractZone(winter);var summerName=extractZone(summer);var winterNamePtr=allocateUTF8(winterName);var summerNamePtr=allocateUTF8(summerName);if(summerOffset<winterOffset){HEAP32[__get_tzname()>>2]=winterNamePtr;HEAP32[__get_tzname()+4>>2]=summerNamePtr}else{HEAP32[__get_tzname()>>2]=summerNamePtr;HEAP32[__get_tzname()+4>>2]=winterNamePtr}}function _localtime_r(time,tmPtr){_tzset();var date=new Date(HEAP32[time>>2]*1e3);HEAP32[tmPtr>>2]=date.getSeconds();HEAP32[tmPtr+4>>2]=date.getMinutes();HEAP32[tmPtr+8>>2]=date.getHours();HEAP32[tmPtr+12>>2]=date.getDate();HEAP32[tmPtr+16>>2]=date.getMonth();HEAP32[tmPtr+20>>2]=date.getFullYear()-1900;HEAP32[tmPtr+24>>2]=date.getDay();var start=new Date(date.getFullYear(),0,1);var yday=(date.getTime()-start.getTime())/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday;HEAP32[tmPtr+36>>2]=-(date.getTimezoneOffset()*60);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;HEAP32[tmPtr+32>>2]=dst;var zonePtr=HEAP32[__get_tzname()+(dst?4:0)>>2];HEAP32[tmPtr+40>>2]=zonePtr;return tmPtr}function _mktime(tmPtr){_tzset();var date=new Date(HEAP32[tmPtr+20>>2]+1900,HEAP32[tmPtr+16>>2],HEAP32[tmPtr+12>>2],HEAP32[tmPtr+8>>2],HEAP32[tmPtr+4>>2],HEAP32[tmPtr>>2],0);var dst=HEAP32[tmPtr+32>>2];var guessedOffset=date.getTimezoneOffset();var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dstOffset=Math.min(winterOffset,summerOffset);if(dst<0){HEAP32[tmPtr+32>>2]=Number(summerOffset!=winterOffset&&dstOffset==guessedOffset)}else if(dst>0!=(dstOffset==guessedOffset)){var nonDstOffset=Math.max(winterOffset,summerOffset);var trueOffset=dst>0?dstOffset:nonDstOffset;date.setTime(date.getTime()+(trueOffset-guessedOffset)*6e4)}HEAP32[tmPtr+24>>2]=date.getDay();var yday=(date.getTime()-start.getTime())/(1e3*60*60*24)|0;HEAP32[tmPtr+28>>2]=yday;return date.getTime()/1e3|0}function _pthread_cleanup_pop(execute){var routine=PThread.threadExitHandlers.pop();if(execute)routine()}function _pthread_cleanup_push(routine,arg){PThread.threadExitHandlers.push(function(){wasmTable.get(routine)(arg)})}function spawnThread(threadParams){if(ENVIRONMENT_IS_PTHREAD)throw\"Internal Error! spawnThread() can only ever be called from main application thread!\";var worker=PThread.getNewWorker();if(worker.pthread!==undefined)throw\"Internal error!\";if(!threadParams.pthread_ptr)throw\"Internal error, no pthread ptr!\";PThread.runningWorkers.push(worker);var tlsMemory=_malloc(128*4);for(var i=0;i<128;++i){HEAP32[tlsMemory+i*4>>2]=0}var stackHigh=threadParams.stackBase+threadParams.stackSize;var pthread=PThread.pthreads[threadParams.pthread_ptr]={worker:worker,stackBase:threadParams.stackBase,stackSize:threadParams.stackSize,allocatedOwnStack:threadParams.allocatedOwnStack,thread:threadParams.pthread_ptr,threadInfoStruct:threadParams.pthread_ptr};var tis=pthread.threadInfoStruct>>2;Atomics.store(HEAPU32,tis+(0>>2),0);Atomics.store(HEAPU32,tis+(4>>2),0);Atomics.store(HEAPU32,tis+(8>>2),0);Atomics.store(HEAPU32,tis+(68>>2),threadParams.detached);Atomics.store(HEAPU32,tis+(104>>2),tlsMemory);Atomics.store(HEAPU32,tis+(48>>2),0);Atomics.store(HEAPU32,tis+(40>>2),pthread.threadInfoStruct);Atomics.store(HEAPU32,tis+(44>>2),42);Atomics.store(HEAPU32,tis+(108>>2),threadParams.stackSize);Atomics.store(HEAPU32,tis+(84>>2),threadParams.stackSize);Atomics.store(HEAPU32,tis+(80>>2),stackHigh);Atomics.store(HEAPU32,tis+(108+8>>2),stackHigh);Atomics.store(HEAPU32,tis+(108+12>>2),threadParams.detached);Atomics.store(HEAPU32,tis+(108+20>>2),threadParams.schedPolicy);Atomics.store(HEAPU32,tis+(108+24>>2),threadParams.schedPrio);var global_libc=_emscripten_get_global_libc();var global_locale=global_libc+40;Atomics.store(HEAPU32,tis+(176>>2),global_locale);worker.pthread=pthread;var msg={\"cmd\":\"run\",\"start_routine\":threadParams.startRoutine,\"arg\":threadParams.arg,\"threadInfoStruct\":threadParams.pthread_ptr,\"selfThreadId\":threadParams.pthread_ptr,\"parentThreadId\":threadParams.parent_pthread_ptr,\"stackBase\":threadParams.stackBase,\"stackSize\":threadParams.stackSize};worker.runPthread=function(){msg.time=performance.now();worker.postMessage(msg,threadParams.transferList)};if(worker.loaded){worker.runPthread();delete worker.runPthread}}function _pthread_getschedparam(thread,policy,schedparam){if(!policy&&!schedparam)return ERRNO_CODES.EINVAL;if(!thread){err(\"pthread_getschedparam called with a null thread pointer!\");return ERRNO_CODES.ESRCH}var self=HEAP32[thread+12>>2];if(self!==thread){err(\"pthread_getschedparam attempted on thread \"+thread+\", which does not point to a valid thread, or does not exist anymore!\");return ERRNO_CODES.ESRCH}var schedPolicy=Atomics.load(HEAPU32,thread+108+20>>2);var schedPrio=Atomics.load(HEAPU32,thread+108+24>>2);if(policy)HEAP32[policy>>2]=schedPolicy;if(schedparam)HEAP32[schedparam>>2]=schedPrio;return 0}function _pthread_self(){return __pthread_ptr|0}Module[\"_pthread_self\"]=_pthread_self;function _pthread_create(pthread_ptr,attr,start_routine,arg){if(typeof SharedArrayBuffer===\"undefined\"){err(\"Current environment does not support SharedArrayBuffer, pthreads are not available!\");return 6}if(!pthread_ptr){err(\"pthread_create called with a null thread pointer!\");return 28}var transferList=[];var error=0;if(ENVIRONMENT_IS_PTHREAD&&(transferList.length===0||error)){return _emscripten_sync_run_in_main_thread_4(687865856,pthread_ptr,attr,start_routine,arg)}if(error)return error;var stackSize=0;var stackBase=0;var detached=0;var schedPolicy=0;var schedPrio=0;if(attr){stackSize=HEAP32[attr>>2];stackSize+=81920;stackBase=HEAP32[attr+8>>2];detached=HEAP32[attr+12>>2]!==0;var inheritSched=HEAP32[attr+16>>2]===0;if(inheritSched){var prevSchedPolicy=HEAP32[attr+20>>2];var prevSchedPrio=HEAP32[attr+24>>2];var parentThreadPtr=PThread.currentProxiedOperationCallerThread?PThread.currentProxiedOperationCallerThread:_pthread_self();_pthread_getschedparam(parentThreadPtr,attr+20,attr+24);schedPolicy=HEAP32[attr+20>>2];schedPrio=HEAP32[attr+24>>2];HEAP32[attr+20>>2]=prevSchedPolicy;HEAP32[attr+24>>2]=prevSchedPrio}else{schedPolicy=HEAP32[attr+20>>2];schedPrio=HEAP32[attr+24>>2]}}else{stackSize=2097152}var allocatedOwnStack=stackBase==0;if(allocatedOwnStack){stackBase=_memalign(16,stackSize)}else{stackBase-=stackSize;assert(stackBase>0)}var threadInfoStruct=_malloc(232);for(var i=0;i<232>>2;++i)HEAPU32[(threadInfoStruct>>2)+i]=0;HEAP32[pthread_ptr>>2]=threadInfoStruct;HEAP32[threadInfoStruct+12>>2]=threadInfoStruct;var headPtr=threadInfoStruct+156;HEAP32[headPtr>>2]=headPtr;var threadParams={stackBase:stackBase,stackSize:stackSize,allocatedOwnStack:allocatedOwnStack,schedPolicy:schedPolicy,schedPrio:schedPrio,detached:detached,startRoutine:start_routine,pthread_ptr:threadInfoStruct,parent_pthread_ptr:_pthread_self(),arg:arg,transferList:transferList};if(ENVIRONMENT_IS_PTHREAD){threadParams.cmd=\"spawnThread\";postMessage(threadParams,transferList)}else{spawnThread(threadParams)}return 0}function __pthread_testcancel_js(){if(!ENVIRONMENT_IS_PTHREAD)return;if(!threadInfoStruct)return;var cancelDisabled=Atomics.load(HEAPU32,threadInfoStruct+60>>2);if(cancelDisabled)return;var canceled=Atomics.load(HEAPU32,threadInfoStruct+0>>2);if(canceled==2)throw\"Canceled!\"}function __emscripten_do_pthread_join(thread,status,block){if(!thread){err(\"pthread_join attempted on a null thread pointer!\");return ERRNO_CODES.ESRCH}if(ENVIRONMENT_IS_PTHREAD&&selfThreadId==thread){err(\"PThread \"+thread+\" is attempting to join to itself!\");return ERRNO_CODES.EDEADLK}else if(!ENVIRONMENT_IS_PTHREAD&&PThread.mainThreadBlock==thread){err(\"Main thread \"+thread+\" is attempting to join to itself!\");return ERRNO_CODES.EDEADLK}var self=HEAP32[thread+12>>2];if(self!==thread){err(\"pthread_join attempted on thread \"+thread+\", which does not point to a valid thread, or does not exist anymore!\");return ERRNO_CODES.ESRCH}var detached=Atomics.load(HEAPU32,thread+68>>2);if(detached){err(\"Attempted to join thread \"+thread+\", which was already detached!\");return ERRNO_CODES.EINVAL}if(block){_emscripten_check_blocking_allowed()}for(;;){var threadStatus=Atomics.load(HEAPU32,thread+0>>2);if(threadStatus==1){var threadExitCode=Atomics.load(HEAPU32,thread+4>>2);if(status)HEAP32[status>>2]=threadExitCode;Atomics.store(HEAPU32,thread+68>>2,1);if(!ENVIRONMENT_IS_PTHREAD)cleanupThread(thread);else postMessage({\"cmd\":\"cleanupThread\",\"thread\":thread});return 0}if(!block){return ERRNO_CODES.EBUSY}__pthread_testcancel_js();if(!ENVIRONMENT_IS_PTHREAD)_emscripten_main_thread_process_queued_calls();_emscripten_futex_wait(thread+0,threadStatus,ENVIRONMENT_IS_PTHREAD?100:1)}}function _pthread_join(thread,status){return __emscripten_do_pthread_join(thread,status,true)}function _setTempRet0($i){setTempRet0($i|0)}function _sysconf(name){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(10,1,name);switch(name){case 30:return 16384;case 85:var maxHeapSize=HEAPU8.length;return maxHeapSize/16384;case 132:case 133:case 12:case 137:case 138:case 15:case 235:case 16:case 17:case 18:case 19:case 20:case 149:case 13:case 10:case 236:case 153:case 9:case 21:case 22:case 159:case 154:case 14:case 77:case 78:case 139:case 80:case 81:case 82:case 68:case 67:case 164:case 11:case 29:case 47:case 48:case 95:case 52:case 51:case 46:case 79:return 200809;case 27:case 246:case 127:case 128:case 23:case 24:case 160:case 161:case 181:case 182:case 242:case 183:case 184:case 243:case 244:case 245:case 165:case 178:case 179:case 49:case 50:case 168:case 169:case 175:case 170:case 171:case 172:case 97:case 76:case 32:case 173:case 35:return-1;case 176:case 177:case 7:case 155:case 8:case 157:case 125:case 126:case 92:case 93:case 129:case 130:case 131:case 94:case 91:return 1;case 74:case 60:case 69:case 70:case 4:return 1024;case 31:case 42:case 72:return 32;case 87:case 26:case 33:return 2147483647;case 34:case 1:return 47839;case 38:case 36:return 99;case 43:case 37:return 2048;case 0:return 2097152;case 3:return 65536;case 28:return 32768;case 44:return 32767;case 75:return 16384;case 39:return 1e3;case 89:return 700;case 71:return 256;case 40:return 255;case 2:return 100;case 180:return 64;case 25:return 20;case 5:return 16;case 6:return 6;case 73:return 4;case 84:{if(typeof navigator===\"object\")return navigator[\"hardwareConcurrency\"]||1;return 1}}setErrNo(28);return-1}if(!ENVIRONMENT_IS_PTHREAD)PThread.initMainThreadBlock();EmscriptenTrace.init();var GLctx;var proxiedFunctionTable=[null,___sys_fcntl64,___sys_open,___sys_read,_emscripten_set_canvas_element_size_main_thread,_fd_close,_fd_fdstat_get,_fd_seek,_fd_write,_tzset,_sysconf];var ASSERTIONS=true;if(!ENVIRONMENT_IS_PTHREAD)__ATINIT__.push({func:function(){___wasm_call_ctors()}});var asmLibraryArg={\"__assert_fail\":___assert_fail,\"__clock_gettime\":___clock_gettime,\"__sys_fcntl64\":___sys_fcntl64,\"__sys_open\":___sys_open,\"__sys_read\":___sys_read,\"_emscripten_notify_thread_queue\":__emscripten_notify_thread_queue,\"abort\":_abort,\"clock\":_clock,\"emscripten_asm_const_int\":_emscripten_asm_const_int,\"emscripten_check_blocking_allowed\":_emscripten_check_blocking_allowed,\"emscripten_conditional_set_current_thread_status\":_emscripten_conditional_set_current_thread_status,\"emscripten_futex_wait\":_emscripten_futex_wait,\"emscripten_futex_wake\":_emscripten_futex_wake,\"emscripten_get_now\":_emscripten_get_now,\"emscripten_is_main_browser_thread\":_emscripten_is_main_browser_thread,\"emscripten_is_main_runtime_thread\":_emscripten_is_main_runtime_thread,\"emscripten_memcpy_big\":_emscripten_memcpy_big,\"emscripten_num_logical_cores\":_emscripten_num_logical_cores,\"emscripten_receive_on_main_thread_js\":_emscripten_receive_on_main_thread_js,\"emscripten_resize_heap\":_emscripten_resize_heap,\"emscripten_set_canvas_element_size\":_emscripten_set_canvas_element_size,\"emscripten_set_current_thread_status\":_emscripten_set_current_thread_status,\"emscripten_trace_record_allocation\":_emscripten_trace_record_allocation,\"emscripten_trace_record_free\":_emscripten_trace_record_free,\"emscripten_trace_record_reallocation\":_emscripten_trace_record_reallocation,\"emscripten_webgl_create_context\":_emscripten_webgl_create_context,\"environ_get\":_environ_get,\"environ_sizes_get\":_environ_sizes_get,\"fd_close\":_fd_close,\"fd_fdstat_get\":_fd_fdstat_get,\"fd_seek\":_fd_seek,\"fd_write\":_fd_write,\"gettimeofday\":_gettimeofday,\"gmtime_r\":_gmtime_r,\"initPthreadsJS\":initPthreadsJS,\"localtime_r\":_localtime_r,\"memory\":wasmMemory||Module[\"wasmMemory\"],\"mktime\":_mktime,\"pthread_cleanup_pop\":_pthread_cleanup_pop,\"pthread_cleanup_push\":_pthread_cleanup_push,\"pthread_create\":_pthread_create,\"pthread_join\":_pthread_join,\"pthread_self\":_pthread_self,\"setTempRet0\":_setTempRet0,\"sysconf\":_sysconf};var asm=createWasm();var ___wasm_call_ctors=Module[\"___wasm_call_ctors\"]=createExportWrapper(\"__wasm_call_ctors\");var _init_decoder=Module[\"_init_decoder\"]=createExportWrapper(\"init_decoder\");var _decode_buffer=Module[\"_decode_buffer\"]=createExportWrapper(\"decode_buffer\");var _flush_decoder=Module[\"_flush_decoder\"]=createExportWrapper(\"flush_decoder\");var _close_decoder=Module[\"_close_decoder\"]=createExportWrapper(\"close_decoder\");var ___errno_location=Module[\"___errno_location\"]=createExportWrapper(\"__errno_location\");var _free=Module[\"_free\"]=createExportWrapper(\"free\");var _malloc=Module[\"_malloc\"]=createExportWrapper(\"malloc\");var _emscripten_get_global_libc=Module[\"_emscripten_get_global_libc\"]=createExportWrapper(\"emscripten_get_global_libc\");var ___em_js__initPthreadsJS=Module[\"___em_js__initPthreadsJS\"]=createExportWrapper(\"__em_js__initPthreadsJS\");var ___emscripten_pthread_data_constructor=Module[\"___emscripten_pthread_data_constructor\"]=createExportWrapper(\"__emscripten_pthread_data_constructor\");var _memset=Module[\"_memset\"]=createExportWrapper(\"memset\");var __get_tzname=Module[\"__get_tzname\"]=createExportWrapper(\"_get_tzname\");var __get_daylight=Module[\"__get_daylight\"]=createExportWrapper(\"_get_daylight\");var __get_timezone=Module[\"__get_timezone\"]=createExportWrapper(\"_get_timezone\");var stackSave=Module[\"stackSave\"]=createExportWrapper(\"stackSave\");var stackRestore=Module[\"stackRestore\"]=createExportWrapper(\"stackRestore\");var stackAlloc=Module[\"stackAlloc\"]=createExportWrapper(\"stackAlloc\");var _sbrk=Module[\"_sbrk\"]=createExportWrapper(\"sbrk\");var _memalign=Module[\"_memalign\"]=createExportWrapper(\"memalign\");var _emscripten_main_browser_thread_id=Module[\"_emscripten_main_browser_thread_id\"]=createExportWrapper(\"emscripten_main_browser_thread_id\");var ___pthread_tsd_run_dtors=Module[\"___pthread_tsd_run_dtors\"]=createExportWrapper(\"__pthread_tsd_run_dtors\");var _emscripten_main_thread_process_queued_calls=Module[\"_emscripten_main_thread_process_queued_calls\"]=createExportWrapper(\"emscripten_main_thread_process_queued_calls\");var _emscripten_current_thread_process_queued_calls=Module[\"_emscripten_current_thread_process_queued_calls\"]=createExportWrapper(\"emscripten_current_thread_process_queued_calls\");var _emscripten_register_main_browser_thread_id=Module[\"_emscripten_register_main_browser_thread_id\"]=createExportWrapper(\"emscripten_register_main_browser_thread_id\");var _do_emscripten_dispatch_to_thread=Module[\"_do_emscripten_dispatch_to_thread\"]=createExportWrapper(\"do_emscripten_dispatch_to_thread\");var _emscripten_async_run_in_main_thread=Module[\"_emscripten_async_run_in_main_thread\"]=createExportWrapper(\"emscripten_async_run_in_main_thread\");var _emscripten_sync_run_in_main_thread=Module[\"_emscripten_sync_run_in_main_thread\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread\");var _emscripten_sync_run_in_main_thread_0=Module[\"_emscripten_sync_run_in_main_thread_0\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_0\");var _emscripten_sync_run_in_main_thread_1=Module[\"_emscripten_sync_run_in_main_thread_1\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_1\");var _emscripten_sync_run_in_main_thread_2=Module[\"_emscripten_sync_run_in_main_thread_2\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_2\");var _emscripten_sync_run_in_main_thread_xprintf_varargs=Module[\"_emscripten_sync_run_in_main_thread_xprintf_varargs\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_xprintf_varargs\");var _emscripten_sync_run_in_main_thread_3=Module[\"_emscripten_sync_run_in_main_thread_3\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_3\");var _emscripten_sync_run_in_main_thread_4=Module[\"_emscripten_sync_run_in_main_thread_4\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_4\");var _emscripten_sync_run_in_main_thread_5=Module[\"_emscripten_sync_run_in_main_thread_5\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_5\");var _emscripten_sync_run_in_main_thread_6=Module[\"_emscripten_sync_run_in_main_thread_6\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_6\");var _emscripten_sync_run_in_main_thread_7=Module[\"_emscripten_sync_run_in_main_thread_7\"]=createExportWrapper(\"emscripten_sync_run_in_main_thread_7\");var _emscripten_run_in_main_runtime_thread_js=Module[\"_emscripten_run_in_main_runtime_thread_js\"]=createExportWrapper(\"emscripten_run_in_main_runtime_thread_js\");var __emscripten_call_on_thread=Module[\"__emscripten_call_on_thread\"]=createExportWrapper(\"_emscripten_call_on_thread\");var _emscripten_tls_init=Module[\"_emscripten_tls_init\"]=createExportWrapper(\"emscripten_tls_init\");var dynCall_jiji=Module[\"dynCall_jiji\"]=createExportWrapper(\"dynCall_jiji\");var _ff_h264_cabac_tables=Module[\"_ff_h264_cabac_tables\"]=38858;var _main_thread_futex=Module[\"_main_thread_futex\"]=139012;if(!Object.getOwnPropertyDescriptor(Module,\"intArrayFromString\"))Module[\"intArrayFromString\"]=function(){abort(\"'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"intArrayToString\"))Module[\"intArrayToString\"]=function(){abort(\"'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"ccall\"))Module[\"ccall\"]=function(){abort(\"'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"cwrap\"))Module[\"cwrap\"]=function(){abort(\"'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"setValue\"))Module[\"setValue\"]=function(){abort(\"'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getValue\"))Module[\"getValue\"]=function(){abort(\"'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"allocate\"))Module[\"allocate\"]=function(){abort(\"'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"UTF8ArrayToString\"))Module[\"UTF8ArrayToString\"]=function(){abort(\"'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"UTF8ToString\"))Module[\"UTF8ToString\"]=function(){abort(\"'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stringToUTF8Array\"))Module[\"stringToUTF8Array\"]=function(){abort(\"'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stringToUTF8\"))Module[\"stringToUTF8\"]=function(){abort(\"'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"lengthBytesUTF8\"))Module[\"lengthBytesUTF8\"]=function(){abort(\"'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stackTrace\"))Module[\"stackTrace\"]=function(){abort(\"'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"addOnPreRun\"))Module[\"addOnPreRun\"]=function(){abort(\"'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"addOnInit\"))Module[\"addOnInit\"]=function(){abort(\"'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"addOnPreMain\"))Module[\"addOnPreMain\"]=function(){abort(\"'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"addOnExit\"))Module[\"addOnExit\"]=function(){abort(\"'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"addOnPostRun\"))Module[\"addOnPostRun\"]=function(){abort(\"'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeStringToMemory\"))Module[\"writeStringToMemory\"]=function(){abort(\"'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeArrayToMemory\"))Module[\"writeArrayToMemory\"]=function(){abort(\"'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeAsciiToMemory\"))Module[\"writeAsciiToMemory\"]=function(){abort(\"'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"addRunDependency\"))Module[\"addRunDependency\"]=function(){abort(\"'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"removeRunDependency\"))Module[\"removeRunDependency\"]=function(){abort(\"'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_createFolder\"))Module[\"FS_createFolder\"]=function(){abort(\"'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_createPath\"))Module[\"FS_createPath\"]=function(){abort(\"'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_createDataFile\"))Module[\"FS_createDataFile\"]=function(){abort(\"'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_createPreloadedFile\"))Module[\"FS_createPreloadedFile\"]=function(){abort(\"'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_createLazyFile\"))Module[\"FS_createLazyFile\"]=function(){abort(\"'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_createLink\"))Module[\"FS_createLink\"]=function(){abort(\"'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_createDevice\"))Module[\"FS_createDevice\"]=function(){abort(\"'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"FS_unlink\"))Module[\"FS_unlink\"]=function(){abort(\"'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you\")};if(!Object.getOwnPropertyDescriptor(Module,\"getLEB\"))Module[\"getLEB\"]=function(){abort(\"'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getFunctionTables\"))Module[\"getFunctionTables\"]=function(){abort(\"'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"alignFunctionTables\"))Module[\"alignFunctionTables\"]=function(){abort(\"'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"registerFunctions\"))Module[\"registerFunctions\"]=function(){abort(\"'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};Module[\"addFunction\"]=addFunction;Module[\"removeFunction\"]=removeFunction;if(!Object.getOwnPropertyDescriptor(Module,\"getFuncWrapper\"))Module[\"getFuncWrapper\"]=function(){abort(\"'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"prettyPrint\"))Module[\"prettyPrint\"]=function(){abort(\"'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"makeBigInt\"))Module[\"makeBigInt\"]=function(){abort(\"'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"dynCall\"))Module[\"dynCall\"]=function(){abort(\"'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getCompilerSetting\"))Module[\"getCompilerSetting\"]=function(){abort(\"'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"print\"))Module[\"print\"]=function(){abort(\"'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"printErr\"))Module[\"printErr\"]=function(){abort(\"'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getTempRet0\"))Module[\"getTempRet0\"]=function(){abort(\"'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"setTempRet0\"))Module[\"setTempRet0\"]=function(){abort(\"'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"callMain\"))Module[\"callMain\"]=function(){abort(\"'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"abort\"))Module[\"abort\"]=function(){abort(\"'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stringToNewUTF8\"))Module[\"stringToNewUTF8\"]=function(){abort(\"'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"abortOnCannotGrowMemory\"))Module[\"abortOnCannotGrowMemory\"]=function(){abort(\"'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"emscripten_realloc_buffer\"))Module[\"emscripten_realloc_buffer\"]=function(){abort(\"'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"ENV\"))Module[\"ENV\"]=function(){abort(\"'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"ERRNO_CODES\"))Module[\"ERRNO_CODES\"]=function(){abort(\"'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"ERRNO_MESSAGES\"))Module[\"ERRNO_MESSAGES\"]=function(){abort(\"'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"setErrNo\"))Module[\"setErrNo\"]=function(){abort(\"'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"DNS\"))Module[\"DNS\"]=function(){abort(\"'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getHostByName\"))Module[\"getHostByName\"]=function(){abort(\"'getHostByName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"GAI_ERRNO_MESSAGES\"))Module[\"GAI_ERRNO_MESSAGES\"]=function(){abort(\"'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"Protocols\"))Module[\"Protocols\"]=function(){abort(\"'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"Sockets\"))Module[\"Sockets\"]=function(){abort(\"'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getRandomDevice\"))Module[\"getRandomDevice\"]=function(){abort(\"'getRandomDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"traverseStack\"))Module[\"traverseStack\"]=function(){abort(\"'traverseStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"UNWIND_CACHE\"))Module[\"UNWIND_CACHE\"]=function(){abort(\"'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"withBuiltinMalloc\"))Module[\"withBuiltinMalloc\"]=function(){abort(\"'withBuiltinMalloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"readAsmConstArgsArray\"))Module[\"readAsmConstArgsArray\"]=function(){abort(\"'readAsmConstArgsArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"readAsmConstArgs\"))Module[\"readAsmConstArgs\"]=function(){abort(\"'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"mainThreadEM_ASM\"))Module[\"mainThreadEM_ASM\"]=function(){abort(\"'mainThreadEM_ASM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"jstoi_q\"))Module[\"jstoi_q\"]=function(){abort(\"'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"jstoi_s\"))Module[\"jstoi_s\"]=function(){abort(\"'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getExecutableName\"))Module[\"getExecutableName\"]=function(){abort(\"'getExecutableName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"listenOnce\"))Module[\"listenOnce\"]=function(){abort(\"'listenOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"autoResumeAudioContext\"))Module[\"autoResumeAudioContext\"]=function(){abort(\"'autoResumeAudioContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"dynCallLegacy\"))Module[\"dynCallLegacy\"]=function(){abort(\"'dynCallLegacy' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getDynCaller\"))Module[\"getDynCaller\"]=function(){abort(\"'getDynCaller' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"dynCall\"))Module[\"dynCall\"]=function(){abort(\"'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"callRuntimeCallbacks\"))Module[\"callRuntimeCallbacks\"]=function(){abort(\"'callRuntimeCallbacks' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"abortStackOverflow\"))Module[\"abortStackOverflow\"]=function(){abort(\"'abortStackOverflow' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"reallyNegative\"))Module[\"reallyNegative\"]=function(){abort(\"'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"unSign\"))Module[\"unSign\"]=function(){abort(\"'unSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"reSign\"))Module[\"reSign\"]=function(){abort(\"'reSign' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"formatString\"))Module[\"formatString\"]=function(){abort(\"'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"PATH\"))Module[\"PATH\"]=function(){abort(\"'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"PATH_FS\"))Module[\"PATH_FS\"]=function(){abort(\"'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"SYSCALLS\"))Module[\"SYSCALLS\"]=function(){abort(\"'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"syscallMmap2\"))Module[\"syscallMmap2\"]=function(){abort(\"'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"syscallMunmap\"))Module[\"syscallMunmap\"]=function(){abort(\"'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"flush_NO_FILESYSTEM\"))Module[\"flush_NO_FILESYSTEM\"]=function(){abort(\"'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"JSEvents\"))Module[\"JSEvents\"]=function(){abort(\"'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"specialHTMLTargets\"))Module[\"specialHTMLTargets\"]=function(){abort(\"'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"maybeCStringToJsString\"))Module[\"maybeCStringToJsString\"]=function(){abort(\"'maybeCStringToJsString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"findEventTarget\"))Module[\"findEventTarget\"]=function(){abort(\"'findEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"findCanvasEventTarget\"))Module[\"findCanvasEventTarget\"]=function(){abort(\"'findCanvasEventTarget' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"polyfillSetImmediate\"))Module[\"polyfillSetImmediate\"]=function(){abort(\"'polyfillSetImmediate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"demangle\"))Module[\"demangle\"]=function(){abort(\"'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"demangleAll\"))Module[\"demangleAll\"]=function(){abort(\"'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"jsStackTrace\"))Module[\"jsStackTrace\"]=function(){abort(\"'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stackTrace\"))Module[\"stackTrace\"]=function(){abort(\"'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getEnvStrings\"))Module[\"getEnvStrings\"]=function(){abort(\"'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"checkWasiClock\"))Module[\"checkWasiClock\"]=function(){abort(\"'checkWasiClock' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeI53ToI64\"))Module[\"writeI53ToI64\"]=function(){abort(\"'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeI53ToI64Clamped\"))Module[\"writeI53ToI64Clamped\"]=function(){abort(\"'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeI53ToI64Signaling\"))Module[\"writeI53ToI64Signaling\"]=function(){abort(\"'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeI53ToU64Clamped\"))Module[\"writeI53ToU64Clamped\"]=function(){abort(\"'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeI53ToU64Signaling\"))Module[\"writeI53ToU64Signaling\"]=function(){abort(\"'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"readI53FromI64\"))Module[\"readI53FromI64\"]=function(){abort(\"'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"readI53FromU64\"))Module[\"readI53FromU64\"]=function(){abort(\"'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"convertI32PairToI53\"))Module[\"convertI32PairToI53\"]=function(){abort(\"'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"convertU32PairToI53\"))Module[\"convertU32PairToI53\"]=function(){abort(\"'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"exceptionLast\"))Module[\"exceptionLast\"]=function(){abort(\"'exceptionLast' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"exceptionCaught\"))Module[\"exceptionCaught\"]=function(){abort(\"'exceptionCaught' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"ExceptionInfoAttrs\"))Module[\"ExceptionInfoAttrs\"]=function(){abort(\"'ExceptionInfoAttrs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"ExceptionInfo\"))Module[\"ExceptionInfo\"]=function(){abort(\"'ExceptionInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"CatchInfo\"))Module[\"CatchInfo\"]=function(){abort(\"'CatchInfo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"exception_addRef\"))Module[\"exception_addRef\"]=function(){abort(\"'exception_addRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"exception_decRef\"))Module[\"exception_decRef\"]=function(){abort(\"'exception_decRef' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"Browser\"))Module[\"Browser\"]=function(){abort(\"'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"funcWrappers\"))Module[\"funcWrappers\"]=function(){abort(\"'funcWrappers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getFuncWrapper\"))Module[\"getFuncWrapper\"]=function(){abort(\"'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"setMainLoop\"))Module[\"setMainLoop\"]=function(){abort(\"'setMainLoop' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"tempFixedLengthArray\"))Module[\"tempFixedLengthArray\"]=function(){abort(\"'tempFixedLengthArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"miniTempWebGLFloatBuffers\"))Module[\"miniTempWebGLFloatBuffers\"]=function(){abort(\"'miniTempWebGLFloatBuffers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"heapObjectForWebGLType\"))Module[\"heapObjectForWebGLType\"]=function(){abort(\"'heapObjectForWebGLType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"heapAccessShiftForWebGLHeap\"))Module[\"heapAccessShiftForWebGLHeap\"]=function(){abort(\"'heapAccessShiftForWebGLHeap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"GL\"))Module[\"GL\"]=function(){abort(\"'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"emscriptenWebGLGet\"))Module[\"emscriptenWebGLGet\"]=function(){abort(\"'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"computeUnpackAlignedImageSize\"))Module[\"computeUnpackAlignedImageSize\"]=function(){abort(\"'computeUnpackAlignedImageSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"emscriptenWebGLGetTexPixelData\"))Module[\"emscriptenWebGLGetTexPixelData\"]=function(){abort(\"'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"emscriptenWebGLGetUniform\"))Module[\"emscriptenWebGLGetUniform\"]=function(){abort(\"'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"emscriptenWebGLGetVertexAttrib\"))Module[\"emscriptenWebGLGetVertexAttrib\"]=function(){abort(\"'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"writeGLArray\"))Module[\"writeGLArray\"]=function(){abort(\"'writeGLArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"AL\"))Module[\"AL\"]=function(){abort(\"'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"SDL_unicode\"))Module[\"SDL_unicode\"]=function(){abort(\"'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"SDL_ttfContext\"))Module[\"SDL_ttfContext\"]=function(){abort(\"'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"SDL_audio\"))Module[\"SDL_audio\"]=function(){abort(\"'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"SDL\"))Module[\"SDL\"]=function(){abort(\"'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"SDL_gfx\"))Module[\"SDL_gfx\"]=function(){abort(\"'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"GLUT\"))Module[\"GLUT\"]=function(){abort(\"'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"EGL\"))Module[\"EGL\"]=function(){abort(\"'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"GLFW_Window\"))Module[\"GLFW_Window\"]=function(){abort(\"'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"GLFW\"))Module[\"GLFW\"]=function(){abort(\"'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"GLEW\"))Module[\"GLEW\"]=function(){abort(\"'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"IDBStore\"))Module[\"IDBStore\"]=function(){abort(\"'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"runAndAbortIfError\"))Module[\"runAndAbortIfError\"]=function(){abort(\"'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"EmscriptenTrace\"))Module[\"EmscriptenTrace\"]=function(){abort(\"'EmscriptenTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};Module[\"PThread\"]=PThread;if(!Object.getOwnPropertyDescriptor(Module,\"killThread\"))Module[\"killThread\"]=function(){abort(\"'killThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"cleanupThread\"))Module[\"cleanupThread\"]=function(){abort(\"'cleanupThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"cancelThread\"))Module[\"cancelThread\"]=function(){abort(\"'cancelThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"spawnThread\"))Module[\"spawnThread\"]=function(){abort(\"'spawnThread' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"registerPthreadPtr\"))Module[\"registerPthreadPtr\"]=function(){abort(\"'registerPthreadPtr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"establishStackSpace\"))Module[\"establishStackSpace\"]=function(){abort(\"'establishStackSpace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"getNoExitRuntime\"))Module[\"getNoExitRuntime\"]=function(){abort(\"'getNoExitRuntime' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"resetPrototype\"))Module[\"resetPrototype\"]=function(){abort(\"'resetPrototype' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"warnOnce\"))Module[\"warnOnce\"]=function(){abort(\"'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stackSave\"))Module[\"stackSave\"]=function(){abort(\"'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stackRestore\"))Module[\"stackRestore\"]=function(){abort(\"'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stackAlloc\"))Module[\"stackAlloc\"]=function(){abort(\"'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"AsciiToString\"))Module[\"AsciiToString\"]=function(){abort(\"'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stringToAscii\"))Module[\"stringToAscii\"]=function(){abort(\"'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"UTF16ToString\"))Module[\"UTF16ToString\"]=function(){abort(\"'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stringToUTF16\"))Module[\"stringToUTF16\"]=function(){abort(\"'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"lengthBytesUTF16\"))Module[\"lengthBytesUTF16\"]=function(){abort(\"'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"UTF32ToString\"))Module[\"UTF32ToString\"]=function(){abort(\"'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"stringToUTF32\"))Module[\"stringToUTF32\"]=function(){abort(\"'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"lengthBytesUTF32\"))Module[\"lengthBytesUTF32\"]=function(){abort(\"'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"allocateUTF8\"))Module[\"allocateUTF8\"]=function(){abort(\"'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};if(!Object.getOwnPropertyDescriptor(Module,\"allocateUTF8OnStack\"))Module[\"allocateUTF8OnStack\"]=function(){abort(\"'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")};Module[\"writeStackCookie\"]=writeStackCookie;Module[\"checkStackCookie\"]=checkStackCookie;Module[\"PThread\"]=PThread;Module[\"_pthread_self\"]=_pthread_self;Module[\"wasmMemory\"]=wasmMemory;Module[\"ExitStatus\"]=ExitStatus;if(!Object.getOwnPropertyDescriptor(Module,\"ALLOC_NORMAL\"))Object.defineProperty(Module,\"ALLOC_NORMAL\",{configurable:true,get:function(){abort(\"'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")}});if(!Object.getOwnPropertyDescriptor(Module,\"ALLOC_STACK\"))Object.defineProperty(Module,\"ALLOC_STACK\",{configurable:true,get:function(){abort(\"'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)\")}});var calledRun;function ExitStatus(status){this.name=\"ExitStatus\";this.message=\"Program terminated with exit(\"+status+\")\";this.status=status}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}writeStackCookie();preRun();if(runDependencies>0)return;function doRun(){if(calledRun)return;calledRun=true;Module[\"calledRun\"]=true;if(ABORT)return;initRuntime();preMain();readyPromiseResolve(Module);if(Module[\"onRuntimeInitialized\"])Module[\"onRuntimeInitialized\"]();assert(!Module[\"_main\"],'compiled without a main, but one is present. if you added it from JS, use Module[\"onRuntimeInitialized\"]');postRun()}if(Module[\"setStatus\"]){Module[\"setStatus\"](\"Running...\");setTimeout(function(){setTimeout(function(){Module[\"setStatus\"](\"\")},1);doRun()},1)}else{doRun()}checkStackCookie()}Module[\"run\"]=run;function checkUnflushedContent(){var print=out;var printErr=err;var has=false;out=err=function(x){has=true};try{var flush=flush_NO_FILESYSTEM;if(flush)flush()}catch(e){}out=print;err=printErr;if(has){warnOnce(\"stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.\");warnOnce(\"(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)\")}}if(Module[\"preInit\"]){if(typeof Module[\"preInit\"]==\"function\")Module[\"preInit\"]=[Module[\"preInit\"]];while(Module[\"preInit\"].length>0){Module[\"preInit\"].pop()()}}if(!ENVIRONMENT_IS_PTHREAD)noExitRuntime=true;if(!ENVIRONMENT_IS_PTHREAD){run()}else{PThread.initWorker()}\n\n\n  return WASMDecoder.ready\n}\n);\n})();\nif (typeof exports === 'object' && typeof module === 'object')\n      module.exports = WASMDecoder;\n    else if (typeof define === 'function' && define['amd'])\n      define([], function() { return WASMDecoder; });\n    else if (typeof exports === 'object')\n      exports[\"WASMDecoder\"] = WASMDecoder;\n    ");

/***/ }),

/***/ "./lib/libffmpeg.worker.txt":
/*!**********************************!*\
  !*** ./lib/libffmpeg.worker.txt ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("var threadInfoStruct=0;var selfThreadId=0;var parentThreadId=0;var Module={};function assert(condition,text){if(!condition)abort(\"Assertion failed: \"+text)}function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(\" \");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(\" \");postMessage({cmd:\"alert\",text:text,threadId:selfThreadId})}var out=function(){throw\"out() is not defined in worker.js.\"};var err=threadPrintErr;this.alert=threadAlert;Module[\"instantiateWasm\"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module[\"wasmModule\"],info);Module[\"wasmModule\"]=null;receiveInstance(instance);return instance.exports};this.onmessage=function(e){try{if(e.data.cmd===\"load\"){Module[\"wasmModule\"]=e.data.wasmModule;Module[\"wasmMemory\"]=e.data.wasmMemory;Module[\"buffer\"]=Module[\"wasmMemory\"].buffer;Module[\"ENVIRONMENT_IS_PTHREAD\"]=true;if(typeof e.data.urlOrBlob===\"string\"){importScripts(e.data.urlOrBlob)}else{var objectUrl=URL.createObjectURL(e.data.urlOrBlob);importScripts(objectUrl);URL.revokeObjectURL(objectUrl)}WASMDecoder(Module).then(function(instance){Module=instance;postMessage({\"cmd\":\"loaded\"})})}else if(e.data.cmd===\"objectTransfer\"){Module[\"PThread\"].receiveObjectTransfer(e.data)}else if(e.data.cmd===\"run\"){Module[\"__performance_now_clock_drift\"]=performance.now()-e.data.time;threadInfoStruct=e.data.threadInfoStruct;Module[\"registerPthreadPtr\"](threadInfoStruct,0,0);selfThreadId=e.data.selfThreadId;parentThreadId=e.data.parentThreadId;var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;assert(threadInfoStruct);assert(selfThreadId);assert(parentThreadId);assert(top!=0);assert(max!=0);assert(top>max);Module[\"establishStackSpace\"](top,max);Module[\"_emscripten_tls_init\"]();Module[\"writeStackCookie\"]();Module[\"PThread\"].receiveObjectTransfer(e.data);Module[\"PThread\"].setThreadStatus(Module[\"_pthread_self\"](),1);try{var result=Module[\"dynCall\"](\"ii\",e.data.start_routine,[e.data.arg]);Module[\"checkStackCookie\"]();if(!Module[\"getNoExitRuntime\"]())Module[\"PThread\"].threadExit(result)}catch(ex){if(ex===\"Canceled!\"){Module[\"PThread\"].threadCancel()}else if(ex!=\"unwind\"){Atomics.store(Module[\"HEAPU32\"],threadInfoStruct+4>>2,ex instanceof Module[\"ExitStatus\"]?ex.status:-2);Atomics.store(Module[\"HEAPU32\"],threadInfoStruct+0>>2,1);if(typeof Module[\"_emscripten_futex_wake\"]!==\"function\"){err(\"Thread Initialisation failed.\");throw ex}Module[\"_emscripten_futex_wake\"](threadInfoStruct+0,2147483647);if(!(ex instanceof Module[\"ExitStatus\"]))throw ex}else{err(\"Pthread 0x\"+threadInfoStruct.toString(16)+\" completed its pthread main entry point with an unwind, keeping the pthread worker alive for asynchronous operation.\")}}}else if(e.data.cmd===\"cancel\"){if(threadInfoStruct){Module[\"PThread\"].threadCancel()}}else if(e.data.target===\"setimmediate\"){}else if(e.data.cmd===\"processThreadQueue\"){if(threadInfoStruct){Module[\"_emscripten_current_thread_process_queued_calls\"]()}}else{err(\"worker.js received unknown command \"+e.data.cmd);err(e.data)}}catch(ex){err(\"worker.js onmessage() captured an uncaught exception: \"+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};if(typeof process===\"object\"&&typeof process.versions===\"object\"&&typeof process.versions.node===\"string\"){self={location:{href:__filename}};var onmessage=this.onmessage;var nodeWorkerThreads=require(\"worker_threads\");global.Worker=nodeWorkerThreads.Worker;var parentPort=nodeWorkerThreads.parentPort;parentPort.on(\"message\",function(data){onmessage({data:data})});var nodeFS=require(\"fs\");var nodeRead=function(filename){return nodeFS.readFileSync(filename,\"utf8\")};function globalEval(x){global.require=require;global.Module=Module;eval.call(null,x)}importScripts=function(f){globalEval(nodeRead(f))};postMessage=function(msg){parentPort.postMessage(msg)};if(typeof performance===\"undefined\"){performance={now:function(){return Date.now()}}}}\n");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(true) {
      // 1620879784372
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
  maxAppendDecodeNumber: 100,
  maxFramesNumber: 15,
  maxDemuxNumber: 100,
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

/***/ "./src/player/constants/interface.ts":
/*!*******************************************!*\
  !*** ./src/player/constants/interface.ts ***!
  \*******************************************/
/*! exports provided: loaderStatus, Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loaderStatus", function() { return loaderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
var loaderStatus;

(function (loaderStatus) {
  loaderStatus["worker"] = "worker";
  loaderStatus["window"] = "window";
})(loaderStatus || (loaderStatus = {}));

var Loader = function (event, option) {
  this.event = event;
  this.option = option;
};

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
  };

  _proto.decodeAudioData = function decodeAudioData() {
    var _a;

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      var audioPts;
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
              audioPts = this.aduioFrameStartTime;
              this.aduioFrameStartTime = null;
              this.state.appendTimes += 1;
              this.actx.decodeAudioData(this.audioBuffer, function (buffer) {
                _this.state.appendTimes -= 1;

                if (_this.state.flushing) {
                  if (_this.state.appendTimes === 0) {
                    _this.state.flushing = false;
                  }
                } else {
                  _this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_1__["ManagerEvent"].GETAUDIOFRAME, {
                    buffer: buffer,
                    pts: audioPts,
                    ptsTime: audioPts * _this.option.baseTime
                  });
                }
              }); // buffer 喂入解码区，该buffer 在js 环境下无法访问， https://github.com/WebAudio/web-audio-api/issues/1175

              this.audioBuffer = new ArrayBuffer(0);

            case 7:
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
    }

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
                      console.log('seekend', useTime, count, useTime / (count - drapCount), drapCount);
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
/* harmony import */ var _constants_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/interface */ "./src/player/constants/interface.ts");
/* harmony import */ var _demux_M3U8Parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demux/M3U8Parse */ "./src/player/format/hls/demux/M3U8Parse.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/player/constants/index.ts");
/* harmony import */ var _demux_tsDemuxer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demux/tsDemuxer */ "./src/player/format/hls/demux/tsDemuxer.ts");


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
        console.warn(_constants__WEBPACK_IMPORTED_MODULE_3__["ERROR_MSG"].REQUEST_REPEAT, "request url: " + uri + ", currentUrl: " + this.state.currentUrl);
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
              this.tsDemuxer = new _demux_tsDemuxer__WEBPACK_IMPORTED_MODULE_4__["default"](Object.assign({
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

              throw _constants__WEBPACK_IMPORTED_MODULE_3__["ERROR_MSG"].SOURCE_NULL;

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
              throw _constants__WEBPACK_IMPORTED_MODULE_3__["ERROR_MSG"].PARSESOURCE;

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
    var currentIndex = this.state.currentIndex;
    var packet = {
      DTS: data.pes.DTS,
      PTS: data.pes.PTS,
      data_byte: data.pes.data_byte
    };

    switch (data.stream_type) {
      case 36:
        if (currentIndex === 0 && !this.metaState.videoStartTime) {
          this.metaState.videoStartTime = packet.PTS * HlsLoader.baseTime;
          this.sendMetadataEvent();
        } // 解析视频


        this.option.demux2videoChannel.forcePipe(packet);
        break;

      case 3:
      case 15:
      case 17:
        // 解析音频
        if (currentIndex === 0 && !this.metaState.audioStartTime) {
          this.metaState.audioStartTime = packet.PTS * HlsLoader.baseTime;
          this.sendMetadataEvent();
        }

        if (this.option.status === _constants__WEBPACK_IMPORTED_MODULE_3__["loaderStatus"].worker) {
          self.postMessage({
            type: _constants__WEBPACK_IMPORTED_MODULE_3__["WorkerEvent"].GETAUDIOPACKET,
            payload: packet
          }, [packet.data_byte.buffer]);
        } else {
          this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["ManagerEvent"].GETAUDIOPACKET, packet);
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
      this.event.emit(_constants__WEBPACK_IMPORTED_MODULE_3__["PlayerEvent"].LOADEDMETADATA, {
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
}(_constants_interface__WEBPACK_IMPORTED_MODULE_1__["Loader"]);


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

              this.worker.onmessage = this.handleWorkerMsg.bind(this);

              this.worker.onerror = function (e) {
                return console.log(e);
              };

            case 6:
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
        var errorTime = frame.renderTime - currentTime;
        this.performanceState.renderCount++;
        this.performanceState.renderAvgErrorTime = Number((this.performanceState.renderAvgErrorTime * this.performanceState.renderCount + errorTime) / this.performanceState.renderCount); // this.performanceState.renderAvgErrorTime = Number(this.performanceState.renderAvgErrorTime.toFixed(2));

        videoFrames.length = index + 1;
        return {
          index: index + 1,
          frame: frame
        };
      }
    } else {
      console.log('清空所有内存', [].concat(videoFrames));
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

        if (frame.pts !== payload.pts) {
          // debugger
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
      readers: {}
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
              return _context2.abrupt("return", this.getBuffer(reader, url));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
  };

  _proto.getBuffer = function getBuffer(reader, url) {
    var _a;

    return __awaiter(this, void 0, void 0, /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var done, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              done = false;

            case 1:
              if (done) {
                _context3.next = 11;
                break;
              }

              _context3.next = 4;
              return reader.read();

            case 4:
              res = _context3.sent;
              done = res.done;

              if (done) {
                this.state.readers[url] && delete this.state.readers[url];
              } // 阻塞关键点


              _context3.next = 9;
              return this.option.channel.pipe({
                data: (_a = res.value) === null || _a === void 0 ? void 0 : _a.buffer,
                url: url,
                done: done
              });

            case 9:
              _context3.next = 1;
              break;

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
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