const {fetchControll,postControll} = require('../../controllers/orders/app') 

const route = ({router,makeExpressCallback,decrypt,middlewares})=> {
    //configure route and attached callbacks with controller
    //fetch all data

    router.get('/order/items/',makeExpressCallback(fetchControll))

    router.get('/order/items/:id',makeExpressCallback(fetchControll))

    //insert all items
    router.post('/order/insert/',makeExpressCallback(postControll))
    
    return router
}

module.exports = route