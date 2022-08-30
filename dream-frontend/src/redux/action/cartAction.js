// make http request to the backend to get product information and add it to cart

import * as actionTypes from "../constants/cartConstants";
import { pubReq } from "../../axiosRequest";


export const addToCartAction = (id, qty) => async(dispatch, getState) => {
    const { data } = await pubReq.get(`/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            productName: data.productName,
            imageUrl: data.image,
            price: data.price,
            quantity: data.quantity,
            qty
        }
    })

    console.log("I am product from cartAction", data);

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCartAction = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const resetCartAction = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.CART_RESET,
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};