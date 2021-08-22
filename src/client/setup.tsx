import React from 'react';
import ReactDOM from 'react-dom';
import Providers from './containers/App/Provider';
import history from './utils/history';
import configureStore from './redux/configureStore';
import App from './containers/App';

const store = configureStore(history);

const AppContainer = () => (
  <Providers history={history} store={store}>
    <App />
  </Providers>
);

const render = () => {
  ReactDOM.render(<AppContainer />, document.getElementById('app'));
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default render;
