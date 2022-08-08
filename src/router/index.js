import { createRouter, createWebHistory } from 'vue-router';
import WeaponView from '../views/WeaponView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/weapon/TEST',
  },
  {
    path: '/😢',
    name: 'notFound',
    component: NotFoundView,
    alias: ['/%F0%9F%98%A2'],
  },
  {
    path: '/weapon/:name',
    name: 'weapon',
    component: WeaponView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
