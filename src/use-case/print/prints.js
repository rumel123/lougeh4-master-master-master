const printHere = ({escpos,print}) => {
    return async function posts(info){
        //fetch data here from receipt
        const data = print(info)
        //as based on entity, data have 2 value the header and qr code
        //must export all header here, so you can make a dummy constData
        //const header = data.getHeader

        ////initiate printer
        const device = new escpos.USB();
        //encoding
        const options = { encoding: "GB18030"  };
        //ready printer?
        
    const printer = new escpos.Printer(device, options);

    //must conver array to jsonStringfy
    //const stringJSON = JSON.stringify("qr code"); 

    await device.open(function() {
        printer
          .font("b")
          .align("ct")
          .style("bu")
          .size(2, 2)
          .text(/*must put the header of the data */)
          .font("a")
          .align("ct")
          .style("bu")
          .size(1, 1)
          .text(/*others? dr? transaction code? customer */)
          .text(/*list of items na naka table */)
          .text(/**transaction number? */)
          .text(/**date of transaction */)
          .qrimage(stringJSON, { type: "png", mode: "dhdw", size: 3 }, function(
            err
          ) {
            this.cut();
            this.close();
          });
      });
  
      const msg = "Printed successfully.";
      return msg;
    
    }
}
module.exports = printHere;