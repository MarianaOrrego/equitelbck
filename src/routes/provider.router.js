const express = require("express");
const router = express.Router();
const ProviderController = require("../controllers/provider.controller");

router
  .get("/", ProviderController.getProvider)
  .get("/:providerId", ProviderController.getProviderById)
  .post("/", ProviderController.createProvider)
  .put("/:providerId", ProviderController.updateProvider)
  .delete("/:providerId", ProviderController.removeProvider);

module.exports = router;
