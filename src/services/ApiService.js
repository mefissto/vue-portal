import axios from 'axios';

import router from '../router';
import AuthService from './AuthService.js';

axios.interceptors.response.use(null, err => {
  if (err?.response?.status === 401 || err?.response?.data?.statusCode === 401) {
    AuthService.logout();
    router.push('/auth/login');
  }
  return Promise.reject(err);
});

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

  getNews() {
    return axios
      .get(`https://newsapi.org/v2/everything?q=tesla&from=2021-02-28&sortBy=publishedAt&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`)
      .then(res => res.data.articles);
  },

  headers() {
    return {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AuthService.getToken()}`
    };
  }
};
