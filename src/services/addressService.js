import axios from 'axios';
import { SERVER_LOCAL_SAEID,SERVER_URL } from '../config';
import { authHeader } from '../helpers';
let baseRoute = SERVER_LOCAL_SAEID;


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




