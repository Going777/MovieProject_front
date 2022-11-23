<template>
  <div class="mainText" id="mypage">
    <!-- 프로필 섹션(좌측) -->
    <div id="profile-container" style="margin-top: 34px">
      <community-profile :user="user" />
    </div>

    <!-- 메뉴 이동 섹션(아이콘 바)(우측 상단) -->
    <div id="icon-container">
      {{ username }}
      <my-page-icon-bar
        @show-feed="showFeed"
        @show-bookmark="showBookmark"
        @show-heart-feed="showHeartFeed"
        @show-calendar="showCalendar"
      />
    </div>

    <!-- 콘텐츠 섹션(우측 하단) -->
    <!-- <div > -->
    <v-sheet id="content-container" elevation="3">
      <my-page-feed v-if="activeTab === 'MyPageFeed'" :feedList="feedList" />
      <my-page-bookmark v-if="activeTab === 'MyPageBookmark'" />
      <my-page-heart-feed
        v-if="activeTab === 'MyPageHeartFeed'"
        :user="user"
        :feedList="feedList"
      />
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
    username: {
      get() {
        return this.$route.params.username
      },
      set(newValue) {
        return newValue
      },
    },
    feedList: {
      get() {
        return this.$store.state.feedList
      },
      set(newValue) {
        return newValue
      },
    },
    user: {
      get() {
        return this.$store.state.tempUser
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
    this.$store.dispatch("loadFeedList", this.$route.params.username)
    this.$store.dispatch("getUser", this.username)
    this.$store.dispatch("loadUserCalendar", this.user.id)
  },
  updated() {
    this.feedList = this.$store.state.feedList
    this.$store.dispatch("loadUserCalendar", this.user.id)
  },
  // beforeRouteUpdate(to, from, next) {
  //   this.username = to.params.username
  //   this.$store.dispatch("getUser", this.username)
  //   console.log("그다음 여기", this.user)
  //   this.user = this.$store.state.tempUser
  //   next()
  // },
}
</script>

<style>
#mypage {
  display: grid;
  grid-template-columns: 17% 1fr;
  grid-template-rows: 0% 1fr;
  height: 100%;
  grid-template-areas:
    "profile iconArea"
    "profile contentArea";
  grid-gap: 35px;
  margin: 0 5% 0;
}

#icon-container {
  grid-area: iconArea;
}

#content-container {
  grid-area: contentArea;
  padding: 50px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 50px;
  display: fixed;
}
</style>
