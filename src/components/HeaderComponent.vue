<template>
  <div class="row">
    <div class="col-12 bg-dark">
      <div
        class="
          container-fluid
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <h1>{{ mainTitle }}</h1>
        <div>
          <input class="me-3" type="text" v-model="inputText" />
          <button
            @click="searchInput"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Cerca!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      mainTitle: "Boolfix",
      inputText: "",
    };
  },
  methods: {
    searchInput() {
      console.log(this.inputText);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>