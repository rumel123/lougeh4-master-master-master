const OrdersValidations = ({randomString}) => {
  return function post({
    customer_name,
    customer_address,
    contact_number,
  } = {}) {
      //validate if empty
    if (!customer_name) throw new Error("Please Fill up Blank fields!");
    if (!customer_address) throw new Error("Please Fill up Blank fields!");
    if (!contact_number) throw new Error("Please Fill up Blank fields!");
    const rand = randomString.generate({
        length: 5,
        charset: "alphabetic",
      })
    
    return Object.freeze({
      Getcustomer: () => customer_name,
      Getaddress: () => customer_address,
      Getnumber: () => contact_number,
      GetRand : () => rand,
    });
  };
};

module.exports = OrdersValidations;
