const query = require('../../data-access/connection/orders/app')


const fetchProduct = require('./fetchProducts')
const addOrders = require('./addOrders')

const fetchProducts = fetchProduct({query})
const addOrder = addOrders({query})


const services = Object.freeze({
    fetchProducts,addOrder
})

module.exports = services
module.exports = {fetchProducts,addOrder}
