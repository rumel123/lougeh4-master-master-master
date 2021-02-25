const productQuery = ({ connections, models }) => {
  return Object.freeze({
    insertProducts,
    insertDeliveries,
    fetchProductWithID,
    fetchAllProduct
  });

  async function insertProducts(datas) {
    try {
      const pool = await connections();
      const Products = await models.product;
      const Product_deliveries = await models.product_deliveries;
      const find = await Products.findOne({
        where: {
          product_barcode: datas.product_barcode,
          product_name: datas.product_name,
        },
      });
      if (find) {
        //add the quantity of prev data and the new inserted data
        const Updt = await new Promise((resolve) => {
          pool.query(
            `UPDATE public.products
                    SET stocks=stocks + ${datas.quantity}
                    WHERE product_barcode = $1 AND product_name = $2;`,
            [datas.product_barcode, datas.product_name],
            (err, res) => {
              if (err) resolve(err);
              resolve(res);
            }
          );
        });
      } else {
        //if the product is already exist based by  barcode and product_name
        const res = await Products.create({
          product_barcode:datas.product_barcode,
          product_name:datas.product_name,
          product_description:datas.product_description,
          cost_unit:datas.cost_unit,
          price:datas.price,
          stocks:datas.quantity,
          Expiry_date:datas.Expiry_date,
        });
      }
      const resDP = await Product_deliveries.create({
        delivery_product_name: datas.product_name,
        delivery_product_barcode: datas.product_barcode,
        delivery_product_subscription: datas.product_description,
        delivery_product_stocks: datas.quantity,
        delivery_product_expiryDate: datas.Expiry_date,
        delivery_product_code: datas.delivery_code,
      });
      results = {
          message:"insertSuccessfully"
      }
      return results;
    } catch (error) {
      console.log(error.message);
    }
  }
  //insert Deliveries
  async function insertDeliveries({ data }) {
    try {
        const Delivery = models.delivery
        const { Supplier, Date_Received, rand } = data
        const result = await Delivery.create({
            suppliername: Supplier,
            delivery_received_date: Date_Received,
            delivery_code: rand
        }) 
        return result
    } catch (error) {
        console.log(error.message)
    }
}
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
};

module.exports = productQuery;
