/*
 * @Author: SHEN
 * @Date: 2020-01-03 09:30:13
 * @Last Modified by: SHEN
 * @Last Modified time: 2020-01-03 10:56:14
 */
'use strict'
const path = require('path')
const config = require('./config')

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