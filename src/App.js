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


//css
import './assets/styles/baseStyle.css'
import './assets/styles/loginStyle.css'
import './assets/styles/formStyle.css'
import './assets/styles/mainStyle.css'
import './assets/styles/orders.css'
import './assets/styles/factorStyle.css'
import './assets/styles/orderdetailsStyle.css'
import './assets/styles/addressStyles.css'
import './assets/styles/leaflet.css'
import './assets/styles/loaderStyle.css'
import './assets/styles/mapDropDown.css'
import './assets/styles/historyOrder.css'
import './assets/styles/statusPay.scss'
import './assets/styles/olderAddress.scss'
import './assets/styles/payStyle.css'
import { Menu } from './components/menu/menu';



function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/main" component={Main}></PrivateRoute>
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
        <Route path="/menu" component={Menu} />

        {/* <Route path='/' component={Home} /> */}
        <Redirect from="*" to="/login" />
       </Switch>
     </Router>
  );
}

export default App;
