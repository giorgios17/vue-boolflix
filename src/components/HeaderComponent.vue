<template>
  <div class="row">
    <div class="col-12 bg-dark p-2">
      <div
        class="
          container-fluid
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div class="d-flex">
          <h1>{{ mainTitle }}</h1>
          <ul class="d-flex align-items-center gap-3">
            <li v-for="navitem in navMenu" :key="navitem">
              <a href="#">{{ navitem }}</a>
            </li>
          </ul>
        </div>
        <div>
          <font-awesome-icon icon="fas fa-search" />
          <input
            class="mx-3"
            type="text"
            v-model="textToSearch"
            placeholder="Cerca film/serie Tv..."
          />
          <button
            @click="$emit('search', textToSearch)"
            type="button"
            class="btn btn-primary btn-sm me-3"
          >
            Cerca
          </button>
          <font-awesome-icon icon="fas fa-bell" />
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
      navMenu: [
        "Home",
        "Serie TV",
        "Film",
        "Originali",
        "Aggiunti di recente",
        "La mia lista",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
  text-transform: uppercase;
}
a {
  text-decoration: none;
  color: white;
}
</style>