const postcustomer = require('./postCustomer') 
const getCustomerName = require('./getCustomerName') 
//validation
const postcustomers = postcustomer({}) 
const getCustomerNames = getCustomerName({}) 

const services = Object.freeze({
    postcustomers,getCustomerNames
})

module.exports = services
module.exports = { postcustomers,getCustomerNames }
