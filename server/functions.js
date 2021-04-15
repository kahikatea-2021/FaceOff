function generateRandomId () {
  const min = Math.ceil(1)
  const max = Math.floor(235)
  const x = Math.floor(Math.random() * (max - min) + min)
  console.log(x)
}

module.exports = { generateRandomId }
