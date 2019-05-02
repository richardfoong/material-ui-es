import * as React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './containers/Home';
import './app.scss';
import Demo from 'app/components/Demo';
import {Header} from 'app/components/Header';

export const App = hot(module)(() => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/demo" component={Demo} />
    <Route path="/headers" component={Header} />
    </div>
));
