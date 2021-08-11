import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { alert } from './alertReducer';
import { getAddresses, newAddress, searchAddress } from './addressReducer';
import { getProduct, getInLineOrders, getOrderDetails, cancelOrder, getOrderProductsTypes, addOrder, getFinishedOrders } from "./orderReducer";
import { getCharge } from './chargeReducer';
export default combineReducers({
    authentication,
    register,
    verificationCode,
    alert,
    getProduct, getInLineOrders, getOrderDetails, cancelOrder, addOrder, getFinishedOrders,
    newAddress, getAddresses, searchAddress,
    getCharge,
    getOrderProductsTypes
})
