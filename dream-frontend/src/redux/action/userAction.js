import { pubReq } from "../../axiosRequest";
import { loginFail, loginRequest, loginSuccess, logout, registerFail, registerRequest, registerSuccess } from "../reducers/userReducers"
// import { registerFail, registerRequest, registerSuccess } from "../reducers/registerReducer"

export const loginAction = async (dispatch, user) => {
    dispatch(loginRequest());
    try {
        const res = await pubReq.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFail())
        console.log(`Error from userAction: ${err}`)
    }
}

export const logoutAction = async (dispatch) => {
    dispatch(logout());
}

export const registerAction = async (dispatch, newUser) => {
    dispatch(registerRequest());
    try {
        const res = await pubReq.post("/auth/register", newUser);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFail())
        console.log(`Error from userAction: ${err}`)
    }
}