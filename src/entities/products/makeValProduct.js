const makeProducts = ({randomString}) => {
  return function make({ Supplier, Date_Received } = {}) {
    //validate all fields to insert
    if (!Supplier) throw new Error("Please Fill up Blank fields!");
    if (!Date_Received) throw new Error("Please Fill up Blank fields!");
  
    const rand = randomString.generate({
        length: 5,
        charset: "alphabetic",
      })
    return Object.freeze({
        GetSupplier: () => Supplier,
        GetDate_Received: () => Date_Received,
        GetRand : () => rand,
    });
  };
};
module.exports = makeProducts;
