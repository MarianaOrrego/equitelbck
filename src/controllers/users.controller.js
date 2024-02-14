const PersonService = require("../services/users.services");
const service = new PersonService();

const create = async (req, res) => {
  try {
    const person = await service.create(req.body);
    res.status(201).json(person);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const get = async (req, res) => {
  try {
    const person = await service.find();
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const person = await service.findOne(req.params.id);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const person = await service.update(req.params.id, req.body);
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const person = await service.delete(req.params.id);
    res.status(204).json(person);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  get,
  getById,
  update,
  remove,
};
