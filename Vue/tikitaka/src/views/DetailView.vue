<template>
  <div id="backImg" style="margin-top: 60px; height: 70%"></div>
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
  mounted() {
    document.querySelector("#backImg").style.backgroundImage =
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255,255,255, 0.5), rgba(255,255,255, 100)), \
      linear-gradient(to left, rgba(255,255,255,0) 80%,rgba(255,255,255,1) 100%), \
      linear-gradient(to right, rgba(255,255,255,0) 80%,rgba(255,255,255,1) 100%), \
      url(" +
      this.posterURL +
      ")"
  },
  // URL은 바꼈는데 배경이미지 바뀌지 않는 것 해결
  beforeRouteUpdate(to, from, next) {
    document.querySelector("#backImg").style.backgroundImage =
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255,255,255, 0.5), rgba(255,255,255, 100)), \
      linear-gradient(to left, rgba(255,255,255,0) 80%,rgba(255,255,255,1) 100%), \
      linear-gradient(to right, rgba(255,255,255,0) 80%,rgba(255,255,255,1) 100%), \
      url(" +
      this.posterURL +
      ")"
    next()
  },
}
</script>

<style>
#backImg {
  width: 100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 5px;
}
</style>
