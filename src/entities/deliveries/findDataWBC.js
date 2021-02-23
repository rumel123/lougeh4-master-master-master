const findDataWBarcodes = ({}) => {
    return function post({delivery_code}={})
    {
        if(!delivery_code) { throw new Error(`Must Choose Your Barcode`)}
        return Object.freeze({
            Dc : ()=> delivery_code
        })
    }
} 

module.exports = findDataWBarcodes