<template>
  <div>
    <div id="container-box">
      <movie-list
        :movieList="popularMovieList.slice(1)"
        :titleText="popularMovieList[0]"
      />
      <movie-list
        :movieList="nowPlayingMovieList.slice(1)"
        :titleText="nowPlayingMovieList[0]"
      />
    </div>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue"
export default {
  name: "HomeView",
  components: { MovieList },
  computed: {
    popularMovieList() {
      return this.$store.state.popularMovieList
    },
    nowPlayingMovieList() {
      return this.$store.state.nowPlayingMovieList
    },
  },
  created() {
    this.$store.dispatch("loadPopularMovieList")
    this.$store.dispatch("loadNowPlayingMovieList")
    this.$store.dispatch("loadNowPlayingMovieVideoList")
  },
}
</script>

<style>
#container-box {
  background-color: #004e66;
  border-radius: 80px;
  margin: 20px;
  padding: 20px;
}
</style>
