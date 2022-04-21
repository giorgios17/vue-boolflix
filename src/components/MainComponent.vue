<template>
  <main>
    <FilmList :filmList="filmList" :imgUrl="imgUrl" />
    <SeriesList :seriesList="seriesList" :imgUrl="imgUrl" />
  </main>
</template>

<script>
import FilmList from "./FilmList.vue";
import SeriesList from "./SeriesList.vue";
export default {
  name: "MainComponent",
  props: {
    filmList: Array,
    seriesList: Array,
  },
  components: {
    FilmList,
    SeriesList,
  },
  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/w342",
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: 30px 0px;
}
</style>