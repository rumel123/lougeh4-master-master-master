'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purchases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  purchases.init({
    product_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    quantity_purchased: DataTypes.INTEGER,
    cost_of_purchased: DataTypes.INTEGER,
    date_of_purchase: DataTypes.DATE,
    order_id: DataTypes.INTEGER,
    tax: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'purchases',
  });
  return purchases;
};