
import axios from 'axios';
import {  SERVER_URL } from '../config';
import { handleResponse, handleError } from '../helpers/util';
import { authHeader } from '../helpers';

let baseRoute = SERVER_URL + '/order';


axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    // `req` is the Axios request config, so you can modify the `headers`.
    let baseURL = request.url.substr(0, 22)
    if(baseURL === "https://api.neshan.org")
        request.headers = {"Api-Key" :"service.inx5NEKTw7qXPjrMFQsKLSF18UFuZVawIV5TCwjH"}
    else request.headers = authHeader();
    return request
})

export const orderService = {
    getProduct,
    getInLineOrders,
    getOrderDetails,
    cancelOrder,
    getOrderProductsTypes,
    addOrder,
    getFinishedOrders,
    getFactor
}

function getProduct() {
    return axios.get(`${baseRoute}/product`)
        .then(res => {
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) handleError(error.response.status)
        });
}


function getInLineOrders() {
    console.log("into getInLineOrders");
    return axios
        .get(`${baseRoute}/`)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}


function getOrderDetails(orderId) {
    console.log("into getInLineOrders");
    return axios
        .get(`${baseRoute}/${encodeURI(orderId)}`)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}


function cancelOrder(orderId) {
    console.log("into cancelOrder");

    return axios
        .delete(`${baseRoute}`, { data: { orderId: orderId } })
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}

function getOrderProductsTypes() {
    console.log("into getOrderProductsTypes");
    return axios
        .get(`${baseRoute}/product/type`)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}

function addOrder(body) {
    console.log("into addOrder");
    return axios
        .post(`${baseRoute}/`, body)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}

function getFinishedOrders() {
    console.log("into getFinishedOrders");
    return axios
        .get(`${baseRoute}/finished`)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}

function getFactor(orderId) {
    console.log("into getFactor");
    return axios
        .get(`${baseRoute}/factor/${encodeURI(orderId)}`)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return handleResponse(res)
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                handleError(error.response.status)
            }
        });
}