<template>
  <div>
    <v-btn
      icon
      color="black lighten-2"
      height="70pxs"
      @click="openCreateFeedModal"
      style="bottom: 50px; right: 100px"
      fixed
    >
      <img src="@/assets/add_btn.png" alt="" width="70px" />
    </v-btn>
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
                @click-feed="clickFeed"
              />
            </div>
          </div>
        </div>
      </v-card>
    </div>

    <!-- 게시글 확대 모달 -->
    <b-modal
      hide-header
      hide-footer
      hide-header-close
      size="medi"
      id="openFeedModal"
    >
      <feed-detail-modal />
    </b-modal>

    <!-- 게시글 작성 모달 -->
    <b-modal hide-footer hide-header-close size="medi" id="openUpdateFeedModal">
      <template #modal-header>
        <h2 class="logoText">UPDATE THE POST</h2>
      </template>
      <feed-create-modal
        :isFeedRequest="isFeedRequest"
        @close-modal="closeCreateFeedModal"
      />
    </b-modal>
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
    clickFeed() {},
  },
}
</script>

<style></style>
