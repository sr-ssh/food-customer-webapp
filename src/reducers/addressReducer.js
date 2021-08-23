import { addressConstants } from '../constants';

const initialState = {};


export function getAddresses(state = initialState, action) {
    switch (action.type) {
        case addressConstants.GET_USER_ADDRESSES_REQUEST:
            return {
                loading: true,
                ...state
            };
        case addressConstants.GET_USER_ADDRESSES_SUCCESS:
            return {
                loading: false,
                addresses: action.address
            };
        case addressConstants.GET_USER_ADDRESSES_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}



export function newAddress(state = initialState, action) {
    switch (action.type) {
        case addressConstants.NEW_ADDRESS_REQUEST:
            return {
                loading: true,
                address: action.address
            };
        case addressConstants.NEW_ADDRESS_SUCCESS:
            return {
                loading: false,
                address: action.address
            };
        case addressConstants.NEW_ADDRESS_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}

export function searchAddress(state = initialState, action) {
    switch (action.type) {
        case addressConstants.SEARCH_ADDRESS_REQUEST:
            return {
                loading: true,
            };

        case addressConstants.SEARCH_ADDRESS_CLEAR:
            return {
                loading: false,
                searchAddress: {}
            };
        case addressConstants.SEARCH_ADDRESS_SUCCESS:
            return {
                loading: false,
                searchAddress: action.data
            };
        case addressConstants.SEARCH_ADDRESS_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}

export function editAddress(state = {}, action) {
    switch (action.type) {
        case addressConstants.EDIT_ADDRESS_REQUEST:
            return {
                loading: true,
            };
        case addressConstants.EDIT_ADDRESS_SUCCESS:
            return {
                loading: false,
            };
        case addressConstants.EDIT_ADDRESS_FAILURE:
            return {
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}