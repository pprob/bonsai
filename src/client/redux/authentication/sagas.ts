import {takeLatest, put} from '@redux-saga/core/effects';
import {AuthenticationActionCreatorTypes, signInUserSuccess} from './actions';
import axios from 'axios';

const signinUserWorker = function* (action) {
  const {payload} = action;
  let result;
  console.log(payload);
  try {
    result = axios.post('/api/user/signin', payload);
  } catch (error) {}

  const {data} = result;
  yield put(signInUserSuccess(data));
};

export const watchSigninUser = function* () {
  yield takeLatest(
    AuthenticationActionCreatorTypes.signinUser,
    signinUserWorker,
  );
};
