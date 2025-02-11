import type { ProductsData } from '@/@types';

export const api = {
  async getProducts() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const productsData = await response.json();
    return productsData as ProductsData;
  },
};
