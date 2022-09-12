import Dashboard from './layouts/Dashboard.vue'
import DashboardFooter from './components/footers/DashboardFooter.vue'
import DashboardHeader from './components/headers/DashboardHeader.vue'
import DashboardSettingsDrawer from './components/siderbars/DashboardSettingsDrawer.vue'
import DashboardSidebar from './components/siderbars/DashboardSidebar.vue'

const components = [
  DashboardFooter,
  DashboardHeader,
  DashboardSettingsDrawer,
  DashboardSidebar,
  Dashboard
]

const install = (Vue) => {
  if (install.installed) return;
  install.installed = true;

  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  DashboardFooter,
  DashboardHeader,
  DashboardSettingsDrawer,
  DashboardSidebar,
  Dashboard
};

export default {
  install,
  ...components
}
