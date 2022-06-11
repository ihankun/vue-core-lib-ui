import _httpClient from './_httpClient'
import _axiosClient from './_axiosClient.js'

class http {
  static create(config, extraParams) {
    return _httpClient.create(config, extraParams)
  }

  static createAxios(config) {
    return _axiosClient.create(config)
  }
}

export default http
