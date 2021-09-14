import {createSelector} from 'reselect';

const globalSelector = (state) => state.global;

export const sliderMenuSelector = createSelector(
  globalSelector,
  (globalState) => globalState.showMenuSlider,
);

export const loadingStateSelector = createSelector(
  globalSelector,
  (globalState) => globalState.loading,
);
