<template>
  <div id="feed-item">
    <!-- 유저프로필 & 유저 닉네임 -->
    <div style="display: flex">
      <img
        style="width: 72px; border-radius: 50%; margin-left: 20px"
        src="@/assets/tikitaka_film.png"
      />
      <h4 style="align-self: center; margin-left: 10px">Follow1</h4>
    </div>
    <!-- 피드 -->
    <div class="card" style="margin: 20px 10px; border-radius: 20px">
      <img
        src="https://image.tmdb.org/t/p/original/f0oDtB2JCMlPKjphBJ90GcfVzWg.jpg"
        id="feed-image"
      />
      <div class="card-body">
        <div style="display: flex; justify-content: space-between">
          <p style="font-size: 30px; margin: 0">피드 제목</p>
          <v-icon color="red" size="35" style="align-self: center"
            >mdi-heart
          </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityFeed",
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap");

#feed-item {
  font-family: "Do Hyeon", sans-serif;
}
#feed-image {
  border-radius: 20px 20px 0 0;
  width: 100%;
  /* ; */
}
</style>
