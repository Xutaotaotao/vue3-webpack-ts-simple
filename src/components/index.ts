import { App } from 'vue';
import { default as Tag } from './n-tag/index';

const components = [
  Tag
]

const install = function(app: App) {
  components.forEach(component => {
    app.use(component as unknown as { install: () => any });
  });
  return app;
};

export {
  Tag
}

export default {
  install,
};
