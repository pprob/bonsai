import {signinUser} from './actions';

type AuthState = {
  isSignedIn: boolean;
  email: string | null;
  signInError: string | null;
};

const initialState: AuthState = {
  isSignedIn: false,
  email: null,
  signInError: null,
};

type ActionTypes = signinUser;

const authReducer = (state = initialState, action: ActionTypes): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
