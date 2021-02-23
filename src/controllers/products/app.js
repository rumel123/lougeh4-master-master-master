const {insertProduct,fetchDeliveryCode,fetchProduct} = require('../../use-case/products/app')

const createDatas = require('./createController') 
const fetchData = require('./fetchData')
const readCode = require('./readCode.js')
//attched here the usecases and manipulate the data from the function
const createData = createDatas({insertProduct}) 
const readDC = readCode({fetchDeliveryCode})
const fetchedData = fetchData({fetchProduct})
const services = Object.freeze({
createData,readDC
})

module.exports = services
module.exports = {createData,readDC,fetchedData}
