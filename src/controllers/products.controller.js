const ProductsServices = require("../services/products.services");
const service = new ProductsServices();

const createProduct = async (req, res) => {
  try {
    const product = await service.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await service.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await service.findOne(req.params.productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await service.update(req.params.productId, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const product = await service.delete(req.params.productId);
    res.status(204).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const sellProduct = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await service.findOne(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock available" });
    }
    const updatedProduct = await service.sell(productId, quantity);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  removeProduct,
  sellProduct
};
