<template>
  <div>
    <div id="video-container">
      <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :display="3"
        :on-main-slide-click="testClick"
        width="800"
        height="500"
      >
        <slide v-for="(movie, i) in movieList" :key="i" :index="i">
          <movie-video-list-item :movie="movie" />
        </slide>
      </carousel-3d>
    </div>

    <!-- <v-sheet id="video-container">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(movie, idx) in movieList" :key="idx">
          <movie-video-list-item :movie="movie" />
        </v-carousel-item>
      </v-carousel>
    </v-sheet> -->
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d"
import MovieVideoListItem from "./MovieVideoListItem.vue"
export default {
  components: {
    Carousel3d,
    Slide,
    MovieVideoListItem,
  },
  name: "MovieVideoList",
  data() {
    return {
      model: null,
      slides: 7,
    }
  },
  props: {
    movieList: Array,
    titleText: String,
  },
  methods: {
    testClick() {
      console.log("heeeeer")
    },
  },
}
</script>

<style>
#video-container {
  margin: auto;
  width: 100%;
}

.carousel-3d-container {
  /* .carousel-3d-slide {
    padding: 20px;

    .title {
      font-size: 22px;
    }
  } */
}
</style>
