const connection = require('./connection');

const serialize = (productData) => ({
	id: productData.product_id,
	title: productData.product_name,
	price: productData.product_price,
	description: productData.product_description,
	thumbnail: productData.product_img,
  categoryID: productData.product_category_ID,
});

const getAll = async () => {
	const [products] = await connection.execute(
		'SELECT * FROM shopping_db.product;',
	);
	return products.map(serialize);
};

const getProductById = async (productId) => {
	const [products] = await connection.execute(
		'SELECT * FROM shopping_db.product WHERE product_id = ?;',[productId]
	);
	return products.map(serialize);
};

const getProductByCategory = async (categoryId) => {
	const [products] = await connection.execute(
		'SELECT * FROM shopping_db.product WHERE product_category_ID = ?;',[categoryId]
	);
	return products.map(serialize);
};

module.exports = {
  getAll,
  getProductById,
	getProductByCategory
};