import __httpClient from './_httpClient'

class http {
  static create(config, extraParams) {
    return __httpClient.create(config, extraParams)
  }
}

export default http
