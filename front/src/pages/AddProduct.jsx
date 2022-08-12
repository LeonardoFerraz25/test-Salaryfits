import React, { useEffect, useState } from 'react';
import axios from "axios";
import getCategories from '../helpers/getCategories';
import HeaderAdm from '../componentes/HeaderAdm';

export default function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  const reqCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = 'http://192.168.80.3:3001/products'
    
    axios.post(URL, {
      name,
      price,
      category,
      description,
      thumbnail
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    setName('');
    setDescription('');
    setPrice(0);
    setCategory('');
    setThumbnail('');
    setIsCreated(true);    

  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'price':
        setPrice(Number(value));
        break;
      case 'category':
        setCategory(Number(value));
        break;
      case 'img':
        setThumbnail(value);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    reqCategories();
  },[])
  return (
    <div>
      <HeaderAdm />
      <h1
        className="text-4xl font-bold text-center mb-12 mt-12"
      >
        Adiconar novo Produto
      </h1>
      <form
        onSubmit={ handleSubmit }
        className="flex flex-col items-center justify-center border rounded p-4 w-[60%] m-auto mb-8"
      >
      <label
        htmlFor="title"
        className="text-gray-700 text-sm font-bold mb-2 flex flex-col"
      >
          <span>Nome do Produto:</span>
          <input
            className="border border-gray-500 rounded p-2 w-[20rem]"
            type="text"
            name="title"
            id="title"
            onChange={ handleChange }
            value={ name }
          />
        </label>
        <label
          htmlFor="description"
          className="text-gray-700 text-sm font-bold mb-2 flex flex-col"
        >
          <span>Descrição:</span>
          <input
            className="border border-gray-500 rounded p-2 h-16 w-[20rem]"
            type="text"
            name="description"
            id="description"
            onChange={ handleChange }
            value={ description }
          />
        </label>
        <label
          htmlFor="price"
          className="text-gray-700 text-sm font-bold mb-2 flex flex-col"
        >
          <span>Preço:</span>
          <input
            className="border border-gray-500 rounded p-2 w-[20rem]"
            type="number"
            name="price"
            id="price"
            onChange={ handleChange }
            value={ price }
          />
        </label>
        <label
          htmlFor="img"
          className="text-gray-700 text-sm font-bold mb-2 flex flex-col"
        >
          <span>URL da imagem:</span>
          <input
            className="border border-gray-500 rounded p-2 w-[20rem]"
            type="text"
            name="img"
            id="img"
            onChange={ handleChange }
            value={ thumbnail }
          />
        </label>
        <label
          className="text-gray-700 text-sm font-bold mb-2 flex flex-col"
          htmlFor="category"
        >
            Categoria:
            <select
              className="border border-gray-500 rounded p-2 bg-white w-[20rem]"
              onChange={ handleChange }
              value={ category }
              name="category"
              id="category"
            >
              {
                categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))
              }
            </select>
          </label>
          <button
            type='submit'
            className=" bg-blue-600 rounded flex items-center justify-center w-[15rem] py-1 text-sm font-semibold text-white mt-8"
          >
            Adicionar
          </button>
      </form>
      { isCreated && (
      <div className="fixed top-[50vh] left-[60vh]">
        <h1
          className="rounded py-4 px-12 bg-green-600 text-center text-white text-4xl font-bold"
        >
          Produto adicionado com sucesso
        </h1>
        <button
          className='absolute z-10 top-1 right-2 text-white font-bold'
          onClick={ () => setIsCreated(false) }
        >
          x
        </button>
      </div>
      )}
    </div>
  );
}