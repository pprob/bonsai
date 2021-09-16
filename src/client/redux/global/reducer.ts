import {GlobalState, toggleSlider} from './types';
import {globalActionCreatorTypes} from './actions';
import updateState from '../../utils/updateState';

const initialState: GlobalState = {
  loading: false,
  loadingMessage: '',
  showMenuSlider: false,
};

type ActionTypes = toggleSlider;

const globalReducer = (
  state: GlobalState = initialState,
  action: ActionTypes,
): GlobalState => {
  switch (action.type) {
    case globalActionCreatorTypes.toggleSlider:
      return updateState(state, {
        showMenuSlider: !state.showMenuSlider,
      });

    case globalActionCreatorTypes.toggleSliderOff:
      return updateState(state, {
        showMenuSlider: false,
      });

    case globalActionCreatorTypes.toggleLoaderOn:
      return updateState(state, {
        loading: true,
      });

    case globalActionCreatorTypes.toggleLoaderOff:
      return updateState(state, {
        loading: false,
      });

    default:
      return state;
  }
};

export default globalReducer;
