<template>
  <div id="app">
    <vhead></vhead>
    <router-view/>
    <vfoot></vfoot>
  </div>
</template>

<script>

  import vhead from '@/components/header/header.vue'
  import vfoot from '@/components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      vhead,
      vfoot
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
