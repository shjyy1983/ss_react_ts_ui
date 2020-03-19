/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:31:33
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-01-22 15:07:42
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
  devtool: false, // config.dev.devtool, // 这个会巨量增加包大小，设置为 false 去掉调试信息
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


//  如果开启了产品gzip压缩，则利用插件将构建后的产品文件进行压缩
if (config.build.productionGzip) {
  // 一个用于压缩的webpack插件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  demoWebpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

// 如果启动了report，则通过插件给出webpack构建打包后的产品文件分析报告
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  demoWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = demoWebpackConfig

