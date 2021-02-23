const addDelivery = ({ valMakeDeliveries, query }) => {
    return async function post(infos) {
        const data = await valMakeDeliveries(infos)
        //fetch data from intities
        const info = {
            suppliername: data.getSup(),
            delivery_received_date: data.getDD(),
            delivery_code: data.getBC(),
        }
        //validate if the delivery_code is exist
        const val1 = await query.validateDeliveryCode({info})
        console.log(val1)
        if(val1.length > 0) {throw new Error(`Delivery code Exist, please make something new!`)}
        //insert data
        const res = await query.insertDeliveries({info})
        const msg = `Roger, we have a problem!`
        if (res) return res 
        return msg
    }
}

module.exports = addDelivery