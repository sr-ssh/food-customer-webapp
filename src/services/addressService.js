import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';
let baseRoute = SERVER_URL;

axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    // `req` is the Axios request config, so you can modify the `headers`.
    request.headers = authHeader();
    return request
})

export const addressService = {
    newAddress,
    getAddresses
};

function getAddresses() {
    console.log("into addressService");
    return axios
        .get(`${baseRoute}/location`)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);
            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}

function newAddress(body) {
    console.log("into addressService");
    return axios
        .post(`${baseRoute}/location`, body)
        .then(res => {
            console.log("res.user >> ");
            console.log(res.data.data);

            return res.data
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
            }
        });
}




