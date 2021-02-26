const query = require('../../data-access/connection/orders/app')
const OrdersValidation = require('../../entities/orders/app')

const fetchProduct = require('./fetchProducts')
const addOrders = require('./addOrders')
const fetchOrders = require('./fetchOrders')

const fetchProducts = fetchProduct({query})
const fetchOrder = fetchOrders({query})
const addOrder = addOrders({query,OrdersValidation})

const services = Object.freeze({
    fetchProducts,addOrder,fetchOrder
})

module.exports = services
module.exports = {fetchProducts,addOrder,fetchOrder}
