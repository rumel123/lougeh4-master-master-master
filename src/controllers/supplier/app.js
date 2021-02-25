const {insertSuppliers,viewAllSuppliers,updateSupplier} = require('../../use-case/supplier/app')

const createDatas = require('./createSupplier')
const readDatas = require('./readSupplier')
const updateDatas = require('./updatedSupplier')
//attched here the usecases and manipulate the data from the function
const createData = createDatas({insertSuppliers})
const readData = readDatas({viewAllSuppliers})
const updateData = updateDatas({updateSupplier})

const services = Object.freeze({
createData,
readData,
updateData
})

module.exports = services
module.exports = {createData,readData,updateData}
