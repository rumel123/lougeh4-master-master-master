const {connections} = require("../../index");
const models = require("../../sequelize/models/index")

const supplierQuery = require("./query");


const query = supplierQuery({ connections, models });

module.exports = query