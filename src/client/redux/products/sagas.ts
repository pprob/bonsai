import {takeLatest, put} from '@redux-saga/core/effects';
import {ProductsActionCreatorTypes, setProducts} from './actions';
import axios from 'axios';

const fetchProductsWorker = function* () {
  let result;

  try {
    result = yield axios.get('/api/products');
  } catch (error) {}

  const {data} = result;
  yield put(setProducts(data.products));
};

export const watchFetchProducts = function* () {
  yield takeLatest(
    ProductsActionCreatorTypes.fetchProducts,
    fetchProductsWorker,
  );
};
