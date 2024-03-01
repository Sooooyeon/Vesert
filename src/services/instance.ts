import axios from 'axios'

const JSON_CONTENT_TYPE = 'application/json';
const FORM_DATA_CONTENT_TYPE = 'multipart/form-data';
const BASE_URL: string = 'https://openmarket.weniv.co.kr';
const token = localStorage.getItem('token');

// default 인스턴스
export const defaultInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': JSON_CONTENT_TYPE,
  },
});

// image 인스턴스
export const imageInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': FORM_DATA_CONTENT_TYPE,
  },
});


// auth 인스턴스
export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': JSON_CONTENT_TYPE,
  },
});

authInstance.interceptors.request.use(
  (config: any) => {
    const storedToken = localStorage.getItem('token');
    if (storedToken && config.headers.Authorization.includes('null')) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    console.log(error.message);
    return Promise.reject(error);
  }
);