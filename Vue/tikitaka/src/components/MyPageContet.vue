<template>
  <div>
    <h1>My Page</h1>
    <v-btn color="yellow" @click="openCreateFeedModal">게시물 작성</v-btn>
  </div>
</template>

<script>
export default {
  name: "MyPageContent",
  methods: {
    openCreateFeedModal() {
      this.$emit("open-create-feed-modal")
    },
  },
}
</script>

<style></style>
