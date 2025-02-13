import type { GroupedProducts } from '@/@types';
import { api } from '@/services/api';
import { groupByKey } from '@/utils';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type ProductsState = {
  products: GroupedProducts[];
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
  async (_, { rejectWithValue }) => {
    try {
      const { products } = await api.getProducts();
      const categorizedProducts = groupByKey(products, 'category');
      return categorizedProducts;
    } catch (error) {
      return rejectWithValue(
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
        state.products.push(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export default productsSlice.reducer;
