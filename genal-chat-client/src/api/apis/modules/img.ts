import axios, { AxiosInstance } from 'axios';
import { requestSuccess, requestFail, responseSuccess, responseFail } from '../../fetch/interceptors';
const fetch: AxiosInstance = axios.create({
  timeout: 60000, // 超时时间一分钟
  baseURL: 'https://api.kdcc.cn',
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
  },
});

fetch.interceptors.request.use(requestSuccess, requestFail);
fetch.interceptors.response.use(responseSuccess, responseFail);

/**
 *
 * 获取必应每日一图
 * @param {PagingParams} params
 * @return {*}
 */
export async function getImg(): Promise<any> {
  return await fetch.get('', {});
}

// https://api.kdcc.cn
