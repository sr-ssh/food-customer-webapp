import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { alert } from './alertReducer';
import { getAddresses, newAddress } from './addressReducer';
import { getProduct, getInLineOrders, getOrderDetails, cancelOrder, getOrderProductsTypes, addOrder } from "./orderReducer";
import { getCharge } from './chargeReducer';
export default combineReducers({
    authentication,
    register,
    verificationCode,
    alert,
    getProduct, getInLineOrders, getOrderDetails, cancelOrder, addOrder,
    newAddress,
    getAddresses,
    getCharge,
    getOrderProductsTypes
})
