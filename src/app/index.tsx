import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import Home from 'app/components/Home';
import './app.scss';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
));
