import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Auth from './components/pages/Auth.vue';
import Login from './components/pages/Login.vue';
import Registration from './components/pages/Registration.vue';
import AuthService from './services/AuthService.js';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    beforeEnter(to, from, next) {
      if (AuthService.isAuthorized()) {
        return next();
      }

      return next({ name: 'auth' });
    }
  },
  {
    name: 'auth',
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      { path: 'login', component: Login },
      { path: 'registration', component: Registration }
    ],
    beforeEnter(to, from, next) {
      if (!AuthService.isAuthorized()) {
        return next();
      }

      return next({ name: 'home' });
    }
  }
];

const router = new createRouter({
  routes,
  history: createWebHistory()
});

export default router;
