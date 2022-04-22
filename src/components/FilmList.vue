<template>
  <div class="container-fluid">
    <h1 v-show="filmList.length > 0">Film:</h1>
    <div class="film-container">
      <CardItem
        v-for="(film, index) in filmList"
        :key="index"
        :img="imgUrl + film.poster_path"
        :title="film.title"
        :originalTitle="film.original_title"
        :language="film.original_language"
        :vote="film.vote_average"
        :overview="film.overview"
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
};
</script>

<style lang="scss" scoped>
.film-container {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
}
</style>