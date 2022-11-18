<template>
  <div id="home">
    <!-- 좌측(프로필) -->
    <div id="profile-container">
      <profile-list />
    </div>
    <!-- 우측(영화출력) -->
    <div id="movie-container">
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
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue"
import MovieVideoList from "../components/MovieVideoList.vue"
import ProfileList from "../components/ProfileList.vue"
export default {
  name: "HomeView",
  components: { MovieList, MovieVideoList, ProfileList },
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
  display: flex;
  font-family: "Do Hyeon", sans-serif;
  margin-top: 70px;
  width: 100vw;
  background-color: white;
}
/* #trailer-box {
  display: absolute;
  top: 0;
  left: 0;
  z-index: 10;
} */

#profile-container {
  width: 18%;
  margin-right: 10px;
  margin-left: 20px;
  margin-top: 0;
}

#movie-container {
  width: 73%;
  margin-left: 10px;
}

#container-box {
  /* background-color: #004e66; */
  background-color: transparent;
  border-radius: 80px;
  margin-top: -70px;
  /* margin: -70px 20px; */
  /* padding: 20px; */
  display: absolute;
  top: 10px;
  /* width: 100%; */
}
</style>
