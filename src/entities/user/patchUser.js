const patchUser = ({}) => {
  return function make(id, { password, role } = {}) {
    //validate if the id is doesn't exist
    if (!id) {
      throw new Error(`User is doesn't Exist`);
    }
    //validate if the password is empty
    if (!password) {
      throw new Error(`Please fill up the blank`);
    }
    //validate if role is empty
    if (!role) {
      throw new Error(`Please Choose Your Role`);
    }

    //return validation Data
    return Object.freeze({
      getID: () => id,
      getP: () => password,
      getR: () => role,
    });
  };
};

module.exports = patchUser;
