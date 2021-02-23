const {connections} = require("../../index");
const models = require("../../sequelize/models/index")

const customerQuery = require("./query");
//attached to the query page the connection of sequelize and postgres

const query = customerQuery({ connections, models });

module.exports = query