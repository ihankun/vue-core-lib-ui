import Http from './http'

(Http as any).install = function(Vue: any) {
  Vue.component(Http.name, Http)
}

export default Http
