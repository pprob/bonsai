import {createStore, applyMiddleware, Store, Middleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createRootReducer from './reducers';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const configureStore = (history: any, initialState = {}): Store => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares: Middleware[] = [routerMiddleware(history), sagaMiddleware];

  const composeEnhancers = composeWithDevTools({});

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
