const {models} = require('../libs/sequelize');

class UserServices {
  constructor() {}

  async find(){
    const res = await models.User.findAll();
    return res;
  }

  async findOne(id){
    const res = await models.User.findByPk(id);
    return res;
  }

  async create(data){
    const res = await models.User.create(data);
    return res;
  }

  async update(id, data){
    const res = await models.User.update(data, {where: {id}});
    return res;
  }

  async delete(id){
    const res = await models.User.destroy({where: {id}});
    return res;
  }

  async findByUsername(username){
    const res = await models.User.findOne({where: {username}});
    return res;
  }

}

module.exports = UserServices;