<template>
  <div style="width: 100%">
    <v-sheet
      id="profile-box"
      class="mainText"
      elevation="3"
      style="width: 230px"
    >
      <div>
        <!-- 프로필 이미지 -->
        <img
          :src="require(`@/assets/tikitaka_${profile_img}.png`)"
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
              {{ user.review_count }}
              <p style="color: gray; font-size: 14px">Posts</p>
            </div>
            <!-- 팔로워 수 -->
            <div style="margin-left: 10px; margin-right: 10px">
              {{ followingCnt }}
              <p style="color: gray; font-size: 14px">Followers</p>
            </div>
            <!-- 팔로잉 수 -->
            <div style="margin-left: 10px; margin-right: 10px">
              {{ followerCnt }}
              <p style="color: gray; font-size: 14px">Following</p>
            </div>
          </div>
          <div v-if="!isMyPage">
            <v-btn v-if="!isFollowing" style="width: 100%" @click="follow"
              >Follow</v-btn
            >
            <v-btn v-if="isFollowing" style="width: 100%" @click="follow"
              >Unfollow</v-btn
            >
          </div>
          <v-btn v-if="isMyPage" style="width: 100%" @click="openEditProfile"
            >Edit Profile</v-btn
          >
          <hr />
          <!-- IDENTITY 태그 -->
          <h6 class="logoText">ABOUT ME</h6>
          <p>
            {{ user.description }}
          </p>

          <hr />
          <!-- 좋아하는 장르 태그 -->
          <h6 class="logoText">FAVORITE GENRES</h6>
          <div id="profile-tag-box">
            <v-chip
              color="indigo"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              액션
            </v-chip>
            <v-chip
              color="orange"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              모험
            </v-chip>
            <v-chip
              color="primary"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              판타지
            </v-chip>
            <v-chip
              color="green"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              미스테리
            </v-chip>
            <v-chip
              color="red"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              음악
            </v-chip>
            <v-chip
              color="red"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              스릴러
            </v-chip>
            <v-chip
              color="red"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              애니메이션
            </v-chip>
            <v-chip
              color="red"
              text-color="white"
              style="margin: 5px 3px"
              small
            >
              로맨스
            </v-chip>
          </div>
        </div>
      </div>
    </v-sheet>

    <!-- 프로필 변경 모달 -->
    <b-modal hide-footer hide-header-close id="profileEditModal">
      <template #modal-header>
        <h3 class="logoText">EDIT YOUR PROFILE</h3>
      </template>
      <!-- 프로필 이미지 -->
      <img :src="selectImgUrl" class="modal-profile-main-image" />
      <!-- 닉네임 -->
      <!-- <form>
        <h5><strong>Nick Name</strong></h5>
        <div style="margin: 10px">
          <input type="text" v-model="modalNickName" />
          <input type="submit" value="Check Availability" />
        </div>
      </form> -->
      <br /><br />
      <!-- 선택가능 프로필 이미지 -->
      <h5><strong>You Can Change Your Profile Image</strong></h5>
      <div>
        <input type="radio" id="img1" style="display: none" name="radio" />
        <label for="img1">
          <img
            src="../assets/tikitaka_chips.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
        <input type="radio" id="img2" style="display: none" name="radio" />
        <label for="img2">
          <img
            src="../assets/tikitaka_coke.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
        <input type="radio" id="img3" style="display: none" name="radio" />
        <label for="img3">
          <img
            src="../assets/tikitaka_coffee.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
        <input type="radio" id="img4" style="display: none" name="radio" />
        <label for="img4">
          <img
            src="../assets/tikitaka_film.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
        <input type="radio" id="img5" style="display: none" name="radio" />
        <label for="img5">
          <img
            src="../assets/tikitaka_hotdog.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
        <input type="radio" id="img6" style="display: none" name="radio" />
        <label for="img6">
          <img
            src="../assets/tikitaka_nacho.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
        <input type="radio" id="img7" style="display: none" name="radio" />
        <label for="img7">
          <img
            src="../assets/tikitaka_popcorn.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
        <input type="radio" id="img8" style="display: none" name="radio" />
        <label for="img8">
          <img
            src="../assets/tikitaka_ticket.png"
            @click="selectImage"
            class="modal-profile-sub-image"
          />
        </label>
      </div>

      <hr />
      <!-- 외부 파일 첨부 -->
      <!-- <div>
        <p>
          <input type="file" id="file" />
          <label for="file"></label>
        </p>
      </div> -->

      <!-- 본인 소개글 -->
      <h5><strong>Please Introduce Yourself</strong></h5>
      <v-text-field outlined v-model="description"></v-text-field>

      <!-- 좋아하는 장르 -->
      <h5><strong>What's Your Favorite Movie Genres?</strong></h5>

      <v-btn dark height="45" style="float: right" @click="editProfile"
        >SAVE</v-btn
      >
    </b-modal>
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
      profileImgUrl: require(`@/assets/tikitaka_${this.$store.state.tempUser.profile_img}.png`),
      selectImgUrl: null,
      isSelected: false,
      description: "",
    }
  },
  computed: {
    // userame() {
    //   return this.$route.params.username
    // },
    isMyPage() {
      return (
        this.$store.state.user.username == this.$route.params.username ||
        this.$route.params.username == null
      )
    },
    isFollowing() {
      return this.$store.state.user.following.includes(this.user.id)
    },
    followingCnt() {
      return this.$store.getters.followingCnt
    },
    followerCnt() {
      return this.$store.getters.followerCnt
    },
    profile_img() {
      return this.$store.getters.profile_img
    },
  },
  methods: {
    follow() {
      const payload = {
        me: this.$store.state.user.id,
        you: this.user.id,
      }
      return this.$store.dispatch("follow", payload)
    },
    openEditProfile() {
      this.$bvModal.show("profileEditModal")
      this.selectImgUrl = this.profileImgUrl
    },
    selectImage(event) {
      this.selectImgUrl = event.target.src
    },
    editProfile() {
      let imgKeyword = this.selectImgUrl
      let i = imgKeyword.indexOf("_")
      imgKeyword = imgKeyword.slice(i + 1)
      i = imgKeyword.indexOf(".")
      imgKeyword = imgKeyword.slice(0, i)
      const payload = {
        profile_img: imgKeyword,
        description: this.description,
      }
      this.$store.dispatch("editProfile", payload)
      this.$bvModal.hide("profileEditModal")
    },
  },
  // created: {},
}
</script>

<style>
#profile-box {
  border-radius: 15px;
  /* padding: 30px 10px; */
  background-color: white;
  position: fixed;
  /* margin: auto; */
  /* max-width: 17%; */
  width: 100%;
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

.modal-profile-main-image {
  width: 40%;
  margin: 5px;
  border-radius: 50%;
}
.modal-profile-sub-image {
  width: 100px;
  margin: 5px;
}
input:checked + label > img {
  border: 4px solid black;
}
</style>
