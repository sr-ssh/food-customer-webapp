
import { orderConstant } from '../constants/orderConstant';
import { orderService } from '../services';
      
function getProduct(body) {
    return dispatch => {
        dispatch(request(orderConstant.GET_PRODUCT_ORDER_REQUEST));
        orderService.getUser(body).then(
                data => {
                    dispatch(success(orderConstant.GET_PRODUCT_ORDER_SUCCESS, data))
                },
                error => {
                    dispatch(failure(orderConstant.GET_PRODUCT_ORDER_FAILURE, error.toString()));
                }
            );
    };
}

        
const request = type=> {return { type: type }}
const success = (type, data) =>{return { type: type, data }}
const failure = (type, error) =>{return { type: type, error }}

export const orderAction = {getProduct};