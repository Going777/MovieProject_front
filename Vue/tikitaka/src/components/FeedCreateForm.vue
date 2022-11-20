<template>
  <div>
    <!-- 포스터 선택 영역 -->
    <div>
      <h4>SELECT POSTER</h4>
      <v-sheet style="background-color: transparent">
        <v-slide-group active-class="success" show-arrows>
          <div v-for="backdrop in feedBackDropList" :key="backdrop.id">
            <v-slide-item class="mx-2">
              <v-btn dark height="150px">
                <img
                  width="220px"
                  :src="`https://image.tmdb.org/t/p/original${backdrop.path}`"
                  @click="selectImage(backdrop.id)"
                />
              </v-btn>
            </v-slide-item>
          </div>
        </v-slide-group>
      </v-sheet>
    </div>
    <hr class="mt-5 mb-4" />

    <!-- 피드 작성 영역-->
    <div>
      <h4>TITLE</h4>
      <div>
        <v-text-field
          outlined
          type="text"
          :value="title"
          @input.native="inputTitle"
        >
        </v-text-field>
      </div>

      <h4>CONTENT</h4>
      <v-textarea
        outlined
        type="text"
        :value="content"
        @input.native="inputContent"
      >
      </v-textarea>

      <!-- 피드 작성 완료 버튼 -->
      <v-btn dark height="45" @click="addFeed" style="float: right"
        >CREATE</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedCreateForm",
  props: {
    feedMovieId: Number,
    feedBackDropList: Array,
  },
  data() {
    return {
      title: null,
      content: null,
      selected: this.feedBackDropList[0].id,
    }
  },
  methods: {
    inputTitle(event) {
      this.title = event.target.value
    },
    inputContent(event) {
      this.content = event.target.value
    },
    selectImage(backdrop_id) {
      this.selected = backdrop_id
      console.log("clicked!!")
    },
    addFeed() {
      const payload = {
        movie_id: this.feedMovieId,
        img_id: this.selected,
        title: this.title,
        content: this.content,
      }
      this.$store.dispatch("addFeed", payload)
      // this.$emit("close-modal")
    },
  },
}
</script>

<style></style>
