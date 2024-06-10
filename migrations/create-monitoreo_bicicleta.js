'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('monitoreo_bicicletas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitud: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      longitud: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      estado_bateria: {
        allowNull: false,
        type: DataTypes.STRING(50)
      },
      fk_bicicleta: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "bicicletas"
          },
          key: "id",
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('monitoreo_bicicletas');
  }
};
