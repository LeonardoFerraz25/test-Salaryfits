import React from 'react';
import MenuDrop from './MenuDrop';
import { useDispatch } from 'react-redux';
import { changeProducts } from '../redux/productSlice';
import getProductsByCategory from '../helpers/getProductByCategory';

export default function NavBar() {
  const dispatch = useDispatch();

  const reqProductsByCategory = async (categoryId) => {
    const products = await getProductsByCategory(categoryId) 
    dispatch(changeProducts(products));
    
  }

  return (
    <nav className="border borde-red-600 flex items-center justify-around h-8">
      <MenuDrop />
      <button
        className='hover:text-orange-500'
        onClick={ () => reqProductsByCategory(17) }
      >
        Informatica
      </button>
      <button
        className='hover:text-orange-500'
        onClick={ () => reqProductsByCategory(16) }
      >
        Games
      </button>
      <button
        className='hover:text-orange-500'
        onClick={ () => reqProductsByCategory(19) }
      >
        livros
      </button>
    </nav>
  )
}
