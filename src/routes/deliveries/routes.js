const {addData,readData,readDataPrm} = require('../../controllers/deliveries/app')

const route = ({router,makeExpressCallback,middlewares,decrypt}) => {
    //insert Deliveries
    router.post('/deliveries/',middlewares,decrypt,makeExpressCallback(addData))
    //fetch all deliveries
    router.get('/deliveries/fetch/',middlewares,decrypt,makeExpressCallback(readData))
    //fetch deliveries if have id
    router.get('/deliveries/fetch/:id',middlewares,decrypt,makeExpressCallback(readData))
    //fetch deliveries with the barcode
    router.get('/deliveries/items/:id',middlewares,decrypt,makeExpressCallback(readDataPrm))

    return router
}
module.exports = route