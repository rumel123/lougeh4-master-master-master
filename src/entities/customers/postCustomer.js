const postcustomer = ({}) => {
    return function make({fullname,contact,address} = {}){ 
    //validate all fields to insert
        if (!fullname) 
        {throw new Error("Please complete your Fullname!!")} 
        if (!contact)
        {throw new Error("Please provide Contact Number!!")}
        if (!address)  
        {throw new Error("Please put your Address!!")}
        return Object.freeze({
            getF:()=> fullname, 
            getC:()=> contact,
            getA:()=> address,
        })
    }
}
module.exports = postcustomer