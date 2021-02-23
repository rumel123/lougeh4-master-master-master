const dateconv = ({}) => {
    return function date(date)
    {
        var options = {  
            year: "numeric",  
            month: "numeric",  
            day: "numeric" };  
            var newDateFormat = new Date(date).toLocaleDateString("en-US", options);
        return newDateFormat
    }
}


module.exports = dateconv