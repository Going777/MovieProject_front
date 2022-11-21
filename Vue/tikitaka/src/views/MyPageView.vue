<template>
  <div class="mainText" id="mypage">
    <!-- 프로필 섹션(좌측) -->
    <div id="profile-container">
      <community-profile />
    </div>

    <!-- 메뉴 이동 섹션(아이콘 바)(우측 상단) -->
    <div id="icon-container">
      <my-page-icon-bar
        @show-feed="showFeed"
        @show-bookmark="showBookmark"
        @show-heart-feed="showHeartFeed"
        @show-calendar="showCalendar"
      />
      <!-- <font-awesome-icon class="fa-3x" icon="stopwatch" /> -->
    </div>

    <!-- 콘텐츠 섹션(우측 하단) -->
    <!-- <div > -->
    <v-sheet id="content-container" elevation="3">
      <my-page-feed v-if="activeTab === 'MyPageFeed'" :feedList="feedList" />
      <my-page-bookmark v-if="activeTab === 'MyPageBookmark'" />
      <my-page-heart-feed v-if="activeTab === 'MyPageHeartFeed'" />
      <my-page-calendar v-if="activeTab === 'MyPageCalendar'" />
    </v-sheet>
    <!-- </div> -->
  </div>
</template>

<script>
import CommunityProfile from "../components/CommunityProfile.vue"
import MyPageBookmark from "../components/MyPageBookmark.vue"
import MyPageCalendar from "../components/MyPageCalendar.vue"
import MyPageFeed from "../components/MyPageFeed.vue"
import MyPageHeartFeed from "../components/MyPageHeartFeed.vue"
import MyPageIconBar from "../components/MyPageIconBar.vue"
export default {
  components: {
    CommunityProfile,
    MyPageIconBar,
    MyPageFeed,
    MyPageBookmark,
    MyPageHeartFeed,
    MyPageCalendar,
  },
  name: "MyPageView",
  data() {
    return {
      activeTab: "MyPageFeed",
    }
  },
  computed: {
    nickname() {
      return this.$store.state.nickname
    },
    feedList: {
      get() {
        return this.$store.state.feedList
      },
      set(newValue) {
        return newValue
      },
    },
  },
  methods: {
    showFeed(currentPage) {
      this.activeTab = currentPage
    },
    showBookmark(currentPage) {
      this.activeTab = currentPage
    },
    showHeartFeed(currentPage) {
      this.activeTab = currentPage
    },
    showCalendar(currentPage) {
      this.activeTab = currentPage
    },
  },
  created() {
    this.$store.dispatch("loadFeedList", this.$route.params.nickname)
  },
  updated() {
    this.feedList = this.$store.state.feedList
    console.log(this.feedList)
  },
}
</script>

<style>
#mypage {
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 8% 1fr;
  height: 100%;
  grid-template-areas:
    "profile iconArea"
    "profile contentArea";
  grid-gap: 20px;
}

#icon-container {
  grid-area: iconArea;
  padding-top: 20px;
}

#content-container {
  grid-area: contentArea;
  margin-top: -20%;
  padding: 50px;
  background-color: white;
  border-radius: 20px;
}
</style>
