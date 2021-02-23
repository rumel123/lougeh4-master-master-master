const {encrypt,decrypt,tokens,dateConverter}  = require('../../function/app') 
const createDeliveries = require('./createDeliveries')
const findDataWBarcodes = require('./findDataWBC')


const valMakeDeliveries = createDeliveries({dateConverter})
const findDataBC = findDataWBarcodes({}) 

const services = Object.freeze({
    valMakeDeliveries,findDataBC
})

module.exports = services
module.exports = {valMakeDeliveries,findDataBC}