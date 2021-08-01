import { addressConstants } from '../constants';
import { addressService } from '../services';
import { alertActions } from './alertActions';
import { history } from '../helpers';

export const addressActions = {
    newAddress,
    getAddresses
};

function getAddresses() {

    return dispatch => {
        dispatch(request())
        addressService.getAddresses()
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'));
                        dispatch(failure("ارتباط با سرور برقرار نیست"))
                    } else if (res.success) {
                        console.log("orders received")
                        console.log(res.data);
                        dispatch(success(res.data));
                    } else if (res.success === false) {
                        dispatch(alertActions.error(res.message));
                        dispatch(failure(res.message));
                    }

                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(addressConstants.GET_ORDERS_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );


    }
    function request() { console.log("into request"); return { type: addressConstants.GET_USER_ADDRESSES_REQUEST } }
    function success(address) { console.log("into success"); return { type: addressConstants.GET_USER_ADDRESSES_SUCCESS, address } }
    function failure(error) { return { type: addressConstants.GET_USER_ADDRESSES_FAILURE, error } }
}



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
                        console.log(res);
                        // store user address details in local storage to pass data again in factor page
                        localStorage.setItem('addressVerify', JSON.stringify(res.data));
                        dispatch(success(res));
                        dispatch(alertActions.success(res.message));
                        history.push('/order');
                    } else if (res.success === false) {
                        dispatch(alertActions.error(res.message));
                        dispatch(failure(res.message));
                        history.push('/main');
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
