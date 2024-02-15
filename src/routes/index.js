const express = require("express");

const userRouter = require("./users.router");
const rolRouter = require("./rol.router");
const loginRouter = require("./login.router");
const productRouter = require("./products.router");
const providerRouter = require("./provider.router");  
const auditRouter = require("./audit.router");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);

  router.use("/users", userRouter);
  router.use("/rol", rolRouter);
  router.use("/login", loginRouter);
  router.use("/products", productRouter);
  router.use("/provider", providerRouter);
  router.use("/audit", auditRouter);
}

module.exports = routerApi;