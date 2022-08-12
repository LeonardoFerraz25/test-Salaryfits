import React from 'react';
import Header from '../componentes/Header';
import { useSelector } from 'react-redux';

export default function Cart() {
  const products = useSelector(state => state.store.cart);
  const total = useSelector(state => state.store.total);
  return (
    <div>
      <Header />
      <div className="w-[60%] border m-auto mt-24 p-8">
            {
              products.map(iten => (
                <div className='flex items-center border p-4 justify-between mb-8 h-[4rem] w-full '>
                  <img src={ iten.thumbnail } alt="produto" className='h-full mr-1' />
                  <p>{ iten.title }</p>
                  <p>R$: { parseFloat(iten.price).toFixed(2) }</p>
                </div>
              ))
            }
        <span>Total: R$: {parseFloat(total).toFixed(2)}</span>
      </div>
    </div>
  );
}