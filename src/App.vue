<template>
  <div id="app">
    <HeaderComponent @search="textToSearch" />
    <MainComponent :filmList="films" :seriesList="series" />
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
      apiUrl: "https://api.themoviedb.org/3/search/",
      films: [],
      series: [],
    };
  },
  methods: {
    //CHIAMATA API MOVIE
    queryMovie(inputText) {
      const params = {
        query: inputText,
        api_key: this.apiKey,
        language: "it-IT",
      };
      axios
        .get(this.apiUrl + "movie", { params })
        .then(({ data }) => {
          console.log(data);
          this.films = data.results;
          console.log("films array", this.films);
          return this.films;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //CHIAMATA API TV
    queryTv(inputText) {
      const params = {
        query: inputText,
        api_key: this.apiKey,
        language: "it-IT",
      };
      axios
        .get(this.apiUrl + "tv", { params })
        .then(({ data }) => {
          console.log(data);
          this.series = data.results;
          console.log("series array", this.series);
          return this.series;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // RICERCA FILM CON INPUT IN HEADER RICEVUTO TRAMITE EMIT
    textToSearch(searchText) {
      if (searchText.length > 0) {
        this.queryMovie(searchText);
        this.queryTv(searchText);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style/reset";
@import "~bootstrap";
@import "@/assets/style/variables";
body {
  background-color: #141414;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
