const escpos = require('escpos')
const { print } = require('../../entities/print/app')

const findPrinter = require('./find-printer')
const printHere = require('./prints')


const findPrinters = findPrinter({escpos})
const printHeres = printHere({escpos,print})

const services = Object.freeze({
    findPrinters,printHeres
})

module.exports = services
module.exports = {findPrinters,printHeres}