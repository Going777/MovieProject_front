<template>
  <div id="icon-bar">
    <!-- 피드 아이콘 -->
    <span class="mx-5">
      <font-awesome-icon icon="fa-solid fa-file" size="2x" />
    </span>

    <div class="v-line"></div>

    <!-- 북마크 아이콘 -->
    <span class="mx-5">
      <font-awesome-icon icon="fa-solid fa-bookmark" size="2x" />
    </span>

    <div class="v-line"></div>

    <!-- 좋아요한 피드 아이콘 -->
    <span class="mx-5">
      <font-awesome-icon icon="fa-solid fa-heart" size="2x" />
    </span>

    <div class="v-line"></div>

    <!-- 달력 아이콘 -->
    <span class="mx-5">
      <font-awesome-icon icon="fa-solid fa-calendar-days" size="2x" />
    </span>
  </div>
</template>

<script>
export default {
  name: "MyPageIconBar",
}
</script>

<style>
#icon-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
