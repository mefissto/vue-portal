<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from '../layouts/TheFooter.vue';
import TheHeader from '../layouts/TheHeader.vue';

export default {
  name: 'Home',
  components: { TheHeader, TheFooter }
};
</script>
