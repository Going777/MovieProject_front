import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import axios from "axios"
import router from "@/router"
import createPersistedState from "vuex-persistedstate"

const DJ_URL = "http://127.0.0.1:8000"

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    nowPlayingMovieList: ["상영중 영화"],
    popularMovieList: ["인기영화"],
    nowPlayingMovieVideoList: ["상영중 영화 비디오"],
    searchMovieList: [],
    movie: null,
    token: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    LOAD_POPULAR_MOVIE_LIST(state, response) {
      for (const movie of response) {
        // overview 존재하는 영화만 가져오기
        if (movie.overview.length > 0) {
          state.popularMovieList.push(movie)
        }
      }
    },
    LOAD_NOW_PLAYING_MOVIE_LIST(state, response) {
      state.nowPlayingMovieList.push(...response)
    },
    LOAD_NOW_PLAYING_MOVIE_VIDEO_LIST(state, response) {
      state.nowPlayingMovieVideoList.push(...response)
    },
    SEARCH_MOVIE_LIST(state, response) {
      state.searchMovieList = []
      state.searchMovieList.push(...response)
    },
    GET_MOVIE_BY_ID(state, response) {
      state.movie = response.movie
      router.push({ name: "detail", params: { id: response.id } })
    },

    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: "home" })
    },
  },
  actions: {
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
    searchMovieListByPerson(context, payload) {
      axios({
        method: "get",
        params: {
          search: payload.keyword,
          // genres: payload.genres,
        },
        url: `${DJ_URL}/movies/search_movie_people/`,
      })
        .then((response) => {
          context.commit("SEARCH_MOVIE_LIST", response.data)
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
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

    // 로그인
    logIn(context, payload) {
      axios({
        method: "post",
        url: `${DJ_URL}/accounts/login/`,
        data: {
          email: payload.email,
          password: payload.password,
        },
      }).then((res) => {
        console.log(res.data.access_token)
        context.commit("SAVE_TOKEN", res.data.access_token)
      })
    },
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
          context.commit("SAVE_TOKEN", res.data.access_token)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  modules: {},
})
