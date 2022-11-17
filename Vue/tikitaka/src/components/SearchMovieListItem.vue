<template>
  <div>
    <div class="col m-1">
      <div class="card h-100">
        <img :src="imgPath" class="card-img-top" />
        <div class="card-body">
          <p class="text-center" style="font-weight: bold">
            {{ movie.title }}
          </p>
          <!-- <div class="card-text">{{ movieCard.overview }}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchMovieListItem",
  props: {
    movie: Object,
  },
  computed: {
    imgPath() {
      return "https://image.tmdb.org/t/p/original" + this.movie.poster_path
    },
  },
}
</script>

<style>
.card-img-top {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
