const celebrities = require('./celebrities')

function generateRandomId () {
  const min = Math.ceil(1)
  const max = Math.floor(227)
  return Math.floor(Math.random() * (max - min) + min)
}

function getCelebById () {
  const id = generateRandomId()
  const celebrity = celebrities[id]
  console.log(
    celebrity
  )
}

module.exports = { generateRandomId }
