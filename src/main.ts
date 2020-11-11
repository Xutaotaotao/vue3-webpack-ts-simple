import { createApp } from 'vue';
import App from './App.vue';
import ninecat from './components/index';

const app = createApp(App);
app
  .use(ninecat)
  .mount('#app');
