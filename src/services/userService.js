import axios from 'axios';
import { SERVER_URL } from '../config';
import { history } from '../helpers';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL;


export const userService = {
    login,
    appInfo,
    verificationCode
};


function login(body) {
    console.log("into userService");
    return axios
        .post(`${baseRoute}/login`, body)
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data.data);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(res.data.data));
            
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function verificationCode(mobile) {
    console.log('into userService')

    const requestOptions = {
        headers: authHeader(),
        body: {mobile}
    };

    return axios
        .post(`${baseRoute}/verificationcode`, requestOptions.body)
        .then(res => {
            console.log("res.data >> "); 
            console.log(res.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}


function appInfo() {
    console.log("into userService");
    
    let app = {
        "versionCode": 1,
        "os": "android"
    }

    const requestOptions = {
        headers: authHeader(),
        body: app
    };

    return axios
        .post(`${baseRoute}/app/info`, requestOptions.body, {headers: requestOptions.headers})
        .then(res => {
            console.log("res.user >> "); 
            console.log(res.data);
            if(res.data.success)
                history.push('/');
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}


