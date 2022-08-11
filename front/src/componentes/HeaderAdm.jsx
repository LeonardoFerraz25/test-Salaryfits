import React from 'react';
import logo from '../imagens/prologo-shopping.png';
import '../css/Header.css'

export default function HeaderAdm () {

  return (
    <header className='bg-black h-[5rem] flex items-center justify-between pr-4'>
      <div className="ml-4">
        <img src={ logo } alt="logo" />
      </div>
    </header>
  );
}
