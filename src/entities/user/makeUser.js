const makeUser = ({ }) => {
  return function make({ firstname, lastname, username, password, role } = {}) {
    //validation for empty fistname
    if (!firstname) {
      throw new Error(`firstname must be filled out!`);
    }
      //validation for empty lastname
      if (!lastname) {
        throw new Error(`lastname must be filled out!`);
      }
    //validation for empty username
    if (!username) {
      throw new Error(`Username must be filled out!`);
    }
    //validation for empty password
    if (!password) {
      throw new Error(`Password must be filled out!`);
    }
    //validation for empty role
    if (!role) {
      throw new Error(`Must choose a role for this user!`);
    }
    //save Data as ObjectFreeze and make it as a function
    return Object.freeze({
      getF: () => firstname,
      getL: () => lastname,
      getU: () => username,
      getP: () => password,
      getR: () => role,
    });
  };
};

module.exports = makeUser;
