import {createSelector} from 'reselect';

const authenticationSelector = (state) => state.auth;

export const isSignedIn = createSelector(
  authenticationSelector,
  (authState) => authState.isSignedIn,
);
