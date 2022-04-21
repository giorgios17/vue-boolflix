<template>
  <div>
    <div class="container-fluid">
      <h1 class="mt-5">Serie TV: {{ seriesList.length }}</h1>
      <div class="tv-container">
        <div v-for="(tv, index) in seriesList" :key="index">
          <img :src="imgUrl + tv.poster_path" :alt="tv.name" />
          <h4>{{ tv.name }}</h4>
          <p>{{ tv.original_name }}</p>
          <p class="text-uppercase">{{ tv.original_language }}</p>
          <p>{{ voteToStar(tv.vote_average) }}</p>
        </div>
      </div>
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
    // posterUrl() {
    //   return this.imgUrl + "w342/";
    // },
    voteToStar(n) {
      const vote = Math.ceil(n / 2);
      return vote;
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