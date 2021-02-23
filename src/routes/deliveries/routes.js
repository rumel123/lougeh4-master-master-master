const {addData,readData,readDataPrm} = require('../../controllers/deliveries/app')

const route = ({router,makeExpressCallback}) => {
    //insert Deliveries
    router.post('/deliveries/',makeExpressCallback(addData))
    //fetch all deliveries
    router.get('/deliveries/fetch/',makeExpressCallback(readData))
    //fetch deliveries if have id
    router.get('/deliveries/fetch/:id',makeExpressCallback(readData))
    //fetch deliveries with the barcode
    router.post('/deliveries/fetch/code/',makeExpressCallback(readDataPrm))

    return router
}
module.exports = route