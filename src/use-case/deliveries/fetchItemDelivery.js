const fetchItemDelivery = ({ query }) => {
  return async function select(info) {
    let data = [];
    let { id } = info;
    if (id) {
      const res = await query.fetchAllItemsDeliveries(id);
      const resLength = res.length;
      if (resLength > 0) {
        for (let i = 0; i < res.length; i++) {
          const e = res[i];
          //Push in Dummy Array all the fetched Data
          data.push({
            delivery_product_name: e.delivery_product_name,
            delivery_product_barcode: e.delivery_product_barcode,
            delivery_product_subscription: e.delivery_product_subscription,
            delivery_product_stocks: e.delivery_product_stocks,
            delivery_product_expiryDate: e.delivery_product_expiryDate,
            delivery_product_code: e.delivery_product_code,
          });
        }
      } else {
        return (msg = `Data doesn't Exist! please try something`);
      }
    } else {
      data = { message: `Theres nothing to fetch` };
    }
    return data;
  };
};

module.exports = fetchItemDelivery;
