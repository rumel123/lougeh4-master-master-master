const {createData,readData} = require('../../controllers/supplier/app')

const route = ({router,makeExpressCallback}) => {
    //configure route and attached callbacks with controller
    router.get('/supplier',makeExpressCallback(readData))
    //fetching with supplier id
    router.get('/supplier/:id',makeExpressCallback(readData))
    //create supplier
    router.post('/supplier',makeExpressCallback(createData))

    return router
}

module.exports = route