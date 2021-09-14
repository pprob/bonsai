import {AuthenticationActionCreatorTypes} from './types';
import updateState from '../../utils/updateState';
import {authSuccessAction} from './types';

type AuthState = {
  isSignedIn: boolean;
  email: string | null;
  signInError: boolean;
  id: string | null;
};

const initialState: AuthState = {
  isSignedIn: false,
  email: null,
  signInError: false,
  id: null,
};

type ActionTypes = authSuccessAction;

const authReducer = (state = initialState, action: ActionTypes): AuthState => {
  switch (action.type) {
    case AuthenticationActionCreatorTypes.authSuccess:
      const {payload} = action;
      return updateState(state, {
        isSignedIn: true,
        email: payload.email,
        signInError: false,
        id: payload.id,
      });

    default:
      return state;
  }
};

export default authReducer;
