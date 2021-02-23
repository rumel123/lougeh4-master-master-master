const deleteUser = ({query}) => {
    return async function select(info) {
        const {id} = info
        //throw an error if the user doesn't exist
        const validation1 = await query.validateUser({id}) 
        const valLength = validation1.length
        if (valLength == 0) { throw new Error(`Data Doesn't exist, Please try Again.`)}
        //execute to delete user
       const res = await query.deleteUser({id})
       let message = `Roger, we have a problem.`
        if(res == 1) message = `User is deleted successfully!`
        return message  

    }
}
module.exports = deleteUser