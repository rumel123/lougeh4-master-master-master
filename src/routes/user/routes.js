const {regesterUser,removeUser,verifyLog,editUser}  = require('../../controllers/user/app')

const route = ({router,makeExpressCallback,decrypt,middlewares}) => {
    //login 
     router.post('/login/',middlewares,decrypt,makeExpressCallback(verifyLog))
    //create User
    router.post('/register/',middlewares,decrypt,makeExpressCallback(regesterUser))
    //remove User
    router.delete('/user/remove/:id',middlewares,decrypt,makeExpressCallback(removeUser))
    //change Password or User role
    router.patch('/admin/ChangeUser/:id',middlewares,decrypt,makeExpressCallback(editUser))

    return router
}

module.exports = route