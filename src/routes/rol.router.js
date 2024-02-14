const express = require("express");
const router = express.Router();
const rolController = require("../controllers/rol.controller");

router
  .get("/", rolController.get)
  .get("/:id", rolController.getById);

module.exports = router;