const { postcustomers,getCustomerNames } = require('../../entities/customers/app')
const query = require('../../data-access/connection/customers/app')

const fetchCustomer = require('./fetchCustomer')
const insertCustomer = require('./insertCustomer')

const fetchCustomers = fetchCustomer({query}) 
const insertCustomers = insertCustomer({postcustomers,query}) 

const services =  Object.freeze({
    fetchCustomers,
    insertCustomers
    })
    
    module.exports = services
    module.exports = {fetchCustomers,insertCustomers}