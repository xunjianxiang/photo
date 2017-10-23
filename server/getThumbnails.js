'use strict'

const fs = require('fs')
const fse = require('fs-extra')
const gm = require('gm')

module.exports = function (origin, thumbnails, callback) {
  let folder = thumbnails.slice(0, thumbnails.lastIndexOf('/'))
  fs.access(folder, error => {
    error && fse.mkdirsSync(folder)
    fs.access(thumbnails, function (error) {
      if (error) {
        console.log('缩略图 %s 正在生成...', thumbnails)
        gm(origin).resize(1920, 1920).autoOrient().write(thumbnails, error => {
          if (error) {
            console.log('缩略图 %s 生成失败！！！', thumbnails)
          } else {
            console.log('缩略图 %s 生成成功！！！', thumbnails)
            callback && callback()
          }
        })
      } else {
        console.log('缩略图 %s 已经生成。', thumbnails)
        callback && callback()
      }
    })
  })
}
