import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import { ServiceList } from './components';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={ServiceList} />
  </Switch>
));
