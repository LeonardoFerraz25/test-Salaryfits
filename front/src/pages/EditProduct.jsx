import React, { useEffect, useState } from 'react';
import axios from "axios";
import getProducts from '../helpers/getProducts';
import HeaderAdm from '../componentes/HeaderAdm';
import { useNavigate } from 'react-router-dom';

export default function EditProduct() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const requestProducts = async () => {
    const dataProducts = await getProducts();
    setProducts(dataProducts);
  }

  const deleteProduct = async (id) => {
    console.log(id);
    const URL = `http://localhost:3001/products/${id}`;
    await axios.delete(URL);
    requestProducts();
  }

  const setEditProduct = (id) => {
    navigate(`/admin/edit/${id}`);
  }
  
  useEffect(() => {
    requestProducts()
  }, []);
  return (
    <div>
      <HeaderAdm />
      <div
        className="flex flex-col justify-around w-[80%] m-auto py-12"
      >
        {
          products.map(product => (
            <div  
              key={ product.id }
              className="flex flex-col justify-around w-[80%] h-[15rem] m-auto border px-4 mb-8 rounded pb-4 relative"
            >
              <h1
                className="text-xl font-bold mb-8 mt-4"
              >{ product.title }</h1>
              <p>{ product.description }</p>
              <p>R$: { parseFloat(product.price).toFixed(2) }</p>
              <div
                className="absolute right-12"
              >
                <img src={ product.thumbnail } alt={ product.name } />
              </div>
              <div
                className="flex items-center"
              >
                <button
                  type='button'
                  onClick={ () => setEditProduct(product.id) }
                  className=" bg-blue-600 rounded flex items-center justify-center w-[15rem] py-1 text-sm font-semibold text-white mt-8"
                >
                  Editar Produto 
                </button>
                <button
                  type='button'
                  onClick={ () => deleteProduct(product.id) }
                  className=" bg-red-600 rounded flex items-center justify-center w-[15rem] py-1 text-sm font-semibold text-white mt-8 ml-8"
                >
                  Deletar Produto
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
