import { orderConstant } from "../constants";

export const getProduct = (state = {}, action) => {
  switch (action.type) {
    case orderConstant.GET_PRODUCT_ORDER_REQUEST:
      return {};
    case orderConstant.GET_PRODUCT_ORDER_SUCCESS:
      return {loading: true};
    case orderConstant.GET_PRODUCT_ORDER_FAILURE:
      return {items: action.data};
    default:
      return state;
  }
};


