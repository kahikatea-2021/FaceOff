const request = require('supertest')
const server = require('../server')
const util = require('../util')
jest.mock('../util')

test(' Get /students return a json list of students', () => {
    const data = ['hello.jpg', 'world.png', 'the-man.jpg']
    util.readFolderContent.mockImplementation(() => {
        return Promise.resolve(data)
    })

    return request(server).get('/students').expect('Content-Type', /json/)
        .expect(200).then(res => {
            expect(res.body.students).toHaveLength(data.length)
            expect(res.body.students[1].path).toMatch(data[1])

        })
})