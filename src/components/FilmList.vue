<template>
  <div class="film-container">
    <div class="border" v-for="(film, index) in filmList" :key="index">
      <img :src="posterUrl() + film.poster_path" :alt="film.title" />
      <h4>Titolo: {{ film.title }}</h4>
      <p>Titolo originale: {{ film.original_title }}</p>
      <p class="text-uppercase">{{ film.original_language }}</p>
      <p>Voto: {{ film.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    filmList: Array,
    imgUrl: String,
  },
  methods: {
    posterUrl() {
      return this.imgUrl + "w342/";
    },
  },
};
</script>

<style lang="scss" scoped>
.film-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>