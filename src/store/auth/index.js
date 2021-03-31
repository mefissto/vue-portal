import initialState from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const authStore = { state: initialState(), actions, mutations, getters, namespaced: true };

export default authStore;
