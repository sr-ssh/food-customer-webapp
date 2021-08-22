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
import { SuccessfullPay } from './components/payment/successfullPay';
import { NewAddress } from './components/address/newAddress';
import { FailPay } from './components/payment/failPay';
import { AddressSaved } from './components/address/addressSaved';



function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/main" component={Main}></PrivateRoute>
        <PrivateRoute path="/address/saved" component={AddressSaved} ></PrivateRoute>
        <PrivateRoute path="/address" component={Address}></PrivateRoute>
        <PrivateRoute path="/address/new" component={NewAddress}></PrivateRoute>
        <PrivateRoute path="/order/detail" component={OrderDetails}></PrivateRoute>
        <PrivateRoute path="/order/history" component={HistoryOrder}></PrivateRoute>
        <PrivateRoute path="/order" component={Orders}></PrivateRoute>
        <PrivateRoute path="/bill" component={Factor}></PrivateRoute>
        <PrivateRoute path="/pay/success" component={SuccessfullPay} ></PrivateRoute>
        <PrivateRoute path="/pay/fail" component={FailPay} ></PrivateRoute>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
