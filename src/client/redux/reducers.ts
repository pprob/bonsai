import {History} from 'history';
import {combineReducers, Reducer} from 'redux';
import {connectRouter} from 'connected-react-router';
import globalReducer from './global/reducer';

const createRootReducer = (history: History): Reducer => {
  const appReducers = {
    router: connectRouter(history),
    global: globalReducer,
  };
  return combineReducers(appReducers);
};

export default createRootReducer;
