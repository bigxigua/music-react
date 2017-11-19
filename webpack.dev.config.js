const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './app/index.jsx',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
    path: path.join(__dirname, 'dist')
  },
  // resolve: {
  //   extensions: ['','js','json'],//文件扩展名，预定义可不必写扩展名
  //   alias: {
  //     // filename: 'path'
  //   }
  // },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: ['jsx-loader', 'babel-loader']
    }, {
      test: /\.less$/,
      exclude: /^node_modules$/,
      loaders: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.css$/,
      exclude: /^node_modules$/,
      loaders: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    //分离提取css
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './app/index.html', //html模板路径
      hash: false
    })
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: 3002,
    compress: true //是否启用gzip压缩
  }
}