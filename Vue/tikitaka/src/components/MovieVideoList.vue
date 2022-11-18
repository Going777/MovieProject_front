<template>
  <div>
    <!-- <v-sheet style="margin: auto" max-width="70vw" height="500px" width="auto"> -->
    <!-- <v-sheet style="margin: auto" max-width="1000px" height="500px"> -->
    <v-sheet id="video-container">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(movie, idx) in movieList" :key="idx">
          <movie-video-list-item :movie="movie" />
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </div>
</template>

<script>
import MovieVideoListItem from "./MovieVideoListItem.vue"
export default {
  components: { MovieVideoListItem },
  name: "MovieVideoList",
  data() {
    return {
      model: null,
    }
  },
  props: {
    movieList: Array,
    titleText: String,
  },
}
</script>

<style>
#video-container {
  margin: auto;
  /* max-width: 1000px;
  width: 100%; */
}
</style>
