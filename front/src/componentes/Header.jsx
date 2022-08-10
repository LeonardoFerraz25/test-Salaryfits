import React, { useState } from 'react';
import logo from '../imagens/prologo-shopping.png';
import { MagnifyingGlass } from 'phosphor-react';
import CartPopOver from './CartPopOver';
import { useDispatch, useSelector } from 'react-redux';
import { changeProducts } from '../redux/productSlice';
import { useLocation } from 'react-router-dom';
import '../css/Header.css'

export default function Header () {
  const dispatch = useDispatch();
  const products = useSelector(state => state.store.products);
  const [search, setSearch] = useState('');
  const { pathname } = useLocation();
  
  const handleSearch = (e) =>  {
    e.preventDefault();
    const dataProducts = products.filter(product => product.title.includes(search));
    dispatch(changeProducts(dataProducts));
  }

  const handleChange = ({target}) => {
    console.log(target.value);
    setSearch(target.value);
  }

  return (
    <header className='bg-black h-[5rem] flex items-center justify-between pr-4'>
      <div className="ml-4">
        <img src={ logo } alt="logo" />
      </div>
      { pathname === '/' && (
        <form
        className='flex items-center  w-[50%]'
        onSubmit={ handleSearch }
      >
        <input
          className='form-control mr-3'
          type="text"
          placeholder='Buscar por produtos, marcas e tudo que precisar...'
          onChange={ handleChange }
        />
        <button type="submit">
          <MagnifyingGlass size={32} className="text-white" />
        </button>
      </form>
      )}
      <div>
        <CartPopOver />
      </div>
    </header>
  );
}
