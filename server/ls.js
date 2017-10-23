'use strict'

const fs = require('fs')
const path = require('path')
const imageinfo = require('imageinfo')
const config = require('./config')

module.exports = function (folder) {
  let files = fs.readdirSync(path.resolve(config.root, folder))
  return files.map((item) => {
    let stat = fs.statSync(path.resolve(config.root, folder, item))
    if (stat.isDirectory()) {
      return {
        name: item,
        type: 'folder',
        path: path.join(folder, item)
      }
    } else {
      let info = imageinfo(fs.readFileSync(path.resolve(config.root, folder, item)))
      if (info.type) {
        return {
          name: item,
          type: info.type,
          thumbnails: path.join('/', config.thumbnails, folder, item),
          path: path.join('/', config.image, folder, item)
        }
      }
    }
  }).filter(item => item).sort((a, b) => {
    if (a.type === 'folder') {
      return -1
    } else if (b.type === 'folder') {
      return 1
    } else {
      return 0
    }
  })
}
