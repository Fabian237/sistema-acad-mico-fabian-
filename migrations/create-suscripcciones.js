'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suscripcciones', {
      fk_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      tipo_suscripcion: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fecha_inicio: {
        allowNull: false,
        type:DataTypes.INTEGER,
      },
      fecha_fin: {
        allowNull: false,
        type:DataTypes.INTEGER,
      },
      beneficios: {
        allowNull: false,
        type:DataTypes.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('suscripcciones');
  }
};