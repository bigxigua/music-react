const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: './app/index.jsx'
  },
  output: {
    filename: 'bundle.[chunkhash:8].js',
    publicPath: '/dist/',
    path: path.join(__dirname, '/server/public/dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {}
  },
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
      test: /\.scss$/,
      exclude: /^node_modules$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192',
    }, {
      test: /\.css$/,
      exclude: /^node_modules$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader']
      })
    }, {
      test: /\.(woff|eot|ttf|svg|gif)$/,
      loader: 'file-loader?name=iconfont/[path][name].[ext]',
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    //分类css
    new ExtractTextPlugin('[name].[chunkhash:8].css'),
    //根据模板自动生成html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './app/index.html'),
      inject: true, //是否自动在模板文件添加生成的js文件链接
      title: 'fuck you',
      minify: {
        removeComments: true //是否在压缩时去除注释
      }
    }),
    //dll
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    }),
    new AddAssetHtmlPlugin({ 
      filepath: path.join(__dirname, '/server/public/dist/vendor.js'),
      includeSourcemap: false
    })
  ]
};