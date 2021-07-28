import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { getProduct } from './orderReducer';
import { alert } from './alertReducer';

export default combineReducers ({authentication, register, verificationCode,alert,getProduct})