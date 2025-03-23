// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './views/HomePage.vue';
import TrombiPage from './views/TrombiPage.vue';
import EventPage from './views/EventPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/trombinoscope', name: 'Trombi', component: TrombiPage },
  { path: '/events', name: 'Event', component: EventPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
