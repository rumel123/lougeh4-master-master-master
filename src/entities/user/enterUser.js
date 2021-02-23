const enterUser = ({}) => {
    return function make({ username, password } = {}) {
      //validation for empty username
      if (!username) {
        throw new Error(`Username must be filled in!`);
      }
      //validation for empty password
      if (!password) {
        throw new Error(`Password must be filled in!`);
      } 
      //save Data as ObjectFreeze and make it as a function
      return Object.freeze({
        getU: () => username,
        getP: () => password, 
      });
    };
  };
  
  module.exports = enterUser;
  