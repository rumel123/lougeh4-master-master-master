const customerQuery = ({ connections, models }) => {
    return Object.freeze({
        addCustomer,
        getAllCustomers,
        validationCustomerName,
        fetchCustomers
    })
    
    async function fetchCustomers(id) {
        try {
            const dataA = [] 
            const Customer = models.customers 
            const res = await Customer.findAll({where:{customer_id:id}})
            if(res){
                for (let i = 0; i < res.length; i++) {
                    const array = res[i];
                    dataA.push({
                        customer_id:array.dataValues.customer_id,
                        fullname: array.dataValues.fullname,
                        contact: array.dataValues.contact,
                        address: array.dataValues.address
                    })
                }}
            return dataA
        }
        catch (e) {
            console.log("Error: ", e)
        }
    }
    // fetch all customers
    async function getAllCustomers() {
        try {
            const dataA = []
            const Customer = models.customers
            const res = await Customer.findAll()
            if(res){
                for (let i = 0; i < res.length; i++) {
                    const array = res[i];
                    dataA.push({
                        customer_id:array.dataValues.customer_id,
                        fullname: array.dataValues.fullname,
                        contact: array.dataValues.contact,
                        address: array.dataValues.address
                    })
                }}
            return dataA
        }
        catch (e) {
            console.log("Error: ", e)
        }
    }
    // add customers
    async function addCustomer({ data }) {
        try {
            const Customer = models.customers
            const result = await Customer.create({
                fullname: data.fullname,
                contact: data.contact,
                address: data.address
            })
            return { result }
        }
        catch (e) {
            console.log("Error: ", e)
        }
    }
    // check customer if existed before add
    async function validationCustomerName({data}) {
        try {   
            const {fullname} = data
            const Customer = models.customers
            const res = await Customer.findAll({ where: { fullname: fullname } }) 
            return res
        } 
        catch (e) {
            console.log("Error: ", e)
        }
    }
}


module.exports = customerQuery