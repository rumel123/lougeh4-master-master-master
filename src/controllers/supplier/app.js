const {insertSuppliers,viewAllSuppliers} = require('../../use-case/supplier/app')

const createDatas = require('./createSupplier')
const readDatas = require('./readSupplier')
//attched here the usecases and manipulate the data from the function
const createData = createDatas({insertSuppliers})
const readData = readDatas({viewAllSuppliers})

const services = Object.freeze({
createData,
readData
})

module.exports = services
module.exports = {createData,readData}
