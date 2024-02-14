const { User, UserSchema } = require("./users.models");
const { Rol, RolSchema } = require("./rol.models");
const { initializeRoles } = require("../initRol");
const { initializeAdminUser } = require("../initAdmin");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));

  User.associate({ Rol });
}

async function initializeModels(sequelize) {
  setupModels(sequelize);

  await sequelize.sync();

  await initializeRoles();
  await initializeAdminUser();
}

module.exports = { setupModels, initializeModels };
