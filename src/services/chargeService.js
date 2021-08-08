
import axios from 'axios';
import { SERVER_LOCAL_SAEID,SERVER_URL } from '../config';
import { handleResponse, handleError } from '../helpers/util';

let baseRoute = `${SERVER_LOCAL_SAEID}/charge`;

export const chargeService = { 
    getCharge 
}

function getCharge(){
    console.log("into getCharge");
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

