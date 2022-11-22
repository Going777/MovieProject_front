import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import axios from "axios"
import router from "@/router"
import createPersistedState from "vuex-persistedstate" // 로컬에 데이터 자동저장을 학기 위한 패키지

const DJ_URL = "http://127.0.0.1:8000"
// const DJ_URL = "http://34.204.166.25"

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    allMovieList: [],
    allUserList: [],
    nowPlayingMovieList: { title: "NOW PLAYING MOVIE", movies: [] },
    popularMovieList: { title: "POPULAR MOVIE", movies: [] },
    topratedMovieList: { title: "TOP CLASSIC MOVIE", movies: [] },
    nowPlayingMovieVideoList: { title: "상영중 영화 비디오", movies: [] },
    searchMovieList: [],
    feedMovieId: null, // 안 필요할 수도 있음
    feedBackDropList: [],
    movie: null,
    token: null,
    // 현재 로그인 유저
    user: null,
    // 현재 로그인 유저 닉네임
    nickname: "로그인????",

    feedList: [],
    tempUser: null,
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    },
  },
  mutations: {
    // ***************************************************************
    // MOVIE
    // ***************************************************************
    // 인기 영화
    LOAD_POPULAR_MOVIE_LIST(state, response) {
      state.popularMovieList.movies = response
      // console.log(state.popularMovieList.movies)
    },
    LOAD_TOPRATED_MOVIE_LIST(state, response) {
      state.topratedMovieList.movies = response
      console.log(state.topratedMovieList.movies)
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

    // ***************************************************************
    // 인증 관련
    // ***************************************************************
    SAVE_TOKEN(state, data) {
      state.user = data.user
      state.token = data.access_token
      // console.log(data.user)
      axios({
        method: "get",
        url: `${DJ_URL}/accounts/${data.user.pk}/user/`,
      }).then((res) => {
        console.log(res.data)
        state.user = res.data
      })
      router.push({ name: "home" })
    },
    DROP_TOKEN(state) {
      localStorage.removeItem("user")
      localStorage.removeItem("token")
      state.user = null
      state.token = null
      state.nickname = "로그인해주세요!"
      router.push({ name: "home" })
    },
    LOAD_ALL_USER_LIST(state, response) {
      state.allUserList = response
    },

    // ***************************************************************
    // COMMUNITY
    // ***************************************************************
    // DB에 저장된 모든 영화 데이터 가져오기
    LOAD_ALL_MOVIE_LIST(state, response) {
      state.allMovieList = response
      console.log(state.allMovieList)
    },
    // 피드 작성시 필요한 영화
    SEARCH_MOVIE(state, response) {
      state.feedMovie = response[0]
    },
    GET_BACKDROP_LIST(state, payload) {
      state.feedMovieId = payload.movie_id
      state.feedBackDropList = payload.response
    },
    // 유저별 피드 리스트 받아오기
    LOAD_FEED_LIST(state, response) {
      state.feedList = response
    },
    // 유저 가져오기
    GET_USER(state, response) {
      console.log("get_user--------------------------", response)
      state.tempUser = response
    },
    GET_ME(state, response) {
      console.log("get_user--------------------------", response)
      state.user = response
    },
  },
  actions: {
    // ***************************************************************
    // MOVIE
    // ***************************************************************
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
    // 최고평점영화 서버 통신
    loadTopratedMovieList(context) {
      axios({
        method: "get",
        url: `${DJ_URL}/movies/top_rated_movie/`,
      })
        .then((response) => {
          console.log(response)
          context.commit("LOAD_TOPRATED_MOVIE_LIST", response.data)
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

    // ***************************************************************
    // 인증 관련
    // ***************************************************************
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
    // 카카오 로그인 서버 통신
    kakaoLogIn(context) {
      axios({
        method: "get",
        url: `${DJ_URL}/accounts/kakao/login`,
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
          username: payload.username,
          email: payload.email,
          password1: payload.password1,
          password2: payload.password2,
        },
      })
        .then((res) => {
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
    // DB 내 모든 유저 받아오기
    loadAllUserList(context) {
      axios({
        method: "get",
        url: `${DJ_URL}/accounts/all_user_list/`,
      })
        .then((response) => {
          context.commit("LOAD_ALL_USER_LIST", response.data)
        })
        .catch((e) => {
          console.log("loadUser", e)
        })
    },

    // ***************************************************************
    // COMMUNITY
    // ***************************************************************
    // DB 내 모든 영화 받아오기 ([{id: , title: }] 형식)
    loadAllMovieList(context) {
      axios({
        method: "get",
        url: `${DJ_URL}/community/all_movie_list/`,
      })
        .then((response) => {
          context.commit("LOAD_ALL_MOVIE_LIST", response.data)
        })
        .catch((e) => {
          console.log("loadMovie", e)
        })
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
    // 닉네임으로 유저 반환
    getUser(context, username) {
      axios({
        method: "get",
        params: {
          name: username,
        },
        url: `${DJ_URL}/accounts/get_user/`,
      })
        .then((response) => {
          console.log("@@@@@@@@@@@@@@@@@@", response)
          context.commit("GET_USER", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 나 반환
    getMe(context, username) {
      axios({
        method: "get",
        params: {
          name: username,
        },
        url: `${DJ_URL}/accounts/get_user/`,
      })
        .then((response) => {
          console.log("@@@@@@@@@@@@@@@@@@", response)
          context.commit("GET_ME", response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 피드(리뷰)에서 영화 검색 -> 백드롭 이미지 5개 받아오기
    // searchMovieByTitle(context, payload) {
    //   axios({
    //     method: "get",
    //     params: {
    //       search: payload.keyword,
    //       genres: payload.genres,
    //     },
    //     url: `${DJ_URL}/movies/search_movie/`,
    //   })
    //     .then((response) => {
    //       context.commit("SEARCH_MOVIE", response.data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    getBackDropList(context, movie_id) {
      axios({
        method: "get",
        params: {
          id: movie_id,
        },
        url: `${DJ_URL}/community/get_backdrop/`,
      }).then((response) => {
        const payload = {
          movie_id: movie_id,
          response: response.data,
        }
        context.commit("GET_BACKDROP_LIST", payload)
      })
    },
    // 피드 작성
    addFeed(context, payload) {
      axios({
        method: "post",
        data: {
          title: payload.title,
          content: payload.content,
          backdrop: payload.img_id,
          user: context.state.user.id,
        },
        url: `${DJ_URL}/community/${payload.movie_id}/create_review/`,
      })
        .then((response) => {
          context.state.feedList.push(response.data)
        })
        .catch(() => {
          alert("필수 항목이 빠졌어요!!")
        })
    },
    // 유저별 피드 받아오기
    loadFeedList(context, username) {
      axios({
        method: "get",
        url: `${DJ_URL}/community/review/${username}`,
      }).then((response) => {
        context.commit("LOAD_FEED_LIST", response.data)
      })
    },
    // 좋아요 클릭 -> DB에 저장
    clickLikeBtn(context, payload) {
      axios({
        method: "post",
        url: `${DJ_URL}/community/review/${payload.feed_id}/like/`,
        data: {
          id: payload.user_id,
        },
      }).then(() => {
        // 저장 성공했으면 받아온 피드 정보 업데이트
        context.dispatch("loadFeedList", payload.username)
      })
    },
  },
  modules: {},
})
