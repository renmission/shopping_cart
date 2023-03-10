import { connect } from 'react-redux';
import Product from './products';
// import {
//   addCartItemAction,
//   updateCartItemAction,
//   deleteCartItemAction,
// } from '../../redux/actions/cartActions';
import ActionTypes from '../../redux/constants/action-types';

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find(x => x.productId === product.id),
  isLoading: loading.some(x => x.loadingId === product.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: data =>
    dispatch({
      type: ActionTypes.ADD_CART_REQUEST,
      payload: {
        url: '660/cart',
        method: 'post',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
  updateCartItem: data =>
    dispatch({
      type: ActionTypes.UPDATE_CART_REQUEST,
      payload: {
        url: `660/cart/${data.id}`,
        method: 'put',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
  deleteCartItem: data =>
    dispatch({
      type: ActionTypes.DELETE_CART_REQUEST,
      payload: {
        url: `660/cart/${data.id}`,
        method: 'delete',
        data,
      },
      meta: {
        loadingId: data.productId,
      },
    }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Product);
