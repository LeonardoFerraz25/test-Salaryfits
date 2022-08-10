import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ products }) {
  return (
    <div className="flex flex-wrap justify-around w-[90%]">
      {products.map(product => (
        <div key={ product.id } className="p-2 mx-4 ">
          <div className="bg-white rounded-md shadow-md overflow-hidden w-[250px] h-[400px] relative
          hover:shadow-2xl transition-all mb-8">
            
            <img src={ product.thumbnail } alt={ product.title } className="w-[250px] h-[200px]" />
            
            <div className="px-4 py-2">
              <p className="font-bold text-lg mb-2">{ product.title }</p>
            </div>
            
            <span className="bg-gray-200 absolute left-6 bottom-14 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-8 ">
              R$ { parseFloat(product.price).toFixed(2) }
            </span>
            <Link
              to={ `/productDetails/${product.id}` }
              className=" bg-blue-600 rounded flex items-center justify-center absolute bottom-4 left-6 w-[80%] py-1 text-sm font-semibold text-white"
            >
              Comprar
            </Link>
            
          </div>
        </div>
      ))}
    </div>
  );
}