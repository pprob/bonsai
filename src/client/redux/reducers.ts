import {History} from 'history';
import {combineReducers, Reducer} from 'redux';
import {connectRouter} from 'connected-react-router';
import globalReducer from './global/reducer';
import productsReducer from './products/reducer';
import authReducer from './authentication/reducer';

const createRootReducer = (history: History): Reducer => {
  const appReducers = {
    router: connectRouter(history),
    global: globalReducer,
    products: productsReducer,
    auth: authReducer,
  };
  return combineReducers(appReducers);
};

export default createRootReducer;
