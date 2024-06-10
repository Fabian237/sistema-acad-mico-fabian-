const router = require("express").Router();

const v1 = "v1";

router.use(`/${v1}/alquileres`, require("./alquileres.routes"));
router.use(`/${v1}/biciletas`, require("./bicicleta.routes"));
router.use(`/${v1}/monitoreo_bicileta`, require("./monitoreo_bicicleta.routes"));
router.use(`/${v1}/suscripcciones`, require("./suscripcciones.routes"));
router.use(`/${v1}/usuarios`, require("./usuarios.routes"));
router.use(`/${v1}/pagos`, require("./pagos.routes"));

module.exports = router;
