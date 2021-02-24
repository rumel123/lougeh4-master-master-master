'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product_orders.init({
    product_order_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    product_barcode: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_quantity: DataTypes.INTEGER,
    product_price: DataTypes.INTEGER,
    order_code: DataTypes.STRING,
    product_total: DataTypes.INTEGER, 
    original_product_id:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'product_orders',
  });
  return product_orders;
};