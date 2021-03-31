import initialState from './state';

const mutations = {
  resetState(state) {
    Object.assign(state, initialState());
  },

  saveToken(state, payload) {
    state.accessToken = payload;
  }
};

export default mutations;
