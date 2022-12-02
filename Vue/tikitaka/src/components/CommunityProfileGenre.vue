<template>
  <span>
    <v-chip text-color="white" :color="genreColor" style="margin: 5px 3px">
      {{ genre.name }}
    </v-chip>
  </span>
</template>

<script>
function setGenreColor(name) {
  switch (name) {
    case "모험":
      return "red "
    case "판타지":
      return "purple lighten-2"
    case "애니메이션":
      return "indigo "
    case "드라마":
      return "purple "
    case "공포":
      return "grey"
    case "액션":
      return "pink accent-2"
    case "코미디":
      return "blue "
    case "역사":
      return "deep-purple "
    case "서부":
      return "yellow darken-4"
    case "스릴러":
      return "light-blue darken-4"
    case "범죄":
      return "cyan "
    case "다큐멘터리":
      return "brown"
    case "SF":
      return "teal "
    case "미스터리":
      return "black"
    case "음악":
      return "light-green"
    case "로맨스":
      return "light-green darken-4"
    case "가족":
      return "amber accent-4"
    case "전쟁":
      return "blue-grey "
    case "TV 영화":
      return "deep-orange accent-2"
  }
}
export default {
  name: "CommunityProfileGenre",
  props: {
    genre: Object,
  },
  computed: {
    genreColor() {
      return setGenreColor(this.genre.name)
    },
  },
}
</script>

<style></style>
