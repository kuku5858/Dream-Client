//our http request to get the products

import * as actionTypes from "../constants/productConstants";
import { pubReq } from "../../axiosRequest";


export const getProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await pubReq.get("/products");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response ? error.response.data.message
          : error.message,
    });
  }
};

export const getOneProductAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ONE_PRODUCT_REQUEST });

    const { data } = await pubReq.get(`/products/${id}`);

    dispatch({
      type: actionTypes.GET_ONE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch(error) {
    dispatch({
      type: actionTypes.GET_ONE_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeOneProductAction = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_ONE_PRODUCT_RESET,
  });
};
