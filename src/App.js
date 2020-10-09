import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import history from './history';
import './App.scss';

import {
  Home,
  Schedule
} from 'app/views';

import {
  Nav
} from 'app/components';

function App() {
  return (
    <div className='App'>
      <BrowserRouter history={history} basename="/">
        <Nav history={history}></Nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/schedule' component={Schedule}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
