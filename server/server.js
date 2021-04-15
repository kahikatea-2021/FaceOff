const path = require('path')
const express = require('express')
const celebPhotosroutes = require('./routes/celebPhotosRoutes')
const studentRoute = require('./routes/students')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', celebPhotosroutes)
server.use('/students', studentRoute)

module.exports = server
