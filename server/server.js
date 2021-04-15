const path = require('path')
const express = require('express')
const celebPhotosroutes = require('./routes/celebPhotosRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', celebPhotosroutes)

module.exports = server
