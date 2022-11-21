<template>
  <div>
    <v-btn color="yellow" @click="openCreateFeedModal">게시물 작성</v-btn>
    <!-- 게시글 작성 모달 -->
    <b-modal hide-footer hide-header-close size="medi" id="openCreateFeedModal">
      <template #modal-header>
        <h2 class="logoText">CREATE YOUR OWN POST</h2>
      </template>
      <feed-create-modal
        :isFeedRequest="isFeedRequest"
        @close-modal="closeCreateFeedModal"
      />
    </b-modal>

    <!-- 작성 게시글 출력 영역 -->
    <div style="width: 100%">
      <v-card flat width="100%">
        <div>
          <div>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              <my-page-feed-item
                v-for="(feed, idx) in feedList"
                :key="idx"
                :feed="feed"
              />
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import FeedCreateModal from "./FeedCreateModal.vue"
import MyPageFeedItem from "./MyPageFeedItem.vue"
export default {
  components: { FeedCreateModal, MyPageFeedItem },
  name: "MyPageFeed",
  props: {
    feedList: Array,
  },
  data() {
    return {
      isFeedRequest: true,
    }
  },
  methods: {
    openCreateFeedModal() {
      this.$bvModal.show("openCreateFeedModal")
    },
    closeCreateFeedModal() {
      this.$bvModal.hide("openCreateFeedModal")
    },
  },
}
</script>

<style></style>
