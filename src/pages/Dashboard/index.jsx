import { connect } from 'react-redux';
import Home from './home';
import ActionTypes from '../../redux/constants/action-types';
// import { loadProducts } from '../../redux/actions/productActions';
// import { loadCartAction } from '../../redux/actions/cartActions';

const mapStateToProps = ({ products, loading, errors }) => ({
  products,
  loading: loading.some(
    x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
  hasError: errors.some(
    x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
});

const mapDispatchToProps = dispatch => ({
  // loadProducts: () => loadProducts()(dispatch),
  // loadCart: () => loadCartAction()(dispatch),
  // loadProducts: () => dispatch({ type: ActionTypes.LOAD_PRODUCTS_REQUEST, meta: { loadingId: -1 }}),
  // loadCart: () => dispatch({ type: ActionTypes.LOAD_CART_REQUEST, meta: { loadingId: -1 }}),
  loadProducts: () =>
    dispatch({
      type: ActionTypes.LOAD_PRODUCTS_REQUEST,
      payload: {
        url: '660/products',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
  loadCart: () =>
    dispatch({
      type: ActionTypes.LOAD_CART_REQUEST,
      payload: {
        url: '660/cart',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
