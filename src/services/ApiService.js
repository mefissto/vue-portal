import axios from 'axios';

import AuthService from './AuthService.js';

export default {
  get(endpoint) {
    return axios.get(`${process.env.VUE_APP_BASE_API}/${endpoint}`, { headers: this.headers() });
  },

  post(endpoint, body) {
    return axios.post(`${process.env.VUE_APP_BASE_API}/${endpoint}`, body, { headers: this.headers() });
  },

  headers() {
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthService.getToken()}`
    };
  }
};
