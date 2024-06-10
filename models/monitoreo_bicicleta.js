'use strict';

module.exports = (sequelize, DataTypes) => {
  const MonitoreoBicicleta = sequelize.define('MonitoreoBicicleta', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    latitud: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    longitud: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    estado_bateria: {
      allowNull: false,
      type: DataTypes.STRING(50),
    },
    fk_bicicleta: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'monitoreo_bicicletas',
        key: 'id',
      },
    },
  }, {});

  MonitoreoBicicleta.associate = function(models) {
    // associations can be defined here
  };

  return MonitoreoBicicleta;
};
