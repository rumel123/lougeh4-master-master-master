const  postSuppliers  = require('../../entities/supplier/app')
const query = require('../../data-access/connection/supplier/app')

const insertSupplier = require('./insertSupplier')
const viewAllSupplier = require('./viewSupplier') 


const insertSuppliers = insertSupplier({postSuppliers,query}) 
const viewAllSuppliers = viewAllSupplier({query}) 

const services =  Object.freeze({
    insertSuppliers,
    viewAllSuppliers
    })
    
    module.exports = services
    module.exports = {insertSuppliers,viewAllSuppliers}