<template>
  <div>
    <h3 v-show="isNoneMessage">메시지함이 비었습니다</h3>
    <v-card flat width="100%">
      <div class="m-3">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div v-for="message in allMessage" :key="message.id">
            {{ message }}
            <div class="col m-1">
              <b-card
                :img-src="`https://image.tmdb.org/t/p/original/${message.movie.poster_path}`"
                img-alt="Card image"
                img-right
                style="height: 12rem; margin-bottom: 25px"
                class="shadow p-3 mb-5 bg-white rounded zoom"
                @click="checkRead(message.id)"
              >
                <b-card-text>
                  <div>
                    <h4>{{ message.movie.title }}</h4>
                    <p style="font-size: 14px">
                      {{ message.movie.original_title }}
                    </p>
                    <p>내용:{{ message.content }}</p>
                    <p>{{ new Date(message.send_at).toLocaleString() }}</p>
                    <p><b>From.</b> {{ message.from_user.username }}</p>
                    <!-- <v-btn
                      v-show="isUser"
                      dark
                      style="position: absolute; bottom: 15px; right: 15px"
                      @click.stop="messageDelete(message.id)"
                      >DELETE</v-btn
                    > -->
                  </div>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MyPageMessage",
  computed: {
    allMessage: {
      get() {
        return this.$store.state.allMessage
      },
      set(newValue) {
        return newValue
      },
    },
    isNoneMessage() {
      if (this.allMessage.length === 0) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    checkRead(message_id) {
      this.$store.dispatch("checkReed", message_id)
    },
  },
  created() {
    this.$store.dispatch("loadAllMessageList", this.$store.state.user.id)
  },
}
</script>

<style></style>
