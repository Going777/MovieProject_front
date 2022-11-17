<template>
  <v-app>
    <!-- 최상단 nav bar -->
    <v-app-bar
      fixed
      clipped-left
      color="navy"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <!-- 메뉴 호출 아이콘 -->
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>TikiTaka</v-toolbar-title>
      <img src="@/assets/tikitaka_logo_small.png" style="width: 50px" />

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 왼쪽 side nav bar -->
    <!-- introView에서는 나타나지 않도록 -->
    <v-navigation-drawer
      app
      permanent
      expand-on-hover
      clipped
      fixed
      mini-variant
      left
      v-if="!['intro'].includes($route.name)"
    >
      <v-list nav dense fixed style="margin-top: 70px">
        <!-- 영화 검색 버튼 -->
        <v-list-item link @click="openSearchModal" style="margin-bottom: 20px">
          <v-list-item-icon>
            <v-img src="@/assets/icon_search.png" height="24px" width="24px">
            </v-img>
          </v-list-item-icon>
          <v-list-item-title>Search Movies</v-list-item-title>
        </v-list-item>

        <!-- 홈 버튼 -->
        <v-list-item link @click="goHome" style="margin-bottom: 20px">
          <v-list-item-icon>
            <v-img src="@/assets/icon_home.png" height="24px" width="24px">
            </v-img>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <!-- 커뮤니티 버튼 -->
        <v-list-item link style="margin-bottom: 20px">
          <v-list-item-icon>
            <v-img
              src="@/assets/icon_community.png"
              height="24px"
              width="24px"
            ></v-img>
          </v-list-item-icon>
          <v-list-item-title>Community</v-list-item-title>
        </v-list-item>

        <!-- 마이페이지 버튼 -->
        <v-list-item link style="margin-bottom: 20px">
          <v-list-item-icon>
            <v-img
              src="@/assets/icon_mypage.png"
              height="24px"
              width="24px"
            ></v-img>
          </v-list-item-icon>
          <v-list-item-title>My Page</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 메인 화면 -->
    <v-main style="margin-left: 70px; margin-top: 70px">
      <router-view />
    </v-main>

    <!-- 영화 검색 모달 -->
    <b-modal size="huge" id="showSearchModal" title="Search Movies" hide-footer>
      <!-- 검색창 (auto) -->
      <!-- <v-toolbar flat prominent>
        <v-autocomplete
          clearable
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          v-model="select"
          hide-details
          label="Search..."
          @keydown.enter="enterInput"
          auto-select-first
        ></v-autocomplete>
      </v-toolbar> -->

      <div style="display: flex">
        <!-- 검색 섹션 -->
        <div
          class="p-2"
          style="background-color: lightgray; border-radius: 30px; width: 25%"
        >
          <!-- 검색 카테고리 (영화인 검색은 일단 생략) -->
          <!-- <v-select
            class="mt-4"
            v-model="selectedOption"
            :items="searchOptions"
            dense
            outlined
          ></v-select> -->

          <!-- 입력폼 -->
          <v-text-field
            label="검색어를 입력해주세요"
            class=""
            filled
            prepend-inner-icon="mdi-magnify"
            dense
            solo
            flat
            v-model="keyword"
            @input="inputFunc"
            style="margin-top: 40px; margin-bottom: 20px"
          ></v-text-field>

          <!-- 장르 선택 -->
          <div>
            <v-checkbox
              style="margin-top: -10px"
              v-model="selectedGenres"
              label="모험"
              value="모험"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="공포/스릴러"
              value="공포/스릴러"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="애니메이션"
              value="애니메이션"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="액션"
              value="액션"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="SF/판타지"
              value="SF/판타지"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="로맨스"
              value="로맨스"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="코미디"
              value="코미디"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="음악"
              value="음악"
              hide-details
              @click="inputFunc"
            ></v-checkbox>
            <v-checkbox
              v-model="selectedGenres"
              label="Etc."
              value="Etc."
              hide-details
              @click="inputFunc"
            ></v-checkbox>
          </div>

          <br /><br /><br />
        </div>

        <!-- 결과 섹션 -->
        <div class="scroll" style="width: 100%; height: 700px">
          <v-card flat width="100%">
            <div class="m-3">
              <div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                  <search-movie-list-item
                    v-for="(movie, idx) in searchMovieList"
                    :key="idx"
                    :movie="movie"
                  />
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </b-modal>
  </v-app>
