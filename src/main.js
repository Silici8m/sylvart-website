// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'; // Import du fichier router.js

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
