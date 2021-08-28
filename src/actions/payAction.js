
import { payConstant } from '../constants';
import { history } from '../helpers';
import { payService } from '../services';
import { alertActions } from './alertActions';


export const payAction = { 
    payOrder
};

function payOrder(body) {
    return dispatch => {
        dispatch(request(payConstant.PAY_ORDER_REQUEST));
        payService.payOrder(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'))
                        dispatch(failure(payConstant.PAY_ORDER_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("got charge")
                        dispatch(success(payConstant.PAY_ORDER_SUCCESS, res.data))
                        if(res.data.onlinePay){
                            if(res.data.payStatus !== 100)
                                dispatch(alertActions.error(res.message));
                            else
                                window.location.href = res.data.payURL
                        }else {
                            dispatch(alertActions.success(res.message));
                            history.push('/')
                        }
                    } else if (res.success === false) {
                        dispatch(failure(payConstant.PAY_ORDER_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(payConstant.PAY_ORDER_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}


const request = type => { return { type: type } }
const success = (type, data) => { return { type: type, data } }
const failure = (type, error) => { return { type: type, error } }

