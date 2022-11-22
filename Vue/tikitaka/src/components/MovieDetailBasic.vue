<template>
    <div>
      <div class="sentence">
        <b>감독</b> &nbsp;
        {{ movie.director.name }}
      </div>
      <div class="sentence">
        <b>장르</b> &nbsp;
        <span v-for="(genre, idx) in movie.genres" :key="idx">
          <span>{{ genre.name }} &nbsp;</span>
        </span>
      </div>
      <div class="sentence">
        <b>개봉</b> &nbsp;
        {{ movie.release_date }}
      </div>
      <div class="sentence">
        <b>정보</b> &nbsp;
        {{ movie.runtime }}분&nbsp;|&nbsp; 
        <span v-for="(country, idx) in movie.countries" :key="idx">
          <img
            :src="`https://flagpedia.net/data/flags/w702/${country.toLowerCase()}.png`" alt=""
            style="width: 24px; height: 16px; margin-right: 3px;">
        </span>
      </div>
      <div class="sentence" >
        <span v-for="(provider, idx) in movie.watch_providers" :key="idx" style="display:inline-block; vertical-align:middle;">
          <img
          :src="`https://image.tmdb.org/t/p/original${provider.logo_path}`" alt=""
          style="width: 16px; height: 16px; margin-right: 3px;">
          <span style="font-size:12px">{{ provider.name }}&nbsp;</span>
        </span>
        
      </div>
    </div>
  
</template>

<script>

export default {
  name: 'MovieDetailBasic',
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