
import axios from 'axios';
import { SERVER_LOCAL_SAEID, SERVER_URL } from '../config';
import { handleResponse, handleError } from '../helpers/util';
import { authHeader } from '../helpers';

// let baseRoute = SERVER_LOCAL_SAEID + '/v1/order';
let baseRoute = `${SERVER_URL}/order`;

axios.interceptors.request.use(request => {
    console.log('Starting Request', request)
    // `req` is the Axios request config, so you can modify the `headers`.
    request.headers = authHeader();
    return request
})


const getProduct = () => {
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
export const orderService = { getProduct }



