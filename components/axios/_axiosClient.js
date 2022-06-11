import axios from 'axios'

class _axiosClient {
  constructor() {
    console.log('_axiosClient-');
  }

  static create(config) {
    const http = axios.create(config)

    // 请求拦截器
    http.interceptors.request.use(config => {
      // 在发送请求之前做些什么
      return config;
    }, function(error) {
      // 处理请求错误
      return Promise.reject(error);
    });

    // 相应拦截器
    http.interceptors.response.use(response => {
      // 在2xx范围内的任何状态代码都会触发此功能
      // 处理响应数据
      return response.data.data;
    }, function(error) {
      // 任何超出2xx范围的状态代码都会触发此功能
      // 处理响应错误
      return Promise.reject(error);
    });
    return http
  }
}

export default _axiosClient
