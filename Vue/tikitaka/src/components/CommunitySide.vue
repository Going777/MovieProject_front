<template>
  <div>
    <v-sheet id="sidebar-box">
      <!-- 유저 검색 -->
      <div style="margin: 20px 0">
        <v-toolbar flat dense>
          <v-autocomplete
            clearable
            outlined
            small-chips
            :loading="loading"
            :items="items"
            :search-input.sync="searchUser"
            v-model="select"
            label="Search Users..."
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

      <!-- 팔로우한 유저 -->
      <div style="margin-top: 30px">
        <h4>Mutual Friends</h4>
        <div id="user-box">
          <div style="display: flex">
            <img
              style="width: 60px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 60px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 60px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 60px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 60px; border-radius: 50%; margin-left: 20px"
              src="@/assets/tikitaka_film.png"
            />
            <h6 style="align-self: center; margin-left: 10px">Follow1</h6>
          </div>
          <hr />
          <div style="display: flex">
            <img
              style="width: 60px; border-radius: 50%; margin-left: 20px"
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
  data() {
    return {
      loading: false,
      items: [],
      searchUser: null,
      select: null,
      users: [
        "김태열",
        "김태식",
        "김태팔",
        "김태구",
        "김태오",
        "김태리",
        "김태사",
        "김태식",
        "김태리",
        "김태열",
        "김태식",
        "김태리",
        "김태열",
        "김태식",
        "김태칠",
        "김태열",
        "김태식",
        "김태육",
        "홍성범",
        "가인",
      ],
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
  },
}
</script>

<style>
#sidebar-box {
  font-family: "Do Hyeon", sans-serif;
  border-radius: 15px;
  height: 80vh;
  padding: 30px 10px;
  background-color: rgb(238, 238, 238);
  position: fixed;
  max-width: 22%;
}
#user-box {
  background-color: white;
  border-radius: 40px;
  padding: 30px 10px;
  overflow: auto;
  height: 42vh;
}
</style>
