import { connect } from 'react-redux';
import Checkout from './checkout';
import { deleteCartItemAction } from '../../redux/actions/cartActions';
import ActionTypes from '../../redux/constants/action-types';

const mapStateToProps = ({ cart, products }) => ({
  cart,
  products,
});

const mapDispatchToProps = dispatch => ({
  deleteCartItem: data => deleteCartItemAction(data)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
