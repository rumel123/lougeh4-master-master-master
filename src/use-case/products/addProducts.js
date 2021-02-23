 
const insertProducts = ({DataSanitize,query}) => {
return async function post(info) {
    const infos = await DataSanitize(info)
    const data = {
        product_barcode:infos.getproduct_barcode(),
        product_name:infos.getproduct_name(),
        product_description:infos.getproduct_description(),
        cost_unit:infos.getcost_unit(),
        price:infos.getprice(),
        stocks:infos.getstocks(),
        Expiry_date:infos.getExpiry_date(),
        delivery_code:infos.getdelivery_code(),
    } 

    const res = await query.addProduct({info}) 
    let message = `Roger, We have a Problem!`
    if(res) return res
    return message
}
}


module.exports = insertProducts