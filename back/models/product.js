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

const createProduct = async ({ name, price, category, description, thumbnail }) => {
	const [products] = await connection.execute(
		'INSERT INTO shopping_db.product (product_name, product_price, product_description, product_img, product_category_ID) VALUES (?, ?, ?, ?, ?)',[name, price, description, thumbnail, category]
	);
	const resultado = {
		id: products.insertId,
		title: name,
	}
	return resultado;
}

const updateProduct = async ({ id, name, price, category, description, thumbnail }) => {
	const [products] = await connection.execute(
		'UPDATE shopping_db.product SET product_name = ?, product_price = ?, product_description = ?, product_img = ?, product_category_ID = ? WHERE product_id = ?',[name, price, description, thumbnail, category, id]
	);
	const resultado = {
		rowsAffected: products.affectedRows,
		title: name,
	}
	return resultado;
}

const deleteProduct = async (productId) => {
	const [products] = await connection.execute(
		'DELETE FROM shopping_db.product WHERE product_id = ?',[productId]
	);
} 

module.exports = {
  getAll,
  getProductById,
	getProductByCategory,
	updateProduct,
	createProduct,
	deleteProduct
};