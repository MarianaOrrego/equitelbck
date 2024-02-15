const auditServices = require("../services/audit.services");
const Audit = new auditServices();

const getAllAuditEntries = async (req, res) => {
  try {
    const auditEntries = await Audit.findAll();
    res.json(auditEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAuditEntries,
};
