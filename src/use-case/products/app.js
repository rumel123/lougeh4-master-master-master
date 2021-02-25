
const makeProduct = require('../../entities/products/app')
const query = require('../../data-access/connection/products/app')
const addProducts = require('./addProducts')
const viewProducts = require('./selectProducts')

const addProduct = addProducts({makeProduct,query}) 
const viewProduct = viewProducts({query}) 


const services = Object.freeze({
    addProduct,viewProduct
    })
    
    module.exports = services
    module.exports = {addProduct,viewProduct}
    