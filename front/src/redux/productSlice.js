import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    cart: [],
    total: 0,
  },
  reducers: {
    changeProducts(state, { payload }) {
      return { ...state, products: payload };
    },
    changeCart(state, { payload }) {
      return { ...state, cart:[...state.cart, payload ], total: state.total + payload.price };
    }
  }
});

export const { changeProducts, changeCart } = slice.actions;

export const selectProducts = state => state.store.products;

export default slice.reducer;