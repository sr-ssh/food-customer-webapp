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
import { SuccessfullPay } from './components/payment/successfullPay2';
import { NewAddress } from './components/address/newAddress';
import { FailPay } from './components/payment/failPay2';
import { EditAddress } from './components/address/editAddress';
import { Home } from './components/home/home'


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/order/detail" component={OrderDetails}></PrivateRoute>
        <PrivateRoute path="/address/edit" component={EditAddress}></PrivateRoute>
        <PrivateRoute path="/address" component={Address}></PrivateRoute>
        <PrivateRoute path="/address/new" component={NewAddress}></PrivateRoute>
        <PrivateRoute path="/order/detail" component={OrderDetails}></PrivateRoute>
        <PrivateRoute path="/order/history" component={HistoryOrder}></PrivateRoute>
        <PrivateRoute path="/order" component={Orders}></PrivateRoute>
        <PrivateRoute path="/bill" component={Factor}></PrivateRoute>
        <PrivateRoute path="/pay/success" component={SuccessfullPay} ></PrivateRoute>
        <PrivateRoute path="/pay/fail" component={FailPay} ></PrivateRoute>
        <PrivateRoute path="/main" component={Main}></PrivateRoute>
        <Route path='/' component={Home} />
        <Route path="/home.html" component={Home} />
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
