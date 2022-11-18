<template>
  <div>
    <div style="margin-top: 15px">
      <!-- 유저 검색 -->
      <v-toolbar flat prominent>
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
      <!-- 추천 유저(with 프로필) -->
      <div>
        <!-- <div style="position: relative; z-index: 10; margin-top: -60px"> -->
        <h4>For you</h4>
        <div style="display: flex">
          <div style="text-align: center">
            <img src="@/assets/tikitaka_coffee.png" id="sub-profile" />
            <p>User1</p>
          </div>
          <div style="text-align: center">
            <img src="@/assets/tikitaka_popcorn.png" id="sub-profile" />
            <p>User2</p>
          </div>
          <div style="text-align: center">
            <img src="@/assets/tikitaka_coke.png" id="sub-profile" />
            <p>User3</p>
          </div>
          <!-- <div style="text-align: center">
            <img src="@/assets/tikitaka_chips.png" id="sub-profile" />
            <p>User4</p>
          </div>
          <div style="text-align: center">
            <img src="@/assets/tikitaka_ticket.png" id="sub-profile" />
            <p>User5</p>
          </div>
          <div style="text-align: center">
            <img src="@/assets/tikitaka_coffee.png" id="sub-profile" />
            <p>User1</p>
          </div>
          <div style="text-align: center">
            <img src="@/assets/tikitaka_popcorn.png" id="sub-profile" />
            <p>User2</p>
          </div> -->
        </div>
      </div>
      <!-- 피드 -->
      <community-feed-list />
    </div>
  </div>
</template>

<script>
import CommunityFeedList from "./CommunityFeedList.vue"
export default {
  components: { CommunityFeedList },
  name: "CommunityFeed",
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
#sub-profile {
  width: 120px;
  border-radius: 50%;
  margin: 0 20px;
  text-align: center;
}

/* #profile-image {
  width: 170px;
  border: 10px solid white;
  display: block;
  margin: 0px auto;
} */
</style>
