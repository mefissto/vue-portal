<template>
  <div class="col-12 col-md-6 mb-5">
    <Card class="news-item">
      <template #header>
        <img alt="news-image" :src="source.urlToImage" class="header-img" />
      </template>
      <template #title>{{ source.title }}</template>
      <template #subtitle>{{ source.author }}</template>
      <template #content>
        <p>{{ source.description }}</p>
      </template>
      <template #footer>
        <div class="publish-date">{{ publishDate }}</div>
        <Button label="Read more..." class="p-button-link" @click="openFullPost" />
      </template>
    </Card>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['source'],
  computed: {
    publishDate() {
      return moment(this.source.publishedAt).format('lll');
    }
  },
  methods: {
    openFullPost() {
      window.open(this.source.url, '_blank');
    }
  }
};
</script>

<style lang="scss">
.news-item .p-card-header {
  height: 300px;

  .header-img {
    height: 100%;
  }
}
.publish-date {
  color: #6c757d;
  font-size: 14px;
}
.news-item.p-component {
  height: 100%;
}
</style>
