const updateUser = ({ patchUsers, query }) => {
    return async function put({ id, ...info }) {
      let datas = patchUsers(id, info);
      let data = {
        user_id: datas.getID(),
        password: datas.getP(),
        role: datas.getR(),
      };
  
      //update user role/password
      const res = await query.updateUser({ data });
      let message = `Roger, we have a problem!`
      if(res[0] == 1) message = `Updated successfully`
      return message
    };
  };
  
  module.exports = updateUser;
  