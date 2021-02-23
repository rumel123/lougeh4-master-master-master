const findPrinter = ({ escpos }) => {
    return async function selects(info) {
      return escpos.USB.findPrinter();
      // return escpos.USB;
    };
  };
  
  module.exports = findPrinter;