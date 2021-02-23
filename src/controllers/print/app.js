const {findPrinters,printHeres} = require('../../use-case/print/app')

const findingPrinters =require('./findPrinter')
const nowprint =require('./print')

const findPrinter = findingPrinters({findPrinters})
const printnow = nowprint({printHeres})

const services = Object.freeze({
    findPrinter,
    printnow
  });
  
  module.exports = services;
  module.exports = {
    findPrinter,
    printnow
  };
