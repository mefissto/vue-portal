import axios from 'axios';

import AuthService from './AuthService.js';

export default {
  get(endpoint) {
    return axios.get(`${process.env.VUE_APP_BASE_API}/${endpoint}`, { headers: this.headers() });
  },

  post(endpoint, body) {
    return axios.post(`${process.env.VUE_APP_BASE_API}/${endpoint}`, body, { headers: this.headers() });
  },

  patch(endpoint, id, body) {
    return axios.patch(`${process.env.VUE_APP_BASE_API}/${endpoint}/${id}`, body, { headers: this.headers() });
  },

  delete(endpoint, id) {
    return axios.delete(`${process.env.VUE_APP_BASE_API}/${endpoint}/${id}`, { headers: this.headers() });
  },

  headers() {
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthService.getToken()}`
    };
  }
};
