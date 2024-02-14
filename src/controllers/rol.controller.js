const RolServices = require("../services/rol.services");
const service = new RolServices();

const get = async (req, res) => {
  try {
    const rol = await service.find();
    res.status(200).json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const rol = await service.findOne(req.params.id);
    res.status(200).json(rol);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get,
  getById,
};
