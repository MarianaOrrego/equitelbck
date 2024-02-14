const { Model, DataTypes } = require("sequelize");

const USER_TABLE = "users";

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: true,
    };
  }
}

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'username'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'password'
  },
};

module.exports = { User, UserSchema};
