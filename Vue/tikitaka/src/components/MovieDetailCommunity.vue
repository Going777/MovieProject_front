<template>
    <div>
      {{ movie.video_key }}
      <v-btn style="width: 100%"> sendMessage </v-btn>

    </div>
  
</template>

<script>

export default {
  name: 'MovieDetailCommunity',
  props: {
    movie: Object
  }

}
</script>

<style>

  .sentence {
    height: 30px;
    margin: 5px;
  }

</style>