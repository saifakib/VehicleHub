const router = require("express").Router();
const { controllers: manufacturerController } = require("../api/v1/manufacturer");
const { controllers: modelController } = require("../api/v1/model");


router.get("/api/v1/manufacturers", manufacturerController.findAll);
router.get("/api/v1/manufacturers/:id", manufacturerController.findSingle);
router.get("/api/v1/models/:id", modelController.findSingle);

module.exports = router;
