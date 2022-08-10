const getProducts = async () => {
  const URL = 'http://localhost:3001/products';

  const products = await fetch(URL)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

  return products;
};

export default getProducts;