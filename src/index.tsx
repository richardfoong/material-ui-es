import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory, History } from 'history';
import { RootState } from 'app/reducers';
import { Store } from 'redux';
import { configureStore } from './app/store';
import { Router } from 'react-router';
import { App } from './app';

// prepare store
const history = createHashHistory();
const store = configureStore();

const ProviderWrapper = ({
  store,
  children,
  history
}: {
  store: Store<RootState>;
  children: JSX.Element;
  history: History;
}) => (
  <Provider store={store}>
    <Router history={history}>{children}</Router>
  </Provider>
);

ReactDOM.render(
  <ProviderWrapper store={store} children={<App />} history={history} />,
  document.getElementById('root')
);
