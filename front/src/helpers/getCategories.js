const getCategories = async () => {
  const URL = 'http://localhost:3001/categories';

  const categories = await fetch(URL)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err));

  return categories;
};

export default getCategories;