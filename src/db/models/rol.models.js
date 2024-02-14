const { Model, DataTypes } = require("sequelize");

const ROL_TABLE = "rol";

class Rol extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROL_TABLE,
      modelName: "Rol",
      timestamps: false,
    };
  }
}

const RolSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'rol'
  },
};

module.exports = { Rol, RolSchema};