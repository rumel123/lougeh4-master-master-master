 const {reduceStock,fetchProd} = require('../../use-case/orders/app')

 const reduceData = require('./reducestock')
 const readOrder = require('./readData')
 const reduceDatas = reduceData({reduceStock})
 const readOrders = readOrder({fetchProd})

 const services = Object.freeze({
    reduceDatas,readOrders
})

module.exports = services
module.exports = {reduceDatas,readOrders}
