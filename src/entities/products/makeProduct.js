const  sanitizeData = ({}) => {
    return function post({product_barcode,product_name,product_description,cost_unit,price,stocks,Expiry_date,delivery_code} = {}) {
        //check if the product_barcode is empty
        if(!product_barcode) {throw new Error(`Please all the Missing Blank`)}
          //check if the product_name is empty
          if(!product_name) {throw new Error(`Please all the Missing Blank`)}
            //check if the product_description is empty
        if(!product_description) {throw new Error(`Please all the Missing Blank`)}
          //check if the cost_unit is empty
          if(!cost_unit) {throw new Error(`Please all the Missing Blank`)}
            //check if the price is empty
        if(!price) {throw new Error(`Please all the Missing Blank`)}
          //check if the stocks is empty
          if(!stocks) {throw new Error(`Please all the Missing Blank`)}
            //check if the Expiry_date is empty
        if(!Expiry_date) {throw new Error(`Please all the Missing Blank`)}
          //check if the delivery_code is empty
          if(!delivery_code) {throw new Error(`Please all the Missing Blank`)}
        return Object.freeze({
            
            getproduct_barcode: () => product_barcode,
            getproduct_name: () => product_name,
            getproduct_description: () => product_description,
            getcost_unit: () => cost_unit,
            getprice: () => price,
            getstocks: () => stocks,
            getExpiry_date: () => Expiry_date,
            getdelivery_code: () => delivery_code
    })        
    }
}

module.exports = sanitizeData