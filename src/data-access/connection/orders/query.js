const Query = ({ connections, models }) => {
  return Object.freeze({
    fetchProductWithID,
    fetchAllProduct,
    InsertOrder,
    reduceProduct,
    Customer,
    validationCustomerName,
    insertOrders,
    fetchOrders,
    fetchProductOrders
  });
  //fetch all items
  //fetch product based on id
  async function fetchProductWithID(id) {
    try {
      const Product = await models.product;
      const res = await Product.findAll({ where: { product_barcode: id } });
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
  //fetch all product
  async function fetchAllProduct() {
    try {
      const Product = models.product;
      const res = await Product.findAll();
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
  //Insert Product Orders
  async function InsertOrder(info) {
    try {
      const Orders = await models.product_orders;
      const res = await Orders.create({
        product_barcode: info.product_barcode,
        product_name: info.product_name,
        product_quantity: info.product_quantity,
        product_price: info.product_price,
        order_code: info.order_code,
        product_total: info.product_total,
      });
      return info;
    } catch (error) {
      console.log(error.message);
    }
  }
  //reduce the quantity in products
  async function reduceProduct(data) {
    try {
      const pool = await connections();
      const { product_barcode, product_name, product_quantity } = data;
      const res = await new Promise((resolve) => {
        pool.query(
          `UPDATE public.products
            SET  stocks= stocks - ${product_quantity}
            WHERE product_barcode = $1 AND
            product_name = $2;`,
          [product_barcode, product_name],
          (err, res) => {
            if (err) resolve(err);
            resolve(res);
          }
        );
      }); 
      return res;
    } catch (error) {
      console.log(`Error: error on reading songs`, error.message);
    }
  }
  //customer Details
  async function Customer( data ) {
    try {
      const Customer = await models.customers;
    const  { customer_name,customer_address,contact_number } = data;
      const result = await Customer.create({
        fullname: customer_name,
        contact: customer_address,
        address: contact_number,
      }); 
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
  //validate if customer is exist
  async function validationCustomerName( data ) {
    try {
      const { customer_name } = data;
     const Customer = await models.customers;
      const res = await Customer.findAll({ where: { fullname: customer_name } }); 
      
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  //validate if customer is exist
  async function insertOrders(data) {
    try {
      const Orders = await models.orders;
      const res = await Orders.create({
        order_code: data.order_code,
        order_date: data.order_date,
        total_payment: data.total_payment,
        customer_name: data.customer_name,
      });
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
   //fetch orders 
   async function fetchOrders() {
    try {
      const Orders = await models.orders;
      const res = await Orders.findAll()
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
   //fetch Product orders 
   async function fetchProductOrders(id) {
    try {
      const Orders = await models.product_orders;
      const res = await Orders.findAll({ where: { product_barcode: id } })
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};
module.exports = Query;
