<template>
  <div
    class="card-gs"
    @mouseenter="showImg = true"
    @mouseleave="showImg = false"
  >
    <div v-if="!showImg">
      <img class="poster" :src="img" :alt="title" />
    </div>
    <div v-else class="p-3 mt-5">
      <h4><span class="fw-bold"> Titolo:</span> {{ title }}</h4>
      <p v-show="title !== originalTitle">
        <span class="fw-bold"> Titolo originale:</span>
        {{ originalTitle }}
      </p>
      <div v-if="language !== 'en'">
        <country-flag
          v-if="language !== 'en'"
          :country="language"
          size="small"
        />
      </div>
      <div v-else>
        <img id="usa" src="../assets/icons8-usa-32.png" alt="" />
      </div>
      <p>
        <span class="fw-bold"> Voto:</span>
        {{ voteOneToFive(vote)
        }}<font-awesome-icon
          icon="fas fa-star"
          v-for="(fullStar, index) in voteCount"
          :key="'fullStar' + index"
          class="yellow"
        />
        <font-awesome-icon
          icon="far fa-star"
          v-for="(starEmpty, index) in maxVote - voteEmpty"
          :key="'starEmpty' + index"
        />
      </p>
      <p v-show="overview.length > 0">
        <span class="fw-bold"> Overview:</span>
        {{ overview }}
      </p>
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
      voteEmpty: 0,
      maxVote: 5,
    };
  },
  created() {
    this.voteCount = Math.ceil(this.vote / 2);
    this.voteEmpty = Math.ceil(this.vote / 2);
  },
};
</script>

<style lang="scss" scoped>
.card-gs {
  width: 342px;
  height: 500px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  background-color: black;
  .yellow {
    color: yellow;
  }
  #usa {
    width: 16px;
    height: 16px;
  }
  .poster {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
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