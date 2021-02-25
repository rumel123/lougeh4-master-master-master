'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      product_barcode: {
        type: Sequelize.STRING
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_description: {
        type: Sequelize.STRING
      },
      cost_unit: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      stocks: {
        type: Sequelize.INTEGER
      },
      Expiry_date: {
        type: Sequelize.STRING
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};