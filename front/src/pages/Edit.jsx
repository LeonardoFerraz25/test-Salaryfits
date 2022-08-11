import React, { useEffect, useState } from 'react';
import axios from "axios";
import getCategories from '../helpers/getCategories';
import HeaderAdm from '../componentes/HeaderAdm';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const reqCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `http://localhost:3001/products/${pathname.split('/')[3]}`
    
    axios.put(URL, {
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

    setIsCreated(true);    
    navigate('/admin/dashboard')
  }

  const reqInfo = async () => {
    const id = pathname.split('/')[3];
    const URL = `http://localhost:3001/products/${id}'`
    const { data }= await axios.get(URL);
    console.log(data);
    setName(data[0].title);
    setDescription(data[0].description);
    setPrice(parseFloat(data[0].price).toFixed(2));
    setCategory(data[0].category);
    setThumbnail(data[0].thumbnail);
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
    reqInfo();
  },[])
  return (
    <div>
      <HeaderAdm />
      <h1
        className="text-4xl font-bold text-center mb-12 mt-12"
      >
        Editar Produto
      </h1>
      <form
        onSubmit={ handleSubmit }
        className="flex flex-col items-center justify-center border rounded p-4 w-[60%] m-auto relative"
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
        <div className="absolute right-16 h-[200px] w-[200px]">
          <img className="w-full h-full" src={ thumbnail } alt={ name } />
        </div>
        <button
          type='submit'
          className=" bg-blue-600 rounded flex items-center justify-center w-[15rem] py-1 text-sm font-semibold text-white mt-8"
        >
          Editar
        </button>
      </form>
      { isCreated && <h1>Produto editado com sucesso</h1> }
    </div>
  );
}