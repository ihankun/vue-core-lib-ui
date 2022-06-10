<template>
  <a-layout-sider
    collapsible
    class="sider-primary"
    breakpoint="lg"
    collapsed-width="0"
    width="250px"
    :collapsed="sidebarCollapsed"
    @collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
    :trigger="null"
    :class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
    theme="light"
    :style="{backgroundColor: 'transparent'}"
  >
    <div class="brand"><img src="../assets/logo.png" alt=""><span>管理系统</span></div>
    <hr>
    <!-- 菜单 -->
    <a-menu theme="light" mode="inline" :data-source="menuList" >
      <template v-for="item in menuList">
        <a-menu-item :key="item.menuId">
          <router-link :to="item.menuUrl" >
            <span class="icon"><svg-icon class="svg-icon" :icon-name= "item.svg"></svg-icon></span>
            <span class="label">{{ item.menuName }}</span>
          </router-link>
        </a-menu-item>
      </template>
    </a-menu>
    <!-- end菜单 -->
  </a-layout-sider>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({})
export default class DashboardSidebar extends Vue {
  @Prop({ type: String, default: 'primary' }) sidebarColor !: string
  @Prop({ type: String, default: 'light' }) sidebarTheme !: string
  @Prop({ type: Boolean, default: false }) sidebarCollapsed !: boolean
  @Prop({ type: Array }) menuList !: any[]
  @Watch('menuList')
  getMenuList(newData: any[]) {
    console.log(newData);
    this.menuList = newData
  }

  mounted() {
    //
  }

  created() {
    //
  }
}
</script>

<style scoped lang='scss'>
.ant-menu-item {
    margin-top: 15px;
}
li {
    list-style: none;
    a {
        text-decoration-line: none;
    }
}
</style>
