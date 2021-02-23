const productQuery = ({ connections, models }) => {
    return Object.freeze({
        addProduct,
        fetchDeliveryCode,
        fetchProductWithID,
        fetchAllProduct
    })
    //insert the prooducts
    async function addProduct({info}) {
        try {
            const Product = models.product 
      const result = await Product.create({
                product_barcode : info.product_barcode,
                product_name : info.product_name,
                product_description : info.product_description,
                cost_unit : info.cost_unit,
                price : info.price,
                stocks : info.stocks,
                Expiry_date : info.Expiry_date,
                delivery_code : info.delivery_code
            })  
            return result
        } catch (error) {
            console.log(error.message)
        }
    }
     //insert the prooducts
     async function fetchDeliveryCode() {
        try {
            const Product = models.product  
            const res = await Product.findAll({ attributes: ['delivery_code'] }) 
            return res 
        } catch (error) {
            console.log(error.message)
        }
    }
     //fetch product based on id
     async function fetchProductWithID(id) {
        try {
            const Product = models.product  
            const res = await Product.findAll({ where:{ product_id:id }  }) 
            return res 
        } catch (error) {
            console.log(error.message)
        }
    }
     //fetch all product
     async function fetchAllProduct() {
        try {
            const Product = models.product  
            const res = await Product.findAll() 
            return res 
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = productQuery