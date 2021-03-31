<template>
  <div class="container">
    <h1 class="title mt-2 mb-4 text-left">News</h1>
    <transition-group tag="div" class="row" name="user-list">
      <NewsItem v-for="item in news" :key="item.publishedAt" :source="item" />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import NewsItem from '../layouts/NewsItem';

export default {
  components: { NewsItem },
  computed: {
    ...mapGetters('newsStore/', ['news'])
  },
  methods: {
    ...mapActions('newsStore/', ['fetchNews'])
  },
  created() {
    this.fetchNews();
  }
};
</script>
