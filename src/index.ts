import SvgIcon from '@/packages/svg-icon/svg-icon.vue'
import DashboardFooter from '@/packages/layout/components/DashboardFooter.vue'
import DashboardHeader from '@/packages/layout/components/DashboardHeader.vue'
import DashboardSettingsDrawer from '@/packages/layout/components/DashboardSettingsDrawer.vue'
import DashboardSidebar from '@/packages/layout/components/DashboardSidebar.vue'

const components = [
  SvgIcon,
  DashboardFooter,
  DashboardHeader,
  DashboardSettingsDrawer,
  DashboardSidebar
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
  install,
  ...components
}
