<template>
  <div class="mainText" id="mypage">
    <!-- 프로필 섹션(좌측) -->
    <div id="profile-container">
      <community-profile />
    </div>

    <!-- 메뉴 이동 섹션(아이콘 바)(우측 상단) -->
    <div id="icon-container">
      <my-page-icon-bar />
      <!-- <font-awesome-icon class="fa-3x" icon="stopwatch" /> -->
    </div>

    <!-- 콘텐츠 섹션(우측 하단) -->
    <div id="content-container">
      <my-page-contet @open-create-feed-modal="openCreateFeedModal" />

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
import MyPageContet from "../components/MyPageContet.vue"
import MyPageIconBar from "../components/MyPageIconBar.vue"
export default {
  components: {
    FeedCreateModal,
    CommunityProfile,
    MyPageIconBar,
    MyPageContet,
  },
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
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 8% 1fr;
  height: 100%;
  grid-template-areas:
    "profile iconArea"
    "profile contentArea";
  grid-gap: 10px;
}

#icon-container {
  grid-area: iconArea;
  padding-top: 20px;
}

#content-container {
  grid-area: contentArea;
  background-color: rgb(246, 228, 228);
}

.v-line {
  border-left: thick solid rgba(213, 204, 204, 0.735);
  height: 30px;
  margin: 0 40px;
}
</style>
