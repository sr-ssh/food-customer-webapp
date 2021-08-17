import React from 'react';
import { history } from '../src/helpers';
import { Redirect, Route, Router, Switch } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './components/base/privateRoute';

//routes
import { Login } from './components/login';
import { Main } from './components/main/main';
import { Address } from './components/address/address';
import { Orders } from './components/order/orders';
import { OrderDetails } from './components/main/orderdDetails';
import { HistoryOrder } from './components/order/history/historyOrder'
import { Factor } from './components/factor/factors';
import { StausPay } from './components/payment/statusPay';
import { NewAddress } from './components/address/newAddress';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/main" component={Main}></PrivateRoute>
        <PrivateRoute path="/address" component={Address}></PrivateRoute>
        <PrivateRoute path="/address/new" component={NewAddress}></PrivateRoute>
        <PrivateRoute path="/order/detail" component={OrderDetails}></PrivateRoute>
        <PrivateRoute path="/order/history" component={HistoryOrder}></PrivateRoute>
        <PrivateRoute path="/order" component={Orders}></PrivateRoute>
        <PrivateRoute path="/bill" component={Factor}></PrivateRoute>
        <PrivateRoute path="/statusPay" component={StausPay}></PrivateRoute>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
