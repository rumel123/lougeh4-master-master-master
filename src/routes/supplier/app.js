const express = require('express')
const router = express.Router()
const makeExpressCallback = require('../../express-callback/app')
const route = require('./routes')
//import router and callback function
const routes = route({router,makeExpressCallback})


const services = Object.freeze({
    routes
})

module.exports = services
module.exports = routes