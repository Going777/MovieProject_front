<template>
  <div id="community">
    <div id="profile-container">
      <community-profile />
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
}
</script>

<style>
#community {
  display: flex;
  width: 100vw;
  height: 100vh;
}

#feed-container {
  margin-left: 20px;
  margin-right: 20px;
  width: 50%;
}

#side-container {
  width: 22%;
  margin-left: 20px;
}
</style>
