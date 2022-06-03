import { createRouter, createWebHistory } from 'vue-router';
import WeaponView from '../views/WeaponView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/weapons/TEST',
  },
  {
    path: '/😢',
    name: 'notFound',
    component: NotFoundView,
    alias: ['/%F0%9F%98%A2'],
  },
  {
    path: '/weapons/:name',
    name: 'weapons',
    component: WeaponView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
