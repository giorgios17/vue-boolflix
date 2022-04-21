<template>
  <div>
    <div class="container-fluid mt-5">
      <h1 v-show="seriesList.length > 0">Serie TV:</h1>
      <div class="tv-container">
        <div class="card-gs" v-for="(tv, index) in seriesList" :key="index">
          <img :src="imgUrl + tv.poster_path" :alt="tv.name" />
          <h4>{{ tv.name }}</h4>
          <p v-show="tv.name !== tv.original_name">
            {{ tv.original_name }}
          </p>
          <country-flag :country="tv.original_language" size="small" />
          <p>
            {{ voteToStar(tv.vote_average) }}
            <font-awesome-icon icon="fa-solid fa-star" />
          </p>
          <p><span class="fw-bold"> Overview:</span> {{ tv.overview }}</p>
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
  font-size: 12px;
  .card-gs {
    width: 342px;
    height: 500px;
    margin: 10px;
    cursor: pointer;
    position: relative;
    background-color: black;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      &:hover {
        display: none;
      }
    }
    h4 {
      font-size: 16px;
      margin: 0;
    }
    p {
      margin: 0;
    }
  }
}
</style>
