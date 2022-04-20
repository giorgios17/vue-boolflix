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
          <input class="me-3" type="text" v-model="textToSearch" />
          <button
            @click="$emit('search', textToSearch)"
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
      textToSearch: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
  text-transform: uppercase;
}
</style>