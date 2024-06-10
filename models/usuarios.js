"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require('../config/config.js'); // Asegúrate de que esta ruta sea correcta

const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    informacion_contacto: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    saldo: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: false,
    tableName: "usuarios",
  }
);

// Método para obtener todos los usuarios
Usuario.getUsuarios = async () => {
  return await Usuario.findAll();
};

// Método para crear un usuario
Usuario.createUsuario = async (usuarioData) => {
  return await Usuario.create(usuarioData);
};

module.exports = Usuario;
