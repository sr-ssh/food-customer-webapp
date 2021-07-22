import React from 'react';
import { history } from '../src/helpers';
import { Redirect, Route, Router, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './components/base/privateRoute';

//routes
import { Login } from './components/login';
import { Main } from './components/main/main';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/main" component={Main}></PrivateRoute>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
