<template>
  <v-app>
    <!-- 최상단 nav bar -->
    <v-app-bar
      fixed
      clipped-left
      color="navy"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <!-- 메뉴 호출 아이콘 -->
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>TikiTaka</v-toolbar-title>
      <img src="@/assets/tikitaka_logo_small.png" style="width: 50px" />

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 왼쪽 side nav bar -->
    <!-- introView에서는 나타나지 않도록 -->
    <v-navigation-drawer
      absolute
      permanent
      expand-on-hover
      clipped
      v-if="!['intro'].includes($route.name)"
    >
      <v-list nav dense style="margin-top: 70px">
        <!-- 홈 버튼 -->
        <v-list-item link @click="goHome" style="margin-bottom: 20px">
          <v-list-item-icon>
            <v-img src="@/assets/icon_home.png" height="24px" width="24px">
            </v-img>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <!-- 커뮤니티 버튼 -->
        <v-list-item link style="margin-bottom: 20px">
          <v-list-item-icon>
            <v-img
              src="@/assets/icon_community.png"
              height="24px"
              width="24px"
            ></v-img>
          </v-list-item-icon>
          <v-list-item-title>Community</v-list-item-title>
        </v-list-item>

        <!-- 마이페이지 버튼 -->
        <v-list-item link style="margin-bottom: 20px">
          <v-list-item-icon>
            <v-img
              src="@/assets/icon_mypage.png"
              height="24px"
              width="24px"
            ></v-img>
          </v-list-item-icon>
          <v-list-item-title>My Page</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 메인 화면 -->
    <v-main style="margin-left: 70px; margin-top: 70px">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  methods: {
    goHome() {
      this.$router.push({ name: "home" }).catch(() => {}) // Avoided redundant navigation 에러 해결
    },
  },
}
</script>
