const { sequelize } = require("../libs/sequelize");

class ProviderServices {
  constructor() {}

  async find() {
    const res = await sequelize.models.Provider.findAll();
    return res;
  }

  async findOne(providerId) {
    const res = await sequelize.models.Provider.findByPk(providerId);
    return res;
  }

  async create(data) {
    const res = await sequelize.models.Provider.create(data);
    return res;
  }

  async update(providerId, data) {  
    const res = await sequelize.models.Provider.update(data, { where: { providerId } });
    return res;
  }

  async delete(providerId) {
    const res = await sequelize.models.Provider.destroy({ where: { providerId } });
    return res;
  }

}

module.exports = ProviderServices;
