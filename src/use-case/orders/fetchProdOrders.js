const fetchProdOrders = ({ query }) => {
    return async function select(info) {
        let data = []
        const { id } = info
        if (id) {
            const result = await query.fetchProdOrders({ id })
            const resl = result.length
            if (resl > 0) {
                const items = result
                for (let i = 0; i < items.length; i++) {
                    const info = items[i];
                    data.push({
                        product_barcode: info.product_barcode,
                        product_name: info.product_name,
                        product_quantity: info.product_quantity,
                        product_price: info.product_price,
                        order_code: info.order_code,
                        product_total: info.product_total,
                        product_customer: info.product_customer,
                    })
                }
            } else {
                throw new Error(`Data is not available on this ID!!`)

            }
        } else {
            const result = await query.fetchAllProdOrders()
            const resl = result.length
            if (resl > 0) {
                for (let i = 0; i < result.length; i++) {
                    const info = result[i];
                    data.push({
                        product_barcode: info.product_barcode,
                        product_name: info.product_name,
                        product_quantity: info.product_quantity,
                        product_price: info.product_price,
                        order_code: info.order_code,
                        product_total: info.product_total,
                        product_customer: info.product_customer,
                    })
                }
            } else {
                throw new Error(`theres no Data to retrieve pleasse insert first!`) 
            }
        }
        return data

    }
}
module.exports = fetchProdOrders