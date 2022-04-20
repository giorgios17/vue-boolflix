<template>
  <main>
    <div class="film-container">
      <div class="border" v-for="(film, index) in filmList" :key="index">
        <h4>{{ film.title }}</h4>
        <p>{{ film.original_title }}</p>
        <p class="text-uppercase">{{ film.original_language }}</p>
        <p>{{ film.vote_average }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainComponent",
  props: {
    filmList: Array,
  },
};
</script>

<style lang="scss" scoped>
main {
  color: white;
  background-color: gray;
  padding: 30px;
  .film-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>