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

<style scoped lang="scss">
.link-area {
  .article-link {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 10px 0;
    border-bottom: 1px solid #eaecef;

    &:last-child {
      border-bottom: none;
    }

    a {
      color: #3490dc;
      text-decoration: none;
      font-size: 16px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

