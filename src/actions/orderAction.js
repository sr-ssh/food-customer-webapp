
import { orderConstant } from '../constants/orderConstant';
import { orderService } from '../services';
import { alertActions } from './alertActions';
import { history } from '../helpers';


export const orderAction = {
    getProduct,
    getInLineOrders,
    getOrderDetails,
    cancelOrder,
    getOrderProductsTypes,
    addOrder
};

function getProduct(body) {
    return dispatch => {
        dispatch(request(orderConstant.GET_PRODUCT_ORDER_REQUEST));
        orderService.getProduct(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                        dispatch(failure(orderConstant.GET_PRODUCT_ORDER_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("product order changed")
                        dispatch(success(orderConstant.GET_PRODUCT_ORDER_SUCCESS, res.data))
                        dispatch(alertActions.success(res.message));
                    } else if (res.success === false) {
                        console.log("product order changed")
                        dispatch(failure(orderConstant.GET_PRODUCT_ORDER_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(orderConstant.GET_PRODUCT_ORDER_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}


function getInLineOrders(body) {
    return dispatch => {
        dispatch(request(orderConstant.GET_INLINE_ORDERS_REQUEST));
        orderService.getInLineOrders(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                        dispatch(failure(orderConstant.GET_INLINE_ORDERS_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("got the inline orders")
                        dispatch(success(orderConstant.GET_INLINE_ORDERS_SUCCESS, res.data))
                    } else if (res.success === false) {
                        console.log("got the inline orders")
                        dispatch(failure(orderConstant.GET_INLINE_ORDERS_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(orderConstant.GET_INLINE_ORDERS_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}


function getOrderDetails(body) {
    return dispatch => {
        dispatch(request(orderConstant.GET_ORDER_DETAILS_REQUEST));
        orderService.getOrderDetails(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                        dispatch(failure(orderConstant.GET_ORDER_DETAILS_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("got the inline orders")
                        dispatch(success(orderConstant.GET_ORDER_DETAILS_SUCCESS, res.data))
                    } else if (res.success === false) {
                        console.log("got the inline orders")
                        dispatch(failure(orderConstant.GET_ORDER_DETAILS_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));

                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(orderConstant.GET_ORDER_DETAILS_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}

function cancelOrder(body) {
    return dispatch => {
        dispatch(request(orderConstant.CANCEL_ORDER_REQUEST));
        orderService.cancelOrder(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                        dispatch(failure(orderConstant.CANCEL_ORDER_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("order canceled")
                        dispatch(success(orderConstant.CANCEL_ORDER_SUCCESS, res.data))
                        dispatch(alertActions.success(res.message));
                        if (res.data.status)
                            history.go(0)
                    } else if (res.success === false) {
                        dispatch(failure(orderConstant.CANCEL_ORDER_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));

                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(orderConstant.CANCEL_ORDER_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}

function getOrderProductsTypes() {
    return dispatch => {
        dispatch(request(orderConstant.GET_ORDER_PRODUCTS_TYPES_REQUEST));
        orderService.getOrderProductsTypes()
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                        dispatch(failure(orderConstant.GET_ORDER_PRODUCTS_TYPES_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("order product types")
                        dispatch(success(orderConstant.GET_ORDER_PRODUCTS_TYPES_SUCCESS, res.data))
                        dispatch(alertActions.success(res.message));
                    } else if (res.success === false) {
                        dispatch(failure(orderConstant.GET_ORDER_PRODUCTS_TYPES_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(orderConstant.GET_ORDER_PRODUCTS_TYPES_FAILURE, error.toString()));
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}


function addOrder(body) {
    return dispatch => {
        dispatch(request(orderConstant.ADD_ORDER_REQUEST));
        orderService.addOrder(body)
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نیست'))
                        dispatch(failure(orderConstant.ADD_ORDER_FAILURE, 'ارتباط با سرور برقرار نمیباشد'))
                    }
                    else if (res.success) {
                        console.log("order product types")
                        dispatch(success(orderConstant.ADD_ORDER_SUCCESS, res.data))
                        dispatch(alertActions.success(res.message));
                        history.push('/main')
                    } else if (res.success === false) {
                        dispatch(failure(orderConstant.ADD_ORDER_FAILURE, res.message));
                        dispatch(alertActions.error(res.message));
                    }
                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    dispatch(failure(orderConstant.ADD_ORDER_FAILURE, error.toString()));
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

