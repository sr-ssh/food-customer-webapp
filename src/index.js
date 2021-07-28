import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './helpers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';

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


<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
  crossorigin="" />




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
