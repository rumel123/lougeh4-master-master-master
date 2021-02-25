const {addProduct,viewProduct} = require('../../use-case/products/app')

const insertDatas = require('./insertCont')
const viewDatas = require('./viewCont')

const insertData = insertDatas({addProduct})
const viewData = viewDatas({viewProduct})

const services = Object.freeze({
    insertData,viewData
    })
    
    module.exports = services
    module.exports = {insertData,viewData}
    