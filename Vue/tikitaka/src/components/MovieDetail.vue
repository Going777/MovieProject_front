<template>
  <div style="background-color: moccasin; margin: 0px 20% 0px; padding-top: 300px; display: flex;">


    <!-- 영화 포스터 및 버튼 영역 -->
    <div style="background-color: blue; max-width: 150px; margin-right: 5px;">
      <img :src="posterURL" alt="" style="width: 100%; max-height: 220px;">
      <p> {{ movie.watch_providers }} </p>  
    </div>
    <div style="background-color: green;">


      <!-- 제목 영역 -->
      <div style="display: flex; align-items:flex-end;">
        <h1>{{ movie.title }}</h1>
        <p> {{ movie.original_title }}</p>
      </div>

      <!-- 영화 정보 영역 -->
      <div style="display: flex; align-items:flex-end;">

        <!-- 영화 상세 정보 -->
        <div>
          <h2>Detail</h2>
          <p>감독 : {{ movie.director }}</p>
          <div>
            <span>
              <b>장르</b>
              <span v-for="(genre, idx) in movie.genres" :key="idx">
                <span>{{ genre.name }} </span>
              </span>
            </span>
          </div>
          <p>{{ movie.release_date }} 개봉 | {{ movie.runtime }}분</p>
          <p></p>
          <p>{{ movie.countries }}</p>
        </div>

        <!-- 영화 캐스팅 -->
        <div>
          <h2>Cast</h2>
          <MovieDetailCastBoard
            :movie="movie"
          />
        </div>
      </div>
      
      <!-- 영화 줄거리 -->
      <div>
        <p>{{ movie.overview }}</p>
      </div>
      <p>상세정보</p>
    </div>

    <!-- 커뮤니티 영역 -->
    <div style="background-color: pink;">
      <h3>커뮤니티</h3>
      {{ movie.video_key }}
      <button>메세지 보내기</button>
    </div>

  </div>
  
</template>

<script>
import MovieDetailCastBoard from "@/components/MovieDetailCastBoard.vue"

export default {
  name: "MovieDetail",
  components: {
    MovieDetailCastBoard
  },
  props: {
    movie: Object,
  },
  computed: {
    posterURL() {
    const path = this.movie.poster_path

    return `https://image.tmdb.org/t/p/original${path}`
  }
  }

}
</script>

<style>

</style>