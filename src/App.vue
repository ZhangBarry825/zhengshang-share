<template>
  <div id="app">
    <div class="loading-page" v-if="isLoading">
      <h2>loading...</h2>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name:'APP',
    computed: {
      ...mapState(['isLoading']),
    },
  }
</script>
<style lang="scss">
#app {
  font-family: "Alibaba-PuHuiTi";
  .loading-page{
    position: fixed;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
