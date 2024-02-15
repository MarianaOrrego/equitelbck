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

  async sell(productId, quantity) {
    const product = await this.findOne(productId);

    if (product.quantity < quantity) {
      throw new Error("Not enough stock available");
    }
    
    product.quantity -= quantity;
    await product.save();
    return product;
  }
  

}

module.exports = ProductsServices;
