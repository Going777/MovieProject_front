<template>
  <div>
    <!-- 영화 리스트 타이틀 -->
    <h2 style="margin-left: 20px; margin-top: 50px; color: #ffcc00">
      {{ titleText }}
    </h2>

    <!-- 영화 리스트 -->
    <v-sheet
      style="margin: 10px 10px; border-radius: 30px"
      elevation="10"
      max-width="100vw"
    >
      <v-slide-group class="pa-5" active-class="success" show-arrows>
        <v-slide-item v-for="(movie, idx) in movieList" :key="idx">
          <!-- 리스트 뷰 내 아이템  -->
          <movie-list-item :movie="movie" class="m-3" />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import MovieListItem from "./MovieListItem.vue"
export default {
  name: "MovieList",
  data() {
    return {}
  },
  components: { MovieListItem },
  props: {
    movieList: Array,
    titleText: String,
  },
}
</script>

<style></style>
