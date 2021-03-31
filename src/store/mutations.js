import initialState from './state';

const mutations = {
  resetState(state) {
    Object.assign(state, initialState());
  }
};

export default mutations;
