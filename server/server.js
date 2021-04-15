const path = require('path')
const express = require('express')
const studentRouter = require('./routes/students')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/students', studentRouter)

module.exports = server
