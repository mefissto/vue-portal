const initialState = () => {
  return { activeUser: null };
};

const state = initialState();

const mutations = {
  setActiveUser(state, payload) {
    state.activeUser = { ...payload };
  },
  resetState(state) {
    Object.assign(state, initialState());
  }
};

const getters = {
  activeUser(state) {
    return state.activeUser;
  }
};

export default {
  state,
  mutations,
  getters
};
