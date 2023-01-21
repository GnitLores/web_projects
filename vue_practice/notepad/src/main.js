import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router'; // Automatically looks for index.js when no file is specified

import './assets/main.css';

createApp(App).use(router).mount('#app');
