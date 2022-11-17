<template>
  <div id="home">
    <div>
      <movie-video-list
        :movieList="nowPlayingMovieVideoList.movies"
        :titleText="nowPlayingMovieVideoList.title"
      />
    </div>
    <div id="container-box">
      <br /><br />
      <movie-list
        :movieList="popularMovieList.movies"
        :titleText="popularMovieList.title"
      />
      <movie-list
        :movieList="nowPlayingMovieList.movies"
        :titleText="nowPlayingMovieList.title"
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
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");
#home {
  font-family: "Do Hyeon", sans-serif;
  margin-left: 70px;
  margin-top: 70px;
}
/* #trailer-box {
  display: absolute;
  top: 0;
  left: 0;
  z-index: 10;
} */

#container-box {
  /* background-color: #004e66; */
  background-color: white;
  border-radius: 80px;
  margin: -70px 20px;
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
