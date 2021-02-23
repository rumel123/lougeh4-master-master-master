const insertCustomer = ({postcustomers,query}) => {
    return async function post(info) {
        let datas = await postcustomers(info)
        let data = {
                fullname: datas.getF(),
                contact: datas.getC(),
                address: datas.getA()
        }
       
      //fetch data with existing fullname
          const validate1 = await query.validationCustomerName({data}) 
         const lengths = validate1.length 
         //if the query read a existing data it will throw an error or else will insert a customer
         if(lengths > 0) { throw new Error(`Inputed Name Exist, please Choose other Name!`)} 
        const res = await query.addCustomer({data})
        let msg = `We have a problem.`
        //throwing the data success 
        if(res){  
            let resData = {
                customer_id:res.result.dataValues.customer_id,
                    fullname: res.result.dataValues.fullname,
                    contact: res.result.dataValues.contact,
                    address: res.result.dataValues.address
            }
            return resData
            }
            else{
                return msg
            } 
    }
}
module.exports=insertCustomer