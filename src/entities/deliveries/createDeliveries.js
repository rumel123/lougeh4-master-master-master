const createDeliveries = ({dateConverter}) => {
    return async function make({suppliername,delivery_received_date,delivery_code}={})
    {   

        if (!suppliername) {throw new Error(`Please Choose a supplier`)}
        if (!delivery_received_date) {throw new Error(`Please fill your Delivery Date`)}
        if (!delivery_code) {throw new Error(`Please enter your Barcode`)}
        //get the current Date
        let date_ob = new Date();
        //split the current date, month, year
        let todaydate = ("0" + date_ob.getDate()).slice(-2);
        let todaymonth = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let todayyear = date_ob.getFullYear();


        //split the inputed date.
        //split the inputed month.
        //split the inputed year
       let day = delivery_received_date.split('-')[2]
        
       let month = delivery_received_date.split('-')[1]
        
       let year = delivery_received_date.split('-')[0] 
        //if inputed is greater than the todays date, make it as previous date
 
        if (year > todayyear) {throw new Error(`Your Delivery Date is invalid!`)}
        
        if (year >= todayyear && month > todaymonth ) {throw new Error(`Your Delivery Date is invalid`)} 
         //implode data and fetch record
        let timeArray = [year,month,day]
       
        const received_date = timeArray.join("-")
        const finalDate = dateConverter(received_date)  
        return Object.freeze({
            getSup:() => suppliername,
            getDD:() => finalDate,
            getBC:() => delivery_code,
        })
    }
}

module.exports = createDeliveries
