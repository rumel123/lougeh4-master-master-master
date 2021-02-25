const {createData,readData} = require('../../controllers/customers/app')

const route = ({router,makeExpressCallback,decrypt,middlewares}) => {
    //configure route and attached callbacks with controller
    //fetching customer
    router.get('/customers/',middlewares,decrypt,makeExpressCallback(readData))
    router.get('/customers/:id',middlewares,decrypt,makeExpressCallback(readData))
    //add customer
    router.post('/customers/add/',middlewares,decrypt,makeExpressCallback(createData))

    return router
}

module.exports = route