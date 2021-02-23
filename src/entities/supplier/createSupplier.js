const postSupplier = ({}) => {
    return function make({companyname,contact,address} = {}){ 
    //validate all fields to insert
        if (!companyname) 
        {throw new Error("Please complete your Fullname!!")} 
        if (!contact)
        {throw new Error("Please provide Contact Number!!")}
        if (!address)  
        {throw new Error("Please put your Address!!")}
        return Object.freeze({
            getCN:()=> companyname, 
            getC:()=> contact,
            getA:()=> address,
        })
    }
}
module.exports = postSupplier