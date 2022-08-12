const getProductsById = async (id) => {
  const URL = `http://192.168.80.3:3001/products/${id}`;

  const product = await fetch(URL)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

  return product;
};

export default getProductsById;