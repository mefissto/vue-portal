import ApiService from '../../services/ApiService';

const actions = {
  resetState({ commit }) {
    commit('resetState');
  },

  fetchNews({ commit }) {
    ApiService.getNews().then(res => commit('fetchNews', res));
  }
};

export default actions;
