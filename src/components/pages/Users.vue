<template>Users <router-link to="/">Home</router-link></template>

<script>
import ApiService from '../../services/ApiService.js';

export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    ApiService.get('users')
      .then(res => {
        console.log('res: ', res);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }
};
</script>
