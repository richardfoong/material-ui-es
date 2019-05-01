import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import React from 'react';
// import {configure as enzymeConfig} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { createHashHistory } from 'history';
import { Router } from 'react-router';
import { configureStore } from '../src/app/store';

// enzymeConfig({ adapter: new Adapter() });

const store = configureStore();
const history = createHashHistory();
const ProviderWrapper = (story) => (
  <Provider store={store}>
    <Router history={history}>{story()}</Router>
  </Provider>
);
addDecorator(ProviderWrapper);

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
