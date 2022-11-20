<template>
  <div>
    <h1>My Page</h1>
    <v-btn color="yellow" @click="openCreateFeedModal">게시물 작성</v-btn>

    <!-- 게시글 작성 모달 -->
    <b-modal hide-footer hide-header-close size="medi" id="openCreateFeedModal">
      <template #modal-header>
        <h2 class="logoText">CREATE YOUR OWN POST</h2>
      </template>
      <feed-create-modal @close-modal="closeCreateFeedModal" />
    </b-modal>
  </div>
</template>

<script>
import FeedCreateModal from "./FeedCreateModal.vue"
export default {
  components: { FeedCreateModal },
  name: "MyPageFeed",
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
