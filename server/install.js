'use strict'

// 创建队列
// 将文件夹加入队列
// 轮询队列，将图片生成缩略图，子文件夹加入队列

const path = require('path')

const config = require('./config')
const ls = require('./ls')
const getThumbnails = require('./getThumbnails')

let EventManager = {
  list: [],
  add (task) {
    task instanceof Function && this.list.push(task)
  },
  start () {
    let index = 0
    let next = () => {
      let task = this.list[index++]
      if (!task) return this.end()
      task instanceof Function && task(next)
    }
    next()
  },
  end () {
    console.log('Done!')
  }
}

function recursion (folder, next) {
  console.log('进入目录：%s', path.resolve(config.root, folder))
  ls(folder).reverse().forEach(item => {
    if (item.type === 'folder') {
      console.log('发现目录：%s', path.resolve(config.root, folder, item.name))
      EventManager.add(function (next) {
        recursion(item.name, next)
      })
    } else {
      console.log('发现图片：%s', path.resolve(config.root, folder, item.name))
      let origin = path.resolve(config.root, folder, item.name)
      let thumbnails = path.resolve(config.thumbnails, folder, item.name)
      EventManager.add(function (next) {
        getThumbnails(origin, thumbnails, next)
      })
    }
  })
  next()
}

EventManager.add(function (next) {
  recursion('', next)
})
EventManager.start()
