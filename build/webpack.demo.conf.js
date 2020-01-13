/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:31:33
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-01-13 15:23:55
 */
'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const path = require('path')
const config = require('./config') // 基本配置的参数
const baseWebpackConfig = require('./webpack.base.conf') // webpack基本配置文件（开发和生产环境公用部分）
const merge = require('webpack-merge') // webpack-merge是一个可以合并数组和对象的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const demoWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    app: ["./src/app.tsx"]
  },
  devtool: config.dev.devtool,
  output: {
    path: path.resolve(__dirname, '../dist_demo'),
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[id].[chunkhash].js')
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('./config/prod.env')
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
      inject: 'body'
    })
  ]
})
module.exports = demoWebpackConfig

