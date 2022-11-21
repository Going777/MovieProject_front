<template>
  <div>
    <my-page-feed-item
      :feed="clickedFeed"
      :requestFromDetail="requestFromDetail"
    />
    <div style="float: right">
      <v-btn dark class="mx-3">DELETE</v-btn>
      <v-btn dark>UPDATE</v-btn>
    </div>
  </div>
</template>

<script>
import MyPageFeedItem from "./MyPageFeedItem.vue"
export default {
  components: { MyPageFeedItem },
  name: "FeedDetailModal",
  data() {
    return {
      requestFromDetail: true,
    }
  },
  props: {
    clickedFeed: Object,
  },
}
</script>

<style></style>
