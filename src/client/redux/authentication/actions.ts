import {
  AuthenticationActionCreatorTypes,
  signUpUserPayload,
  signUpUserAction,
  signinUserPayload,
  signinUserAction,
  authSuccessPayload,
  authSuccessAction,
} from './types';

export const signUpUser = (payload: signUpUserPayload): signUpUserAction => ({
  type: AuthenticationActionCreatorTypes.signupUser,
  payload,
});

export const authenticationSuccess = (
  payload: authSuccessPayload,
): authSuccessAction => ({
  type: AuthenticationActionCreatorTypes.authSuccess,
  payload,
});

export const authenticateFailure = (payload) => ({
  type: AuthenticationActionCreatorTypes.authFailure,
  payload,
});

export const signinUser = (payload: signinUserPayload): signinUserAction => ({
  type: AuthenticationActionCreatorTypes.signinUser,
  payload,
});
