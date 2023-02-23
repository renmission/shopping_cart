import { connect } from 'react-redux';
import Profile from './profile';
import ActionTypes from '../../redux/constants/action-types';

const mapStateToProps = ({ users }, { user }) => ({
  users,
  user
});

const mapDispatchToProps = dispatch => ({
  loadUsers: () =>
    dispatch({
      type: ActionTypes.LOAD_USER_REQUEST,
      payload: {
        url: 'users',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
