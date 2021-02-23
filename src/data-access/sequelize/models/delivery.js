'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  delivery.init({
    delivery_id:  {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    suppliername: DataTypes.STRING,
    delivery_received_date: DataTypes.DATE,
    delivery_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'delivery',
  });
  return delivery;
};