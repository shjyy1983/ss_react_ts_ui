/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:30:13
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-03-23 16:28:28
 */
'use strict'
const path = require('path')
const config = require('./config')
const packageConfig = require('../package.json')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 资源文件的存放路径
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

// 获取绝对路径
exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

// 生成css、sass、scss等各种用来编写样式的语言所对应的loader配置
exports.cssLoaders = function (options) {
  options = options || {}

  // css-loader配置
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // 生成各种loader配置，并且配置 mini-css-extract-plugin
  // 例如generateLoaders('less')，这里就会push一个less-loader
  // less-loader先将less编译成css，然后再由css-loader去处理css
  // 其他sass、scss等语言也是一样的过程
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // 提取 css 到单独文件的 loader
    if (options.extract) {
      return [MiniCssExtractPlugin.loader].concat(loaders)
    } else {
      // 无需提取样式则简单使用vue-style-loader配合各种样式loader去处理<style>里面的样式
      return ['style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  // 得到各种不同处理样式的语言所对应的loader
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
// 生成处理单独的.css、.sass、.scss等样式文件的规则
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}