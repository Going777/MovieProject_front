<template>
  <div>
    <iframe
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500"
      :src="videoPath"
      frameborder="0"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  name: "MovieVideoListItem",
  props: {
    movie: Object,
  },
  computed: {
    videoPath() {
      // 유튜브 무한 반복 재생
      return `https://www.youtube.com/embed/${this.movie.key}?autoplay=1&mute=1&rel=0&showsearch=0&controls=0&fs=0&loop=1&modestbranding=1&loop=1&playlist=${this.movie.key}`
    },
  },
}
</script>

<style></style>
