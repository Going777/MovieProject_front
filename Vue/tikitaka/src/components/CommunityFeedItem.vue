<template>
  <div>
    <img src="@/assets/tikitaka_film.png" alt="" />
    <img
      id="feed-image"
      src="https://image.tmdb.org/t/p/original/f0oDtB2JCMlPKjphBJ90GcfVzWg.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "CommunityFeed",
}
</script>

<style>
#feed-image {
  border-radius: 30px;
  width: 100%;
  margin: 20px 10px;
}
</style>
