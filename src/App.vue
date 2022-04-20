<template>
  <div id="app">
    <HeaderComponent @search="textToSearch" />
    <MainComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

import axios from "axios";
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
      films: [],
    };
  },
  methods: {
    //CHIAMATA API
    queryApi(inputText) {
      const params = {
        query: inputText,
        api_key: this.apiKey,
        language: "it-IT",
      };
      axios
        .get(this.apiUrl, { params })
        .then(({ data }) => {
          console.log(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // RICERCA FILM CON INPUT IN HEADER RICEVUTO TRAMITE EMIT
    textToSearch(searchText) {
      if (searchText.length > 0) {
        this.queryApi(searchText);
      }
    },
  },
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
