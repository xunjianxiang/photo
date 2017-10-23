'use strict'

const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()

const config = require('./config')
const ls = require('./ls')
const getThumbnails = require('./getThumbnails')

require('colors')

app.use(compression({
  level: 9
}))

// 静态文件
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.get('/wall', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.get('/wall/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})

app.get('/dist/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist', req.params[0]))
})

app.get('/images/*', function (req, res) {
  res.sendFile(path.resolve(config.root, req.params[0]))
})

app.get('/thumbnails/*', function (req, res) {
  let origin = path.resolve(config.root, req.params[0])
  let thumbnails = path.resolve(config.thumbnails, req.params[0])
  getThumbnails(origin, thumbnails, function () {
    res.sendFile(thumbnails)
  })
})

// 目录请求
app.get('/api/ls/*', function (req, res) {
  res.send(ls(req.params[0]))
})

app.listen(3000)
