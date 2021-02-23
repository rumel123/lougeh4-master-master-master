const express = require('express')
const  {encrypt,decrypt,tokens}  = require('../../function/app')  
const { middlewares } = require('../../middleware/app')
const router = express.Router()
const makeExpressCallback = require('../../express-callback/app')
const route = require('./routes')
//import router and callback function
const routes = route({router,makeExpressCallback,middlewares,decrypt,encrypt})


const services = Object.freeze({
    routes
})

module.exports = services
module.exports = routes