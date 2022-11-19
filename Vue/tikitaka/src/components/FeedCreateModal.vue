<template>
  <div>
    <!-- 영화 선택(검색) -->
    <h3>Select Movie</h3>
    <div style="width: 50%">
      <div style="margin-top: 30px">
        <v-toolbar flat dense>
          <v-autocomplete
            clearable
            outlined
            auto-select-first
            :loading="loading"
            :items="items"
            :search-input.sync="searchMovie"
            v-model="select"
            @change="selectMovie"
            label="Select Movies..."
          ></v-autocomplete>
        </v-toolbar>
      </div>
    </div>

    <!-- 피드 작성 폼(포스터 선택 & 내용 채우기) // 수정할 때 & 디테일 페이지에서 작성할 때 재사용!!! -->
    <feed-create-form :feedMovie="feedMovie" />
  </div>
</template>

<script>
import FeedCreateForm from "./FeedCreateForm.vue"
export default {
  components: { FeedCreateForm },
  name: "FeedCreateModal",
  data() {
    return {
      keyword: "",

      loading: false,
      items: [],
      searchMovie: null,
      select: null,
      movies: [
        "Star Wars",
        "스타워즈 에피소드 4: 새로운 희망",
        "니모를 찾아서",
        "포레스트 검프",
        "제5원소",
        "8 Mile",
        "Forrest Gump",
        "Finding Nemo",
      ],
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    // searchMovieList() {
    //   return this.$store.state.searchMovieList
    // },
    feedMovie() {
      return this.$store.state.feedMovie
    },
  },
  watch: {
    searchMovie(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.movies.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
    selectMovie() {
      const selectedGenreIds = [
        12, 14, 16, 18, 27, 28, 35, 36, 37, 53, 80, 99, 878, 9648, 10402, 10749,
        10751, 10752, 10770,
      ]
      const payload = { keyword: this.select, genres: selectedGenreIds }
      this.$store.dispatch("searchMovieByTitle", payload)
      console.log(this.select)
    },
  },
}
</script>

<style></style>
