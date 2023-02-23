import { connect } from 'react-redux';
import header from './header';

const mapStateToProps = ({ cart, user: { user } }) => ({
  cart,
  user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(header);
