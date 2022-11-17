<template>
  <div class="detail-container">
    <p>{{ movie }}</p>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  computed: {
    movie() {
      return this.$store.state.movie
    },
  },
  beforeCreate() {
    this.$store.dispatch("getMovieById", this.$route.params.id)
  },
}
</script>

<style>
.detail-container {
  background-image: url("@/assets/tikitaka_coke.png");
  margin-left: -70px;
  margin-top: -6px;
}
</style>
