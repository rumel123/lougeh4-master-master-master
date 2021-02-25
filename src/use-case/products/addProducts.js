const addProducts = ({ makeProduct, query }) => {
  return async function post(infos) {
    const info = makeProduct(infos);
    const data = {
      Supplier: info.GetSupplier(),
      Date_Received: info.GetDate_Received(),
      rand: info.GetRand(),
    };

    const DataArray = infos.products;

    for (let i = 0; i < DataArray.length; i++) {
      const product_barcode = DataArray[i].product_barcode;
      const product_name = DataArray[i].product_name;
      const product_description = DataArray[i].product_description;
      const cost_unit = DataArray[i].cost_unit;
      const price = DataArray[i].price;
      const quantity = DataArray[i].quantity;
      const Expiry_date = DataArray[i].Expiry_date;
        //validate if data Array is empty
      if (!product_barcode) { throw new Error(`Please fill in the blank!`) }
      if (!product_name) { throw new Error(`Please fill in the blank!`) }
      if (!product_description) { throw new Error(`Please fill in the blank!`) }
      if (!cost_unit) { throw new Error(`Please fill in the blank!`) }
      if (!price) { throw new Error(`Please fill in the blank!`) }
      if (!quantity) { throw new Error(`Please fill in the blank!`) }
      if (!Expiry_date) { throw new Error(`Please fill in the blank!`) }
        //check if item is exist
      const datas = {
        product_barcode:product_barcode,
        product_name:product_name,
        product_description:product_description,
        cost_unit:cost_unit,
        price:price,
        quantity:quantity,
        Expiry_date:Expiry_date,
        delivery_code:data.rand 
      }   
        //if exist, add only the quantity create new if not exist
    const resINS = await query.insertProducts(datas)
    }
    //record delivery
    const res = await query.insertDeliveries({data}) 
     let message = `  Roger . We have A problem!!`
            if(res) message = `Product Add success!`        
            return message 
};
};

module.exports = addProducts;
