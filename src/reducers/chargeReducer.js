import { chargeConstant } from "../constants";



const initialState = {
  charge: 0,
  loading: false
}


export const getCharge = (state = initialState, action) => {
  switch (action.type) {
    case chargeConstant.GET_CHARGE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case chargeConstant.GET_CHARGE_SUCCESS:
      return {
        ...state,
        loading: false,
        charge: action.data
      }
    case chargeConstant.GET_CHARGE_FAILURE:
      return {
        err: action.error,
        loading: false
      }
    default:
      return state;
  }
};
