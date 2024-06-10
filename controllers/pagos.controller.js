const PagoService = require("../services/pagos.services"); // Importar el servicio de pagos
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getPagos = asyncHandler(async (req, res) => {
  const params = req.query;
  const pagos = await PagoService.getPagos(params); // Utilizar el servicio de pagos
  return http.response200(res, pagos);
});

const getPago = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const pago = await PagoService.getPago(id); // Utilizar el servicio de pagos
  return http.response200(res, pago);
});

const createPago = asyncHandler(async (req, res) => {
  const payload = req.body;
  
  const pago = await PagoService.createPago(payload); // Utilizar el servicio de pagos
  return http.response201(res, pago);
});

const updatePago = asyncHandler(async (req, res) => {
  const payload = req.body;
  payload.id = req.params.id;

  const pago = await PagoService.updatePago(payload); // Utilizar el servicio de pagos
  return http.response200(res, pago);
});

const deletePago = asyncHandler(async (req, res) => {
  const id = req.params.id;

  await PagoService.deletePago(id); // Utilizar el servicio de pagos
  return http.response200(res);
});

module.exports = {
  getPagos,
  getPago,
  createPago,
  updatePago,
  deletePago,
};
