<template>
  <div class="home">
    <hr />
    <br />
    <div @click="openModal" style="position: relative">
      <!-- 프로필 이미지 -->
      <img :src="profileImageURL" class="profile-image" />
      <!-- 프로필 변경 아이콘 -->
      <img src="@/assets/edit.png" class="setting-icon" />
    </div>
    <h1>{{ nickName }}</h1>

    <!-- 프로필 변경 모달 -->
    <b-modal id="showImageModal" title="Edit Your Profile">
      <img :src="modalImageURL" class="modal-profile-main-image" />
      <form>
        <h5><strong>Nick Name</strong></h5>
        <div style="margin: 10px">
          <input type="text" v-model="modalNickName" />
          <input type="submit" value="Check Availability" />
        </div>
      </form>
      <br />
      <h5><strong>Profile Image</strong></h5>
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
      <br /><br />
      <div>
        <p>
          <input type="file" id="file" />
          <label for="file"></label>
        </p>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      modalShow: false,
      nickName: "JungWon",
      profileImageURL: require("@/assets/tikitaka_chips.png"),
      modalImageURL: null,
      modalNickName: null,
      isSelected: false,
    }
  },
  computed: {},
  methods: {
    openModal() {
      this.$bvModal.show("showImageModal")
      this.modalImageURL = this.profileImageURL
      this.modalNickName = this.nickName
    },
    selectImage(event) {
      this.modalImageURL = event.target.src
    },
  },
}
</script>

<style>
.profile-image {
  width: 180px;
  margin: 10px;
  border-radius: 50%;
  border: 5px dashed black;

  position: absolute;
  top: 0;
  left: 0;
  /* 무지개 테두리 */
  /* border: 8px solid transparent;
  background-image: linear-gradient(#b827fc 100%, #2c90fc 25%), linear-gradient(to right, #8e27fc 10%, #2cfc5d 50%, #ffe600 70%, #fd1892 100%);
  background-origin: border-box;
  background-clip: content-box, border-box; */
}

.setting-icon {
  width: 35px;
  /* border: 3.5px solid black; */
  border-radius: 50%;
  /* padding: 2px; */
  background-color: white;
  position: absolute;
  top: 157px;
  left: 138px;
}

.modal-profile-main-image {
  width: 180px;
  margin: 10px;
  border-radius: 50%;
  border: 5px dashed black;
}

.modal-profile-sub-image {
  width: 100px;
  margin: 5px;
}

input:checked + label > img {
  border: 3px dashed black;
}
</style>
