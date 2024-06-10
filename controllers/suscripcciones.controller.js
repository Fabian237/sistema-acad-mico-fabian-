const SuscripcionService = require("../services/suscripcciones.services");
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getSuscripciones = asyncHandler(async (req, res) => {
  const params = req.query;
  const suscripciones = await SuscripcionService.getSuscripciones(params);
  return http.response200(res, suscripciones);
});

const getSuscripcion = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const suscripcion = await SuscripcionService.getSuscripcion(id);
  return http.response200(res, suscripcion);
});

const createSuscripcion = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const suscripcion = await SuscripcionService.createSuscripcion(payload);
  return http.response201(res, suscripcion);
});

const updateSuscripcion = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const suscripcion = await SuscripcionService.updateSuscripcion(payload);
  return http.response200(res, suscripcion);
});

const deleteSuscripcion = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await SuscripcionService.deleteSuscripcion(id);
  return http.response200(res);
});

module.exports = {
  getSuscripciones,
  getSuscripcion,
  createSuscripcion,
  updateSuscripcion,
  deleteSuscripcion,
};
