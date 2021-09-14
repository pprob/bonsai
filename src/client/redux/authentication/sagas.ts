import {takeLatest, put} from '@redux-saga/core/effects';
import {push} from 'connected-react-router';
import {AuthenticationActionCreatorTypes} from './types';
import {authenticationSuccess} from './actions';
import axios from 'axios';

const signUpUserWorker = function* (action) {
  const {payload} = action;

  try {
    const {data} = yield axios.post('/api/user/create', payload);

    const authData = {
      email: data.email,
      id: data.id,
      createdAt: data.createdAt,
    };

    yield put(authenticationSuccess(authData));
    yield put(push('/'));
  } catch (error: any) {
    console.log(error.Response);
  }
};

const signInUserWorker = function* (action) {
  const {payload} = action;

  try {
    const {
      data: {user},
    } = yield axios.post('/api/user/signin', payload);

    const authData = {
      email: user.email,
      id: user.id,
      createdAt: user.createdAt,
    };

    yield put(authenticationSuccess(authData));
    yield put(push('/'));
  } catch (error: any) {}
};

export const watchSignupUser = function* () {
  yield takeLatest(
    AuthenticationActionCreatorTypes.signupUser,
    signUpUserWorker,
  );
};

export const watchSignInUser = function* () {
  yield takeLatest(
    AuthenticationActionCreatorTypes.signinUser,
    signInUserWorker,
  );
};
