const pg = require('pg')
const dotenv = require('dotenv')

//import connection with the pg and dotenv
const connection = require('./connection')
const connections = connection({pg,dotenv})

const services = Object.freeze({
    connections
})

module.exports = services
module.exports = {connections}