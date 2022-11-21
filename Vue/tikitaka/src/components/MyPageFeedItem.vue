<template>
  <div>
    <div class="col">
      <div
        class="card"
        style="border-radius: 20px; margin-bottom: 25px"
        @click="clickFeed"
      >
        <img :src="imgPath" id="feed-image" />
        <div class="card-body">
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
            <v-btn icon color="red lighten-2">
              <v-icon color="red" size="25" style="align-self: center"
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
  </div>
</template>

<script>
export default {
  name: "MyPageFeedItem",
  props: {
    feed: Object,
  },
  computed: {
    imgPath() {
      return "https://image.tmdb.org/t/p/original" + this.feed.backdrop.path
    },
  },
  methods: {
    clickFeed() {
      this.$emit("click-feed", this.feed)
    },
  },
  created() {
    console.log(this.feed)
  },
}
</script>

<style></style>
