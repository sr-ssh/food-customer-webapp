
import axios from 'axios';
import {SERVER_LOCAL_SAEID,SERVER_LOCAL } from '../config';
import { handleResponse , handleError } from '../helpers/util';

let baseRoute = SERVER_LOCAL_SAEID + '/v1/order';

const getProduct = () => axios.post(`${baseRoute}/product`).then(res => handleResponse(res)).catch(error => error.response && handleError(error.response.status));

export const orderService = {getProduct}



