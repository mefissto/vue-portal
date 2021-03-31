const actions = {
  resetState({ commit }) {
    commit('resetState');
  },

  saveToken({ commit }, payload) {
    commit('saveToken', payload);
  }
};

export default actions;
