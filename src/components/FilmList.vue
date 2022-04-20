<template>
  <div class="film-container">
    <div class="border" v-for="(film, index) in filmList" :key="index">
      <h4>{{ film.title }}</h4>
      <p>{{ film.original_title }}</p>
      <p class="text-uppercase">{{ film.original_language }}</p>
      <p>{{ film.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    filmList: Array,
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