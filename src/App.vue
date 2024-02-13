<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import LatestUpdatesComponent from './components/LatestUpdatesComponent.vue';

export default {
  name: 'App',
  components: {
    LatestUpdatesComponent
  }
};
</script>
