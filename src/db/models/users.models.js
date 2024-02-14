const { Model, DataTypes } = require("sequelize");

const USER_TABLE = "users";

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }

  static associate(models) {
    this.belongsTo(models.Rol, {
      foreignKey: 'rolId',
      as: 'rol',
    });
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
  rolId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'rol',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
};

module.exports = { User, UserSchema};
