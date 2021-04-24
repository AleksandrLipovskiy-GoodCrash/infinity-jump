const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    open: false,
    compress: true,
    hot: false,
    port: 8080,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
