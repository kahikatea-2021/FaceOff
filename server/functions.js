// const request = require('superagent')

const celebData = require('./celebrities')

function generateRandomId () {
  const min = Math.ceil(1)
  const max = Math.floor(235)
  return Math.floor(Math.random() * (max - min) + min)
}

function getCelebrity () {
  const id = generateRandomId()
  return celebData[id]
}

function getCelebrityPhoto () {
  const randomCeleb = getCelebrity()
  const celebObjectId = randomCeleb.celebId
  const baseUrl = `http://celebritybucks.com/images/celebs/full/${celebObjectId}.jpg`
  return baseUrl

  //   return request.get(baseUrl)
//     .then(response => {
//       console.log(response.body)
//       return null
//     })
//     .catch(err => console.log(err))
}

module.exports = { generateRandomId, getCelebrity, getCelebrityPhoto }
