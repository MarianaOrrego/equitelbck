const { sequelize } = require("../libs/sequelize");

class AuditServices {
  constructor() {}

  async create(data) {
    try {
      const audit = await sequelize.models.Audit.create(data);
      return audit;
    } catch (error) {
      throw new Error(`Error creating audit: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const audits = await sequelize.models.Audit.findAll();
      return audits;
    } catch (error) {
      throw new Error(`Error fetching audits: ${error.message}`);
    }
  }

}

module.exports = AuditServices;
