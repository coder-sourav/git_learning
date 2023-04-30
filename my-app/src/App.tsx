import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Profile from './Profile';
import Login from './Login';
import { render } from '@testing-library/react';

function App() {
  return (
    <Switch>
      <Route exact path={'/Home'} component={Home} ></Route>
      <Route exact path={'/Login'} component={Login} ></Route>
      <Route exact path={'/SignUp'} component={SignUp} ></Route>
      <Route exact path={'/Profile'} component={Profile} ></Route>
      <Route exact path='/' render={() => <Redirect to="/Home"/>} ></Route>
    </Switch>
  );
}

export default App;
