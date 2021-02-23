'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  orders.init({
    order_id:  {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_code: DataTypes.STRING,
    order_date: DataTypes.DATE,
    total_payment: DataTypes.INTEGER,
    customer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};