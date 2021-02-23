 
const reduceStocks = ({ valStock, query, randomstring }) => {
    return async function select(info) {
        const data = await valStock(info)
        let dataArr = {
            product_id: data.getproduct_id(),
            stocks: data.getstocks(), 
            fullname: data.getF(),
            contact: data.getC(),
            address: data.getA()
        } 
        let date_ob = new Date();

        //fetch data that will make  a reduction in stocks
        const results = await query.CheckProductStocks(dataArr)
        const DataVal = results.dataValues
        //throw error if there is no stock left
        const User_stocks = DataVal.stocks
        if (!User_stocks) { throw new Error(`There no stocks Left on this item!`) }
        //throw error if the stock is short
        if (dataArr.stocks > User_stocks) { throw new Error(`Short of stocks please add`) }
        //add customer
        const customersQuery = await query.addOrderCustomer({fullname:dataArr.fullname,contact:dataArr.contact,address:dataArr.address})
        //get the initial total of stocks * prices
        const total = dataArr.stocks * DataVal.price
        //fetch all data
        const ArrData = {
            product_barcode: DataVal.product_barcode,
            product_name: DataVal.product_name,
            product_quantity: dataArr.stocks,
            price: DataVal.price,
            order_code: randomstring.generate({
                length: 12,
                charset: "alphabetic",
            }),
            product_total: total,
            product_customer: dataArr.fullname,
            product_description: DataVal.product_description,
            cost_unit: DataVal.cost_unit,
            order_date: date_ob,
            stocks: DataVal.stocks,
        } 
        //record Product Orders
         const addProd_Orders = await query.AddProdOrders(ArrData)
        //record Orders
         const orderss = await query.AddOrders(ArrData)
        //execute the subtraction of product 
          const reduceRes = await query.UpdateProduct(dataArr) 
            if (reduceRes.rowCount > 0) { const message = ` Item Add `
                 return message}
                 throw new Error(`Transaction`)
    }
}

module.exports = reduceStocks 