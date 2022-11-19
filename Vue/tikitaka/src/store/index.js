import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import axios from "axios"
import router from "@/router"
import createPersistedState from "vuex-persistedstate" // 로컬에 데이터 자동저장을 학기 위한 패키지

const DJ_URL = "http://127.0.0.1:8000"
// const DJ_URL = "http://35.174.62.42"

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    nowPlayingMovieList: { title: "상영중 영화", movies: [] },
    popularMovieList: { title: "인기영화", movies: [] },
    nowPlayingMovieVideoList: { title: "상영중 영화 비디오", movies: [] },
    searchMovieList: [],
    feedMovie: null,
    movie: null,
    token: null,
    // 현재 로그인 유저
    user: null,
    // 현재 로그인 유저 닉네임
    nickname: "로그인????",
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    // 인기 영화
    LOAD_POPULAR_MOVIE_LIST(state, response) {
      state.popularMovieList.movies = response
      console.log(state.popularMovieList.movies)
    },
    // 현재 상영중 영화
    LOAD_NOW_PLAYING_MOVIE_LIST(state, response) {
      state.nowPlayingMovieList.movies = response
    },
    // 현재 상영중 영화(예고편)
    LOAD_NOW_PLAYING_MOVIE_VIDEO_LIST(state, response) {
      state.nowPlayingMovieVideoList.movies = response
    },
    // 키워드 검색 영화
    SEARCH_MOVIE_LIST(state, response) {
      state.searchMovieList = []
      state.searchMovieList.push(...response)
    },
    // detail로 들어갈 때 필요한 영화
    GET_MOVIE_BY_ID(state, response) {
      state.movie = response.movie
      router
        .push({ name: "detail", params: { id: response.id } })
        .catch(() => {}) // Avoided redundant navigation 에러 해결
    },
    // 피드 작성시 필요한 영화
    SEARCH_MOVIE(state, response) {
      state.feedMovie = response[0]
    },

    SAVE_TOKEN(state, data) {
      state.user = data.user
      state.token = data.access_token
      if (data.user.first_name) {
        state.nickname = data.user.first_name
      } else {
        state.nickname = "익명의 티키타카"
      }
      router.push({ name: "home" })
    },
    DROP_TOKEN(state) {
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      state.user = null
      state.token = null
      state.nickname = "로그인해주세요!"
    },
  },
  actions: {
    // 인기영화 서버 통신
    loadPopularMovieList(context) {
      axios({
        method: "get",
        url: `${DJ_URL}/movies/popular_movie/`,
      })
        .then((response) => {
          context.commit("LOAD_POPULAR_MOVIE_LIST", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 현재 상영 중 영화 서버 통신
    loadNowPlayingMovieList(context) {
      axios({
        method: "get",
        url: `${DJ_URL}/movies/now_playing_movie/`,
      })
        .then((response) => {
          context.commit("LOAD_NOW_PLAYING_MOVIE_LIST", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 현재 상영 중 영화 예고편 서버 통신
    loadNowPlayingMovieVideoList(context) {
      axios({
        method: "get",
        url: `${DJ_URL}/movies/now_playing_movie_video/`,
      })
        .then((response) => {
          // console.log(response)
          context.commit("LOAD_NOW_PLAYING_MOVIE_VIDEO_LIST", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // detail 영화 서버 통신
    getMovieById(context, movie_id) {
      axios({
        method: "get",
        params: {
          id: movie_id,
        },
        url: `${DJ_URL}/movies/movie_detail/`,
      })
        .then((response) => {
          const payload = {
            movie: response.data,
            id: movie_id,
          }
          context.commit("GET_MOVIE_BY_ID", payload)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 영화 검색 키워드 서버 통신 (영화감독,배우로 / 당장은 구현X)
    // searchMovieListByPerson(context, payload) {
    //   axios({
    //     method: "get",
    //     params: {
    //       search: payload.keyword,
    //       // genres: payload.genres,
    //     },
    //     url: `${DJ_URL}/movies/search_movie_people/`,
    //   })
    //     .then((response) => {
    //       context.commit("SEARCH_MOVIE_LIST", response.data)
    //       console.log(response)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    // 영화 검색 키워드 서버 통신 (영화제목으로)
    searchMovieListByTitle(context, payload) {
      axios({
        method: "get",
        params: {
          search: payload.keyword,
          genres: payload.genres,
        },
        url: `${DJ_URL}/movies/search_movie/`,
      })
        .then((response) => {
          context.commit("SEARCH_MOVIE_LIST", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // 로그인 서버 통신
    logIn(context, payload) {
      axios({
        method: "post",
        url: `${DJ_URL}/accounts/login/`,
        data: {
          email: payload.email,
          password: payload.password,
        },
      }).then((res) => {
        context.commit("SAVE_TOKEN", res.data)
      })
    },
    // 회원 가입 서버 통신
    signUp(context, payload) {
      axios({
        method: "post",
        url: `${DJ_URL}/accounts/signup/`,
        data: {
          email: payload.email,
          password1: payload.password1,
          password2: payload.password2,
        },
      })
        .then((res) => {
          console.log(res.data.access_token)
          context.commit("SAVE_TOKEN", res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 로그아웃
    logOut(context) {
      context.commit("DROP_TOKEN")
    },

    // 유저 검색 서버 통신
    searchUser(context, userName) {
      axios({
        method: "get",
        params: {
          search: userName,
        },
        url: `${DJ_URL}/movies/search_user/`,
      })
        .then((response) => {
          console.log(response)
          // context.commit("SEARCH_MOVIE_LIST", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    // 피드(리뷰)에서 영화 검색 -> 하나만 나옴
    searchMovieByTitle(context, payload) {
      axios({
        method: "get",
        params: {
          search: payload.keyword,
          genres: payload.genres,
        },
        url: `${DJ_URL}/movies/search_movie/`,
      })
        .then((response) => {
          context.commit("SEARCH_MOVIE", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 피드 작성
    addFeed(context, payload) {
      console.log(payload)
      axios({
        method: "post",
        params: {
          title: payload.title,
          content: payload.content,
          backdrop: payload.img_id,
          user: 1,
        },
        url: `${DJ_URL}/community/${payload.movie_id}/create_review/`,
      })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  modules: {},
})
