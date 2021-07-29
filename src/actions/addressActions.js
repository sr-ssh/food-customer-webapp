import { addressConstants } from '../constants';
import { addressService } from '../services';
import { alertActions } from './alertActions';
import { history } from '../helpers';

export const addressActions = {
    newAddress
};



function newAddress(address) {
    return dispatch => {
        dispatch(request({ address }));

        addressService.newAddress(address)
            .then(
                res => {
                    console.log("address into addressAction");

                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'));
                        dispatch(failure("ارتباط با سرور برقرار نیست"))
                    }
                    else if (res.success) {
                        console.log("address successfully save!")
                        dispatch(success(res));
                        dispatch(alertActions.success(res.message));
                        // history.push('/order');
                    } else if (res.success === false) {
                        dispatch(alertActions.error(res.message));
                        dispatch(failure(res.message));
                        // history.push('/main');
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);

                },
                error => {
                    dispatch(failure(error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );

    };



    function request(address) { console.log("into request"); return { type: addressConstants.NEW_ADDRESS_REQUEST, address } }
    function success(address) { console.log("into success"); return { type: addressConstants.NEW_ADDRESS_SUCCESS, address } }
    function failure(error) { return { type: addressConstants.NEW_ADDRESS_FAILURE, error } }
}

/*

{
    provider: {
        status: false
    }
}
{
    deliveryCost: 5000,
    provider: {
        status: true,
        kitchenArea: 'هنرستان'
    }
}

*/
