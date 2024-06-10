const express = require('express');
const router = express.Router();
const monitoreoBicicletaController = require("../controllers/monitoreo_bicicleta.controller");

router.get("/", monitoreoBicicletaController.getMonitoreosBicicleta);
router.get("/:id", monitoreoBicicletaController.getMonitoreoBicicleta);
router.post("/", monitoreoBicicletaController.createMonitoreoBicicleta);
router.put("/:id", monitoreoBicicletaController.updateMonitoreoBicicleta);
router.delete("/:id", monitoreoBicicletaController.deleteMonitoreoBicicleta);

module.exports = router;
