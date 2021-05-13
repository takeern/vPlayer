## step

1. 编译获得 wasm 文件，放置到 lib 文件夹下。
2. 本地调试，将 nginx 8083 wasm 文件访问指向 /lib 文件夹
3. 线上部署时，只需要将 html 资源访问端口指向 /build，wasm 文件指向 lib
4. 修改 playurl 实际播放地址。 /pages/webUI.ts


参考配置
``` javascript
server {
        listen       8083 ;

        location / {
            root  pathto/build/web/;
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
            add_header Cross-Origin-Opener-Policy 'same-origin';
            add_header Cross-Origin-Embedder-Policy 'require-corp';

            if ($request_method = 'OPTIONS') {
                return 204;
            }
            autoindex on;    
        }

        location /a/b/c/d/e/ {
            autoindex on;    
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';

            alias pathto/build/web/;
            index  index.html index.htm;
        }

        location ~* \.(wasm)$ {
            root  pathto/lib/;
            add_header Access-Control-Allow-Origin *;
            add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
            add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
            add_header Cross-Origin-Opener-Policy 'same-origin';
            add_header Cross-Origin-Embedder-Policy 'require-corp';

            if ($request_method = 'OPTIONS') {
                return 204;
            }
            autoindex on; 
        }
    }
```