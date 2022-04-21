<template>
  <div>
    <div class="container-fluid">
      <h1 v-show="filmList.length > 0">Film trovati: {{ filmList.length }}</h1>
      <div class="film-container">
        <div class="card-gs" v-for="(film, index) in filmList" :key="index">
          <img :src="imgUrl + film.poster_path" :alt="film.title" />
          <h4>Titolo: {{ film.title }}</h4>
          <p v-show="film.title !== film.original_title">
            Titolo originale: {{ film.original_title }}
          </p>
          <p class="text-uppercase">{{ film.original_language }}</p>
          <p>
            Voto: {{ voteToStar(film.vote_average)
            }}<font-awesome-icon icon="fa-solid fa-star" />
          </p>
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
    voteToStar(n) {
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
    margin: 60px 0px;
    img {
      width: 100%;
      height: 100%;
    }
    p {
      margin: 0;
    }
    h4 {
      font-size: 16px;
      margin: 0;
    }
  }
}
</style>