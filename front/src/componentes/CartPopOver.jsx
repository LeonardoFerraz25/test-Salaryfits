import React from 'react';
import { Popover } from '@headlessui/react';
import { ShoppingCartSimple } from 'phosphor-react';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CartPopOver() {
  const products = useSelector(state => state.store.cart);
  const total = useSelector(state => state.store.total);
  return (
      <Popover className="relative">
        <Popover.Button>
          <ShoppingCartSimple size={32} className="text-white"/>
        </Popover.Button>

        <Popover.Panel className="absolute z-10 right-0 top-[3.5rem] bg-zinc-800 h-[30rem] w-[25rem] p-4">
          <div className="w-ful h-[22rem] text-gray-400 overflow-y-scroll cart-product">
            {
              products.map(iten => (
                <div className='flex items-center mb-4 h-[4rem] w-full '>
                  <img src={ iten.thumbnail } alt="produto" className='h-full mr-1' />
                  <p>{ iten.title }</p>
                  <p>{ parseFloat(iten.price).toFixed(2) }</p>
                </div>
              ))
            }
           </div>
          <p className='text-gray-400 mt-4'>Total: R$: { parseFloat(total).toFixed(2) }</p>
          <div className='absolute bottom-2 w-[90%]'>
            <Link
              to='/cart'
              className='p-2 w-full h-8 bg-[#f75400] rounded-md border-transparent flex-1 flex justify-center items-center text-sm text-zinc-800 hover:bg-[#f75200e8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#f75400] transition-colors'
            >
              Ir ao Carrinho 
            </Link>
          </div>
        </Popover.Panel>
      </Popover>
  )
}