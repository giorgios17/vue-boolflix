<template>
  <div
    class="card-gs"
    @mouseenter="showImg = true"
    @mouseleave="showImg = false"
  >
    <div v-if="!showImg">
      <img :src="img" :alt="title" />
    </div>
    <div v-else class="p-3 mt-5">
      <h4><span class="fw-bold"> Titolo:</span> {{ title }}</h4>
      <p v-show="title !== originalTitle">
        <span class="fw-bold"> Titolo originale:</span>
        {{ originalTitle }}
      </p>
      <country-flag :country="language" size="small" />
      <p>
        <span class="fw-bold"> Voto:</span>
        {{ voteOneToFive(vote)
        }}<font-awesome-icon
          icon="fas fa-star"
          v-for="(vote, index) in voteCount"
          :key="index"
        />
        <font-awesome-icon
          icon="far fa-star"
          v-for="(star, index) in maxVote - voteCount"
          :key="index"
        />
      </p>
      <p><span class="fw-bold"> Overview:</span> {{ overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    img: String,
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
    overview: String,
  },
  methods: {
    voteOneToFive(n) {
      const vote = Math.ceil(n / 2);
      return vote;
    },
  },
  data() {
    return {
      showImg: false,
      voteCount: 0,
      maxVote: 5,
    };
  },
  created() {
    this.voteCount = Math.ceil(this.vote / 2);
    console.log("votecount", this.voteCount);
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