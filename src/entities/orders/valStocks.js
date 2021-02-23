
const valStocks = ({ }) => {
    return async function make({ product_id, stocks, fullname, contact, address } = {}) {
        if (!product_id) { throw new Error(`Please provide a Product ID`) }
        if (!stocks) { throw new Error(`Please provide a Stocks!`) }
        //validate if the stocks is a number
        if (typeof stocks != "number") { throw new Error(`Stock must be a number`) }
        //validate all fields to insert
        if (!fullname) { throw new Error("Please complete your Fullname!!") }
        if (!contact) { throw new Error("Please provide Contact Number!!") }
        if (!address) { throw new Error("Please put your Address!!") }
        return Object.freeze({
            getproduct_id: () => product_id,
            getstocks: () => stocks,
            getF:()=> fullname, 
            getC:()=> contact,
            getA:()=> address,
        })
    }
}

module.exports = valStocks