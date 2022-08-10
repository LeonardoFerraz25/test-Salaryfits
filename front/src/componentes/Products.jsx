import React, { useEffect } from 'react';
import getProducts from '../helpers/getProducts';
import  ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { changeProducts } from '../redux/productSlice';

export default function Products() {

const products = useSelector(state => state.store.products);

const dispatch = useDispatch();
const requestProducts = async () => {
  const dataProducts = await getProducts();
  dispatch(changeProducts(dataProducts));
}

  useEffect(() => {
    requestProducts()
  }, []);
  return (
    <div
      className="flex flex-wrap justify-center mt-10"
    >
      <ProductCard products={ products } />
    </div>
  )
}