import CryptoJS from 'crypto-js';
import qs from 'qs';

export const encrypt = {
  auth: request => {
    let params = null;
    const currentUser = JSON.parse(window.sessionStorage.getItem('currentUser') || window.sessionStorage.getItem('LOGIN-SOLE-SIGN'));
    const token = currentUser.token;
    const secret = currentUser.secret;
    const timeStamp = Date.now();
    const once = Math.random().toString(16);
    switch (request.method) {
      case 'get':
      case 'delete':
        if (request.url.indexOf('?') > -1) {
          const parameters = request.url.split('?');
          params = encrypt.objKeySort(qs.parse(parameters[1]));
        }
        if (request.params) {
          if (params === null) {
            params = encrypt.objKeySort(request.params);
          } else {
            params = params + encrypt.objKeySort(request.params);
          }
        }
        break;
      case 'post':
      case 'put':
        params = typeof request.data === 'string' ? request.data : JSON.stringify(request.data);
        break;
    }
    let originSign = null;
    if (params === null) {
      originSign = token + timeStamp + once + secret;
    } else if (Object.prototype.toString.call(request.data) === '[object FormData]') {
      originSign = token + timeStamp + once + 'null' + secret;
    } else {
      originSign = token + timeStamp + once + params + secret;
    }
    const sign = CryptoJS.MD5(originSign).toString().toUpperCase();
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(token)) + '.' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(timeStamp)) +
      '.' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(once)) + '.' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(sign));
  },
  deepClone: obj => {
    if (Array.isArray(obj)) {
      return obj.reduce((result, val) => [...result, encrypt.deepClone(val)], []);
    }
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      return Object.keys(obj).reduce((result, key) => ({ ...result, [key]: encrypt.deepClone(obj[key]) }), {});
    }
    return obj;
  },
  selfAuth: (request, config) => {
    let params = null;
    const timeStamp = Date.now();
    const type = 'md5';
    const secret = config.secret;
    const _config = encrypt.deepClone(config);
    delete _config.secret;
    const token = JSON.stringify(_config);
    switch (request.method) {
      case 'get':
      case 'delete':
        if (request.url.indexOf('?') > -1) {
          const parameters = request.url.split('?');
          params = encrypt.objKey(qs.parse(parameters[1]));
        }
        if (request.params) {
          if (params === null) {
            params = encrypt.objKey(request.params);
          } else {
            params = params + encrypt.objKey(request.params)
          }
        }
        break;
      case 'post':
      case 'put':
        params = typeof request.data === 'string' ? request.data : JSON.stringify(request.data);
        break;
    }
    let originSign = null;
    if (params === null) {
      originSign = type + '.' + timeStamp + '.' + token + '..' + secret;
    } else {
      originSign = type + '.' + timeStamp + '.' + token + '.' + params + '.' + secret;
    }
    const sign = CryptoJS.MD5(originSign).toString().toUpperCase();
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(type)) + '.' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(timeStamp)) +
      '.' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(token)) + '.' + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(sign));
  },
  objKeySort: params => {
    const newKeys = Object.keys(params).sort();
    let newParams = null;
    for (let i = 0; i < newKeys.length; i++) {
      if (params[newKeys[i]] === null || params[newKeys[i]] === '' || typeof params[newKeys[i]] === 'undefined' || (typeof params[newKeys[i]] === 'object' && params[newKeys[i]].length === 0)) {
        continue;
      }
      if (newParams === null) {
        newParams = newKeys[i] + params[newKeys[i]];
        continue;
      }
      newParams += newKeys[i] + params[newKeys[i]];
    }
    return newParams;
  },
  objKey: params => {
    const newKeys = Object.keys(params);
    let newParams = null;
    for (let i = 0; i < newKeys.length; i++) {
      if (params[newKeys[i]] === null || params[newKeys[i]] === '' || typeof params[newKeys[i]] === 'undefined' || (typeof params[newKeys[i]] === 'object' && params[newKeys[i]].length === 0)) {
        continue;
      }
      if (newParams === null) {
        newParams = newKeys[i] + '=' + params[newKeys[i]];
        continue;
      }
      newParams = newParams + '&' + newKeys[i] + '=' + params[newKeys[i]];
    }
    return newParams;
  }
};
