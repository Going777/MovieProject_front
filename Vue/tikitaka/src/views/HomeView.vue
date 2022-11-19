<template>
  <div id="home" class="mainText">
    <!-- 좌측(프로필) -->
    <div id="profile-container">
      <community-profile />
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
        <hr class="movielist-divide" />
        <movie-list
          :movieList="nowPlayingMovieList.movies"
          :titleText="nowPlayingMovieList.title"
        />
        <hr class="movielist-divide" />
        <movie-list
          :movieList="nowPlayingMovieList.movies"
          :titleText="nowPlayingMovieList.title"
        />
        <hr class="movielist-divide" />
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
import CommunityProfile from "../components/CommunityProfile.vue"
export default {
  name: "HomeView",
  components: { MovieList, MovieVideoList, CommunityProfile },
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
#home {
  display: grid;
  grid-template-columns: 25% 75%;
  grid-template-rows: 100%;
  height: 100%;
  grid-template-areas: "profile movie";
  grid-gap: 10px;
}

#profile-container {
  grid-area: profile;
}

#movie-container {
  grid-area: movie;
}

#container-box {
  background-color: transparent;
  border-radius: 80px;
}

.movielist-divide {
  width: 95%;
  height: 7px;
  background-color: gray;
  margin: 0 auto;
  border: 0;
  border-radius: 50px;
  margin-bottom: 30px;
}
</style>
