<template>
  <div id="app">
    <nav>
      <img
        src="@/assets/tikitaka_logo.png"
        style="width: 150px; margin: 0px; padding: 0px"
      />
      <div><router-link to="/">Home</router-link> |</div>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 10px;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
