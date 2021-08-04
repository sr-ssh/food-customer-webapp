
import { chargeConstant } from '../constants';
import { chargeService } from '../services';
import { alertActions } from './alertActions';

export const chargeAction = { 
    getCharge
};

function getCharge() {
    return dispatch => {
        dispatch(request(chargeConstant.GET_CHARGE_REQUEST));
        chargeService.getCharge()
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                        dispatch(failure(chargeConstant.GET_CHARGE_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("got charge")
                        dispatch(success(chargeConstant.GET_CHARGE_SUCCESS, res.data))
                        dispatch(alertActions.success(res.message));
                    } else if (res.success === false) {
                        dispatch(failure(chargeConstant.GET_CHARGE_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(chargeConstant.GET_CHARGE_FAILURE, error.toString()));
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

