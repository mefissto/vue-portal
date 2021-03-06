import CookieService from './CookieService.js';

export default {
  isAuthorized() {
    return !!this.getToken();
  },
  getToken() {
    return CookieService.get(process.env.VUE_APP_TOKEN_NAME);
  },
  login(token) {
    return CookieService.set(process.env.VUE_APP_TOKEN_NAME, token);
  },
  logout() {
    return CookieService.set(process.env.VUE_APP_TOKEN_NAME, '');
  }
};
