const randomString = require('randomstring')
const OrdersValidations = require('./orderVal')

const OrdersValidation = OrdersValidations({randomString})


const services = Object.freeze({
    OrdersValidation
})

module.exports = services
module.exports = OrdersValidation
