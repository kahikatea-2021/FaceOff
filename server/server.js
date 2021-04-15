const path = require('path')
const express = require('express')
const celebPhotosroutes = require('./routes/celebPhotosRoutes')
const studentRoute = require('./routes/students')


const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
server.use('/', celebPhotosroutes)
server.use('/students', studentRoute)
=======
server.use('/celebrities', celebPhotosroutes)
>>>>>>> 78b991b00e2571e8fceba0802d829869cdb31b04

module.exports = server
