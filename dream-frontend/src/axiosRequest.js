import axios from "axios";

const BASE_URL = "http://localhost:3005/api/";
// const BASE_URL = "https://dreaminteriordesign.herokuapp.com/api/"

const user = JSON.parse(localStorage.getItem("persist:root")).loggedUser;
const TOKEN = JSON.parse(user)?.accessToken;

console.log(TOKEN);

export const pubReq = axios.create({
    baseURL: BASE_URL,
})

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})