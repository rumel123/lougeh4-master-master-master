const {fetchCustomers,insertCustomers} = require('../../use-case/customers/app')

const createDatas = require('./createData')
const readDatas = require('./readData')
//attched here the usecases and manipulate the data from the function
const createData = createDatas({insertCustomers})
const readData = readDatas({fetchCustomers})

const services = Object.freeze({
createData,
readData
})

module.exports = services
module.exports = {createData,readData}
