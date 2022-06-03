declare module '*.vue' {
  // import Vue from 'vue'
  // export default Vue
  import { Component } from 'vue';
  const component: Component<any>;
  export default component;
}
declare module 'vue/types/vue' {
  import VueRouter,
  { Route } from 'vue-router';
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $http: any;
    $Message: any;
    $Modal: any;
  }
}
