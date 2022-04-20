<template>
  <main>
    <FilmList :filmList="filmList" />
    <SeriesList :seriesList="seriesList" />
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
};
</script>

<style lang="scss" scoped>
main {
  color: white;
  background-color: gray;
  padding: 30px;
}
</style>