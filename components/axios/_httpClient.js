import axios from 'axios';
import { encrypt } from './encrypt';
import ProofTime from '../util/date/proof.time';

class _httpClient {
  constructor() {
    console.log('httpClient-');
  }

  static create(config, extraParams) {
    const _httpClientService = axios.create(config);

    // 请求拦截器
    _httpClientService.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return config;
      }, function(error) {
        // 处理请求错误
        return Promise.reject(error);
      });

    // 响应拦截器
    _httpClientService.interceptors.response.use(
      response => {
        if (response.headers.date) {
          ProofTime.proofread(response.headers.date);
        }

        if (response.request.responseType === 'blob') {
          return Promise.resolve(response.data);
        }

        switch (response.data.code) {
          case process.env.VUE_APP_MAGIC_VAL:
            return response.data.data;
          case '9990':
          case '9991':
          case '9992':
          case '9994':
          case '9996':
          case '9997':
          case '9998':
          case '9999':
          default:
            return Promise.reject(response.data.message || 'Error');
        }
      },
      error => {
        return Promise.reject(error);
      }
    );

    _httpClientService.interceptors.request.use(
      request => {
        if (typeof extraParams !== 'object' || Object.keys(extraParams).length === 0) {
          return request;
        }
        request.headers = {
          ...request.headers,
          'Cache-Control': 'no-cache',
          gateway: 'app',
          Authorization: encrypt.selfAuth(request, extraParams)
        };
        return request;
      },
      error => {
        return Promise.reject(error);
      }
    );
    return _httpClientService;
  }
}

export default _httpClient;
