import Http from './http'

Http.install = function(Vue) {
  Vue.component(Http.name, Http)
}

export default Http
