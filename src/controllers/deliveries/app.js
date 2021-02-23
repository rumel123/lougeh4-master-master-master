const {addDeliver,fetchDeliver,fetchOneItems} = require('../../use-case/deliveries/app')

const addDatas = require('./addDelivery')
const readDatas = require('./readData')
const readDataPrms = require('./readWithID')

const addData = addDatas({addDeliver})
const readData = readDatas({fetchDeliver})
const readDataPrm = readDataPrms({fetchOneItems})


const services = Object.freeze({
    addData,readData,readDataPrm
})

module.exports = services
module.exports = {addData,readData,readDataPrm}