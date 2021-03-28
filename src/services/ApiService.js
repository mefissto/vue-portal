import axios from 'axios';

export default {
  get(endpoint) {
    return axios.get(`${process.env.VUE_APP_BASE_API}/${endpoint}`);
  },

  post(endpoint, body) {
    return axios.post(`${process.env.VUE_APP_BASE_API}/${endpoint}`, body);
  }
};
