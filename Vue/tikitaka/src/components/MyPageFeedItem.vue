<template>
  <div>
    <div class="col">
      <div
        class="card"
        style="
          border-radius: 20px;
          margin-bottom: 25px;
          box-shadow: 4px 4px 4px rgb(200, 200, 200);
        "
      >
        <img :src="imgPath" id="feed-image" @click="clickFeed" />
        <div class="card-body">
          <!-- 이미지 / 타이틀 / 컨텐츠만 보이게 -->
          <div @click="clickFeed">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: -6px 0;
              "
            >
              <div>
                <h4 style="margin-top: -1px; margin-bottom: -0.5px">
                  {{ feed.title }}
                </h4>
                <p style="font-size: 14px; color: rgb(93, 93, 93)">
                  {{ feed.movie.title }} - {{ feed.movie.original_title }}
                </p>
                <p style="font-size: 12px; color: gray; margin-bottom: -5px">
                  좋아요 100개
                </p>
              </div>
              <v-btn icon color="red lighten-2" @click.stop="clickLikeBtn">
                <v-icon
                  v-if="isLike"
                  color="red"
                  size="25"
                  style="align-self: center"
                  >mdi-heart
                </v-icon>
                <v-icon
                  v-else
                  color="black"
                  size="25"
                  style="align-self: center"
                  >mdi-heart
                </v-icon>
              </v-btn>
            </div>
            <hr />
            <div id="feed-content">
              {{ feed.content }}
            </div>
          </div>
          <!-- 댓글까지 다 보이게 -->
          <div v-show="requestFromDetail">
            <!-- <hr /> -->
            <br />
            <h5 style="font-weight: bold; margin-bottom: 15px">댓글</h5>
            <!-- 댓글 목록 -->
            <div>
              <div style="display: flex" class="my-3">
                <img
                  style="width: 40px; border-radius: 50%; align-self: center"
                  src="@/assets/tikitaka_film.png"
                />
                <h6
                  style="
                    align-self: center;
                    margin-left: 10px;
                    font-weight: bolder;
                  "
                >
                  User1
                </h6>
                <h6 style="align-self: center; margin-left: 10px">
                  너무너무 재미있어요오오오오오오
                </h6>
              </div>
              <div style="display: flex" class="my-3">
                <img
                  style="width: 40px; border-radius: 50%; align-self: center"
                  src="@/assets/tikitaka_film.png"
                />
                <h6
                  style="
                    align-self: center;
                    margin-left: 10px;
                    font-weight: bolder;
                  "
                >
                  Usedsfsdfsfsdr1
                </h6>
                <h6 style="align-self: center; margin-left: 10px">
                  너무너무
                  재미있어요오오오오오오ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ
                </h6>
              </div>
              <div style="display: flex" class="my-3">
                <img
                  style="width: 40px; border-radius: 50%; align-self: center"
                  src="@/assets/tikitaka_film.png"
                />
                <h6
                  style="
                    align-self: center;
                    margin-left: 10px;
                    font-weight: bolder;
                  "
                >
                  User1
                </h6>
                <h6 style="align-self: center; margin-left: 10px">
                  너무너무 재미있어요오오오오오오
                </h6>
              </div>
              <div style="display: flex" class="my-3">
                <img
                  style="width: 40px; border-radius: 50%; align-self: center"
                  src="@/assets/tikitaka_film.png"
                />
                <h6
                  style="
                    align-self: center;
                    margin-left: 10px;
                    font-weight: bolder;
                  "
                >
                  User1
                </h6>
                <h6 style="align-self: center; margin-left: 10px">
                  너무너무 재미있어요오오오오오오
                </h6>
              </div>
              <div style="display: flex" class="my-3">
                <img
                  style="width: 40px; border-radius: 50%; align-self: center"
                  src="@/assets/tikitaka_film.png"
                />
                <h6
                  style="
                    align-self: center;
                    margin-left: 10px;
                    font-weight: bolder;
                  "
                >
                  User1
                </h6>
                <h6 style="align-self: center; margin-left: 10px">
                  너무너무 재미있어요오오오오오오
                </h6>
              </div>
              <div style="display: flex">
                <v-text-field
                  rounded
                  outlined
                  dense
                  label="댓글을 남겨주세요"
                  flat
                  hide-details
                ></v-text-field>
                <v-btn icon
                  ><v-icon size="30" style="margin-left: 10px"
                    >mdi-send</v-icon
                  ></v-btn
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPageFeedItem",
  props: {
    feed: Object,
    requestFromDetail: Boolean,
  },
  computed: {
    imgPath() {
      return "https://image.tmdb.org/t/p/original" + this.feed.backdrop.path
    },
    user_id() {
      return this.$store.state.user.id
    },
    isLike() {
      if (this.feed.like_users.includes(this.user_id)) {
        return true
      }
      return false
    },
  },
  methods: {
    clickFeed() {
      this.$emit("click-feed", this.feed)
    },
    clickLikeBtn() {
      const payload = {
        feed_id: this.feed.id,
        user_id: this.$store.state.user.id,
        username: this.$store.state.user.username,
      }
      this.$store.dispatch("clickLikeBtn", payload)
    },
  },
}
</script>

<style></style>
