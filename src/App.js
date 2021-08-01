import React from 'react';
import { history } from '../src/helpers';
import { Redirect, Route, Router, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './components/base/privateRoute';

//routes
import { Login } from './components/login';
import { Main } from './components/main/main';
import { Address } from './components/address/address';
import { orders } from './components/order/orders';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/main" component={Main}></PrivateRoute>
        <PrivateRoute path="/address" component={Address}></PrivateRoute>
        {/* please dont change the Order */}
        <Route exact path="/order" component={orders} />
        {/* <PrivateRoute path="/order" component={orders}></PrivateRoute> */}
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
