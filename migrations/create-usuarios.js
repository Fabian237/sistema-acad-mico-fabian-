'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      apellido: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      Email: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      informacion_contacto: {
        allowNull: false,
        type: DataTypes.STRING(60),
      },
      saldo: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};