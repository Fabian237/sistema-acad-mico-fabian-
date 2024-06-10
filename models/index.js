const express = require('express');
const router = express.Router();

// Importa tus rutas
const usuariosRoutes = require('../routes/usuarios.routes');
const bicicletaRoutes = require('../routes/bicicleta.routes');
const monitoreoBicicletaRoutes = require('../routes/monitoreo_bicicleta.routes');
const suscripcionRoutes = require('../routes/suscripcciones.routes');
// Usa las rutas
router.use('/usuarios', usuariosRoutes);
router.use('/bicicletas', bicicletaRoutes);
router.use('/monitoreo-bicicletas', monitoreoBicicletaRoutes);
router.use('/suscripciones', suscripcionRoutes);

// Middleware para verificar la correcta definición de las funciones de middleware
router.use((req, res, next) => {
  // Verifica si se está pasando un middleware correctamente
  if (typeof next !== 'function') {
    throw new TypeError('Router.use() requires a middleware function but got a ' + (typeof next));
  }
  // Llama al siguiente middleware
  next();
});
module.exports = router;
