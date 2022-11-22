<template>
  <div>
    <!-- 피드 -->
    <div>
      <!-- {{ relatedFeedList }} -->
      <community-feed-item
        v-for="(feed, idx) in relatedFeedList"
        :key="idx"
        :feed="feed"
      />
    </div>
  </div>
</template>

<script>
import CommunityFeedItem from "./CommunityFeedItem.vue"
// import CommunityFeedList from "./CommunityFeedList.vue"
export default {
  components: { CommunityFeedItem },
  // components: { CommunityFeedList },
  name: "CommunityFeed",
  props: {
    relatedFeedList: Array,
  },
}
</script>

<style></style>
