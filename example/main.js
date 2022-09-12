import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/layout/layouts/Dashboard.vue'
import SvgIcon from '../components/svg-icon/svg-icon.vue'

// import '../components/style/index.scss'
// import '../components/style/base/base.scss'

Vue.component('Dashboard', Dashboard)
Vue.component('svg-icon', SvgIcon)
Vue.use(Antd)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index'
  },
  {
    path: '/index',
    name: '测试页',
    component: () => import('./Test.vue')
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
