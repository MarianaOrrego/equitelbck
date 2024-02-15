const { Model, DataTypes } = require("sequelize");

const PROVIDER_TABLE = "provider";

class Provider extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROVIDER_TABLE,
      modelName: "Provider",
      timestamps: false,
    };
  }
}

const ProviderSchema = {
  providerId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  providerName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'provider_name'
  },
  nit: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'nit'
  },
  cellphone: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cellphone'
  }
};

module.exports = { Provider, ProviderSchema};
