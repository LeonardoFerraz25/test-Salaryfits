const express = require('express');

const product = express.Router();

const { getAll, getProductById, getProductByCategory, createProduct, updateProduct,deleteProduct } = require('../models/product');

product.get('/', async (_req, res) => {
  try {
    const products = await getAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


product.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'product not found' });
  }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

product.get('/search/category/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductByCategory(id);
    if (!product) {
      return res.status(404).json({ error: 'product not found' });
  }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

product.post('/', async (req, res) => {
  const { name, price, category, description, thumbnail } = req.body;
  try {
    const product = await createProduct({ name, price, category, description, thumbnail });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

product.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description, thumbnail } = req.body;
  try {
    const product = await updateProduct({ id, name, price, category, description, thumbnail });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

product.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    res.status(200).json({ message: 'product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = product;