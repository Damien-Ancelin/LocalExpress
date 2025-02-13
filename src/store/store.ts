import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/ProductsSlice';
import cartReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
