<template>
  <div class="tv-container">
    <div class="border" v-for="(tv, index) in seriesList" :key="index">
      <img :src="posterUrl() + tv.poster_path" :alt="tv.name" />
      <h4>{{ tv.name }}</h4>
      <p>{{ tv.original_name }}</p>
      <p class="text-uppercase">{{ tv.original_language }}</p>
      <p>{{ tv.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    seriesList: Array,
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
.tv-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>