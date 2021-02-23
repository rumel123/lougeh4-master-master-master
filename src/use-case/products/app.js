const DataSanitize = require('../../entities/products/app')
const query = require('../../data-access/connection/products/app')
const insertProducts = require('./addProducts')
const fetchDelCode = require('./fetch-DeliveryCode')
const fetchAllProduct = require('./fetchProduct')

const insertProduct = insertProducts({DataSanitize,query})
const fetchDeliveryCode = fetchDelCode({query})
const fetchProduct = fetchAllProduct({query})

const services = Object.freeze({
    insertProduct,fetchDeliveryCode,fetchProduct
})

 module.exports = services
 module.exports = {insertProduct,fetchDeliveryCode,fetchProduct}