<template>
  <div>
    <community-feed-item />
    <community-feed-item />
    <community-feed-item />
  </div>
</template>

<script>
import CommunityFeedItem from "./CommunityFeedItem.vue"
export default {
  components: { CommunityFeedItem },
  name: "CommunityFeedList",
}
</script>

<style></style>
