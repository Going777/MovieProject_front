<template>
  <div id="feed-item" class="mainText">
    {{ feed }}
    <!-- 유저프로필 & 유저 닉네임 -->
    <div style="display: flex; margin-bottom: 10px">
      <img
        style="width: 8%; min-width: 36px; border-radius: 50%"
        src="@/assets/tikitaka_film.png"
      />
      <h5
        style="
          align-self: center;
          margin-left: 10px;
          margin-top: auto;
          margin-bottom: auto;
        "
      >
        {{ feed.user.username }}
      </h5>
    </div>
    <!-- 피드 -->
    <div class="card" style="border-radius: 20px">
      <img :src="imgPath" id="feed-image" />
      <div class="card-body">
        <div style="display: flex; justify-content: space-between">
          <p style="font-size: 28px; margin: 0">{{ feed.title }}</p>
          <v-btn icon color="red lighten-2">
            <v-icon color="red" size="35" style="align-self: center"
              >mdi-heart
            </v-icon>
          </v-btn>
        </div>
        <hr />
        <div id="feed-content">
          {{ feed.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityFeed",
  props: {
    feed: Object,
  },
  computed: {
    imgPath() {
      return "https://image.tmdb.org/t/p/original" + this.feed.backdrop.path
    },
  },
}
</script>

<style>
#feed-item {
}
#feed-image {
  border-radius: 20px 20px 0 0;
  width: 100%;
}
#feed-content {
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: justify;
  line-height: 2rem;
}
</style>
