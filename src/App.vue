<template>
  <div id="app">
    <LatestUpdatesComponent />
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

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}
</style>
