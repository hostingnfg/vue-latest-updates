<template>
  <div class="link-area">
    <div v-for="article in filteredArticles" :key="article.url" class="article-link">
      <a :href="article.url">{{ article.title }} - {{ formatDate(article.publishDate) }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['filteredArticles'],
  methods: {
    formatDate(date) {
      const options = { month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    }
  }
};
</script>

<style scoped>
.article-link {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
