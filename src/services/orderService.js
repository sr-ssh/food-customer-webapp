
import axios from 'axios';
import { SERVER_LOCAL_SAEID, SERVER_URL } from '../config';
import { handleResponse, handleError } from '../helpers/util';
import { authHeader } from '../helpers';

let baseRoute = SERVER_LOCAL_SAEID + '/v1/order';
// let baseRoute = `${SERVER_LOCAL_SAEID}/order`;


axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    // `req` is the Axios request config, so you can modify the `headers`.
    request.headers = authHeader();
    return request
})

export const orderService = { 
    getProduct ,
    getInLineOrders,
    getOrderDetails,
    cancelOrder
}

function getProduct(){
    console.log("into getProduct");
    return axios
        .get(`${baseRoute}/product`)
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


function getInLineOrders(){
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


function getOrderDetails(orderId){
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


function cancelOrder(orderId){
    console.log("into cancelOrder");
    
    return axios
        .delete(`${baseRoute}`, { data: {orderId: orderId}})
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

