<template>
  <div style="display:flex;">
    <div style="margin-left:auto; margin-right: 10%;;">
      <div id="bubble">
        <div style="margin-right:25px; width: 90%;">
          <form @submit.prevent="signUp" style="margin: auto; width: 60%;">
            <v-text-field
              type="text" id="nickname" v-model="nickname" label="Nickname"
              :rules="nicknameRules"
              required
            ></v-text-field>
            <v-text-field
              type="text" id="email" v-model="email" label="E-mail"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              type="text" id="password" v-model="password1" label="password"
              :rules="passwordRules"
              required
            /><v-text-field
              type="text" id="password2" v-model="password2" label="Confirm password"
              :rules="passwordRules"
              required
            />
            
            <v-btn @click="signUp" style="width: 100%; margin: 10px 0px 10px;" color="secondary">Sign Up</v-btn>
            <v-btn @click="kakaoLogIn" style="width: 100%" color="yellow">카카오로 계속하기</v-btn>
          </form>




        </div>
      </div>
      <img
        src="../assets/tikitaka_logo_l.png" alt=""
        style="width: 200px; margin-left: 300px; margin-top: -100px;"
      />

    </div>

  </div>
  
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      nickname: null,
      email: null,
      password1: null,
      password2: null,
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      nicknameRules: [
      v => !!v || 'Nickname is required',
      v => v.length <= 10 || 'Nickname must be less than 10 characters',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }
  },
  methods: {
    signUp() {
      const nickname = this.nickname
      const email = this.email
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        nickname,
        email,
        password1,
        password2,
      }

      this.$store.dispatch("signUp", payload)
    },
  },

  computed: {

  },
  mounted: {

  }


}
</script>

<style>
#bubble {
  width: 353px;
  height: 400px;
  background-image: url('../assets/bubble2.png');
  background-size: cover;
  display: flex;
  align-content: center;
  align-items: center;
  /* margin: auto; */
  margin-top: 50px;
}
</style>