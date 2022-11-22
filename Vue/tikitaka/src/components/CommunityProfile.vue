<template>
  <div>
    <v-sheet id="profile-box" class="mainText" elevation="3">
      <div>
        <!-- 프로필 이미지 -->
        <img
          src="@/assets/tikitaka_hotdog.png"
          id="profile-image"
          style="width: 100%; max-width: 200px"
        />
        <!-- 프로필 텍스트 영역 -->
        <div id="profile-content-box">
          <!-- 닉네임 -->
          <h2 style="margin-left: 20px">{{ user.username }}</h2>

          <!-- 영화 MBTI -->
          <!-- <p style="color: gray; margin-top: -7px">나만의 감성 (CJI)</p> -->
          <!-- 팔로워/팔로잉/피드 수 -->
          <div id="profile-count-box">
            <!-- 게시물 수(포스트) -->
            <div style="margin-left: 10px; margin-right: 10px">
              50+
              <p style="color: gray; font-size: 14px">Posts</p>
            </div>
            <!-- 팔로워 수 -->
            <div style="margin-left: 10px; margin-right: 10px">
              12k
              <p style="color: gray; font-size: 14px">Followers</p>
            </div>
            <!-- 팔로잉 수 -->
            <div style="margin-left: 10px; margin-right: 10px">
              990
              <p style="color: gray; font-size: 14px">Following</p>
            </div>
          </div>
          <div v-if="!isMyPage">
            <v-btn v-if="!isFollowing" style="width: 100%">Follow</v-btn>
            <v-btn v-if="isFollowing" style="width: 100%">Unfollow</v-btn>
          </div>
          <v-btn v-if="isMyPage" style="width: 100%">Edit Profile</v-btn>
          <hr />
          <!-- IDENTITY 태그 -->
          <h6 class="logoText">ABOUT ME</h6>
          <p>
            {{ user.description }}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            repellendus. Quidem placeat dignissimos eum eaque delectus.
          </p>
          <!-- <div id="profile-tag-box">
            <v-chip color="indigo" text-color="white" style="margin: 3px 3px">
              감성적인
            </v-chip>
            <v-chip color="orange" text-color="white" style="margin: 3px 3px">
              ABCD
            </v-chip>
            <v-chip color="primary" text-color="white" style="margin: 3px 3px">
              고양이
            </v-chip>
            <v-chip color="green" text-color="white" style="margin: 3px 3px">
              여행
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              1888
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              1888
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              1888
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              1888
            </v-chip>
          </div> -->
          <hr />
          <!-- 좋아하는 장르 태그 -->
          <h6 class="logoText">FAVORITE GERENS</h6>
          <div id="profile-tag-box">
            <v-chip color="indigo" text-color="white" style="margin: 3px 3px">
              액션
            </v-chip>
            <v-chip color="orange" text-color="white" style="margin: 3px 3px">
              모험
            </v-chip>
            <v-chip color="primary" text-color="white" style="margin: 3px 3px">
              판타지
            </v-chip>
            <v-chip color="green" text-color="white" style="margin: 3px 3px">
              미스테리
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              음악
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              스릴러
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              애니메이션
            </v-chip>
            <v-chip color="red" text-color="white" style="margin: 3px 3px">
              로맨스
            </v-chip>
          </div>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "CommunityProfile",
  props: {
    user: Object,
  },
  data() {
    return {
      //   profileImageURL: require("@/assets/tikitaka_chips.png"),
    }
  },
  computed: {
    // userame() {
    //   return this.$route.params.username
    // },
    isMyPage() {
      return this.$store.state.user.username == this.$route.params.username
    },
    isFollowing() {
      return this.$store.state.user.following.includes(this.user.id)
    },
  },
  methods: {},
  created: {},
}
</script>

<style>
#profile-box {
  border-radius: 15px;
  padding: 30px 10px;
  background-color: white;
  position: fixed;
  margin: auto;
  max-width: 17%;
}

#profile-content-box {
  background-color: white;
  /* border: 7px black solid; */
  border-radius: 40px;
  margin-top: -30px;
  padding: 30px 10px;
}

#profile-image {
  width: 200px;
  border-radius: 50%;
  border: 10px solid white;
  display: block;
  margin: 0px auto;
}

#profile-count-box {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
</style>
