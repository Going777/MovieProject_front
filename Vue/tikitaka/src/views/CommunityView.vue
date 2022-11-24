<template>
  <div id="community">
    <div id="profile-container">
      <community-profile :user="user" />
    </div>
    <div id="feed-container">
      <community-feed :relatedFeedList="relatedFeedList"/>
    </div>
    <div id="side-container">
      <community-side :allUserList="allUserList" />
      <community-side :followList="followList" />
    </div>
  </div>
</template>

<script>
import CommunityFeed from "../components/CommunityFeed.vue"
import CommunityProfile from "../components/CommunityProfile.vue"
import CommunitySide from "../components/CommunitySide.vue"
export default {
  components: { CommunityProfile, CommunityFeed, CommunitySide },
  name: "CommunityView",
  data() {
    return {
      // user: null,
    }
  },
  computed: {
    allUserList() {
      return this.$store.state.allUserList
    },
    user: {
      get() {
        return this.$store.state.user
      },
      set(newValue) {
        return newValue
      },
    },
    relatedFeedList: {
      get() {
        return this.$store.state.relatedFeedList
      },
      set(newValue) {
        return newValue
      },
    },
    followList() {
      return this.$store.getters.followList
    },
    username() {
      if (this.user) {
        return this.user.username
      } return null
    },
  },
  watch: {
    // username() {
    //   this.$store.dispatch("getUser", this.user.username)
    //   // this.$store.dispatch("loadFeedList", this.username)
    //   // this.$store.dispatch("loadUserCalendar", this.tempUser.id)
    //   this.relatedFeedList = this.$store.state.relatedFeedList
    //   this.$store.dispatch("getMe", this.user.username)
    // },
    user() {
      this.$store.dispatch("getUser", this.user.username)
      this.$store.dispatch("loadFeedList", this.username)
      this.$store.dispatch("loadRelatedFeedList", this.user.id)
      this.$store.dispatch("loadUserCalendar", this.tempUser.id)
      this.$store.dispatch("getMe", this.user.username)
      this.relatedFeedList = this.$store.state.relatedFeedList
      
    }
  },

  created() {
    this.$store.dispatch("loadAllUserList")
    this.$store.dispatch("getMe", this.user.username)
    this.$store.dispatch("loadRelatedFeedlist", this.user.id)
    this.$store.dispatch("getUser", this.user.username)
  },
}
</script>

<style>
#community {
  display: grid;
  grid-template-columns: 17% 1fr 25%;
  grid-template-rows: 100%;
  height: 100%;
  grid-template-areas: "profile feed side";
  grid-gap: 35px;

  margin: 34px 5% 0;
}

#feed-container {
  grid-area: feed;
}

#side-container {
  grid-area: side;
}
</style>
