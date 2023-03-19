import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import cookie from 'js-cookie';

// 请求拦截器
export const requestSuccess = (request: InternalAxiosRequestConfig) => {
  const token = cookie.get('token');
  if (request.headers) request.headers.token = token;
  return request;
};

export const requestFail = (error: InternalAxiosRequestConfig) => {
  return Promise.reject(error);
};

// 接收拦截器
export const responseSuccess = (response: AxiosResponse) => {
  return response;
};

export const responseFail = (error: AxiosResponse) => {
  return Promise.reject(error);
};
