/** @jsx createElement */
import { createElement } from 'rax';
import { Root, Style, Script} from 'rax-document';

export default function () {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover" />
        <title>实验室</title>
        <Style />
      </head>
      <body style={{ margin: 0, height: '100vh' }}>
        {/* root container */}
        <Root />
        <Script crossorigin="anonymous" />
      </body>
    </html>
  );
}
