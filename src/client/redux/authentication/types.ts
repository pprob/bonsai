export enum AuthenticationActionCreatorTypes {
  signinUser = 'SIGN_IN_USER',
  signupUser = 'SIGN_UP_USER',
  authSuccess = 'AUTH_SUCCESS',
  authFailure = 'AUTH_FAILURE',
}

export type signUpUserPayload = {
  email: string;
  password: string;
};

export type signUpUserAction = {
  type: AuthenticationActionCreatorTypes.signupUser;
  payload: signUpUserPayload;
};

export type signinUserPayload = {
  email: string;
  password: string;
};

export type authSuccessPayload = {
  email: string;
  id: string;
  createdAt: string;
};

export type authSuccessAction = {
  type: AuthenticationActionCreatorTypes.authSuccess;
  payload: authSuccessPayload;
};

export type signinUserAction = {
  type: AuthenticationActionCreatorTypes.signinUser;
  payload: signinUserPayload;
};
