const express = require("express");

const userRouter = require("./users.router");
const rolRouter = require("./rol.router");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);

  router.use("/users", userRouter);
  router.use("/rol", rolRouter);
}

module.exports = routerApi;