</template>

<script>
import SearchMovieListItem from "./components/SearchMovieListItem.vue"
function matchGenreId(name) {
  switch (name) {
    case "모험":
      return 12
    case "공포/스릴러":
      return [27, 53]
    case "애니메이션":
      return 16
    case "액션":
      return 28
    case "SF/판타지":
      return [878, 14]
    case "로맨스":
      return 10749
    case "코미디":
      return 35
    case "음악":
      return 10402
    case "Etc.":
      return [18, 36, 37, 80, 99, 9648, 10751, 10752, 10770]
  }
}
export default {
  components: { SearchMovieListItem },
  name: "App",
  data() {
    return {
      keyword: null,
      // selectedOption: "영화 제목",
      // searchOptions: ["영화 제목", "영화 배우/감독"],
      checked: false,
      selectedGenres: [
        "모험",
        "공포/스릴러",
        "애니메이션",
        "액션",
        "SF/판타지",
        "로맨스",
        "코미디",
        "음악",
        "Etc.",
      ],
      // loading: false,
      // items: [],
      // search: null,
      // select: null,
      // states: [
      //   "김태열",
      //   "김태식",
      //   "김태팔",
      //   "김태구",
      //   "김태오",
      //   "김태리",
      //   "김태사",
      //   "김태식",
      //   "김태리",
      //   "김태열",
      //   "김태식",
      //   "김태리",
      //   "김태열",
      //   "김태식",
      //   "김태칠",
      //   "김태열",
      //   "김태식",
      //   "김태육",
      //   "홍성범",
      //   "가인",
      // ],
    }
  },
  computed: {
    searchMovieList() {
      return this.$store.state.searchMovieList
    },
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" }).catch(() => {}) // Avoided redundant navigation 에러 해결
    },
    openSearchModal() {
      this.$bvModal.show("showSearchModal")
    },
    // querySelections(v) {
    //   this.loading = true
    //   // Simulated ajax query
    //   //  window.axios.get(`https://paperlesssolutionsltd.com.ng/inventory/invapi/api/get_item_by_name_paged/${v}/100`)

    //   // example v = milk

    //   setTimeout(() => {
    //     this.items.push(this.search)
    //     this.items = this.states.filter((e) => {
    //       return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
    //     })
    //     this.loading = false
    //   }, 500)
    // },

    // 모달 검색창에 엔터를 친 경우
    // enterInput() {
    //   console.log(this.search)
    // },
    inputFunc() {
      const selectedGenreIds = []
      this.selectedGenres.forEach((element) => {
        const id = matchGenreId(element)
        if (id.length > 1) selectedGenreIds.push(...id)
        else selectedGenreIds.push(id)
      })
      const payload = { keyword: this.keyword, genres: selectedGenreIds }
      this.$store.dispatch("searchMovieListByTitle", payload)
      // if (this.selectedOption == "영화 제목") {
      //   this.$store.dispatch("searchMovieListByTitle", payload)
      // } else {
      //   this.$store.dispatch("searchMovieListByPerson", payload)
      // }
      // console.log(this.searchMovieList)
      // console.log("herererere")
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
.modal .modal-huge {
  max-width: 75%;
  width: 75%;
  /* height: 80%;
  max-height: 80%; */
}

.scroll {
  overflow-y: scroll;
}
</style>

<style scoped>
.v-text-field {
  width: 280px;
}
</style>
