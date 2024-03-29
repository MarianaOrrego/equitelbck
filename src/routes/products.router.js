const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controller");

router
  .get("/", productsController.getProduct)
  .get("/:productId", productsController.getProductById)
  .post("/", productsController.createProduct)
  .post("/sell/:productId", productsController.sellProduct)
  .put("/:productId", productsController.updateProduct)
  .delete("/:productId", productsController.removeProduct);

module.exports = router;
