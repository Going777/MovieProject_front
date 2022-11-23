<template>
  <div>
    <v-sheet id="sidebar-box" class="mainText" elevation="3">
      <!-- 유저 검색 -->
      <div style="margin: 20px 0">
        <v-toolbar flat dense>
          <v-autocomplete
            clearable
            outlined
            auto-select-first
            :loading="loading"
            :search-input.sync="searchUser"
            :items="items"
            v-model="select"
            label="Search Users..."
            @change="selectUser"
          ></v-autocomplete>
        </v-toolbar>
      </div>

      <!-- 추천 유저(with 프로필) -->
      <div style="margin-top: 30px">
        <h4>Perhaps you may like</h4>
        <v-sheet style="background-color: transparent">
          <v-slide-group active-class="success" show-arrows>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
            <v-slide-item>
              <community-feed-user-list-item style="margin-right: 7px" />
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>

      <!-- 서로 맞팔한 유저 -->
      <div style="margin-top: 30px">
        <h4>Mutual Friends</h4>
        <div id="user-box">
          <div style="display: flex">
            <img
              style="width: 50px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 50px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 50px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 50px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 50px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 50px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import CommunityFeedUserListItem from "./CommunityFeedUserListItem.vue"
export default {
  components: { CommunityFeedUserListItem },
  name: "CommunitySide",
  props: { allUserList: Array },
  data() {
    return {
      loading: false,
      items: this.allUserList,
      searchUser: null,
      select: null,
      users: this.$store.state.allUserList,
    }
  },
  watch: {
    searchUser(val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true
      setTimeout(() => {
        this.items = this.users.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
    selectUser() {
      this.$router.push({ name: "mypage", params: { username: this.select } })
    },
  },
}
</script>

<style>
#sidebar-box {
  border-radius: 15px;
  height: 80vh;
  padding: 30px 10px;
  background-color: white;
  position: fixed;
  max-width: 17%;
  width: 100%;
  float: right;
  margin-left: auto;
  margin-right: 0;
  /* margin-right: 10px; */
  margin-top: 0px;
}
#user-box {
  background-color: white;
  border-radius: 40px;
  padding: 30px 10px;
  overflow: auto;
  height: 42vh;
}
</style>
