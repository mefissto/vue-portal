import ApiService from '../../services/ApiService';

const actions = {
  resetState({ commit }) {
    commit('resetState');
  },

  setActiveUser({ commit }, payload) {
    commit('setActiveUser', payload);
  },

  fetchActiveUserInfo({ commit }) {
    return ApiService.get('auth/active-user').then(res => commit('setActiveUser', res.data));
  },

  fetchUsers({ commit }) {
    return ApiService.get('users').then(res => commit('setUsers', res?.data));
  },

  removeUser({ commit }, payload) {
    ApiService.delete('users', payload).then(() => commit('removeUser', payload));
  }
};

export default actions;
