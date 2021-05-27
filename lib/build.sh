export TOTAL_MEMORY=67108864
export EXPORTED_FUNCTIONS="[ \
    '_init_decoder', \
    '_decode_buffer', \
    '_flush_decoder', \
    '_close_decoder'
]"

echo "Running Emscripten..."
emcc decoder.c ./lib/libavcodec.a ./lib/libavutil.a ./lib/libswscale.a  \
    -O0 \
    -I "./include" \
   -s USE_PTHREADS=1 \
    -s PTHREAD_POOL_SIZE=5 \
    -s ASSERTIONS=1 \
    -s INVOKE_RUN=0 \
    -s MODULARIZE=1 \
    -s LLD_REPORT_UNDEFINED \
    -s NO_EXIT_RUNTIME=1 \
    -s NO_FILESYSTEM=1 \
    -s DISABLE_EXCEPTION_CATCHING=1 \
    -s TOTAL_MEMORY=${TOTAL_MEMORY} \
    -s EXPORT_NAME="'WASMDecoder'" \
     -s EXPORTED_FUNCTIONS="${EXPORTED_FUNCTIONS}" \
     -s EXTRA_EXPORTED_RUNTIME_METHODS="['addFunction', 'removeFunction']" \
  -s RESERVED_FUNCTION_POINTERS=14 \
    -o ../../test/jinkelaPlayer/lib/libffmpeg.js

cd ../../test/jinkelaPlayer/lib/
mv libffmpeg.js libffmpeg.txt
mv libffmpeg.worker.js libffmpeg.worker.txt
cd ../../../github/disttest
echo "Finished Build"