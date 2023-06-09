import { combineReducers } from "redux";
import {
  authentication,
  register,
  verificationCode,
} from "./authenticationReducer";
import { alert } from "./alertReducer";
import {
  getAddresses,
  newAddress,
  searchAddress,
  editAddress,
  deleteAddress,
} from "./addressReducer";
import {
  getProduct,
  getInLineOrders,
  getOrderDetails,
  cancelOrder,
  getOrderProductsTypes,
  addOrder,
  getFinishedOrders,
  getFactor
} from "./orderReducer";
import { getCharge } from "./chargeReducer";
import { payOrder } from "./payReducer";

export default combineReducers({
  authentication,
  register,
  verificationCode,
  alert,
  getProduct,
  getInLineOrders,
  getOrderDetails,
  cancelOrder,
  addOrder,
  getFinishedOrders,
  newAddress,
  getAddresses,
  searchAddress,
  editAddress,
  deleteAddress,
  getCharge,
  getOrderProductsTypes,
  payOrder,
  getFactor
});
