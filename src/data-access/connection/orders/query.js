const Query = ({ connections, models }) => {
    return Object.freeze({
        CheckProductStocks,
        UpdateProduct,
        addOrderCustomer,
        AddProdOrders,
        AddOrders,
        fetchProdOrders,
        fetchAllProdOrders
    });
    //check the stock level
    async function CheckProductStocks(info) {
        try {
            const Product = models.product
            const res = await Product.findOne({ where: { product_id: info.product_id } })

            return res
        } catch (error) {
            console.log(error.message)
        }
    }
    // update Product stocks
    async function UpdateProduct(info) {
        try {
            const { product_id, stocks } = info
            const pool = await connections()
            const res = await new Promise((resolve) => {
                pool.query(`UPDATE public.products
            SET stocks= stocks - ${stocks}
            WHERE product_id = $1`, [product_id], (err, res) => {
                    if (err) resolve(err)
                    resolve(res)
                })
            })
            return res
        } catch (error) {
            console.log(error.message)
        }
    }
    //add customer
    async function addOrderCustomer(info) {
        try {
            const Customer = models.customers
            const result = await Customer.create({
                fullname: info.fullname,
                contact: info.contact,
                address: info.address
            })
            return result
        }
        catch (e) {
            console.log("Error: ", e)
        }
    }

    //insert product Orders

    async function AddProdOrders(info) {
        try {
            const Orders = models.product_orders
            const res = Orders.create({
                product_barcode: info.product_barcode,
                product_name: info.product_name,
                product_quantity: info.product_quantity,
                product_price: info.price,
                order_code: info.order_code,
                product_total: info.product_total,
                product_customer: info.product_customer,
            });
            return res
        } catch (error) {
            console.log(error.message)
        }
    }

    //insert Orders

    async function AddOrders(info) {
        try {
            const Orders = models.orders
            const res = Orders.create({
                order_code: info.order_code,
                order_date: info.order_date,
                total_payment: info.price,
                customer_name: info.product_customer,
            });
            return res
        } catch (error) {
            console.log(error.message)
        }
    }
    //fetch Order Products based from order code
    async function fetchProdOrders({ info }) {
        try {
            const Orders = await models.product_orders
            const res = Orders.findAll({ where: { order_code: info.order_code } });
            const data = [];
            if (res) {
                for (let i = 0; i < res.length; i++) {
                    const array = res[i];
                    data.push({
                        product_barcode: array.dataValues.product_barcode,
                        product_name: array.dataValues.product_name,
                        product_quantity: array.dataValues.product_quantity,
                        product_price: array.dataValues.product_price,
                        order_code: array.dataValues.order_code,
                        product_total: array.dataValues.product_total,
                        product_customer: array.dataValues.product_customer,
                    });
                }
            }
            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    //fetch all Order Products 
    async function fetchAllProdOrders() {
        try {
            const Orders = models.product_orders
            const res = await Orders.findAll();
            const data = [];
            if (res) {
                for (let i = 0; i < res.length; i++) {
                    const array = res[i];
                    data.push({
                        product_barcode: array.dataValues.product_barcode,
                        product_name: array.dataValues.product_name,
                        product_quantity: array.dataValues.product_quantity,
                        product_price: array.dataValues.product_price,
                        order_code: array.dataValues.order_code,
                        product_total: array.dataValues.product_total,
                        product_customer: array.dataValues.product_customer,
                    });
                }
                
            }
           return data
        } catch (error) {
            console.log(error.message)
        }
    }



}
module.exports = Query
