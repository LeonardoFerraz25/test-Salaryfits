import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAdm from '../componentes/HeaderAdm';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderAdm />
      <div 
        className="h-[500px] w-[60%] flex items-center justify-around m-auto mt-12"
      >
        <button
          type="button"
          onClick={ () => navigate('/admin/dashboard/add') }
          className=" bg-blue-600 rounded flex items-center justify-center h-[5rem] w-[15rem] py-1 text-sm font-semibold text-white"
        >
          Adicionar novo Produto
        </button>
        <button
          type="button"
          onClick={ () => navigate('/admin/dashboard/edit') }
          className=" bg-blue-600 rounded flex items-center justify-center h-[5rem] w-[15rem] py-1 text-sm font-semibold text-white"
        >
          Editar/Deletar Produto
        </button> 
      </div>
    </div>
  );
}