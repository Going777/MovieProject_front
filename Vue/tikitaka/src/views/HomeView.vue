<template>
  <div>
    <div>
      <movie-video-list
        :movieList="nowPlayingMovieVideoList.slice(1)"
        :titleText="nowPlayingMovieVideoList[0]"
      />
    </div>
    <div id="container-box">
      <br /><br />
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
import MovieVideoList from "../components/MovieVideoList.vue"
export default {
  name: "HomeView",
  components: { MovieList, MovieVideoList },
  computed: {
    popularMovieList() {
      return this.$store.state.popularMovieList
    },
    nowPlayingMovieList() {
      return this.$store.state.nowPlayingMovieList
    },
    nowPlayingMovieVideoList() {
      return this.$store.state.nowPlayingMovieVideoList
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
/* #trailer-box {
  display: absolute;
  top: 0;
  left: 0;
  z-index: 10;
} */

#container-box {
  background-color: #004e66;
  border-radius: 80px;
  margin: -50px 20px;
  padding: 20px;
  display: absolute;
  top: 10px;
}

/* #frame {
  position: absolute;
  top: 0;
  left: 0;
}
#info {
  position: absolute;
  bottom: 17px;
  right: 10px;
  z-index: 10;
  height: 60px;
  width: 140px;
} */
</style>
