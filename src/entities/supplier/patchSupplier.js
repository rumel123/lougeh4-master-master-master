const patchSuppliers = ({}) => {
    return function update(id,{contact,address} = {}){ 
    //validate all fields to insert
        if (!id) 
        {throw new Error("Please Put the id!!")} 
        if (!contact)
        {throw new Error("Please provide Contact Number!!")}
        if (!address)  
        {throw new Error("Please put your Address!!")}
        return Object.freeze({
            getID:()=> id, 
            getcontact:()=> contact,
            getaddress:()=> address,
        })
    }
}
module.exports = patchSuppliers