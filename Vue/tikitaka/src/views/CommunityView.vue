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
