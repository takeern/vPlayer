#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include <libavcodec/avcodec.h>
#include <libavutil/imgutils.h>
#include <libavutil/fifo.h>
#include <emscripten/emscripten.h>
#include <emscripten/threading.h>

typedef void(*OnBuffer)(unsigned char* data_y, int size, int pts);
typedef void(*OnTypeBuffer)(unsigned char* data_y, int size, int pts, int buffer_type);
typedef unsigned char uchar;

typedef enum ErrorCode {
    kErrorCode_Success = 0,
    kErrorCode_Invalid_Param,
    kErrorCode_Invalid_State,
    kErrorCode_Invalid_Data,
    kErrorCode_Invalid_Format,
    kErrorCode_NULL_Pointer,
    kErrorCode_Open_File_Error,
    kErrorCode_Eof,
    kErrorCode_FFmpeg_Error,
    kErrorCode_Old_Frame
}ErrorCode;

typedef enum LogLevel{
    kLogLevel_None, //Not logging.
    kLogLevel_Core, //Only logging core module(without ffmpeg).
    kLogLevel_All   //Logging all, with ffmpeg.
}LogLevel;

LogLevel logLevel = kLogLevel_None;

void avlog(const char* format, ...) {
	if (logLevel == kLogLevel_None) {
		return;
	}

	char szBuffer[1024] = { 0 };
	char szTime[32] = { 0 };
	char* p = NULL;
	int prefixLength = 0;
	const char* tag = "videox";

	prefixLength = sprintf(szBuffer, "[%s][%s]", szTime, tag);
	p = szBuffer + prefixLength;

	if (1) {
		va_list ap;
		va_start(ap, format);
		vsnprintf(p, 1024 - prefixLength, format, ap);
		va_end(ap);
	}

	printf("%s\n", szBuffer);
}


void avlog_callback(void* ptr, int level, const char* fmt, va_list vl) {
    static int printPrefix	= 1;
    static int count		= 0;
    static char prev[1024]	= { 0 };
    char line[1024]			= { 0 };
    static int is_atty;
    AVClass* avc = ptr ? *(AVClass**)ptr : NULL;
    if (level > AV_LOG_DEBUG) {
        return;
    }

    line[0] = 0;

    if (printPrefix && avc) {
        if (avc->parent_log_context_offset) {
            AVClass** parent = *(AVClass***)(((uint8_t*)ptr) + avc->parent_log_context_offset);
            if (parent && *parent) {
                snprintf(line, sizeof(line), "[%s @ %p] ", (*parent)->item_name(parent), parent);
            }
        }
        snprintf(line + strlen(line), sizeof(line) - strlen(line), "[%s @ %p] ", avc->item_name(ptr), ptr);
    }

    vsnprintf(line + strlen(line), sizeof(line) - strlen(line), fmt, vl);
    line[strlen(line) + 1] = 0;
    avlog("%s", line);
}


typedef void(*OnFrameBuffer)(unsigned char* data_y, unsigned char* data_u, unsigned char* data_v, int line1, int line2, int line3, int width, int height, long pts, int time);

static AVCodec *codec = NULL;
static AVCodecContext *dec_ctx = NULL;
static AVCodecParserContext *parser_ctx = NULL;
static AVFrame *frame = NULL;
static OnFrameBuffer decoder_callback = NULL;
static AVFrame* outFrame = NULL;

ErrorCode copyFrameData(AVFrame* src, AVFrame* dst) {
	ErrorCode ret = kErrorCode_Success;
	memcpy(dst->data, src->data, sizeof(src->data));
	dst->linesize[0] = src->linesize[0];
	dst->linesize[1] = src->linesize[1];
	dst->linesize[2] = src->linesize[2];
	dst->width = src->width;
	dst->height = src->height;
	dst->pts = src->pts;
	return ret;
}

// https://www.cnblogs.com/leviatan/p/11166221.html
// https://www.jianshu.com/p/fb19cfb93548
ErrorCode output_yuv_buffer(AVFrame *frame, uint64_t decode_time) {
	ErrorCode res = kErrorCode_Success;
	// int width, height, buffer_size;
	// uint8_t *yuv_buffer = NULL;

	// width = frame->width;
	// height = frame->height;

	// buffer_size = av_image_get_buffer_size(frame->format, width, height, 1);
	// yuv_buffer = (uint8_t *)av_mallocz(buffer_size * sizeof(uint8_t));

	// av_image_copy_to_buffer(yuv_buffer, buffer_size, (const uint8_t **)(frame->data), frame->linesize, frame->format, width, height, 1);
		// avlog("frame 长度: %d, %d, %d, %d", frame->buf[0]->size, frame->buf[1]->size, frame->buf[2]->size, frame->pkt_size);
	for (int i = 1000; i < 200000; i += 1000) {
		avlog("原始buf, 0: %d, 1: %d, 2: %d", frame->buf[0]->data[i], frame->buf[1]->data[i], frame->buf[2]->data[i]);
	}
	res = copyFrameData(frame, outFrame);
	if (res != kErrorCode_Success) {
		avlog("copy frame error");
		return res;
	}
	decoder_callback(outFrame->data[0], outFrame->data[1], outFrame->data[2], outFrame->linesize[0], outFrame->linesize[1], outFrame->linesize[2], outFrame->width, outFrame->height, outFrame->pts, decode_time);

	// av_free(yuv_buffer);
	return res;
}


