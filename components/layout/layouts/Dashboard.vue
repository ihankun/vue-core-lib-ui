<template>
  <div>
    <a-layout class="layout-dashboard" id="layout-dashboard" :class="[navbarFixed ? 'navbar-fixed' : '', ! sidebarCollapsed ? 'has-sidebar' : '', layoutClass]">
      <dashboard-sidebar
        :sidebarCollapsed="sidebarCollapsed"
        :sidebarColor="sidebarColor"
        :sidebarTheme="sidebarTheme"
        @toggleSidebar="toggleSidebar"
        v-bind="$attrs"
      >
      </dashboard-sidebar>
      <a-layout>
        <dashboard-header
          :sidebarCollapsed="sidebarCollapsed"
          :navbarFixed="navbarFixed"
          @toggleSettingsDrawer="toggleSettingsDrawer"
          @toggleSidebar="toggleSidebar"></dashboard-header>
        <a-layout-content class="content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </a-layout-content>
        <dashboard-footer></dashboard-footer>
        <a-button class="fab" shape="circle" @click="showSettingsDrawer = true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="#111827"/>
          </svg>
        </a-button>
        <div class="sidebar-overlay" @click="sidebarCollapsed = true" v-show="! sidebarCollapsed"></div>
      </a-layout>
      <dashboard-settings-drawer
        :showSettingsDrawer="showSettingsDrawer"
        :navbarFixed="navbarFixed"
        :sidebarTheme="sidebarTheme"
        @toggleSettingsDrawer="toggleSettingsDrawer"
        @toggleNavbarPosition="toggleNavbarPosition"
        @updateSidebarTheme="updateSidebarTheme"
        @updateSidebarColor="updateSidebarColor"
      ></dashboard-settings-drawer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DashboardSidebar from './DashboardSidebar.vue'
import DashboardHeader from './DashboardHeader.vue'
import DashboardSettingsDrawer from './DashboardSettingsDrawer.vue'
import DashboardFooter from './DashboardFooter.vue'

const sidebarCollapsed = false
const sidebarColor = 'primary'
const sidebarTheme = 'light'
const navbarFixed = true
const showSettingsDrawer = false

@Component({
  components: {
    'dashboard-sidebar': DashboardSidebar,
    'dashboard-header': DashboardHeader,
    'dashboard-settings-drawer': DashboardSettingsDrawer,
    'dashboard-footer': DashboardFooter
  }
})
export default class DashboardLayout extends Vue {
  private sidebarCollapsed: boolean = sidebarCollapsed
  private sidebarColor: string = sidebarColor
  private sidebarTheme: string = sidebarTheme
  private navbarFixed: boolean = navbarFixed
  private showSettingsDrawer: boolean = showSettingsDrawer
  get layoutClass() {
    return ''
  }

  toggleSidebar(value: any) {
    this.sidebarCollapsed = value
  }

  toggleSettingsDrawer(value: any) {
    this.showSettingsDrawer = value
  }

  toggleNavbarPosition(value: any) {
    this.navbarFixed = value
  }

  updateSidebarTheme(value: any) {
    this.sidebarTheme = value
  }

  updateSidebarColor(value: any) {
    this.sidebarColor = value
  }
}
</script>

<style scoped lang='scss'>
.content {
  min-height: 70vh;
}
</style>
<style src="../style/base/_override.scss" scoped></style>
<style src="../style/base/_typography.scss" scoped></style>
<style src="../style/base/_utilities.scss" scoped></style>
<style src="../style/base/_variables.scss" scoped></style>
<style src="../style/_dashboard.scss" scoped></style>
