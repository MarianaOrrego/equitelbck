const { sequelize } = require("../libs/sequelize");
const bcrypt = require('bcrypt');

class UserServices {
  constructor() {}

  async find() {
    const res = await sequelize.models.User.findAll();
    return res;
  }

  async findOne(id) {
    const res = await sequelize.models.User.findByPk(id);
    return res;
  }

  async create(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;

    const res = await sequelize.models.User.create(data);
    return res;
  }

  async update(id, data) {
    if (data.password) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
    }
  
    const res = await sequelize.models.User.update(data, { where: { id } });
    return res;
  }

  async delete(id) {
    const res = await sequelize.models.User.destroy({ where: { id } });
    return res;
  }

  async findByUsername(username) {
    const res = await sequelize.models.User.findOne({ where: { username } });
    return res;
  }
}

module.exports = UserServices;
