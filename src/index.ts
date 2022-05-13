// import type { App } from 'vue';
import App from 'vue';
import * as components from './components';

export const install = function(app: App) {
  // if ((install as any).installed) return;
  // (install as any).installed = true;

  // components.map(component => {
  //   Vue.component(component.name, component);
  // });
  Object.keys(components).forEach(key => {
    const component = (components as any)[key];
    if (component.install) {
      (app as any).use(component);
    }
  });

  // (app as any).config.globalProperties.$message = (components as any).message;
  // (app as any).config.globalProperties.$notification = (components as any).notification;
  // (app as any).config.globalProperties.$info = (components as any).Modal.info;
  // (app as any).config.globalProperties.$success = (components as any).Modal.success;
  // (app as any).config.globalProperties.$error = (components as any).Modal.error;
  // (app as any).config.globalProperties.$warning = (components as any).Modal.warning;
  // (app as any).config.globalProperties.$confirm = (components as any).Modal.confirm;
  // (app as any).config.globalProperties.$destroyAll = (components as any).Modal.destroyAll;
  return app;
};

// if (typeof window !== 'undefined' && (window as any).Vue) {
//   install((window as any).Vue);
// }

export default {
  install,
  ...components
}
