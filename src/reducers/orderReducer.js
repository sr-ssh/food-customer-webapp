import { orderConstant } from "../constants";



const initialState = {
  products: [],
  productCategory: [],
  loading: false,
  orders: [],
  orderDetails: {},
  order: {}
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


export const getInLineOrders = (state = initialState, action) => {
  switch (action.type) {
    case orderConstant.GET_INLINE_ORDERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.GET_INLINE_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.data
      }
    case orderConstant.GET_INLINE_ORDERS_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};

export const getOrderDetails = (state = initialState, action) => {
  switch (action.type) {
    case orderConstant.GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        orderDetails: action.data
      }
    case orderConstant.GET_ORDER_DETAILS_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};



export const cancelOrder = (state = initialState, action) => {
  switch (action.type) {
    case orderConstant.GET_ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case orderConstant.GET_ORDER_DETAILS_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};


export const getOrderProductsTypes = (state = initialState, action) => {
  switch (action.type) {
    case orderConstant.GET_ORDER_PRODUCTS_TYPES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.GET_ORDER_PRODUCTS_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        productCategory: action.data
      }
    case orderConstant.GET_ORDER_PRODUCTS_TYPES_FAILUREE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};

export const addOrder = (state = initialState, action) => {
  switch (action.type) {
    case orderConstant.ADD_ORDER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.ADD_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.data
      }
    case orderConstant.ADD_ORDER_FAILUREE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};

export const getFinishedOrders = (state = {}, action) => {
  switch (action.type) {
    case orderConstant.GET_FINISHED_ORDERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.GET_FINISHED_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.data
      }
    case orderConstant.GET_FINISHED_ORDERS_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};

export const getFactor = (state = initialState, action) => {
  switch (action.type) {
    case orderConstant.GET_ORDER_FACTOR_REQUEST:
      return {
        ...state,
        loading: true
      }
    case orderConstant.GET_ORDER_FACTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        factor: action.data
      }
    case orderConstant.GET_ORDER_FACTOR_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};