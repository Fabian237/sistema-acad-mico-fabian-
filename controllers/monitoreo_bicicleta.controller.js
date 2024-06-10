const MonitoreoBicicletaService = require("../services/monitoreo_bicicleta.services"); 
const asyncHandler = require("../middlewares/async-handler");
const http = require("../helpers/http");

const getMonitoreosBicicleta = asyncHandler(async (req, res) => {
  try {
    const params = req.query;
    const monitoreos_bicicleta = await MonitoreoBicicletaService.getMonitoreo_bicicleta(params);
    return http.response200(res, monitoreos_bicicleta);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return http.response500(res, "Error interno del servidor");
  }
});

const getMonitoreoBicicleta = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const monitoreo_bicicleta = await MonitoreoBicicletaService.getMonitoreo_bicicleta(id);
    return http.response200(res, monitoreo_bicicleta);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return http.response500(res, "Error interno del servidor");
  }
});

const createMonitoreoBicicleta = asyncHandler(async (req, res) => {
  try {
    const payload = req.body;
    const monitoreo_bicicleta = await MonitoreoBicicletaService.createMonitoreo_bicicleta(payload);
    return http.response201(res, monitoreo_bicicleta);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return http.response500(res, "Error interno del servidor");
  }
});

const updateMonitoreoBicicleta = asyncHandler(async (req, res) => {
  try {
    const payload = req.body;
    payload.id = req.params.id;
    const monitoreo_bicicleta = await MonitoreoBicicletaService.updateMonitoreo_bicicleta(payload);
    return http.response200(res, monitoreo_bicicleta);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return http.response500(res, "Error interno del servidor");
  }
});

const deleteMonitoreoBicicleta = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    await MonitoreoBicicletaService.deleteMonitoreo_bicicleta(id);
    return http.response200(res);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    return http.response500(res, "Error interno del servidor");
  }
});

module.exports = {
  getMonitoreosBicicleta,
  getMonitoreoBicicleta,
  createMonitoreoBicicleta,
  updateMonitoreoBicicleta,
  deleteMonitoreoBicicleta,
};
