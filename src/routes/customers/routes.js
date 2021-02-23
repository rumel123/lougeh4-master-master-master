const {createData,readData} = require('../../controllers/customers/app')

const route = ({router,makeExpressCallback}) => {
    //configure route and attached callbacks with controller
    //fetching customer
    router.get('/customers/',makeExpressCallback(readData))
    router.get('/customers/:id',makeExpressCallback(readData))
    //add customer
    router.post('/customers/add/',makeExpressCallback(createData))

    return router
}

module.exports = route