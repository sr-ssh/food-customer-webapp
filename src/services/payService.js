
import axios from 'axios';
import { SERVER_URL } from '../config';
import { handleResponse, handleError } from '../helpers/util';

let baseRoute = `${SERVER_URL}/pay`;

export const payService = { 
    payOrder 
}

function payOrder(body){
    console.log("into payOrder");
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

