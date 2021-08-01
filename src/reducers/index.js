import { combineReducers } from 'redux';
import { authentication, register, verificationCode } from './authenticationReducer';
import { alert } from './alertReducer';
import { getAddresses, newAddress } from './addressReducer';
export default combineReducers({
    authentication,
    register,
    verificationCode,
    alert,
    newAddress,
    getAddresses
})