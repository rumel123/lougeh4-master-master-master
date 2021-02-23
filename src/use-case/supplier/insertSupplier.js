const insertSupplier = ({postSuppliers,query}) => {
   return async function post(info) {
       let datas = await postSuppliers(info)
       let data = {
               companyname: datas.getCN(),
               contact: datas.getC(),
               address: datas.getA()
       }
       //validate if the company name is exist
      const FirstValidation = await query.validateSupplierName({data})
      //Read if the Company Name existed Throw an error  
      const ValLength = FirstValidation.length
      if(ValLength) { throw new Error(`Name of Company is Existed, please check your record!`)
              //const msg = `Name of Company is Existed, please check your record!` 
        return msg
}
      const res = await query.insertSupplier({data})
      let msg = `Roger We have a problem.`
      //throwing the notification success
      if (res) return res
      return msg  
     }
} 

module.exports = insertSupplier