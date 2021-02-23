const prints = require("./print");

const print = prints({});
//you can send the exports to the use-case of generate or fetching data, or before initiate(validation)
//and import it as prints(headers/body, qrcode)
module.exports = { print };