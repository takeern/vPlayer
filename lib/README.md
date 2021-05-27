1. 从 github 上下载 ffmpege 源码，切换到4.1版本，编译。
2. 进入 ffmpge 编译。
```bash
echo "Beginning Build:"
cd ./ffmpeg  # src目录，ffmpeg源码
make clean
emconfigure ./configure --cc="emcc" --cxx="em++" --ar="emar" --ranlib="emranlib" --prefix=$(pwd)/../disttest --enable-cross-compile --target-os=none --arch=x86_32 --cpu=generic \
    --enable-gpl --enable-version3 \
    --disable-swresample --disable-postproc --disable-logging --disable-everything \
    --disable-programs --disable-asm --disable-doc --disable-network --disable-debug \
    --disable-iconv --disable-sdl2   --disable-avdevice   --disable-avformat   --disable-avfilter   --disable-decoders   --disable-encoders   --disable-hwaccels   --disable-demuxers   --disable-muxers   --disable-parsers   --disable-protocols   --disable-bsfs   --disable-indevs   --disable-outdevs   --disable-filters   --enable-decoder=hevc   --enable-parser=hevc
make
make install
```
3. 进入编译产物文件夹，执行 build.sh 命令。