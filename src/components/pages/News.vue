<template>
  <div class="container">
    <h1 class="title mt-2 mb-4 text-left">News</h1>
    <transition-group tag="div" class="row" name="user-list">
      <NewsItem v-for="item in news" :key="item.publishedAt" :source="item" />
    </transition-group>
  </div>
</template>

<script>
import ApiService from '../../services/ApiService.js';
import NewsItem from '../layouts/NewsItem';

export default {
  components: { NewsItem },
  data() {
    return {
      news: []
    };
  },
  methods: {
    fetchNews() {
      ApiService.getNews().then(res => {
        console.log('res: ', res);
        this.news = [...res];
      });
    }
  },
  created() {
    this.fetchNews();
    console.log('this: ', this);
  }
};
</script>
