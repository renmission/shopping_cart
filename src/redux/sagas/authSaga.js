import { all, fork, takeLatest, call, put } from 'redux-saga/effects';
import axiosInstance from '../../utils/axiosInstance';
import ActionTypes from '../constants/action-types';
import apiGenerator from '../../utils/apiGenerator';

function* login({ payload, meta }) {
  try {
    const res = yield call(axiosInstance, {
      method: 'post',
      url: 'login',
      data: payload,
    });
    yield put({
      type: ActionTypes.LOGIN_SUCCESS,
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.LOGIN_FAIL,
      payload: error,
      meta,
    });
  }
}

function* register({ payload, meta }) {
  try {
    const { confirmPassword, ...data } = payload;

    if(confirmPassword !== data.password) {
      throw new Error('Password did not match.');
    }
    
    const res = yield call(axiosInstance, {
      method: 'post',
      url: 'register',
      data,
    });
    yield put({
      type: ActionTypes.REGISTER_SUCCESS,
      payload: res,
      meta,
    });
  } catch (error) {
    yield put({
      type: ActionTypes.REGISTER_FAIL,
      payload: error,
      meta,
    });
  }
}

function* loadUserRequest() {
  yield takeLatest(ActionTypes.LOAD_USER_REQUEST, apiGenerator);
}

function* loginRequest() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, login);
}

function* registerRequest() {
  yield takeLatest(ActionTypes.REGISTER_REQUEST, register);
}

export default function* rootAuthSaga() {
  yield all([
    fork(loginRequest), 
    fork(registerRequest),
    fork(loadUserRequest)
  ]);
}
