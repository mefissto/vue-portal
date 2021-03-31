import initialState from './state';

const mutations = {
  resetState(state) {
    Object.assign(state, initialState());
  },

  fetchNews(state, payload) {
    state.news = [...payload];
  }
};

export default mutations;
