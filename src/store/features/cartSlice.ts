import type { ProductInCart } from '@/@types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  cartProducts: ProductInCart[];
};

const initialState: CartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<ProductInCart>) => {
      state.cartProducts.push(action.payload);
      // console.log('ACTION = ADDTASK');
      // console.log('state actuel', state);
      // console.log(action);
    },
    emptyCart: (state) => {
      state.cartProducts = [];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload,
      );
    },
    updateCartProduct: (state, action: PayloadAction<number>) => {
      const product = state.cartProducts.find((p) => p.id === action.payload);
      if (product) {
        product.quantity++;
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const product = state.cartProducts.find(
        (p) => p.id === action.payload.id,
      );
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const {
  addCart,
  emptyCart,
  removeFromCart,
  updateCartProduct,
  updateQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
