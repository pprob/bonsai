import {GlobalState} from './types';
import {globalActionCreatorTypes, toggleSlider} from './actions';
import updateState from '../../utils/updateState';

const initialState: GlobalState = {
  loading: false,
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
    default:
      return state;
  }
};

export default globalReducer;
