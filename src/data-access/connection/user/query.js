const Query = ({ connections, models }) => {
    return Object.freeze({
      createUser,
      fetchUser,
      deleteUser,
      updateUser,
      fetchUsername,
      validateUser,
    });
    //add USERS
    async function createUser({ data }) {
      try {
        const Users = models.users;
        const result = await Users.create({
          username: data.username,
          password: data.password,
          role: data.role,
        });
        return result;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
    //Login User Query
    async function fetchUser({ data }) {
      try {
        const datas = [];
        const { username, password } = data;
        const Users = models.users;
        const result = await Users.findAll({
          where: { username: username, password: password },
        });
        if (result) {
          for (let i = 0; i < result.length; i++) {
            const array = result[i];
            datas.push({
              user_id: array.dataValues.user_id,
              username: array.dataValues.username,
              password: array.dataValues.password,
              role: array.dataValues.role,
            });
          }
        }
        return datas;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
    //remove User
    async function deleteUser({id}) {
      try {
        const Users = models.users;
        const result = Users.destroy({ where: { user_id: id } });
        return result;
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
    //update User status
    async function updateUser({ data }) {
      try {
        const { user_id, password, role } = data;
        const Users = models.users;
        //update only the rule if the user doesn't fill the password
        if (password == "password") {
          const result = await Users.update(
            {
              role: role,
            },
            {
              where: { user_id: user_id },
            }
          );
          return result;
        } else {
            //update the role and password if the user change the password field
          const result = await Users.update(
            {
              password: password,
              role: role,
            },
            {
              where: { user_id: user_id },
            }
          );
          return result;
        }
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
    //fetch Username
    async function fetchUsername( {data} ) {
      try {
        const Users = models.users;
        const ArrData = []
       const result = await Users.findAll({ 
          where: { username: data.username}
        });   
        if (result) {
          for (let i = 0; i < result.length; i++) {
            const array = result[i];
            ArrData.push({ 
              username:array.dataValues.username, 
            });
          }
        }
         return ArrData;  
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
    //validating if user ID exist
    async function validateUser({id}) {
      try {
        const datas = []; 
        const Users = models.users;
        const result = await Users.findAll({
          attributes: ['user_id'],
          where: { user_id: id},
        });
        if (result) {
          for (let i = 0; i < result.length; i++) {
            const array = result[i];
            datas.push({ 
              user_id: array.dataValues.user_id, 
            });
          }
        }
        return datas; 
      } catch (error) {
        console.log("Error: ", error.message);
      }
    }
  };
  
  module.exports = Query;
  