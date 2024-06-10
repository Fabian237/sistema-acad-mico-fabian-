const AlquileresService = require("../services/alquileres.services"); // Importar el servicio de alquileres
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

// Obtener todos los alquileres con filtros
const getAlquileres = asyncHandler(async (req, res) => {
  const params = req.query;
  const alquileres = await AlquileresService.getAlquileres(params); // Utilizar el servicio de alquileres
  return http.response200(res, alquileres);
});

// Obtener un alquiler por ID
const getAlquilerById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const alquiler = await AlquileresService.getAlquilerById(id); // Utilizar el servicio de alquileres
  return http.response200(res, alquiler);
});

// Crear un nuevo alquiler
const createAlquiler = asyncHandler(async (req, res) => {
  const payload = req.body;
  const nuevoAlquiler = await AlquileresService.createAlquiler(payload); // Utilizar el servicio de alquileres
  return http.response201(res, nuevoAlquiler);
});

// Actualizar un alquiler existente
const updateAlquiler = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;
  const alquilerActualizado = await AlquileresService.updateAlquiler(payload); // Utilizar el servicio de alquileres
  return http.response200(res, alquilerActualizado);
});

// Eliminar un alquiler por ID
const deleteAlquiler = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await AlquileresService.deleteAlquiler(id); // Utilizar el servicio de alquileres
  return http.response200(res);
});

module.exports = {
  getAlquileres,
  getAlquilerById,
  createAlquiler,
  updateAlquiler,
  deleteAlquiler,
};
