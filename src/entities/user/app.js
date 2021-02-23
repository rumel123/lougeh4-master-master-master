const patchUser = require('./patchUser') 
const makeUser = require('./makeUser')  
const enterUser = require('./enterUser')
//validation
const patchUsers = patchUser({}) 
const makeUsers = makeUser({})  
const enterUsers = enterUser({})  

const services = Object.freeze({
    patchUsers,makeUsers,enterUsers
})

module.exports = services
module.exports = { patchUsers,makeUsers,enterUsers }
