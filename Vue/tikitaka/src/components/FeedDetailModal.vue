<template>
  <div>
    <my-page-feed-item
      :feed="clickedFeed"
      :requestFromDetail="requestFromDetail"
    />
    <div style="float: right">
      <v-btn dark class="mx-3" @click="deleteFeed">DELETE</v-btn>
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
  // computed: {
  //   feed: {
  //     get() {
  //       return this.clickedFeed
  //     },
  //     set(newValue) {
  //       return newValue
  //     },
  //   },
  // },
  methods: {
    // 피드 삭제
    deleteFeed() {
      this.$store.dispatch("deleteFeed", this.clickedFeed.id)
      this.$emit("close-modal")
    },
  },
  // updated() {
  //   this.feed = this.$store.state.selectedFeed
  //   console.log("바꼈나요,.,,,,,,?", this.feed)
  // },
}
</script>

<style></style>
