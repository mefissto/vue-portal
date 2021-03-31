import initialState from './state';

const mutations = {
  resetState(state) {
    Object.assign(state, initialState());
  },

  setActiveUser(state, payload) {
    state.activeUser = { ...payload };
  },

  setUsers(state, payload) {
    state.users = [...payload];
  },

  removeUser(state, payload) {
    state.users = state.users.filter(user => user._id !== payload);
  }
};

export default mutations;
