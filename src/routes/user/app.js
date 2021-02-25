const express = require('express')
const router = express.Router()
const makeExpressCallback = require('../../express-callback/app')
const route = require('./routes')
const {encrypt,decrypt,tokens,dateConverter} = require('../../function/app')
const {middlewares} = require('../../middleware/app')
//import router and callback function
const routes = route({router,makeExpressCallback,decrypt,middlewares})


const services = Object.freeze({
    routes
})

module.exports = services
module.exports = routes