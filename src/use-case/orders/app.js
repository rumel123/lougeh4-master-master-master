const valStock = require('../../entities/orders/app')
const query = require('../../data-access/connection/orders/app')
const randomstring = require('randomstring')

const reduceStocks = require('./stocksSub')
const fetchProdOrders = require('./fetchProdOrders')
const reduceStock = reduceStocks({valStock,query,randomstring})
const fetchProd = fetchProdOrders({query})
const services = Object.freeze({
    reduceStock,fetchProd
})

module.exports = services
module.exports = {reduceStock,fetchProd}