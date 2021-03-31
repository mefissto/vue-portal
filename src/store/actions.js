const actions = {
  resetState({ commit }) {
    commit('resetState');
    commit('authStore/resetState');
    commit('userStore/resetState');
    commit('newsStore/resetState');
  }
};

export default actions;
