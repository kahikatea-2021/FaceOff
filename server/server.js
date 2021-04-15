const path = require('path')
const express = require('express')
<<<<<<< HEAD
const studentRouter = require('./routes/students')
=======
const celebPhotosroutes = require('./routes/celebPhotosRoutes')
>>>>>>> 5adb0f115f6e69b06932f3c12f481f051221dd11

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
server.use('/students', studentRouter)
=======
server.use('/', celebPhotosroutes)
>>>>>>> 5adb0f115f6e69b06932f3c12f481f051221dd11

module.exports = server
