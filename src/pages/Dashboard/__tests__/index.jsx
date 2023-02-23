import React from 'react';
import { runSaga } from 'redux-saga';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import renderWithProviders from '../../../utils/test-utils';
import Home from '..';
import axiosInstance from '../../../utils/axiosInstance';
import ActionTypes from '../../../redux/constants/action-types';

const mock = new MockAdapter(axiosInstance);

const products = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

const cart = [
  {
    productId: 3,
    quantity: 1,
    id: 3,
  },
];

describe('test Home page', () => {
  beforeEach(() => {
    mock.reset();
  });
  

  test('should first', async () => {
    renderWithProviders(<Home />);
    const loading = await screen.findByTestId('loading');
    expect(loading).toBeInTheDocument();
  });

  test('should take snapshot before api call', () => {
    const { container } = renderWithProviders(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should take snapshot after api call', async () => {
    mock.onGet('660/products').reply(200, products);
    mock.onGet('660/cart').reply(200, cart);
    const { asFragment } = renderWithProviders(<Home />);
    await screen.findByTestId('products-info');
    expect(asFragment()).toMatchSnapshot();
  });

  test('should make server call to display products', async () => {
    mock.onGet('660/products').reply(200, products);
    mock.onGet('660/cart').reply(200, cart);
    renderWithProviders(<Home />);
    const productInfo = await screen.findByTestId('products-info');
    expect(productInfo).toBeInTheDocument();
  });

  test('should return error', async () => {
    mock.onGet('660/products').networkErrorOnce();
    mock.onGet('660/cart').networkErrorOnce();
    renderWithProviders(<Home />);
    const error = await screen.findByTestId('error');
    expect(error).toBeInTheDocument();
  });
});




// describe('loadProductsSaga', () => {
//   it('should load products and dispatch success action', async () => {
//     const dispatchedActions = [];
//     const mockStore = {
//       getState: () => ({
//         products: [],
//         loading: [],
//         errors: [],
//       }),
//       dispatch: action => dispatchedActions.push(action),
//     };
//     const mockResponse = {
//       data: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }],
//     };
//     const mockApi = {
//       get: () => Promise.resolve(mockResponse),
//     };
//     const expectedActions = [
//       { type: ActionTypes.LOAD_PRODUCTS_REQUEST },
//       { type: ActionTypes.LOAD_PRODUCTS_SUCCESS, payload: mockResponse.data },
//     ];

//     await runSaga(
//       {
//         dispatch: action => dispatchedActions.push(action),
//         getState: () => mockStore.getState(),
//       },
//       // loadProducts,
//       mockApi,
//     ).done;

//     expect(dispatchedActions).toEqual(expectedActions);
//   });
// });

// describe('loadCartSaga', () => {
//   it('should load cart and dispatch success action', async () => {
//     const dispatchedActions = [];
//     const mockStore = {
//       getState: () => ({
//         products: [],
//         loading: [],
//         errors: [],
//       }),
//       dispatch: action => dispatchedActions.push(action),
//     };
//     const mockResponse = {
//       data: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }],
//     };
//     const mockApi = {
//       get: () => Promise.resolve(mockResponse),
//     };
//     const expectedActions = [
//       { type: ActionTypes.LOAD_CART_REQUEST },
//       { type: ActionTypes.LOAD_CART_SUCCESS, payload: mockResponse.data },
//     ];

//     await runSaga(
//       {
//         dispatch: action => dispatchedActions.push(action),
//         getState: () => mockStore.getState(),
//       },
//       // loadCartSaga,
//       mockApi,
//     ).done;

//     expect(dispatchedActions).toEqual(expectedActions);
//   });
// });


