const createUser = ({ makeUsers, query }) => {
    return async function post(info) {
      let datas = await makeUsers(info);
      let data = {
        username: datas.getU(),
        password: datas.getP(),
        role: datas.getR(),
      };
      //throw an error if the username is exist
      const validation1 = await query.fetchUsername({data}) 
       const valLength = validation1.length
      if(valLength > 0) { throw new Error(`Username is exist, Try new something...`)}
       //execute to create user
      const res = await query.createUser({data})
      let message = `Roger, We have a problem.` 
      if(res)  return res
      return message
    };
  };
   
   module.exports = createUser