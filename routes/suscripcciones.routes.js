const express = require('express');
const router = express.Router();
const suscripcionesController = require("../controllers/suscripcciones.controller");

router.get("/", suscripcionesController.getSuscripciones);
router.get("/:id", suscripcionesController.getSuscripcion);
router.post("/", suscripcionesController.createSuscripcion);
router.put("/:id", suscripcionesController.updateSuscripcion);
router.delete("/:id", suscripcionesController.deleteSuscripcion);

module.exports = router;
