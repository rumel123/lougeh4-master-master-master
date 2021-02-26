const {fetchProducts,addOrder,fetchOrder} = require('../../use-case/orders/app')
const fetchControlls = require('./fetchControlls')
const postControlls = require('./postControlls')
const fetchOrdersControll = require('./fetchOrderControlls')

const fetchControll = fetchControlls({fetchProducts})
const postControll = postControlls({addOrder})
const fetchOrderControll = fetchOrdersControll({fetchOrder})

const services = Object.freeze({
    fetchControll,postControll,fetchOrderControll
})

module.exports = services
module.exports = {fetchControll,postControll,fetchOrderControll}
