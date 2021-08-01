import { orderConstant } from "../constants";

export const getProduct = (state = {}, action) => {
  switch (action.type) {
    case orderConstant.GET_PRODUCT_ORDER_REQUEST:
      return {loading: true};
    case orderConstant.GET_PRODUCT_ORDER_SUCCESS:
      return {items:action.data};
    case orderConstant.GET_PRODUCT_ORDER_FAILURE:
      return {};
    default:
      return state;
  }
};


