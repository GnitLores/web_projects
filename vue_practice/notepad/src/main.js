import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router'; // Automatically looks for index.js when no file is specified

import './assets/main.css';

// Plugin for giving pinia pinia stores access to router
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
createApp(App).use(pinia).use(router).mount('#app');
