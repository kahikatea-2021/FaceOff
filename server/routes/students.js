const { readFolderContent, capitalize } = require('../util')

const router = require('express').Router()

router.get('/', (_, res) => {

    readFolderContent().then(files => {
        console.log('heheheh')
        let id = 1
        const students = files.map(file => {
            const name = file.split('.')[0]
            return {
                id: id++,
                name: capitalize(name),
                path: `/images/${file}`
            }
        })
        res.json({
            students: students
        })
    })
})

module.exports = router