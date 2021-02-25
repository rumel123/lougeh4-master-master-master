const randomString = require('randomstring')
const makeProducts = require('./makeValProduct')

const makeProduct = makeProducts({randomString})


const services = Object.freeze({
    makeProduct
})

module.exports = services
module.exports = makeProduct
