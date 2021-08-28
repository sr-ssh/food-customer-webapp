import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helpers';
import { alertActions } from './alertActions';

export const userActions = {
    login,
    appInfo,
    logout,
    verificationCode
};


function login(body) {
    return dispatch => {
        dispatch(request({ body }));

        userService.login(body)
            .then(
                user => {
                    console.log("user into userAction");

                    if (user === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'));
                        dispatch(failure("ارتباط با سرور برقرار نمی شود"))
                    }
                    else if (user.success) {
                        console.log("user entered")
                        dispatch(success(user));
                        history.push('/');
                    } else if (user.success === false) {
                        dispatch(alertActions.error(user.message));
                        dispatch(failure(user.message))
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

    function request(user) { console.log("into request"); return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { console.log("into success"); return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function appInfo() {
    return dispatch => {
        userService.appInfo()
            .then(
                res => {
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'));
                    }
                    else if (res.success) {
                        console.log("user entered")
                    } else if (res.success === false) {
                        dispatch(alertActions.error(res.message));
                    }

                    setTimeout(() => {
                        dispatch(alertActions.clear());
                    }, 1500);
                },
                error => {
                    console.log("occure error");
                    console.log(error.toString());
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };


}


function verificationCode(mobile) {
    return dispatch => {
        dispatch(request(mobile));
        userService.verificationCode(mobile)
            .then(
                res => {
                    console.log("user into userAction");
                    console.log(res)
                    if (res === undefined) {
                        dispatch(alertActions.error('ارتباط با سرور برقرار نمی شود'));
                        dispatch(failure('ارتباط با سرور برقرار نمی شود'))
                    }
                    else if (res.success) {
                        console.log("verification code sent")
                        dispatch(success(res));
                        dispatch(alertActions.success(res.message));
                    } else if (res.success === false) {
                        dispatch(alertActions.error(res.message));
                        dispatch(failure(res.message))
                    } else {
                        dispatch(alertActions.error("مشکلی وجود دارد"));
                        dispatch(failure("مشکلی وجود دارد"))
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

    function request(mobile) { console.log("into request"); return { type: userConstants.VERIFICATION_CODE_REQUEST, mobile } }
    function success(mobile) { console.log("into success"); return { type: userConstants.VERIFICATION_CODE_SUCCESS, mobile } }
    function failure(error) { return { type: userConstants.VERIFICATION_CODE_FAILURE, error } }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.clear()
    history.push('/')
}