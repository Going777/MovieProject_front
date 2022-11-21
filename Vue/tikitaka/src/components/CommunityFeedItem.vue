<template>
  <div id="feed-item" class="mainText">
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
          <p style="font-size: 28px; margin: 0">피드 제목</p>
          <v-btn icon color="red lighten-2">
            <v-icon color="red" size="35" style="align-self: center"
              >mdi-heart
            </v-icon>
          </v-btn>
        </div>
        <hr />
        <div id="feed-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam tempora
          vero fugiat et tempore aliquam quisquam, voluptates ab quas quidem
          voluptatibus cum ipsum? Accusantium placeat sunt eveniet quibusdam
          totam! At?Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Iusto accusantium expedita veritatis voluptatum commodi perspiciatis
          voluptate nulla. Quos temporibus rem suscipit voluptatibus totam
          eligendi reiciendis necessitatibus illum, nesciunt excepturi
          quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorum officia facilis earum perspiciatis quas, aliquam doloremque
          unde similique possimus saepe et laborum ipsam impedit dicta nulla ab
          qui, sint explicabo.
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
