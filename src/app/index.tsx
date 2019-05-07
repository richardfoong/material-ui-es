import * as React from 'react';
import { Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './containers/Home';
import './app.scss';
import OptionsSelect from './components/Demo/OptionsSelectDemo';
import Demo from './components/Demo';
import { Header } from './components/Header';

export const App = hot(module)(() => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/headers" component={Header} />
    <Route exact path="/demo" component={Demo} />
    <Route path="/demo/OptionsSelect" component={OptionsSelect} />
  </div>
));
