const {insertData,viewData} = require('../../controllers/products/app')

const route = ({router,makeExpressCallback,decrypt,middlewares}) => {
    //configure route and attached callbacks with controller
    //add Products
    router.post('/products/insert/',middlewares,decrypt, makeExpressCallback(insertData))
    //fetch products
    router.get('/products/',middlewares,decrypt, makeExpressCallback(viewData))
    router.get('/products/:id',middlewares,decrypt, makeExpressCallback(viewData))
    return router
}

module.exports = route