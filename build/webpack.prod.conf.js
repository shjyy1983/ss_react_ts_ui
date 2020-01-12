/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:49:41
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-01-04 15:47:06
 */

'use strict'
const webpack = require('webpack')
const utils = require('./utils')
const path = require('path')
const config = require('./config') // 基本配置的参数
const baseWebpackConfig = require('./webpack.base.conf') // webpack基本配置文件（开发和生产环境公用部分）
const merge = require('webpack-merge') // webpack-merge是一个可以合并数组和对象的插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
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
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

//  如果开启了产品gzip压缩，则利用插件将构建后的产品文件进行压缩
if (config.build.productionGzip) {
  // 一个用于压缩的webpack插件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
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
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
