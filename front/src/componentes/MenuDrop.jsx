import React, { useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import { CaretDown } from 'phosphor-react';
import getCategories from '../helpers/getCategories';
import { useDispatch } from 'react-redux';
import { changeProducts } from '../redux/productSlice';
import getProductsByCategory from '../helpers/getProductByCategory';

export default function MenuDrop() {
const [categories, setCategories] = useState([]);

const dispatch = useDispatch();
const reqProductsByCategory = async (categoryId) => {
  const products = await getProductsByCategory(categoryId) 
  dispatch(changeProducts(products));
  
}

  const requestCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  }

  useEffect(() => {
    requestCategories();
  }, [])
  return (
    <Menu>
      <Menu.Button className='flex items-center hover:text-orange-500'>
       <span><CaretDown size={28} /></span> Categorias
      </Menu.Button>
      <Menu.Items className='flex absolute left-2 top-28 z-10 p-4 flex-col justify-around bg-zinc-800  w-[20rem] transition-all'>
        {categories.map(category => (
          <Menu.Item key={category.id}>
              <button
                onClick={ () => reqProductsByCategory(category.id) }
                className='hover:bg-[#f75400] text-white h-[3rem] flex items-center my-4'
              >
                {category.name}
              </button>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}