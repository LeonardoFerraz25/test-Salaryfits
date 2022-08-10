import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/productDetails/:id' element={ <ProductDetails />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/admin' element={ <Admin />} />
      </Routes>
    </div>
  );
}

export default App;
