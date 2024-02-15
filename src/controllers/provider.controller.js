const ProviderServices = require("../services/provider.services");
const service = new ProviderServices();

const createProvider = async (req, res) => {
  try {
    const provider = await service.create(req.body);
    res.status(201).json(provider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProvider = async (req, res) => {
  try {
    const provider = await service.find();
    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProviderById = async (req, res) => {
  try {
    const provider = await service.findOne(req.params.providerId);
    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProvider = async (req, res) => {
  try {
    const provider = await service.update(req.params.providerId, req.body);
    res.status(200).json(provider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeProvider = async (req, res) => {
  try {
    const provider = await service.delete(req.params.providerId);
    res.status(204).json(provider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProvider,
  getProvider,
  getProviderById,
  updateProvider,
  removeProvider,
};
