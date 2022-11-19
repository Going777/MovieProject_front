<template>
  <div class="mainText" id="mypage">
    <!-- 프로필 섹션(좌측) -->
    <div id="profile-container">
      <community-profile />
    </div>

    <!-- 메뉴 이동 섹션(아이콘 바)(우측 상단) -->
    <div id="icon-container">
      <!-- 피드 아이콘 -->
      <span class="mx-5">
        <font-awesome-icon icon="fa-solid fa-file" size="2x" />
      </span>

      <div class="v-line"></div>

      <!-- 북마크 아이콘 -->
      <span class="mx-5">
        <font-awesome-icon icon="fa-solid fa-bookmark" size="2x" />
      </span>

      <div class="v-line"></div>

      <!-- 좋아요한 피드 아이콘 -->
      <span class="mx-5">
        <font-awesome-icon icon="fa-solid fa-heart" size="2x" />
      </span>

      <div class="v-line"></div>

      <!-- 달력 아이콘 -->
      <span class="mx-5">
        <font-awesome-icon icon="fa-solid fa-calendar-days" size="2x" />
      </span>

      <!-- <font-awesome-icon class="fa-3x" icon="stopwatch" /> -->
    </div>

    <!-- 콘텐츠 섹션(우측 하단) -->
    <div id="content-container">
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
  /* text-align: center; */
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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
