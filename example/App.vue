<template>
  <div id="app">
    <Dashboard>
      <router-view />
    </Dashboard>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import Dashboard from 'components/layout/components/Dashboard.vue'

@Component({
  // components: {
  //   Dashboard
  // }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
</style>
