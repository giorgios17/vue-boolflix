<template>
  <div class="container-fluid mt-5">
    <h1 v-show="seriesList.length > 0">Serie TV:</h1>
    <div class="tv-container">
      <CardItem
        v-for="(tv, index) in seriesList"
        :key="index"
        :Img="imgUrl + tv.poster_path"
        :Title="tv.name"
        :OriginalTitle="tv.originale_name"
        :Language="tv.original_language"
        :Vote="tv.vote_average"
        :Overview="tv.overview"
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
    seriesList: Array,
    imgUrl: String,
  },
};
</script>

<style lang="scss" scoped>
.tv-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 12px;
}
</style>
