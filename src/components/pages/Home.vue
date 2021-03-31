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
import { createNamespacedHelpers } from 'vuex';

import TheFooter from '../layouts/TheFooter.vue';
import TheHeader from '../layouts/TheHeader.vue';

const { mapGetters, mapActions } = createNamespacedHelpers('userStore');

export default {
  name: 'Home',
  components: { TheHeader, TheFooter },
  computed: {
    ...mapGetters(['activeUser'])
  },
  methods: {
    ...mapActions(['fetchActiveUserInfo'])
  },
  created() {
    if (!this.activeUser) {
      this.fetchActiveUserInfo().catch(err => this.toastError(err.message));
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
