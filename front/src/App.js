import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Edit from './pages/Edit';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/productDetails/:id' element={ <ProductDetails />} />
        <Route path='/cart' element={ <Cart />} />
        <Route path='/admin' element={ <Admin />} />
        <Route path='/admin/dashboard' element={ <Dashboard />} />
        <Route path='/admin/dashboard/add' element={ <AddProduct />} />
        <Route path='/admin/dashboard/edit' element={ <EditProduct />} />
        <Route path='/admin/edit/:id' element={ <Edit />} />
      </Routes>
    </div>
  );
}

export default App;
