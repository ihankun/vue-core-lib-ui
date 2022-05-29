<template>
  <a-layout-footer>
    <a-row type="flex">
      <a-col :span="24" :md="12">
        <p class="copyright">
          © 2022, made with @hankun
        </p>
      </a-col>
      <a-col :span="24" :md="12" class="footer-control">
        <a-menu mode="horizontal">
          <a-menu-item>关于</a-menu-item>
          <!-- <a-menu-item>我的</a-menu-item> -->
        </a-menu>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class DashboardFooter extends Vue {
}
</script>

<style scoped lang='scss'>
</style>