ErrorCode decode_packet(AVCodecContext* ctx, AVFrame* frame, AVPacket* pkt)
{
	ErrorCode res = kErrorCode_Success;
	int ret;
	uint64_t curr_time;
	uint64_t prev_time;
	
	prev_time = (uint64_t)emscripten_get_now();
	ret = avcodec_send_packet(ctx, pkt);
	
	if (ret < 0) {
		avlog("Error sending a packet for decoding");
		res = kErrorCode_FFmpeg_Error;
	} else {
		while (ret >= 0) {
			ret = avcodec_receive_frame(ctx, frame);
			// avlog("receive_frame %d ", ret);
			if (ret == AVERROR(EAGAIN)) {
				break;
			} else if(ret == AVERROR_EOF) {
				avcodec_flush_buffers(ctx);
				break;
			} else if (ret < 0) {
				avlog("Error during decoding: %d", ret);
				res = kErrorCode_FFmpeg_Error;
				break;
			}

			if (res != kErrorCode_Success) {
				break;
			}
			curr_time = (uint64_t)emscripten_get_now();
			output_yuv_buffer(frame, curr_time - prev_time);
			prev_time = curr_time;
		}
	}
	return res;
}

ErrorCode init_decoder(OnFrameBuffer callback, LogLevel level, int useCore) {
	ErrorCode ret = kErrorCode_Success;
	do {
		avlog("Initialize Decoder.");
		logLevel = level;
		if (logLevel == kLogLevel_All) {
			av_log_set_callback(avlog_callback);
		}
		/* find the video decoder */
		codec = avcodec_find_decoder(AV_CODEC_ID_HEVC);
		if (!codec) {
			avlog("Codec not found");
			ret = kErrorCode_FFmpeg_Error;
			break;
		}

		parser_ctx = av_parser_init(codec->id);
		if (!parser_ctx) {
			avlog("parser not found");
			ret = kErrorCode_FFmpeg_Error;
			break;
		}

		dec_ctx = avcodec_alloc_context3(codec);
		if (useCore == 0) {
			int cores = emscripten_num_logical_cores();
			if (cores > 5) {
				dec_ctx->thread_count = 4;
			} else if (cores == 1) {
				dec_ctx->thread_count = 1;
			} else {
				dec_ctx->thread_count = cores - 1;
			}
		} else {
			dec_ctx->thread_count = useCore;
		}
   	dec_ctx->thread_type = FF_THREAD_FRAME;
		if (!dec_ctx) {
			avlog("Could not allocate video codec context");
			ret = kErrorCode_FFmpeg_Error;
			break;
		}

		if (avcodec_open2(dec_ctx, codec, NULL) < 0) {
			avlog("Could not open codec");
			ret = kErrorCode_FFmpeg_Error;
			break;
		}

		frame = av_frame_alloc();
		if (!frame) {
			avlog("Could not allocate video frame");
			ret = kErrorCode_FFmpeg_Error;
			break;
		}
		// frame->format = AV_PIX_FMT_YUV420P;

		outFrame = av_frame_alloc();
		if (!outFrame) {
			avlog("Could not allocate video frame\n");
			ret = kErrorCode_FFmpeg_Error;
			break;
		}

		decoder_callback = callback;

	} while (0);
	avlog("Decoder initialized %d.", ret);
	return ret;
}

ErrorCode decode_buffer(uint8_t* buffer, size_t data_size, int64_t pts) {
	ErrorCode ret = kErrorCode_Success;
	AVPacket pkt;

	avlog("收到 buffer, %d", data_size);
	av_init_packet(&pkt);
	while (data_size > 0) {
		int size = av_parser_parse2(parser_ctx, dec_ctx, &pkt.data, &pkt.size,
			buffer, data_size, pts, AV_NOPTS_VALUE, 0);
		// avlog("使用size, %d", size);
		avlog("AVPacket, size: %d, flags: %d", pkt.size, pkt.flags);
		if (size < 0) {
			avlog("Error while parsing");
			ret = kErrorCode_FFmpeg_Error;
			break;
		}
		buffer += size;
		data_size -= size;
		pkt.pts = parser_ctx->pts;
		// avlog("pkt pts %d ", pkt.pts);
		if (pkt.size) {
			avlog("pkt parser_ctx %d, %d ", parser_ctx->flags, parser_ctx->pict_type);
			ret = decode_packet(dec_ctx, frame, &pkt);
			if (ret != kErrorCode_Success) {
                break;
            }
			av_packet_unref(&pkt);
		}
	}
	return ret;
}

void flush_decoder() {
	avcodec_flush_buffers(dec_ctx);
	av_parser_close(parser_ctx);
	parser_ctx = av_parser_init(codec->id);
	return;
}

ErrorCode close_decoder() {
	ErrorCode ret = kErrorCode_Success;

	do {
		if (parser_ctx != NULL) {
			av_parser_close(parser_ctx);
			avlog("Video codec context closed.");
		}
		if (dec_ctx != NULL) {
			avcodec_free_context(&dec_ctx);
			avlog("Video codec context closed.");
		}
		if (frame != NULL) {
			av_frame_free(&frame);
		}

		if (outFrame != NULL) {
			av_frame_free(&outFrame);
		}
		avlog("All buffer released.");
	} while (0);

	return ret;
}