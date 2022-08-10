import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../componentes/Header';
import getProductsById from '../helpers/getProductsById';
import { useDispatch } from 'react-redux';
import { changeCart } from '../redux/productSlice';

export default function ProductDetails() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
 
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductDetail = async () => {
    const id = pathname.split('/')[2];
    const product = await getProductsById(id);
    setProduct(product);
    setIsLoading(false);
  }

  const handleClick = async () => {
    const id = pathname.split('/')[2];
    const product = await getProductsById(id);
    dispatch(changeCart(product[0]));
  }

  useEffect(() => {
    getProductDetail();
  },[])
  return (
    <div>
      <Header />
      <main>
        {isLoading 
          ? <span>Loading</span> 
          : (
            <div className="border borde-red-600 relative w-[60%] flex m-auto flex-col mt-12">
              <h1 className="font-bold text-lg text-center mb-2">{product[0].title}</h1>
              <img 
                src={product[0].thumbnail} alt={product[0].title}
                className="w-[200px] h-[200px] mt-20 ml-20"
              />
              <p
                className="text-center absolute right-32 top-32 text-gray-600 text-sm mt-4"
              >{product[0].description}</p>
              <span
                className="text-center absolute right-32 bottom-24"
              >R$ {parseFloat(product[0].price).toFixed(2)}</span>
              <button
                type='button'
                onClick={ handleClick }
                className=" bg-blue-600 rounded flex items-center justify-center m-auto mt-12 mb-8 w-[80%] py-1 text-sm font-semibold text-white"
              >
                Adicionar ao carrinho
              </button>
            </div>
          ) 
        }
          
      </main>
    </div>
  );
}