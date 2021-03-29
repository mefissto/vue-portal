<template>
  <ul class="nav">
    <li class="nav__item">
      <router-link to="/">Home</router-link>
    </li>
    <li class="nav__item">
      <router-link to="/users">Users</router-link>
    </li>
    <li class="nav__item">
      <router-link to="/news">News</router-link>
    </li>
    <li class="nav__item">
      <router-link to="/services">Services</router-link>
    </li>
    <li class="nav__item">
      <router-link to="/about">About</router-link>
    </li>
    <li class="nav__item" @click="logout">Logout</li>
  </ul>
</template>

<script>
import AuthService from '../../services/AuthService.js';

export default {
  emits: ['route-change'],
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push('/auth/login');
    }
  },
  watch: {
    $route() {
      this.$emit('route-change');
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  height: 100%;
  list-style: none;
  padding-top: 50px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 500;

  &__item {
    cursor: pointer;
    position: relative;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(-20px);
    }

    a {
      display: inline-block;
      padding: 10px 0;
      width: 100%;
      height: 100%;
      color: #495057;
    }

    &:hover,
    &:hover a,
    a:hover,
    .router-link-exact-active {
      color: #b7e0b8;
      text-decoration: none;
    }
  }
}
</style>
