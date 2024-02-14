const {User, UserSchema} = require('./users.models');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
}

module.exports = { setupModels };