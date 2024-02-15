const { Model, DataTypes } = require("sequelize");

const PRODUCT_TABLE = "products";

class Products extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Products",
      timestamps: false,
    };
  }

  static associate(models) {
    this.belongsTo(models.Provider, {
      foreignKey: 'providerId',
      as: 'productProvider',
    });
  }
}

const ProductsSchema = {
  productId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'product_name'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'quantity'
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'price'
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'description'
  },
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'provider',
      key: 'providerId',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
};

module.exports = { Products, ProductsSchema};
