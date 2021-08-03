import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { alert } from './alertReducer';
import { getAddresses, newAddress } from './addressReducer';
import { getProduct, getInLineOrders } from "./orderReducer";
export default combineReducers({
    authentication,
    register,
    verificationCode,
    alert,
    getProduct,getInLineOrders,
    newAddress,
    getAddresses
})
