const express = require('express')
const router = express.Router()

const functions = require('../functions')

router.get('/', (req, res) => {
  functions.generateRandomId()
})

module.exports = router
