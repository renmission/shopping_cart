import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import productSaga from './productSaga';
import cartSaga from './cartSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(cartSaga), fork(productSaga)]);
}
