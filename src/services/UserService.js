export default {
  getUser() {
    return JSON.parse(localStorage.getItem(process.env.VUE_APP_USER_DATA));
  },
  setUser(user) {
    return localStorage.setItem(process.env.VUE_APP_USER_DATA, JSON.stringify(user));
  }
};
