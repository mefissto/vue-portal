<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import './assets/styles/styles.css';

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

body {
  background-color: #f5f5f5;
}

.p-button-link {
  &:focus {
    box-shadow: 0 0 0 0;
  }

  padding: 0;
  padding-top: 5px;
}
</style>
