import axios from 'axios';

let mainAPI;

process.env.NODE_ENV === 'development'
  ? (mainAPI = 'http://localhost:5000/api/v1/')
  : (mainAPI = 'https://livestock-bank.herokuapp.com/api/v1/');

const instance = axios.create({
  baseURL: mainAPI,
});
instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export const POST = instance.post;
export const GET = instance.get;
export const PUT = instance.put;
export const DELETE = instance.delete;
