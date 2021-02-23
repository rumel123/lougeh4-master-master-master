 
const fetchAllProduct = ({query}) => {
    return async function select(info) {
        let data = []
        let {id} = info
        if(id)
        {
            const res = await query.fetchProductWithID(id)
            const resLength = res.length
             if(resLength > 0)
             {
                for (let i = 0; i < res.length; i++) {
                    const e = res[i]; 
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        product_id:e.product_id,
                        product_barcode:e.product_barcode,
                        product_name:e.product_name,
                        product_description:e.product_description,
                        cost_unit:e.cost_unit,
                        price:e.price,
                        stocks:e.stocks,
                        Expiry_date:e.Expiry_date,
                        delivery_code:e.delivery_code,
                    })
                }
             }
             else
             {
                return msg = `Data doesn't Exist! please try something`
             }
        }
        else
        {
            const res = await query.fetchAllProduct()
            const resLength = res.length
             if(resLength > 0)
             {
                for (let i = 0; i < res.length; i++) {
                    const e = res[i]; 
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        product_id:e.product_id,
                        product_barcode:e.product_barcode,
                        product_name:e.product_name,
                        product_description:e.product_description,
                        cost_unit:e.cost_unit,
                        price:e.price,
                        stocks:e.stocks,
                        Expiry_date:e.Expiry_date,
                        delivery_code:e.delivery_code,
                    })
                }
             }
             else
             {
                return msg = `Data doesn't Exist! please try something`
             }
        }
        return data
    }
}

module.exports = fetchAllProduct