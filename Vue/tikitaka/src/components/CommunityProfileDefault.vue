<template>
  <div>
    <v-sheet id="profile-box" class="mainText" elevation="3">
      <div>
        <!-- 프로필 이미지 -->
        <img
          src="@/assets/tikitaka_logo_r.png"
          id="profile-image2"
          style="width: 100%; max-width: 160px"
        />
        <!-- 프로필 텍스트 영역 -->
        <div id="profile-content-box">
          <!-- 닉네임 -->

          <!-- 영화 MBTI -->
          <!-- <p style="color: gray; margin-top: -7px">나만의 감성 (CJI)</p> -->
          <!-- 팔로워/팔로잉/피드 수 -->
          <div id="profile-count-box">
            <!-- 게시물 수(포스트) -->
            <div style="margin-left: 10px; margin-right: 10px">
              <h2>Let's TikiTaka!</h2>
              나만의 영화 커뮤니티
              <p style="color: gray; font-size: 14px">로그인 해주세요</p>
              <v-btn style="width: 100%" dark @click="goLogIn">Login</v-btn>
            </div>
          </div>

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
          <h6 class="logoText">Contact</h6>
          https://github.com/Going777 <br />
          https://github.com/seoda0000

          <!-- <div id="profile-tag-box">
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
          </div> -->
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "CommunityProfile",
  props: {},
  data() {
    return {
      //   profileImageURL: require("@/assets/tikitaka_chips.png"),
    }
  },
  computed: {},
  methods: {
    goLogIn() {
      this.$router.push({ name: "login" })
    },
  },
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
  width: 17%;
}

#profile-content-box {
  background-color: white;
  /* border: 7px black solid; */
  border-radius: 40px;
  /* margin-top: -30px; */
  padding: 30px 10px;
}

#profile-image2 {
  width: 200px;
  border-radius: 50%;
  border: 6px solid black;
  display: block;
  margin: 0px auto 30px;
}

#profile-count-box {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
</style>
