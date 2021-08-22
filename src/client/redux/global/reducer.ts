import {GlobalState} from './types';
import {globalActionCreatorTypes, toggleSlider} from './actions';
import {Themes} from './enums';
import updateState from '../../utils/updateState';

const initialState: GlobalState = {
  loading: false,
  theme: Themes.Light,
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
    default:
      return state;
  }
};

export default globalReducer;
