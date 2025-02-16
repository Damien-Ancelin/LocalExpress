import { describe, expect, it } from 'vitest';
import cartReducer, {
  addCart,
  emptyCart,
  initialState,
  removeFromCart,
  updateCartProduct,
  updateQuantity,
} from '../features/cartSlice';

import type { ProductInCart } from '@/@types/index';

// Produit test
const product: ProductInCart = {
  id: 1,
  title: 'Essence Mascara Lash Princess',
  description:
    'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
  category: 'beauty',
  price: 9.99,
  discountPercentage: 7.17,
  rating: 4.94,
  stock: 5,
  tags: ['beauty', 'mascara'],
  brand: 'Essence',
  sku: 'RCH45Q1A',
  weight: 2,
  dimensions: {
    width: 23.17,
    height: 14.43,
    depth: 28.01,
  },
  warrantyInformation: '1 month warranty',
  shippingInformation: 'Ships in 1 month',
  availabilityStatus: 'Low Stock',
  reviews: [
    {
      rating: 2,
      comment: 'Very unhappy with my purchase!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'John Doe',
      reviewerEmail: 'john.doe@x.dummyjson.com',
    },
    {
      rating: 2,
      comment: 'Not as described!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'Nolan Gonzalez',
      reviewerEmail: 'nolan.gonzalez@x.dummyjson.com',
    },
    {
      rating: 5,
      comment: 'Very satisfied!',
      date: '2024-05-23T08:56:21.618Z',
      reviewerName: 'Scarlett Wright',
      reviewerEmail: 'scarlett.wright@x.dummyjson.com',
    },
  ],
  returnPolicy: '30 days return policy',
  minimumOrderQuantity: 24,
  meta: {
    createdAt: '2024-05-23T08:56:21.618Z',
    updatedAt: '2024-05-23T08:56:21.618Z',
    barcode: '9164035109868',
    qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
  },
  images: [
    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png',
  ],
  thumbnail:
    'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png',
  quantity: 1,
};

describe('Test de la Slice cartSlice', () => {
  it('1 - Doit retourner initialState', () => {
    expect(cartReducer(undefined, { type: '@@TEST' })).toEqual(initialState);
  });

  it('2 - Doit ajouter un le produit dans le panier/Cart', () => {
    const newState = cartReducer(initialState, addCart(product));

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0]).toEqual(product);
  });

  it('3 - Doit retirer un produit du panier par son ID', () => {
    const initialState = { cartProducts: [product] };
    const newState = cartReducer(initialState, removeFromCart(1));

    expect(newState.cartProducts).toHaveLength(0);
  });

  it("4 - Doit changer la quantité d'un produit dans le panier", () => {
    const initialState = { cartProducts: [product] };
    const newState = cartReducer(
      initialState,
      updateQuantity({ id: product.id, quantity: 5 }),
    );

    expect(newState.cartProducts[0].quantity).toBe(5);
  });

  it("5 - Doit augmenter la quantité d'un produit de 1", () => {
    const initialState = { cartProducts: [product] };
    const newState = cartReducer(initialState, updateCartProduct(product.id));

    expect(newState.cartProducts[0].quantity).toBe(2);
  });

  it('Doit vider tout les produits du panier', () => {
    const initialState = { cartProducts: [product] };
    const newState = cartReducer(initialState, emptyCart());

    expect(newState.cartProducts).toHaveLength(0);
  });
});
