import ApiRequest from '../../utils/ApiRequest';
import ActionTypes from '../constants/action-types';

export const loadProducts = () => async dispatch => {
  const type = ActionTypes.LOAD_PRODUCTS;
  await ApiRequest({
    apiData: {
      method: 'get',
      url: 'products',
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};

export const selectedProduct = () => async dispatch => {
  const type = ActionTypes.SELETED_PRODUCT;
  await ApiRequest({
    apiData: {
      method: 'get',
      url: `products/${product.id}}`,
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};

export const removeSelectedProduct = () =>  {
  return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}
