export enum AuthenticationActionCreatorTypes {
  signinUser = 'SIGN_IN_USER',
  signinUserSuccess = 'SIGN_IN_USER_SUCCESS',
  signinUserFailed = 'SIGN_IN_USER_FAILED',
}

export type signinUser = {
  type: AuthenticationActionCreatorTypes.signinUser;
  payload: signinUserPayload;
};

export type signinUserPayload = {
  email: string;
  password: string;
};

export const signInUser = (payload: signinUserPayload): signinUser => ({
  type: AuthenticationActionCreatorTypes.signinUser,
  payload,
});

export const signInUserSuccess = (payload) => ({
  type: AuthenticationActionCreatorTypes.signinUserSuccess,
  payload,
});

export const signInUserFail = (payload) => ({
  type: AuthenticationActionCreatorTypes.signinUserFailed,
  payload,
});
