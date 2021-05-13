// const rawloader = require('raw-loader');
const path = require('path');
module.exports = ({onGetWebpackConfig, registerTask}) => {

  onGetWebpackConfig((config) => {
    config.module
      .rule('wasm')
      .test(/.txt?$/)
      .use('raw-loader')
      .loader(require.resolve('raw-loader'))
      .options({
      });
  });
}