<template>
  <div>
    <v-sheet style="margin: 50px 50px" max-width="100vw">
      <h1 style="margin-left: 20px">{{ titleText }}</h1>
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

<style></style>
