/** http */
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

  // app.config.globalProperties.$message = components.message;
  // app.config.globalProperties.$notification = components.notification;
  // app.config.globalProperties.$info = components.Modal.info;
  // app.config.globalProperties.$success = components.Modal.success;
  // app.config.globalProperties.$error = components.Modal.error;
  // app.config.globalProperties.$warning = components.Modal.warning;
  // app.config.globalProperties.$confirm = components.Modal.confirm;
  // app.config.globalProperties.$destroyAll = components.Modal.destroyAll;
  return app;
};

// if (typeof window !== 'undefined' && (window as any).Vue) {
//   install((window as any).Vue);
// }

export default {
  install //,
  // ...components
}
