import axios from 'axios';
import { SERVER_URL } from '../config';
import { authHeader } from '../helpers';
let baseRoute = SERVER_URL;


export const addressService = {
    newAddress,
    getAddresses,
    searchAddress
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

function searchAddress(body) {
    console.log("into addressService");
    return axios
        .get(`https://api.neshan.org/v1/search?term=${encodeURI(body)}&lat=${encodeURI('36.297920')}&lng=${encodeURI("59.605933")}`, {headers: "web.nRDwOvUSAb8WPJZKaJUgdLnXK4MxFukGcw0TieG2"})
        .then(res => {
            console.log("res.user >> ");
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


