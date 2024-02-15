const { User, UserSchema } = require("./users.models");
const { Rol, RolSchema } = require("./rol.models");
const { Products, ProductsSchema } = require("./products.models");
const { Provider, ProviderSchema } = require("./provider.models");

const { initializeRoles } = require("../initRol");
const { initializeAdminUser } = require("../initAdmin");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  Products.init(ProductsSchema, Products.config(sequelize));
  Provider.init(ProviderSchema, Provider.config(sequelize));

  User.associate({ Rol });
  Products.associate({ Provider });
}

async function initializeModels(sequelize) {
  setupModels(sequelize);

  await sequelize.sync();

  await initializeRoles();
  await initializeAdminUser();
}

module.exports = { setupModels, initializeModels };
