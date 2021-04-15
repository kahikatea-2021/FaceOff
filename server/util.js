const fs = require('fs')
const path = require('path')

function readFolderContent(dir = '/public/images') {
    return new Promise((resolve, reject) => {
        fs.readdir(path.join(__dirname, dir), (err, content) => {

            if (err) {
                reject('Cannot load the content of the folder')
                return
            }

            resolve(content)
        })
    })
}

function capitalize(input) {
    if (typeof input !== 'string') return ''
    return input.charAt(0).toUpperCase() + input.slice(1)
}

module.exports = {
    readFolderContent,
    capitalize
}