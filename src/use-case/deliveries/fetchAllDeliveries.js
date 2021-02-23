
const fetchDelivery = ({query}) => {
    return async function select(info) {
        let data = []
        let {id} = info
        if(id)
        {
            const res = await query.fetchDeliveries(id)
            const resLength = res.length
             if(resLength > 0)
             {
                for (let i = 0; i < res.length; i++) {
                    const e = res[i]; 
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        delivery_id: e.delivery_id,
                        suppliername: e.suppliername,
                        delivery_received_date: e.delivery_received_date,
                        delivery_code: e.delivery_code
                    })
                }
             }
             else
             {
                return msg = `Data doesn't Exist! please try something`
             }
        }
        else
        {
            const res = await query.fetchAllDeliveries()
            const resLength = res.length
             if(resLength > 0)
             {
                for (let i = 0; i < res.length; i++) {
                    const e = res[i]; 
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        delivery_id: e.delivery_id,
                        suppliername: e.suppliername,
                        delivery_received_date: e.delivery_received_date,
                        delivery_code: e.delivery_code
                    })
                }
             }
             else
             {
                return msg = `Data doesn't Exist! please try something`
             }
        }

        return data
    }
}

module.exports = fetchDelivery