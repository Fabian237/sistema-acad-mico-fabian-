"use strict";

const { QueryTypes } = require("sequelize");
const alquilerService = require("../services/alquileres.services");

module.exports = (sequelize, DataTypes) => {
  const alquiler = sequelize.define(
    "alquiler",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
    },
    {
      timestamps: false,
      tableName: "alquileres",
    }
  );

  alquiler.getalquileres = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  alquiler.associate = function (models) {
  
  };

  return alquiler;
};

