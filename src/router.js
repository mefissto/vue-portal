import { createRouter, createWebHistory } from 'vue-router';

import AuthService from './services/AuthService.js';

import Login from './components/layouts/Login.vue';
import Registration from './components/layouts/Registration.vue';
import Auth from './components/pages/Auth.vue';
import Home from './components/pages/Home.vue';
import News from './components/pages/News.vue';
import Users from './components/pages/Users.vue';
import Services from './components/pages/Services.vue';
import About from './components/pages/About.vue';

const routes = [
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
  {
    name: 'home',
    path: '/',
    component: Home,
    redirect: '/users',
    meta: { requiresAuth: true },
    children: [
      { name: 'users', path: '/users', component: Users },
      { name: 'news', path: '/news', component: News },
      { name: 'services', path: '/services', component: Services },
      { name: 'about', path: '/about', component: About }
    ]
  }
];

const router = new createRouter({
  routes,
  history: createWebHistory()
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    return next();
  }

  if (AuthService.isAuthorized()) {
    return next();
  }

  return next({ name: 'auth' });
});

export default router;
