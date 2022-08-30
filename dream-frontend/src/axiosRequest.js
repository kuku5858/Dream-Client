import axios from "axios";

// const BASE_URL = "http://localhost:3005/api/";
const BASE_URL = "https://dream-interior-design.herokuapp.com/api/"


// const user = JSON.parse(localStorage.getItem("persist:root")).loggedUser;
const user = JSON.parse(localStorage.getItem("persist:root")) !== null && JSON.parse(localStorage.getItem("persist:root")).loggedUser;

console.log(`axios ${user}`)
const TOKEN = JSON.parse(user)?.accessToken;

console.log(TOKEN);

export const pubReq = axios.create({
    baseURL: BASE_URL,
})

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})