import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/store';
import { Router } from 'react-router';
import { App } from './app';
import { RootState } from 'app/reducers';
import { initialState as serviceInitialState } from 'app/reducers/services';
import { initialState as todoInitialState } from 'app/reducers/todos';

// prepare store
const history = createBrowserHistory();
const initialState: RootState = { services: serviceInitialState, todos: todoInitialState };
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
