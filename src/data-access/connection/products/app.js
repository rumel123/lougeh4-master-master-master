const {connections} = require("../../index");
const models = require("../../sequelize/models/index")

const productQuery = require("./query"); 

const query = productQuery({ connections, models });

module.exports = query