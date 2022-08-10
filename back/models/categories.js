const connection = require('./connection');

const categoriesFormat = (categorisData) => ({
  id: categorisData.category_id,
  name: categorisData.category_name,
})

const getCategories = async () => {
  const [categories] = await connection.execute(
    'SELECT * FROM shopping_db.categories;',
  );
  return categories.map(categoriesFormat);
}

const getCategoriesID = async (categoryId) => {
  const [categories] = await connection.execute(
    'SELECT * FROM shopping_db.categories WHERE category_id = ?;',[categoryId]
  );
  return categories.map(categoriesFormat);
}

module.exports = {
  getCategories,
  getCategoriesID
};