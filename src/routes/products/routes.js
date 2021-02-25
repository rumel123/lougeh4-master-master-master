const {insertData,viewData} = require('../../controllers/products/app')

const route = ({router,makeExpressCallback,decrypt,middlewares}) => {
    //configure route and attached callbacks with controller
    //add Products
    router.post('/products/insert/', makeExpressCallback(insertData))
    //fetch products
    router.get('/products/', makeExpressCallback(viewData))
    router.get('/products/:id', makeExpressCallback(viewData))
    return router
}

module.exports = route