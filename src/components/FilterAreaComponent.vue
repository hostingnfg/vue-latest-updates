<template>
  <div class="filter-area">
    <input type="checkbox" id="news" v-model="filters.news" @change="emitFilter">
    <label for="news">News</label>
    <input type="checkbox" id="essays" v-model="filters.essays" @change="emitFilter">
    <label for="essays">Essays</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        news: true,
        essays: true,
      }
    };
  },
  methods: {
    emitFilter() {
      this.$emit('filter-change', this.filters);
    }
  }
};
</script>
