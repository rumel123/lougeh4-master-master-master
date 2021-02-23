const {connections} = require("../../index");
const models = require("../../sequelize/models/index")

const deliveryQuery = require("./query"); 

const query = deliveryQuery({ connections, models });

module.exports = query