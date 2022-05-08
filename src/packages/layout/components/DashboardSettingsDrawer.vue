<template>
  <a-drawer message=""
    class="settings-drawer"
    :class="[rtl ? 'settings-drawer-rtl' : '']"
    :placement="rtl ? 'left' : 'right'"
    :closable="false"
    :visible="showSettingsDrawer"
    width="360"
    :getContainer="() => wrapper"
    @close="$emit('toggleSettingsDrawer', false)"
    >
    </a-drawer>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({})
export default class DashboardSettingsDrawer extends Vue {
  @Prop({ type: Boolean, default: false }) showSettingsDrawer !: boolean
  @Prop({ type: String, default: 'primary' }) sidebarColor !: string
  @Prop({ type: String, default: 'light' }) sidebarTheme !: string
  @Prop({ type: Boolean, default: false }) navbarFixed !: boolean
  @Prop({ type: Boolean, default: false }) rtl !: boolean

  private wrapper:any = document.body;
  private sidebarColorModel:any = this.sidebarColor;
  private sidebarThemeModel:any = this.sidebarTheme;
  private navbarFixedModel:any = this.navbarFixed;
  mounted() {
    this.wrapper = document.getElementById('layout-dashboard');
  }
}
</script>

<style scoped lang='scss'>
</style>
