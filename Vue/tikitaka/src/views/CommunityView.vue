<template>
  <div id="community">
    {{ user }}
    <div id="profile-container">
      <community-profile :user="user" />
    </div>
    <div id="feed-container">
      <community-feed />
    </div>
    <div id="side-container">
      <community-side />
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
    username() {
      return this.$store.state.user.username
    },
    user() {
      return this.$store.state.user
    },
  },
  created() {
    this.$store.dispatch("getMe", this.username)
    this.$store.dispatch("loadAllUserList")
  },
}
</script>

<style>
#community {
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  grid-template-rows: 100%;
  height: 100%;
  grid-template-areas: "profile feed side";
  grid-gap: 10px;
}

#feed-container {
  grid-area: feed;
}

#side-container {
  grid-area: side;
}
</style>
