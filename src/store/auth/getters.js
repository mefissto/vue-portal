const getters = {
  getToken(state) {
    return state.accessToken;
  },

  isAuthenticated(state) {
    return !!state.accessToken;
  }
};

export default getters;
