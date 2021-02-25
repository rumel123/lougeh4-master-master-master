const addOrders = ({ query, OrdersValidation }) => {
  return async function post(infos) {
    const info = OrdersValidation(infos);
    const ItemArray = infos.product_table;
    const Totals = infos.total_payment
    const data = {
      customer_name: info.Getcustomer(),
      customer_address: info.Getaddress(),
      contact_number: info.Getnumber(),
      Rand: info.GetRand(),
    }; 
    
    let date_ob = new Date();
    //return error if data is empty
    if (!ItemArray) throw new Error(`Please insert Your Product!`);

   for (let i = 0; i < ItemArray.length; i++) {
      const barcode = ItemArray[i].barcode;
      const Product_name = ItemArray[i].Product_name;
      const Quantity = ItemArray[i].Quantity;
      const Price = ItemArray[i].Price;
      const Total = ItemArray[i].Total;
     // insert Data to Product Order
      const insertOrder = await query.InsertOrder({
        product_barcode: barcode,
        product_name: Product_name,
        product_quantity: Quantity,
        product_price: Price,
        product_total: Total,
        order_code:data.Rand,
      });
      //reduce Product 
      const redProd = await query.reduceProduct
      ({
        product_barcode: barcode,
        product_name: Product_name,
        product_quantity: Quantity,
      }) 
    } 
    //insert customer Details
     const valCus = await query.validationCustomerName({data}) 
    const lengths = valCus.length 
     if(lengths < 0){ await query.Customer({data})}
    //insert Order
    const res = await query.insertOrders({
        order_code:data.Rand,
        order_date:date_ob,
        total_payment:Totals,
        customer_name:data.customer_name,
    })
    if(res) {message = `Song is Successfully Insert!!`        
    return message}
    throw new Error(`Roger, We have a Problem!`)
  };
};

module.exports = addOrders;
