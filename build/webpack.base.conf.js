/*
 * @Author: SHEN
 * @Date: 2020-01-01 15:14:31
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-01-13 10:21:25
 */
'use strict'
const path = require('path')
const utils = require('./utils')
const HtmlWebPackPlugin = require("html-webpack-plugin")

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
      '@': path.resolve(__dirname, '../src'),
      '@components':path.resolve(__dirname,'../src/components'),
      '@views':path.resolve(__dirname,'../src/views'),
      '@utils':path.resolve(__dirname,'../src/utils'),
      'assets':path.resolve(__dirname,'../src/assets')
    }
  },
  module: {
    rules: [
      {
				test: /\.tsx?$/,
				use: [
					{
						loader: 'babel-loader',
					},
					{
						loader: 'ts-loader',
					}
				],
				include: path.resolve(__dirname, "../src/"),
			},
      {
        test: /\.css|\.less$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              importLoaders: 1,
            },
          }
        ]
      },
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
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      }
    ]
  },
  plugins: [
  ]
};