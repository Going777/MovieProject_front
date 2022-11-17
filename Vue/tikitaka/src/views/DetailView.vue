<template>
  <div>
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

<style></style>
