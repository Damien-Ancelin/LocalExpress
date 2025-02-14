import type { Product } from '@/@types';
import { api } from '@/services/api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type ProductsState = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductsState = {
  products: [],
  loading: true,
  error: 'Tu dois récupérer les products dans un effet !',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, /*{ rejectWithValue }*/ thunkAPI) => {
    try {
      const { products } = await api.getProducts();
      return products;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        `Erreur lors de la récupération des produits: ${error}`,
      );
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // ? Action
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default productsSlice.reducer;
