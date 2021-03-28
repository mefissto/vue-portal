import { createRouter, createWebHistory } from 'vue-router';

import AuthService from './services/AuthService.js';

import Home from './components/pages/Home.vue';
import Auth from './components/pages/Auth.vue';
import Login from './components/pages/Login.vue';
import Registration from './components/pages/Registration.vue';
import News from './components/pages/News.vue';
import Contacts from './components/pages/Contacts.vue';
import Services from './components/pages/Services.vue';
import About from './components/pages/About.vue';

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
  },
  { name: 'news', path: '/news', component: News },
  { name: 'services', path: '/services', component: Services },
  { name: 'contacts', path: '/contacts', component: Contacts },
  { name: 'about', path: '/about', component: About }
];

const router = new createRouter({
  routes,
  history: createWebHistory()
});

export default router;
