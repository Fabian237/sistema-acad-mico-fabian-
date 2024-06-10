'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alquileres', {
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
      },
      fk_bicicleta: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "monitoreo_bicicletas",
          key: "id",
        },
      },
      fecha_hora_inicio: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fecha_hora_fin: {
        allowNull:false,
        type: DataTypes.STRING(10),
      },
      tarifa: {
        allowNull:false,
        type: DataTypes.STRING(10),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alquileres');
  }
};