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
