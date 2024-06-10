"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const pago = sequelize.define(
    "pago",
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
    {
      timestamps: false,
      tableName: "pagos",
    }
  );

  pago.getpagos = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  pago.associate = function (models) {
    
  };

  return pago;
};

