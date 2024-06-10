'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bicicleta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      codigo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      estado: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      latitud: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      longitud: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      informacion_tecnica: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('bicicleta');
  }
};