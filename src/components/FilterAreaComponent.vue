<template>
  <div class="filter-area">
    <div class="filter-option">
      <input type="checkbox" id="news" v-model="filters.news" @change="emitFilter">
      <label for="news">News</label>
    </div>
    <div class="filter-option">
      <input type="checkbox" id="essays" v-model="filters.essays" @change="emitFilter">
      <label for="essays">Essays</label>
    </div>
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
<style scoped lang="scss">
.filter-area {
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-evenly;
  background-color: #f3f4f6;
  border-radius: 8px;
  margin-bottom: 20px;
}

.filter-option {
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 10px;
  }

  label {
    margin: 0;
    font-size: 16px;
    color: #333;
  }
}
</style>


