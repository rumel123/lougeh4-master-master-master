const { patchUsers,makeUsers,enterUsers } = require('../../entities/user/app')
const { encrypt,decrypt,tokens } = require('../../function/app')
const query = require('../../data-access/connection/user/app')

const createUser = require('./createUser')
const readUser = require('./readUser')
const updateUser = require('./updateUser')
const deleteUser = require('./deleteUser')

const createUsers = createUser({makeUsers,query})
const readUsers = readUser({enterUsers,query,encrypt})
const updateUsers = updateUser({patchUsers,query})
const deleteUsers = deleteUser({query}) 

const services = Object.freeze({
    createUsers,readUsers,updateUsers,deleteUsers
})

module.exports = services
module.exports = {createUsers,readUsers,updateUsers,deleteUsers}