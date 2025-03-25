// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import TrombiPage from './views/TrombiPage.vue';
import EventPage from './views/EventPage.vue';
import DefiPage from './views/DefiPage.vue';
import HotlinesPage from './views/HotlinesPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/trombinoscope', name: 'Trombi', component: TrombiPage },
  { path: '/events', name: 'Event', component: EventPage },
  { path: '/defis', name: 'Defis', component: DefiPage },
  { path: '/hotlines', name: 'Hotlines', component: HotlinesPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


export default router;
