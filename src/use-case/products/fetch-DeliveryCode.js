const fetchDelCode = ({query}) => {
return async function select(info) { 
    const res = await query.fetchDeliveryCode()
    let messsage = `Theres no delivery Code available`
    if (res) return res 
    return message
}
}

module.exports = fetchDelCode