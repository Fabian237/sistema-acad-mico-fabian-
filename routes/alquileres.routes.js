const router = require("express").Router();

const alquilerController = require("../controllers/alquileres.controller");

router.get(
  "/",
  alquilerController.getAlquileres
);
router.get(
  "/:id",
  alquilerController.getAlquileres
);
router.post(
  "/",
  alquilerController.createAlquiler
);
router.put(
  "/:id",
  alquilerController.updateAlquiler
);
router.delete(
  "/:id",
  alquilerController.deleteAlquiler
);

module.exports = router;
