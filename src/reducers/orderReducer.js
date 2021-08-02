import { orderConstant } from "../constants";



const initialState = {
  products: [],
  loading: false
}


export const getProduct = (state = initialState, action) => {
  switch (action.type) {
    case orderConstant.GET_PRODUCT_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.GET_PRODUCT_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.data
      }
    case orderConstant.GET_PRODUCT_ORDER_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};


