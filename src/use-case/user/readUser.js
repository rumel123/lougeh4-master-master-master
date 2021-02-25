const readUser = ({ enterUsers, query, encrypt }) => {
    return async function post(info) {
      let datas = await enterUsers(info);
      let data = {
        username: datas.getU(),
        password: datas.getP(),
      };
  
      //initiate login
      const res = await query.fetchUser({data})
      const resLength = res.length
      if(resLength == 0) {throw new Error(`Wrong Username And Password!`)}
      let message = `Roger, we have a problem!`
      if (res) {
        //insert the encryption Key 
        const Enc = await encrypt(data) 
        const resArr = {
          message:"Welcome!!",SecretKey:Enc
        } 
        return resArr
    }
    };
  };
  
  module.exports = readUser