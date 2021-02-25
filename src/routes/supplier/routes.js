const {createData,readData,updateData} = require('../../controllers/supplier/app')

const route = ({router,makeExpressCallback,decrypt,middlewares}) => {
    //configure route and attached callbacks with controller
    router.get('/supplier',middlewares,decrypt,makeExpressCallback(readData))
    //fetching with supplier id
    router.get('/supplier/:id',middlewares,decrypt,makeExpressCallback(readData))
    //create supplier
    router.post('/supplier',middlewares,decrypt,makeExpressCallback(createData))
    //update  Supplier Info
    router.patch('/supplier/info/:id',middlewares,decrypt,makeExpressCallback(updateData))    

    return router
}

module.exports = route