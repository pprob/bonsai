import {fork} from '@redux-saga/core/effects';
import {watchFetchProducts} from './products/sagas';
import {watchSigninUser} from './authentication/sagas';

export default function* rootSaga() {
  yield fork(watchFetchProducts);
  yield fork(watchSigninUser);
}
