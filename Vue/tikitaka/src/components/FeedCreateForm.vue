<template>
  <div>
    <!-- 포스터 선택 영역 -->
    <div>
      <v-sheet style="background-color: transparent">
        <v-slide-group active-class="success" show-arrows>
          <div v-for="imgPath in feedMovie.backdrop_set" :key="imgPath.id">
            <v-slide-item class="mx-2">
              <img
                width="220px"
                :src="`https://image.tmdb.org/t/p/original${imgPath.path}`"
                alt=""
              />
            </v-slide-item>
          </div>
        </v-slide-group>
      </v-sheet>
    </div>

    <hr />

    <!-- 피드 작성 영역-->
    <div>
      <h3>피드 작성</h3>
      <div>
        <p>title</p>
        <v-text-field
          outlined
          type="text"
          :value="title"
          @input.native="inputTitle"
        >
        </v-text-field>
        <p>content</p>

        <v-textarea
          outlined
          type="text"
          :value="content"
          @input.native="inputContent"
        >
        </v-textarea>

        <!-- 피드 작성 완료 버튼 -->
        <v-btn @click="addFeed">작성완료</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedCreateForm",
  props: {
    feedMovie: Object,
  },
  data() {
    return {
      title: null,
      content: null,
    }
  },
  methods: {
    inputTitle(event) {
      this.title = event.target.value
    },
    inputContent(event) {
      this.content = event.target.value
    },
    addFeed() {
      const payload = {
        movie_id: this.feedMovie.id,
        img_id: "/yzqaKAhglTrkeOfuIXYYArf0WnA.jpg",
        title: this.title,
        content: this.content,
      }
      this.$store.dispatch("addFeed", payload)
    },
  },
}
</script>

<style></style>
