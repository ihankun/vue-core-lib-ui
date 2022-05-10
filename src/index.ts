/** http */
import http from '@/http/http'

/** layout */
import DashboardFooter from '@/layout/components/DashboardFooter.vue'
import DashboardHeader from '@/layout/components/DashboardHeader.vue'
import DashboardSettingsDrawer from '@/layout/components/DashboardSettingsDrawer.vue'
import DashboardSidebar from '@/layout/components/DashboardSidebar.vue'

/** svg-icon */
import SvgIcon from '@/svg-icon/svg-icon.vue'

const components = [
  SvgIcon,
  DashboardFooter,
  DashboardHeader,
  DashboardSettingsDrawer,
  DashboardSidebar,
  http
]

const install = (Vue: any) => {
  if ((install as any).installed) return;
  (install as any).installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  version: '0.0.1',
  install,
  ...components
}
