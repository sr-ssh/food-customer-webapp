import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { alert } from './alertReducer';
import { newAddress } from './addressReducer';
import { getProduct } from './orderReducer';
export default combineReducers({
    authentication,
    register,
    verificationCode,
    alert,
    getProduct,
    newAddress
})
