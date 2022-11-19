<template>
  <div class="mainText" id="mypage">
    <div id="profile-container">
      <community-profile />
    </div>
    <div>
      <h1>My Page</h1>
      <p>{{ nickname }}</p>
      <v-btn color="yellow" @click="openCreateFeedModal">게시물 작성</v-btn>

      <!-- 게시글 작성 모달 -->
      <b-modal
        hide-footer
        hide-header-close
        size="medi"
        id="openCreateFeedModal"
      >
        <template #modal-header>
          <h2 class="logoText">CREATE YOUR OWN POST</h2>
        </template>
        <feed-create-modal @close-modal="closeCreateFeedModal" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import CommunityProfile from "../components/CommunityProfile.vue"
import FeedCreateModal from "../components/FeedCreateModal.vue"
export default {
  components: { FeedCreateModal, CommunityProfile },
  name: "MyPageView",
  computed: {
    nickname() {
      return this.$store.state.nickname
    },
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

<style>
#mypage {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
