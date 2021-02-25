const postSupplier = require('./createSupplier') 
const patchSuppliers  = require('./patchSupplier')

//validation
const postSuppliers = postSupplier({})  
const patchSupplier= patchSuppliers({}) 

const services = Object.freeze({
    postSuppliers,patchSupplier
})

module.exports = services
module.exports = { postSuppliers,patchSupplier}
