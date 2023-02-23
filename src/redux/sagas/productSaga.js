import { all, fork, takeEvery } from "redux-saga/effects";
// import axiosInstance from "../../utils/axiosInstance";
import ActionTypes from "../constants/action-types";
import apiGenerator from "../../utils/apiGenerator";

// function* loadProducts({ meta }) {
//     try {
//         const res =  yield call(axiosInstance.get, '660/products');
//         yield put({ type: ActionTypes.LOAD_PRODUCTS_SUCCESS, payload: res, meta})
//     } catch (error) {
//         yield put({ type: ActionTypes.LOAD_PRODUCTS_FAIL, payload: error, meta})
//     }
// }

// function* loadProductsRequest() {
//     yield takeEvery(ActionTypes.LOAD_PRODUCTS_REQUEST,  loadProducts);
// }

function* loadProductsRequest() {
    yield takeEvery(ActionTypes.LOAD_PRODUCTS_REQUEST,  apiGenerator);
}


export default function* rootProductSaga() {
    yield all([fork(loadProductsRequest)])
}