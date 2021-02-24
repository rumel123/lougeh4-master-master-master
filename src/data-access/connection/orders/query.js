const Query = ({ connections, models }) => {
    return Object.freeze({  
            fetchProductWithID,
            fetchAllProduct,
    });
 //fetch all items
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
module.exports = Query
