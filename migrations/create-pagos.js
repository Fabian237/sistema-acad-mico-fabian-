'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pagos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        },
        monto: {
          allowNull: false,
          type: DataTypes.STRING(50),
        },
        fecha: {
          allowNull: false,
          type: DataTypes.STRING(50),
        },
        metodo_pago: {
          allowNull: false,
          type: DataTypes.STRING(50),
        },
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('pagos');
  }
};