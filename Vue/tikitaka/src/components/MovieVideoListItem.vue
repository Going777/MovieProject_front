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
      return `https://www.youtube.com/embed/${this.movie.key}?autoplay=1&mute=1&rel=0&showsearch=0&color=white`
    },
  },
  mounted() {
    console.log(this.movie)
  },
}
</script>

<style></style>
