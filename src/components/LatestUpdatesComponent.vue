<template>
  <div class="latest-updates">
    <h2>Latest Updates</h2>
    <FilterAreaComponent @filter-change="filterChange" />
    <LinkAreaComponent :filtered-articles="filteredArticles" />
  </div>
</template>

<script>
import FilterAreaComponent from './FilterAreaComponent.vue';
import LinkAreaComponent from './LinkAreaComponent.vue';

export default {
  components: {
    FilterAreaComponent,
    LinkAreaComponent
  },
  data() {
    return {
      articles: [],
      filteredArticles: [],
      filter: {
        news: true,
        essays: true,
      }
    };
  },
  created() {
    this.articles = window.LATEST_ARTICLES.filter(article =>
        new Date() - new Date(article.publishDate) < 604800000
    ).sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate)).slice(0, 5);
    this.filteredArticles = this.articles;
  },
  methods: {
    filterChange(newFilter) {
      this.filter = newFilter;
      this.applyFilter();
    },
    applyFilter() {
      this.filteredArticles = this.articles.filter(article =>
          (this.filter.news && article.category === 'news') ||
                (this.filter.essays && article.category === 'essay')
      );
    }
  }
};
</script>

<style scoped lang="scss">
.latest-updates {
  max-width: 500px;
  width: 100%;
  margin: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;

  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
}
</style>
