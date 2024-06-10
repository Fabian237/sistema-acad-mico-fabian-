"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const bicicletas = sequelize.define(
    "biciletas",
    {
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
    },
    {
      timestamps: false,
      tableName: "bicicletas",
    }
  );

  bicicletas.getbicicletas = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  bicicletas.associate = function (models) {
   
  };

  return bicicletas;
};

