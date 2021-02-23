const supplierQuery = ({ connections, models }) => {
    return Object.freeze({
            insertSupplier,
            fetchAllSupplier,
            fetchSupplier,
            validateSupplierName
    })
//if the supplier name is already exist
async function validateSupplierName({ data }) {
    try {
        const {companyname} = data 
        const Supplier = models.supplier
        const res = await Supplier.findAll({ where: { companyname: companyname } }) 
        return res
    }
    catch (e) {
        console.log("Error: ", e)
    }
}   
    //insert query for supplier
    async function insertSupplier({ data }) {
        try {
            const Supplier = models.supplier
            const result = await Supplier.create({
               companyname:data.companyname,
               contact:data.contact,
               address:data.address}) 
           return result 
        }
        catch (e) {
            console.log("Error: ", e)
        }
    }
    //will fetch all the supplier display
    async function fetchAllSupplier() {
        try {
            const dataA = [] 
            const Supplier = models.supplier
            const res = await Supplier.findAll()
            if(res){
                for (let i = 0; i < res.length; i++) {
                    const array = res[i];
                    dataA.push({
                        supplier_id:array.dataValues.supplier_id,
                        companyname: array.dataValues.companyname,
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
    //if the supplier selected fetch the details
    async function fetchSupplier(id) {
        try {
            const dataA = [] 
            const Supplier = models.supplier
            const res = await Supplier.findAll({where:{supplier_id:id}})
            if(res){
                for (let i = 0; i < res.length; i++) {
                    const array = res[i];
                    dataA.push({
                        supplier_id:array.dataValues.supplier_id,
                        companyname: array.dataValues.companyname,
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
        


}

module.exports = supplierQuery