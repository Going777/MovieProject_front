<template>
  <div id="backImg" style="margin-top: 60px; height: 60%"></div>
</template>

<script>
export default {
  name: "DetailView",
  computed: {
    movie() {
      return this.$store.state.movie
    },

    posterURL() {
      const path = this.movie.backdrop_set[0].path

      return `https://image.tmdb.org/t/p/original${path}`
    },
  },
  created() {
    // this.movie = this.$store.state.movie
    console.log(this.movie)
  },
  mounted() {
    document.querySelector("#backImg").style.backgroundImage =
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(255,255,255, 0.63), rgba(255,255,255, 100)), url(" +
      this.posterURL +
      ")"
  },
  // updated() {
  //   document.querySelector("#backImg").style.backgroundImage =
  //     "linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(255,255,255, 0.63), rgba(255,255,255, 100)), url(" +
  //     this.posterURL +
  //     ")"
  // },
}
</script>

<style>
#backImg {
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
