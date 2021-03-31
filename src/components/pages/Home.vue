<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '../layouts/TheFooter.vue';
import TheHeader from '../layouts/TheHeader.vue';
import ApiService from '../../services/ApiService.js';

export default {
  name: 'Home',
  components: { TheHeader, TheFooter },
  methods: {
    fetchActiveUserInfo() {
      ApiService.get('auth/active-user')
        .then(res => this.$store.commit('setActiveUser', res.data))
        .catch(err => this.toastError(err.message));
    }
  },
  created() {
    if (!this.$store.getters.activeUser) {
      this.fetchActiveUserInfo();
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
