import { addressConstants } from '../constants';
import { addressService } from '../services';
import { alertActions } from './alertActions';
import { history } from '../helpers';

export const addressActions = {
    newAddress,
    getAddresses,
    searchAddress,
    searchAddressClear,
    editAddress
};

function getAddresses() {

    return dispatch => {
        dispatch(request())
        addressService.getAddresses()
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'));
                        dispatch(failure("ارتباط با سرور برقرار نمی شود"))
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

        addressService.newAddress({ lat: address.lat, lng: address.lng })
            .then(
                res => {
                    console.log("address into addressAction");

                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'));
                        dispatch(failure("ارتباط با سرور برقرار نمی شود"))
                    }
                    else if (res.success) {
                        console.log("address successfully save!")
                        console.log(res);
                        // store user address details in local storage to pass data again in factor page
                        localStorage.setItem('addressVerify', JSON.stringify(res.data));
                        localStorage.setItem('userAddress', JSON.stringify(address));
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

function searchAddress(body) {
    return dispatch => {
        dispatch(request(addressConstants.SEARCH_ADDRESS_REQUEST));
        addressService.searchAddress(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'))
                        dispatch(failure(addressConstants.SEARCH_ADDRESS_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res) {
                        console.log("got charge")
                        dispatch(success(addressConstants.SEARCH_ADDRESS_SUCCESS, res))
                    } else if (!res) {
                        dispatch(failure(addressConstants.SEARCH_ADDRESS_FAILURE, res));
                        dispatch(alertActions.error(res));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(addressConstants.SEARCH_ADDRESS_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}

function searchAddressClear() {
    return dispatch => {
        dispatch(request(addressConstants.SEARCH_ADDRESS_CLEAR));
    };
}

function editAddress(body) {
    return dispatch => {
        dispatch(request(addressConstants.EDIT_ADDRESS_REQUEST));
        addressService.editAddress(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'))
                        dispatch(failure(addressConstants.EDIT_ADDRESS_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res) {
                        console.log("address edited")
                        dispatch(success(addressConstants.EDIT_ADDRESS_SUCCESS, res))
                    } else if (!res) {
                        dispatch(failure(addressConstants.EDIT_ADDRESS_FAILURE, res));
                        dispatch(alertActions.error(res));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(addressConstants.EDIT_ADDRESS_FAILURE, error.toString()));
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