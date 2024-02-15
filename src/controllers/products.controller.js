const ProductsServices = require("../services/products.services");
const AuditServices = require("../services/audit.services");
const service = new ProductsServices();
const auditService = new AuditServices();

const createProduct = async (req, res) => {
  try {
    const product = await service.create(req.body);

    await auditService.create({
      action: "Producto Creado",
      createdBy: product.userId,
      details: `ID del producto: ${product.productId}, Nombre: ${product.productName}`,
    });

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
    const user = await service.findOne(req.params.productId);

    await auditService.create({
      action: "Producto actualizado",
      createdBy: user.userId, 
      details: `ID del producto: ${product.productId}`,
    });

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const user = await service.findOne(req.params.productId);
    const product = await service.delete(req.params.productId);

    await auditService.create({
      action: "Producto eliminado",
      createdBy: user.userId, 
      details: `ID del producto: ${product.productId}`,
    });

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

    await auditService.create({
      action: "Producto vendido",
      createdBy: product.userId, 
      details: `ID del producto: ${product.productId}, Cantidad: ${quantity}`,
    });
    
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
