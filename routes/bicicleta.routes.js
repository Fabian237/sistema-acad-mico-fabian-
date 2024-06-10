const router = require("express").Router();
const bicicletaController = require("../controllers/bicicletas.controller");

router.get("/", bicicletaController.getBicicletas);
router.get("/:id", bicicletaController.getBicicleta);
router.post("/", bicicletaController.createBicicleta);
router.put("/:id", bicicletaController.updateBicicleta);
router.delete("/:id", bicicletaController.deleteBicicleta);

module.exports = router;
