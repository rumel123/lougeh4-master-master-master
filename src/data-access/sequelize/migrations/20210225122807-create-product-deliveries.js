'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_deliveries', {
      delivery_product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      }, 
      delivery_product_name: {
        type: Sequelize.STRING
      },
      delivery_product_barcode: {
        type: Sequelize.STRING
      },
      delivery_product_subscription: {
        type: Sequelize.STRING
      },
      delivery_product_stocks: {
        type: Sequelize.INTEGER
      },
      delivery_product_expiryDate: {
        type: Sequelize.STRING
      },
      delivery_product_code: {
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
    await queryInterface.dropTable('product_deliveries');
  }
};