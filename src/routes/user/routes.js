const {regesterUser,removeUser,verifyLog,editUser}  = require('../../controllers/user/app')

const route = ({router,makeExpressCallback,middlewares,decrypt,encrypt}) => {
    //login 
     router.post('/login/',makeExpressCallback(verifyLog))
    //create User
    router.post('/register/',makeExpressCallback(regesterUser))
    //remove User
    router.delete('/user/remove/:id',makeExpressCallback(removeUser))
    //change Password or User role
    router.patch('/admin/ChangeUser/:id',makeExpressCallback(editUser))

    return router
}

module.exports = route