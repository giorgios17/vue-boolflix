<template>
  <main>
    <FilmList :filmList="filmList" />
  </main>
</template>

<script>
import FilmList from "./FilmList.vue";
export default {
  name: "MainComponent",
  props: {
    filmList: Array,
  },
  components: {
    FilmList,
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