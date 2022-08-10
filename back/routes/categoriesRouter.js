const express = require('express');

const categories = express.Router();

const { getCategories, getCategoriesID } = require('../models/categories');

categories.get('/', async (_req, res) => {
  try {
    const products = await getCategories();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


categories.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getCategoriesID(id);
    if (!product) {
      return res.status(404).json({ error: 'category not found' });
  }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = categories;