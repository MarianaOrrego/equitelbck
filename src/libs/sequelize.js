const { Sequelize } = require("sequelize");
const { config } = require("../config/config");
const { initializeModels } = require("../db/models");

const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: "postgresql",
  },
);

sequelize.sync({alter: true})
  .then(async () => {
    console.log('Database synchronized');
    await initializeModels(sequelize);
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

module.exports = { sequelize };
