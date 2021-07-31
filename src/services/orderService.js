
import axios from 'axios';
import {SERVER_LOCAL_SAEID,SERVER_URL } from '../config';
import { handleResponse , handleError } from '../helpers/util';
import { authHeader } from '../helpers';

let baseRoute = SERVER_LOCAL_SAEID + '/v1/order';

const getProduct = () => axios.get(`${baseRoute}/product`,  {headers: authHeader()}).then(res => handleResponse(res)).catch(error => error.response && handleError(error.response.status));

export const orderService = {getProduct}



