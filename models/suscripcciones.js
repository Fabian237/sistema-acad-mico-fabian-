"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const suscripccion = sequelize.define(
    "suscripccion",
    {
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
    },
    {
      timestamps: false,
      tableName: "suscripcciones",
    }
  );

  suscripccion.getsuscripcciones = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  suscripccion.associate = function (models) {
    
  };

  return suscripccion;
};

