import React, { useState, useEffect } from 'react';
import Header from '../componentes/Header';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    if (target.name === 'email') setUserEmail(target.value);
    if (target.name === 'password') setUserPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  useEffect(() => {
    const MIN_LENGTH = 5;
    const emailCheck = userEmail
      .split('').includes('@') && userEmail.split('.').includes('com');
    const passwordCheck = userPassword.length > MIN_LENGTH;
    if (emailCheck && passwordCheck) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userEmail, userPassword]);
  return (
    <div>
      <Header />
      <div className="h-[500px] w-[500px] flex flex-col items-center justify-center m-auto mt-12">
        <h1
          className="text-4xl font-bold text-center mb-12"
        >
          Painel Admin
        </h1>
      <form onSubmit={ handleSubmit } className="flex flex-col items-center justify-center border rounded p-4 h-[300px]">
        <label
          htmlFor="email"
          className="text-gray-700 text-sm font-bold mb-2 flex flex-col"
        >
          <span>Email:</span>
          <input
            className="border border-gray-500 rounded p-2"
            type="email"
            name="email"
            id="email"
            onChange={ handleChange }
            value={ userEmail }
          />
        </label>
        <label
          htmlFor="password"
          className="text-gray-700 text-sm font-bold mb-2 flex flex-col"
        >
          <span>Senha:</span>
          <input
            className="border border-gray-500 rounded p-2"
            type="password"
            name="password"
            id="password"
            onChange={ handleChange }
            value={ userPassword }
          />
        </label>
        <button
          type="submit"
          disabled={ isDisabled }
          className=" bg-blue-600 rounded flex items-center justify-center w-full py-1 text-sm font-semibold text-white mt-8"
        >
          Entrar
        </button>
      </form>
      </div>
    </div>
  );
}