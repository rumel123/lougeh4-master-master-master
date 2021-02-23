const viewAllSupplier = ({ query }) => {
    return async function select(info) {
        let data = []
        const { id } = info
        if (id) {
            //fetch if have id
            const res = await query.fetchSupplier(id) 
            //get the length of the Object and verify if it exist
              const reslength = res.length
             if (reslength > 0) { 
                for (let i = 0; i < res.length; i++) {
                    const e = res[i]; 
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        supplier_id: e.supplier_id,
                        companyname: e.companyname,
                        contact: e.contact,
                        address: e.address
                    })
                }
            }
            else {
                const msg = `there's nothing to fetch!`
                return msg
            } 
        }
        else {
            //fetch if have id
            const res = await query.fetchAllSupplier()
            //get the length of the Object and verify if it exist
            const reslength = res.length
             if (reslength > 0) { 
                for (let i = 0; i < res.length; i++) {
                    const e = res[i];
                    //Push in Dummy Array all the fetched Data
                    data.push({
                        supplier_id: e.supplier_id,
                        companyname: e.companyname,
                        contact: e.contact,
                        address: e.address
                    })
                } 
            }
            else {
                const msg = `there's nothing to fetch1!`
                return msg
            } 
        }
        //return the DummyData
        return data
    }
}


module.exports = viewAllSupplier