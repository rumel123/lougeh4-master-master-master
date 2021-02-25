const updateSuppliers = ({query,patchSupplier}) => {
    return async function put({id, ...info}) {
    let data = patchSupplier(id,info) 
      data = { 
  id:data.getID(),
  contact:data.getcontact(),
  address:data.getaddress(),
    }    
    const res = await query.UpdateSupplier({data})
    if (res[0] == 1){ message = `Update Successfully!`
        return message }
        throw new Error(`unable to update. Data is already exist or the id is Doesnt exist, please check it carefully`)
    }
}

module.exports = updateSuppliers