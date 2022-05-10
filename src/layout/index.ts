import DashboardFooter from './components/DashboardFooter.vue'
import DashboardHeader from './components/DashboardHeader.vue'
import DashboardSettingsDrawer from './components/DashboardSettingsDrawer.vue'
import DashboardSidebar from './components/DashboardSidebar.vue'

const components = [
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
