const {reduceDatas,readOrders} = require('../../controllers/orders/app') 

const route = ({router,makeExpressCallback}) => {
    //configure route and attached callbacks with controller

    //Update the stocks
    router.post('/orders/',makeExpressCallback(reduceDatas)) 
    //fetch Order details
    router.get('/orders/product',makeExpressCallback(readOrders)) 
    //fetch Order details with id
    router.get('/orders/product/:id',makeExpressCallback(readOrders))
    return router
}

module.exports = route