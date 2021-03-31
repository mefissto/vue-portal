import { createStore } from 'vuex';

import authStore from './auth';
import userStore from './users';
import newsStore from './news';

import initialState from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const store = createStore({
  modules: { authStore, userStore, newsStore },
  state: initialState(),
  actions,
  mutations,
  getters,
  devtools: process.env.NODE_ENV !== 'production',
  strict: true
});

export default store;
