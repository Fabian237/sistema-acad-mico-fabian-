"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const leccion = sequelize.define(
    "leccion",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      url: {
        allowNull: false,
        type:DataTypes.INTEGER,
      },
      fk_seccion: {
        allowNull: false, 
        type: DataTypes.INTEGER,
        references: {
          model: "secciones",
          key: "id"
        }
      }
    },
    {
      timestamps: false,
      tableName: "lecciones",
    }
  );

  profesor.getProfesores = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  profesor.associate = function (models) {
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return profesor;
};
