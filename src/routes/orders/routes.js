const {fetchControll,postControll,fetchOrderControll} = require('../../controllers/orders/app') 

const route = ({router,makeExpressCallback,decrypt,middlewares})=> {
    //configure route and attached callbacks with controller
    //fetch all data

    router.get('/order/items/',middlewares,decrypt,makeExpressCallback(fetchControll))

    router.get('/order/items/:id',middlewares,decrypt,makeExpressCallback(fetchControll))

    //insert all items
    router.post('/order/insert/',middlewares,decrypt,makeExpressCallback(postControll))
    
    //fetchOrders
    router.get('/order/',makeExpressCallback(fetchOrderControll))
    router.get('/order/:id',makeExpressCallback(fetchOrderControll))
    return router
}

module.exports = route