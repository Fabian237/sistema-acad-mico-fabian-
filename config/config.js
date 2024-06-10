require('dotenv').config();

//module.exports = {
  //development: {
    //username: process.env.DB_USER,
    //password: process.env.DB_PASS,
    //database: process.env.DB_NAME,
    //host: process.env.DB_HOST,
    //dialect: process.env.DB_DIALECT
  //},
//};

const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize({
  dialect: 'postgres', // Tipo de base de datos
  host: 'localhost',   // Host de la base de datos
  port: 5432,          // Puerto de la base de datos
  username: 'postgres', // Nombre de usuario de la base de datos
  password: 'fabis2005', // Contraseña de la base de datos
  database: 'db_greenride', // Nombre de la base de datos
});

// Verificar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
