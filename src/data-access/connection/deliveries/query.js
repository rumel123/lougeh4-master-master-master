const deliveryQuery = ({ connections, models }) => {
  return Object.freeze({
    insertDeliveries,
    validateDeliveryCode,
    fetchDeliveries,
    fetchAllDeliveries,
    fetchDeliveriesWithProducts,
    fetchAllItemsDeliveries,
  });
  //insert Deliveries
  async function insertDeliveries({ info }) {
    try {
      const Delivery = models.delivery;
      const { suppliername, delivery_received_date, delivery_code } = info;
      const result = await Delivery.create({
        suppliername: suppliername,
        delivery_received_date: delivery_received_date,
        delivery_code: delivery_code,
      });
      return result;
    } catch (error) {
      console.log(error.message);
    }
  }
  //fetch Delivery to display in tables
  async function fetchAllDeliveries() {
    try {
      const Delivery = models.delivery;
      const data = [];
      const res = await Delivery.findAll();
      for (let i = 0; i < res.length; i++) {
        const array = res[i];
        data.push({
          delivery_id: array.dataValues.delivery_id,
          suppliername: array.dataValues.suppliername,
          delivery_received_date: array.dataValues.delivery_received_date,
          delivery_code: array.dataValues.delivery_code,
        });
      }
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  //fetch Supplier
  async function fetchDeliveries(id) {
    try {
      const Delivery = models.delivery;
      const data = [];
      const res = await Delivery.findAll({ where: { delivery_code: id } });
      for (let i = 0; i < res.length; i++) {
        const array = res[i];
        data.push({
          delivery_id: array.dataValues.delivery_id,
          suppliername: array.dataValues.suppliername,
          delivery_received_date: array.dataValues.delivery_received_date,
          delivery_code: array.dataValues.delivery_code,
        });
      }
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
  //delivery code validation
  async function validateDeliveryCode({ info }) {
    try {
      const Delivery = models.delivery;
      const { delivery_code } = info;
      const res = await Delivery.findAll({
        attributes: ["delivery_code"],
        where: { delivery_code: delivery_code },
      });
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
  //fetch Delivery with the products
  async function fetchDeliveriesWithProducts({ data }) {
    try {
      const { delivery_code } = data;
      const pool = await connections();
      const res = await new Promise((resolve) => {
        pool.query(
          `SELECT
                deliveries.delivery_id,
                 deliveries.suppliername,
                 deliveries.delivery_received_date,
                products.product_id,
                products.product_barcode, 
                products.product_name, 
                products.product_description, 
                products.cost_unit, 
                products.price, 
                products.stocks
            FROM deliveries INNER JOIN products ON 
            deliveries.delivery_code = products.delivery_code
            WHERE deliveries.delivery_code = $1 AND products.delivery_code = $1`,
          [delivery_code],
          (err, res) => {
            if (err) resolve(err);
            resolve(res);
          }
        );
      });
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
  //fetch itemsDelivery to display in tables
  async function fetchAllItemsDeliveries(id) {
    try {
      const Delivery = models.product_deliveries;
      const data = [];
      const res = await Delivery.findAll({
        where: { delivery_product_code: id },
      });

      for (let i = 0; i < res.length; i++) {
        const array = res[i];
        data.push({
          delivery_product_name: array.dataValues.delivery_product_name,
          delivery_product_barcode: array.dataValues.delivery_product_barcode,
          delivery_product_subscription:
            array.dataValues.delivery_product_subscription,
          delivery_product_stocks: array.dataValues.delivery_product_stocks,
          delivery_product_expiryDate:
            array.dataValues.delivery_product_expiryDate,
          delivery_product_code: array.dataValues.delivery_product_code,
        });
      }
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
};
module.exports = deliveryQuery;
