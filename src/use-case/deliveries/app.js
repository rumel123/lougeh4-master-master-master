const {valMakeDeliveries,findDataBC} = require('../../entities/deliveries/app')
const query = require('../../data-access/connection/deliveries/app')

const addDelivery = require('./addDelivery')
const fetchDelivery = require('./fetchAllDeliveries')  
const fetchItemDelivery = require('./fetchItemDelivery') 

const addDeliver = addDelivery({valMakeDeliveries,query})
const fetchDeliver = fetchDelivery({query})  
const fetchItemDeliver  = fetchItemDelivery({query}) 

const services = Object.freeze({
    addDeliver,fetchDeliver,fetchItemDeliver
})

module.exports = services
module.exports = {addDeliver,fetchDeliver,fetchItemDeliver}