const getCustomerName = ({}) => {
    return function make({fullname} = {}){ 
        //validate if full name is exist in the insert customer query
        if (!fullname) 
        {throw new Error("Please complete your Fullname!!")} 
        return Object.freeze({
            getF:()=> fullname
        })
    }
}
module.exports = getCustomerName