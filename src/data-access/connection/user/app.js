const {connections} = require("../../index");
const models = require("../../sequelize/models/index")

const Query = require("./query");


const query = Query({ connections, models });

module.exports = query