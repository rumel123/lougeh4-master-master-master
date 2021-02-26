const fetchProduct = ({ query }) => {
    return async function select(info) {
        let data = []
        let { id } = info
        if (id) {
            const res = await query.fetchProductOrders(id)
            const resLength = res.length
            if (resLength > 0) {
                for (let i = 0; i < res.length; i++) {
                    const e = res[i];
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        product_barcode:e.product_barcode,
                        product_name:e.product_name,
                        product_quantity:e.product_quantity,
                        product_price:e.product_price,
                        order_code:e.order_code,
                        product_total:e.product_total,
                    })
                }
            }
            else {
                return msg = `Empty Transactions, Please Try to make Sales!`
            }
        }
        else {
            const res = await query.fetchOrders()
            const resLength = res.length
            if (resLength > 0) {
                for (let i = 0; i < res.length; i++) {
                    const e = res[i];
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        order_code: e.order_code,
                        order_date: e.order_date,
                        total_payment: e.total_payment,
                        customer_name: e.customer_name,
                    })
                }
            }
            else {
                return msg = `Empty Transaction, try to gather sales!`
            }
        }
        return data
    }
}
module.exports = fetchProduct