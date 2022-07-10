import axios from "axios";
const mainAPI = "https://kuranga-api.herokuapp.com/api/";
const instance = axios.create({
    baseURL: mainAPI,
});
instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization="Bearer ";
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export const POST = instance.post;
export const GET = instance.get;
export const PUT = instance.put;
export const DELETE= instance.delete;
