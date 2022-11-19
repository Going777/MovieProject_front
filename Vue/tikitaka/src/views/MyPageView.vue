<template>
  <div>
    <h1>My Page</h1>
    <p>{{ nickname }}</p>
    <v-btn color="yellow" @click="openCreateFeedModal">피드 작성</v-btn>

    <b-modal size="huge" id="openCreateFeedModal" title="Create Your Own Feed">
      <feed-create-modal />
    </b-modal>
  </div>
</template>

<script>
import FeedCreateModal from "../components/FeedCreateModal.vue"
export default {
  components: { FeedCreateModal },
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

<style></style>
