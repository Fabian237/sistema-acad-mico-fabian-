const router = require("express").Router();

const pagoController = require("../controllers/pagos.controller"); 

router.get(
  "/",
  pagoController.getPagos
);
router.get(
  "/:id",
  pagoController.getPagos
);
router.post(
  "/",
  pagoController.createPago
);
router.put(
  "/:id",
  pagoController.updatePago
);
router.delete(
  "/:id",
  pagoController.deletePago
);

module.exports = router;
