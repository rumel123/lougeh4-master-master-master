'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_deliveries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product_deliveries.init({
    delivery_product_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    delivery_product_name: DataTypes.STRING,
    delivery_product_barcode: DataTypes.STRING,
    delivery_product_subscription: DataTypes.STRING,
    delivery_product_stocks: DataTypes.INTEGER,
    delivery_product_expiryDate: DataTypes.STRING,
    delivery_product_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_deliveries',
  });
  return product_deliveries;
};