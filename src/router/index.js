import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../pages/Homepage.vue';
import Aboutpage from '../pages/Aboutpage.vue';
import Contactpage from '../pages/Contactpage.vue';

const routes = [
  { path: '/', component: Homepage },
  { path: '/about', component: Aboutpage },
  { path: '/contact', component: Contactpage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
