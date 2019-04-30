const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = env => {
  console.log(env);
  return webpackMerge(commonConfig);
};
