const {fetchProducts,addOrder} = require('../../use-case/orders/app')
const fetchControlls = require('./fetchControlls')
const postControlls = require('./postControlls')

const fetchControll = fetchControlls({fetchProducts})
const postControll = postControlls({addOrder})

const services = Object.freeze({
    fetchControll,postControll
})

module.exports = services
module.exports = {fetchControll,postControll}
