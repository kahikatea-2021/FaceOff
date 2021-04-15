// const environment = process.env.NODE_ENV || 'development'
// const config = require('./knexfile')[environment]
// const connection = require('knex')(config)
// const { ModuleFilenameHelpers } = require("webpack")

const { default: celebrities } = require('./celebrities')

function generateRandomId() {
    console.log(celebrities.length)
    return Math.floor(Math.random() * 1500)

}


module.export = { generateRandomId }