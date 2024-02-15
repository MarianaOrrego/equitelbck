const { sequelize } = require("../libs/sequelize");

class ProductsServices {
  constructor() {}

  async find() {
    const res = await sequelize.models.Products.findAll();
    return res;
  }

  async findOne(productId) {
    const res = await sequelize.models.Products.findByPk(productId);
    return res;
  }

  async create(data) {
    const res = await sequelize.models.Products.create(data);
    return res;
  }

  async update(productId, data) {  
    const res = await sequelize.models.Products.update(data, { where: { productId } });
    return res;
  }

  async delete(productId) {
    const res = await sequelize.models.Products.destroy({ where: { productId } });
    return res;
  }

}

module.exports = ProductsServices;
