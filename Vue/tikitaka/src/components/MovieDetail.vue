<template>
  <div style="margin: 0px 10% 200px; display: flex" class="mainText">
    <!-- 영화 포스터 및 버튼 영역 -->
    <div style="max-width: 220px; margin-right: 30px">
      <img :src="posterURL" alt="" style="width: 100%" />
      <v-btn
        v-if="isBookmark"
        @click="clickBookmark"
        style="width: 100%; margin-top: 30px"
      >
        <v-icon left> mdi-star </v-icon>
        Bookmark
      </v-btn>
      <v-btn
        v-if="!isBookmark"
        @click="clickBookmark"
        style="width: 100%; margin-top: 30px"
      >
        <v-icon left> mdi-star-outline </v-icon>
        Bookmark
      </v-btn>
      <v-btn style="width: 100%; margin-top: 30px" @click="openMessageModal">
        <v-icon left> mdi-message </v-icon>
        Message
      </v-btn>
      <!-- <v-btn style="width: 100%; margin-top: 30px">
        <v-icon left> mdi-pencil </v-icon>
        Review
      </v-btn> -->
    </div>

    <!-- 영화 정보 -->
    <div>
      <!-- 제목 영역 -->
      <div style="display: flex; align-items: flex-end">
        <h1 style="font-weight: bold">{{ movie.title }}</h1>
        <p>{{ movie.original_title }}</p>
      </div>

      <!-- 영화 정보 영역 -->
      <div style="display: flex; margin: 10px 0px 30px">
        <!-- 영화 상세 정보 -->
        <div style="width: 35%">
          <h2>Info</h2>
          <MovieDetailBasic :movie="movie" />
        </div>

        <!-- 영화 캐스팅 -->
        <div style="width: 35%">
          <h2>Cast</h2>
          <MovieDetailCastBoard :movie="movie" />
        </div>
        <!-- 커뮤니티 영역 -->
        <div style="width: 30%" v-show="movie.video_key">
          <h3>Trailer</h3>
          <MovieDetailCommunity :movie="movie" />
        </div>
      </div>

      <!-- 영화 줄거리 -->
      <div>
        <h2>Overview</h2>
        <p style="line-height: 200%">{{ movie.overview }}</p>
      </div>
    </div>

    <!-- 메시지 보내기 모달 -->
    <b-modal hide-footer hide-header-close id="sendMessageModal">
      <template #modal-header>
        <h3 class="logoText">RECOMMEND TO YOUR FRIEND</h3>
      </template>
      <div class="logoText">
        <h5>To</h5>
        <v-toolbar flat dense>
          <v-autocomplete
            clearable
            outlined
            auto-select-first
            :loading="loading"
            :search-input.sync="searchUser"
            :items="items"
            v-model="select"
            label="Search Users..."
          ></v-autocomplete>
        </v-toolbar>
        <h5>Message</h5>
        <v-text-field clearable outlined v-model="message"></v-text-field>
        <v-btn dark style="float: right" @click="sendMessage">SEND</v-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
import MovieDetailCastBoard from "@/components/MovieDetailCastBoard.vue"
import MovieDetailBasic from "@/components/MovieDetailBasic.vue"
import MovieDetailCommunity from "@/components/MovieDetailCommunity.vue"

export default {
  name: "MovieDetail",
  components: {
    MovieDetailCastBoard,
    MovieDetailBasic,
    MovieDetailCommunity,
  },
  props: {
    movie: Object,
  },
  data() {
    return {
      loading: false,
      searchUser: null,
      select: null,
      message: null,
    }
  },
  watch: {
    searchUser(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  computed: {
    posterURL() {
      const path = this.movie.poster_path

      return `https://image.tmdb.org/t/p/original${path}`
    },
    isBookmark() {
      return this.$store.state.user.bookmarks.find(
        (b) => b.id === this.movie.id
      )
    },
    user() {
      return this.$store.state.user
    },
    users() {
      const following = []
      this.user.following.forEach((element) => {
        const name = element.username
        following.push(name)
      })
      return following
    },
    items: {
      get() {
        const following = []
        this.user.following.forEach((element) => {
          const name = element.username
          following.push(name)
        })
        return following
      },
      set(newValue) {
        return newValue
      },
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.users.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
    clickBookmark() {
      return this.$store.dispatch("clickBookmark", this.movie.id)
    },
    openMessageModal() {
      this.$bvModal.show("sendMessageModal")
    },
    sendMessage() {
      console.log("메시지 보낼 때 필요한 것!")
      console.log(this.message)
      console.log(this.select)
      console.log(this.movie)
      console.log(this.user)
      console.log("------------------------------------")
    },
  },
}
</script>

<style></style>
