const { sequelize } = require("../libs/sequelize");

class RolServices {
  constructor() {}

  async find() {
    const res = await sequelize.models.Rol.findAll();
    return res;
  }

  async findOne(id) {
    const res = await sequelize.models.Rol.findByPk(id);
    return res;
  }

}

module.exports = RolServices;
