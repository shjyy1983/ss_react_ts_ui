/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:49:41
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-03-23 17:18:47
 */

'use strict'
const webpack = require('webpack')
const utils = require('./utils')
const path = require('path')
const config = require('./config') // 基本配置的参数
const baseWebpackConfig = require('./webpack.base.conf') // webpack基本配置文件（开发和生产环境公用部分）
const merge = require('webpack-merge') // webpack-merge是一个可以合并数组和对象的插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // uglifyJs 混淆js插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // optimize-css-assets-webpack-plugin，用于优化和最小化css资源
const CopyWebpackPlugin = require('copy-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  entry: {
    app: ["./src/index.tsx"]
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'ss_react_ts_ui.min.js',
		publicPath: "../dist/",
    library: 'ss_react_ts_ui', // 指定的就是你使用require时的模块名
    libraryTarget: 'umd', // libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    // umdNamedDefine: true, // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
		libraryExport: 'default'
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.productionSourceMap, usePostCSS: true, extract: true })
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
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
  ],
	externals: {
		react: 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom'
	}
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
