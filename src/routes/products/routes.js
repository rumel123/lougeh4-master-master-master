const {createData,readDC,fetchedData} = require('../../controllers/products/app')

const route = ({router,makeExpressCallback}) => {
    //insert Deliveries 
    router.post('/products/add/',makeExpressCallback(createData))
    //fetch Delivery_code
    router.get('/products/delivery-code/',makeExpressCallback(readDC))
    //fetch All product
    router.get('/products/',makeExpressCallback(fetchedData))
    //fetch product with id
    router.get('/products/:id',makeExpressCallback(fetchedData))

    return router
}
module.exports = route