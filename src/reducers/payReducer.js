import { payConstant } from "../constants";

export const payOrder = (state = {}, action) => {
  switch (action.type) {
    case payConstant.PAY_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case payConstant.PAY_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        payment: action.data
      }
    case payConstant.PAY_ORDER_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};
