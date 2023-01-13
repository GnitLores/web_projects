import { createApp } from 'vue';
import App from './App.vue';
// Global component registration (not recommended, use local)
// import Greeting from '@/components/Greeting.vue';

let vm = createApp(App);

// vm.component('Greeting', Greeting);

vm.mount('#app');
