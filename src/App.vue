<template>
  <div id="app">
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      apiKey: "e89cd5cd17f6ac31e79a5bc00de59c80",
      apiUrl: "https://api.themoviedb.org/3/search/movie",
    };
  },
  methods: {},
};
</script>

<style lang="scss">
@import "@/assets/style/reset";
@import "~bootstrap";
@import "@/assets/style/variables";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
