<template>
  <v-app>
    <div class="main-app">
      <side-bar></side-bar>
      <router-view>
      </router-view>
    </div>
  </v-app>
</template>

<script>

import SideBar from './components/layout/SideBar'

export default {
  name: 'App',

  components: {
    SideBar
  },

  data: () => ({
    //
  })
}
</script>
<style>
  * {
    box-sizing: border-box;
  }
  html {
    font-family: "Roboto", sans-serif;
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
  }
  .main-app {
    display: flex;
    height: 100%;
  }
</style>
