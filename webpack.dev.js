 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   target: 'web',
   watch: true,
   cache: true,
   devServer: {
     port: 3000,
     open: true,
     liveReload: true,
     overlay: {
       warnings: true,
       errors: true,
     },
     historyApiFallback: true,
   },
});
