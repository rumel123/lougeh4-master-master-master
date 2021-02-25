const    { postSuppliers,patchSupplier} = require('../../entities/supplier/app')
const query = require('../../data-access/connection/supplier/app')

const insertSupplier = require('./insertSupplier')
const viewAllSupplier = require('./viewSupplier') 
const updateSuppliers = require('./updateSupplier')

const insertSuppliers = insertSupplier({postSuppliers,query}) 
const viewAllSuppliers = viewAllSupplier({query}) 
const updateSupplier = updateSuppliers({query,patchSupplier}) 

const services =  Object.freeze({
    insertSuppliers,
    viewAllSuppliers,
    updateSupplier
    })
    
    module.exports = services
    module.exports = {insertSuppliers,viewAllSuppliers,updateSupplier}