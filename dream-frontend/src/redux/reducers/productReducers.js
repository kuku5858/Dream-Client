import * as actionTypes from "../constants/productConstants";

export const getProductsReducer = (state = { products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products:  []
            }
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export const getOneProductReducer = (state = { product: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_ONE_PRODUCT_REQUEST:
            return {
                loading: true
            }
        case actionTypes.GET_ONE_PRODUCT_SUCCESS:
            return {
                loading: false,
                product: action.payload
            }
        case actionTypes.GET_ONE_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_ONE_PRODUCT_RESET:
            return {
                product: {}
            }
        default: 
            return state;
    }
}