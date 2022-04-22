<template>
  <div class="container-fluid">
    <h1 v-show="filmList.length > 0">Film:</h1>
    <div class="film-container">
      <CardItem
        v-for="(film, index) in filmList"
        :key="index"
        :Img="imgUrl + film.poster_path"
        :Title="film.title"
        :OriginalTitle="film.originale_title"
        :Language="film.original_language"
        :Vote="film.vote_average"
        :Overview="film.overview"
      />
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  name: "FilmList",
  components: {
    CardItem,
  },
  props: {
    filmList: Array,
    imgUrl: String,
  },
  data() {
    return {
      infoFilm: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.film-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
}
</style>