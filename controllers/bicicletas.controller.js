const BicicletaService = require("../services/bicicleta.services"); // Importar el servicio de bicicletas
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getBicicletas = asyncHandler(async (req, res) => {
  const params = req.query;
  const bicicletas = await BicicletaService.getBicicletas(params); // Utilizar el servicio de bicicletas
  return http.response200(res, bicicletas);
});

const getBicicleta = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const bicicleta = await BicicletaService.getBicicleta(id); // Utilizar el servicio de bicicletas
  return http.response200(res, bicicleta);
});

const createBicicleta = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const bicicleta = await BicicletaService.createBicicleta(payload); // Utilizar el servicio de bicicletas
  return http.response201(res, bicicleta);
});

const updateBicicleta = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const bicicleta = await BicicletaService.updateBicicleta(payload); // Utilizar el servicio de bicicletas
  return http.response200(res, bicicleta);
});

const deleteBicicleta = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await BicicletaService.deleteBicicleta(id); // Utilizar el servicio de bicicletas
  return http.response200(res);
});

module.exports = {
  getBicicletas,
  getBicicleta,
  createBicicleta,
  updateBicicleta,
  deleteBicicleta,
};
