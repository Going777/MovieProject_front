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
      absolute
      permanent
      expand-on-hover
      clipped
      fixed
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
    <b-modal size="huge" id="showSearchModal" title="Search Movies">
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
        <div class="m-3">
          <!-- 검색 카테고리 -->
          <div>
            <b-form-select
              v-model="selected"
              :options="options"
              class="mb-3"
              value-field="item"
              text-field="name"
              disabled-field="notEnabled"
              style="border: 2px solid black"
            ></b-form-select>
          </div>

          <!-- 입력폼 -->
          <input type="text" style="border: 2px solid black" />
          <button class="btn btn-warning">입력</button>

          <!-- 장르 선택 -->
          <div>
            <v-checkbox
              v-model="ex4"
              label="모험"
              color="red"
              value="red"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="공포/스릴러"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="애니메이션"
              color="red"
              value="red"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="액션"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="SF/판타지"
              color="red"
              value="red"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="로맨스"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="코미디"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="음악"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Etc."
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
          </div>
          <br /><br /><br />
        </div>
        <!-- 결과 섹션 -->
        <div>
          <v-card class="scroll" height="500px" width="800px">
            <v-card class="zoom" width="150px" height="220px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="220px"
              ></v-img>
            </v-card>
            <!-- <v-card class="zoom" width="150px" height="220px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="220px"
              ></v-img>
            </v-card>
            <v-card class="zoom" width="150px" height="220px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="220px"
              ></v-img>
            </v-card>
            <v-card class="zoom" width="150px" height="220px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="220px"
              ></v-img>
            </v-card>
            <v-card class="zoom" width="150px" height="220px">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="220px"
              ></v-img>
            </v-card> -->
          </v-card>
        </div>
      </div>
    </b-modal>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ex4: [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3",
      ],
      selected: "title",
      options: [
        { item: "title", name: "영화 제목" },
        { item: "person", name: "영화 배우/감독" },
      ],
      checked: false,
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
    querySelections(v) {
      this.loading = true
      // Simulated ajax query
      //  window.axios.get(`https://paperlesssolutionsltd.com.ng/inventory/invapi/api/get_item_by_name_paged/${v}/100`)

      // example v = milk

      setTimeout(() => {
        this.items.push(this.search)
        this.items = this.states.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },

    // 모달 검색창에 엔터를 친 경우
    enterInput() {
      console.log(this.search)
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
  max-width: 85%;
  width: 85%;
  /* height: 80%;
  max-height: 80%; */
}

.scroll {
  overflow-y: scroll;
}
</style>
