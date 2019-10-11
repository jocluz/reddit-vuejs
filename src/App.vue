<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  flex-grow: 1;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html {
  display: flex;
  height: 100%;
  overflow: hidden;
  font-size: 14px;
  min-width: 0;
  min-height: 0;

  body {
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    flex-grow: 1;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
}
</style>
