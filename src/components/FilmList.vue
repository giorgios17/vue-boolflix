<template>
  <div>
    <div class="container-fluid">
      <h1 v-show="filmList.length > 0">Film:</h1>
      <div class="film-container">
        <div class="card-gs" v-for="(film, index) in filmList" :key="index">
          <img :src="imgUrl + film.poster_path" :alt="film.title" />
          <div class="p-3 mt-5">
            <h4><span class="fw-bold"> Titolo:</span> {{ film.title }}</h4>
            <p v-show="film.title !== film.original_title">
              <span class="fw-bold"> Titolo originale:</span>
              {{ film.original_title }}
            </p>
            <country-flag :country="film.original_language" size="small" />
            <p>
              <span class="fw-bold"> Voto:</span>
              {{ voteOneToFive(film.vote_average) }}
            </p>
            <p><span class="fw-bold"> Overview:</span> {{ film.overview }}</p>
          </div>
        </div>
      </div>
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
    // TRASFORMO VOTO DECIMALE (DA 1 A 10) IN VOTO DA 1 A 5
    voteOneToFive(n) {
      const vote = Math.ceil(n / 2);
      return vote;
    },
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