'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product.init({
    product_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    product_barcode: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_description: DataTypes.STRING,
    cost_unit: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stocks: DataTypes.INTEGER,
    Expiry_date: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};