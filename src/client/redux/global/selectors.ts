import {createSelector} from 'reselect';

const globalSelector = (state) => state.global;

export const themeSelector = createSelector(
  globalSelector,
  (globalState) => globalState.theme,
);
