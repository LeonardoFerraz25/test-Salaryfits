const getProductsByCategory = async (categoryId) => {
  const URL = `http://192.168.80.3:3001/products/search/category/${categoryId}`;

  const products = await fetch(URL)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

  return products;
};

export default getProductsByCategory;