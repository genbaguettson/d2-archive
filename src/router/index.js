import { createRouter, createWebHistory } from 'vue-router';
import WeaponView from '../views/WeaponView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/weapons/TEST',
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
