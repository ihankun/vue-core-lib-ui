<template>
  <div id="app">
    <Dashboard :menuList="menuList">
      <router-view />
    </Dashboard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import Dashboard from 'components/layout/components/Dashboard.vue'
const menuList = [
  {
    menuName: '统计',
    menuUrl: '/tables',
    svg: 'table'
  }
]
@Component({
  // components: {
  //   Dashboard
  // }
})
export default class App extends Vue {
  private menuList: any[] = menuList
}
</script>

<style lang="scss">
</style>
