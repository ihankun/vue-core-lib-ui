import SvgIcon from '@/components/svg-icon/svg-icon.vue'

const components = [
  SvgIcon
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
