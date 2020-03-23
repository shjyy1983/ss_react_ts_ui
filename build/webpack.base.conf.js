/*
 * @Author: SHEN
 * @Date: 2020-01-01 15:14:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-03-23 17:10:05
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // 基础目录，绝对路径，用于从配置中解析入口起点，以下配置为项目根目录
  context: path.resolve(__dirname, '..'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      '@': utils.resolve('src'),
      '@components':utils.resolve('src/components'),
      '@views':utils.resolve('src/views'),
      '@demos':utils.resolve('src/demos'),
      '@utils':utils.resolve('src/utils'),
      'assets':utils.resolve('src/assets')
    }
  },
  performance: {
    maxEntrypointSize: 500 * 1024, // 入口文件超过 500KB 进行警告提示
    maxAssetSize: 500 * 1024 // 资源文件超过 500KB 进行警告提示
  },
  module: {
    rules: [
      {
				test: /\.tsx?$/,
				use: [
          'babel-loader', 'ts-loader'
        ],
        include: path.resolve(__dirname, "../src/"),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, "../src/")
      },
      // {
      //   test: /\.css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     'style-loader', 'css-loader', 'postcss-loader', 'less-loader'
      //   ]
      // },
      // 对图片资源文件使用url-loader
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 20 * 1024, // 小于10K的图片转成base64编码的dataURL字符串写到代码中
          name: utils.assetsPath('img/[name].[hash:7].[ext]') // 其他的图片转移到静态资源文件夹，hash:7 代表 7 位数的 hash
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'ss_react_ts_ui.css',
      chunkFilename: 'ss_react_ts_ui.css'
    })
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};