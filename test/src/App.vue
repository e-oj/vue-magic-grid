<template>

  <div id="app">
    <grid />
  </div>

</template>

<script>
import grid from './components/grid.vue'

export default {

  name: 'app',

  components: {
    grid
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
