import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import AppComponent from '@ap-components/App';
import './app.scss';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={AppComponent} />
  </Switch>
));
