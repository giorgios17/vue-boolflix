<template>
  <div class="card-gs">
    <img :src="Img" :alt="Title" />
    <div class="p-3 mt-5">
      <h4><span class="fw-bold"> Titolo:</span> {{ Title }}</h4>
      <p v-show="Title !== OriginalTitle">
        <span class="fw-bold"> Titolo originale:</span>
        {{ OriginalTitle }}
      </p>
      <country-flag :country="Language" size="small" />
      <p>
        <span class="fw-bold"> Voto:</span>
        {{ voteOneToFive(Vote) }}
      </p>
      <p><span class="fw-bold"> Overview:</span> {{ Overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    Img: String,
    Title: String,
    OriginalTitle: String,
    Language: String,
    Vote: Number,
    Overview: String,
  },
  methods: {
    voteOneToFive(n) {
      const vote = Math.ceil(n / 2);
      return vote;
    },
  },
};
</script>

<style lang="scss" scoped>
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
</style>